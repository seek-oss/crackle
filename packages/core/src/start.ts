/* eslint-disable no-console */
import type http from 'http';
import path from 'path';
import { performance } from 'perf_hooks';

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
import { internalPackageResolution } from './vite-plugins/internal-package-resolution';
import { addPageRoots } from './vite-plugins/page-roots';
import { stripRouteData } from './vite-plugins/strip-route-data';

export * from './types';

type Socket = http.IncomingMessage['socket'];

const calculateTime = (startTime: number) =>
  Math.round((performance.now() - startTime) * 100) / 100;

export const start = async (
  inlineConfig?: PartialConfig,
): Promise<CrackleServer> => {
  const config = getConfig(inlineConfig);
  const app = express();

  const connections = new Map<string, Socket>();

  const vite = await createViteServer({
    ...commonViteConfig(config),
    server: { middlewareMode: 'ssr', port: config.port, force: true },
    plugins: [
      stripRouteData(),
      reactRefresh(),
      vanillaExtractPlugin({ devStyleRuntime: 'vanilla-extract' }),
      addPageRoots(config),
      internalPackageResolution(config),
    ],
    build: {
      rollupOptions: { input: clientEntry },
    },
    optimizeDeps: {
      entries: [
        ...config.pageRoots.map((pageRoot) =>
          path.join(pageRoot, '/**/*.page.tsx'),
        ),
        config.appShell,
      ],
      // Vite doesn't allow dependency bundling if the entry file is inside node_modules, so our client entry file is not scanned for deps.
      // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L56-L61
      // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L124-L125
      // We can force include our internal dependencies here, so that they also get prebundled.
      include: [
        'gradient-parser',
        'lodash/mapValues',
        'lodash/merge',
        'lodash/omit',
        'react-dom',
        '@vanilla-extract/css/fileScope',
      ],
      esbuildOptions: {
        // plugins: [fixViteVanillaExtractDepScanPlugin()],
      },
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

      const { html, statusCode } = await renderDevelopmentPage({
        path: req.originalUrl,
        entry: clientEntry,
      });

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html);
      // defineRoutes(routes);
    } catch (e: any) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }

    console.log(`Request completed in ${calculateTime(startTime)}ms`);
  });

  const url = `http://localhost:${config.port}`;

  const server = app.listen(config.port, () => {
    console.log('Server running at', url);
  });

  // HTTP1.1 connections with keep-alive will prevent the server shutting down.
  // If we keep track of connections, we can terminate them manually
  server.on('connection', (conn) => {
    const key = [conn.remoteAddress, conn.remotePort].join(':');

    connections.set(key, conn);

    conn.on('close', () => connections.delete(key));
  });

  return {
    url,
    close: async () => {
      for (const [_key, conn] of connections) {
        conn.destroy();
      }

      await Promise.all([
        vite.close(),
        new Promise<void>((res, rej) => {
          server.close((err) => (err ? rej(err) : res()));
        }),
      ]);
    },
  };
};
