/* eslint-disable no-console */
import { performance } from 'perf_hooks';

import { defineRoutes } from '@crackle/router/routes';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import reactRefresh from '@vitejs/plugin-react-refresh';
import builtinModules from 'builtin-modules';
import express from 'express';
import { createServer as createViteServer } from 'vite';

import type { RenderDevPageFn } from '../entries/types';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { clientEntry } from './constants';
import type { CrackleServer } from './types';
import { commonViteConfig } from './vite-config';
import { addPageRoots } from './vite-plugin-page-roots';

export * from './types';

const calculateTime = (startTime: number) =>
  Math.round((performance.now() - startTime) * 100) / 100;

export const start = async (
  inlineConfig?: PartialConfig,
): Promise<CrackleServer> => {
  const config = getConfig(inlineConfig);
  const app = express();

  const vite = await createViteServer({
    ...commonViteConfig(config),
    server: { middlewareMode: 'ssr', port: config.port },
    plugins: [reactRefresh(), vanillaExtractPlugin(), addPageRoots(config)],
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
        require.resolve('../../entries/render/dev.tsx'),
      )) as {
        renderDevelopmentPage: RenderDevPageFn;
      };

      const { html, routes } = await renderDevelopmentPage({
        path: req.originalUrl,
        entry: clientEntry,
      });

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      defineRoutes(routes);
    } catch (e: any) {
      if (e instanceof Error && e.message.startsWith('Unable to find path')) {
        res.status(404).end(e.message);
      } else {
        // If an error is caught, let vite fix the stracktrace so it maps back to
        // your actual source code.
        vite.ssrFixStacktrace(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    }

    console.log(`Request completed in ${calculateTime(startTime)}ms`);
  });

  const url = `http://localhost:${config.port}`;

  const server = app.listen(config.port, () => {
    console.log('Server running at', url);
  });

  return {
    url,
    close: async () => {
      await Promise.all([
        vite.close(),
        new Promise<void>((res, rej) => {
          server.close((err) => {
            if (err) {
              return rej(err);
            }

            res();
          });
        }),
      ]);
    },
  };
};
