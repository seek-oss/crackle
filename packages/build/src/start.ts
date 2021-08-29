import path from 'path';
import { performance } from 'perf_hooks';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import serializeJavascript from 'serialize-javascript';

import { criticalCss } from './criticalCss';
import { RenderFn } from './types';
import { getLocalPath } from './utils';

export * from './types';

const calculateTime = (startTime: number) =>
  Math.round((performance.now() - startTime) * 100) / 100;

const getCriticalStyles = criticalCss();

const serializePageData = (pageData: any) =>
  `<script id="__ELMO_PAGE_DATA" type="application/json">${serializeJavascript(
    pageData,
    { isJSON: true },
  )}</script>`;

export const start = async () => {
  const app = express();

  // Create vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
  // If you want to use Vite's own HTML serving logic (using Vite as
  // a development middleware), using 'html' instead.
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
    plugins: [reactRefresh(), vanillaExtractPlugin()],
    resolve: {
      alias: {
        __THE_ENTRY: path.join(process.cwd(), '/src/App.tsx'),
        'sku/react-treat': getLocalPath('../src/mocks/reactTreat.tsx'),
        'sku/treat': getLocalPath('../src/mocks/treat.ts'),
      },
    },
    // Vite doesn't scan virtual entries for dependencies, so this needs to be set manually
    // https://github.com/vitejs/vite/blob/e8c19069984835114084dbc650f2a01335d6365f/packages/vite/src/node/optimizer/scan.ts#L74-L75
    optimizeDeps: {
      entries: '../src/entries/client.tsx',
    },
    define: {
      'process.env.NODE_DEBUG': JSON.stringify(false),
      global: JSON.stringify({}),
    },
    // @ts-expect-error
    ssr: {
      external: [
        'assert',
        'autosuggest-highlight',
        'capsize',
        'clsx',
        'csstype',
        'dedent',
        'gradient-parser',
        'is-mobile',
        'lodash',
        'polished',
        'react-element-to-jsx-string',
        'react-focus-lock',
        'react-keyed-flatten-children',
        'react-popper-tooltip',
        'react-remove-scroll',
        'utility-types',
        'uuid',
        '@vanilla-extract/css',
      ],
      noExternal: ['braid-design-system'],
    },
  });
  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const startTime = performance.now();
    console.log('Received request:', req.originalUrl);

    if (req.originalUrl.endsWith('favicon.ico')) {
      console.log(`Favicon request aborted in ${calculateTime(startTime)}ms`);
      return res.status(404);
    }

    try {
      const clientEntryPath = getLocalPath('../src/entries/client.tsx');
      const serverEntryPath = getLocalPath('../src/entries/server.tsx');

      let template = `
      <!--critical-css-->
      <div id="app"><!--ssr-outlet--></div>
      <!--page-data-->
      <script type="module" src="${clientEntryPath}"></script>
      `.trim();

      template = await vite.transformIndexHtml(req.originalUrl, template);

      const { render } = (await vite.ssrLoadModule(serverEntryPath)) as {
        render: RenderFn;
      };

      const { html: rawHtml, pageData } = await render({
        path: req.originalUrl,
      });

      const { styles, html } = await getCriticalStyles(render, rawHtml);

      // 5. Inject the app-rendered HTML into the template.
      const finalHtml = template
        .replace(`<!--ssr-outlet-->`, html)
        .replace('<!--critical-css-->', styles)
        .replace(/ data-used-styles="(.|\n)*}"/gm, '')
        .replace('<!--page-data-->', serializePageData(pageData));

      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    } catch (e) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }

    console.log(`Request completed in ${calculateTime(startTime)}ms`);
  });

  app.listen(3000, () => {
    console.log('Server running at', 'http://localhost:3000');
  });
};
