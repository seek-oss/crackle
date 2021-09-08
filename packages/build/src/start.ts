/* eslint-disable no-console */
import { performance } from 'perf_hooks';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh';
import builtinModules from 'builtin-modules';
import express from 'express';
import { createServer as createViteServer } from 'vite';

import type { RenderPageFn } from '../entries/types';

import { config } from './config';
import { commonViteConfig } from './vite-config';

export * from './types';

const clientEntry = require.resolve('../entries/client.tsx');

const calculateTime = (startTime: number) =>
  Math.round((performance.now() - startTime) * 100) / 100;

export const start = async () => {
  const app = express();

  const vite = await createViteServer({
    ...commonViteConfig,
    server: { middlewareMode: 'ssr', port: config.port },
    plugins: [reactRefresh(), vanillaExtractPlugin()],
    // Vite doesn't allow dependency bundling if the entry file is inside node_modules. Rollup options is not bound by that constraint.
    // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L56-L61
    // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L124-L125
    build: {
      rollupOptions: { input: clientEntry },
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
        'used-styles',
        'serialize-javascript',
        ...builtinModules,
      ],
      noExternal: [
        'braid-design-system',
        '@crackle-fixtures/single-entry-library',
      ],
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
      const { renderDevelopmentPage } = (await vite.ssrLoadModule(
        require.resolve('../entries/render/dev.tsx'),
      )) as {
        renderDevelopmentPage: RenderPageFn;
      };

      const html = await renderDevelopmentPage({
        path: req.originalUrl,
        entry: clientEntry,
      });

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }

    console.log(`Request completed in ${calculateTime(startTime)}ms`);
  });

  app.listen(config.port, () => {
    console.log('Server running at', `http://localhost:${config.port}`);
  });
};
