import type http from 'http';
import path from 'path';
import { performance } from 'perf_hooks';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import express from 'express';

import type { RenderDevPageFn } from '../../entries/types';
import { type PartialConfig, getConfig } from '../config';
import { clientEntry } from '../constants';
import { fixViteVanillaExtractDepScanPlugin } from '../plugins/esbuild/fix-vite-vanilla-extract-dep-scan';
import { internalPackageResolution } from '../plugins/vite/internal-package-resolution';
import { addPageRoots } from '../plugins/vite/page-roots';
import { stripRouteData } from '../plugins/vite/strip-route-data';
import type { CrackleServer } from '../types';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from '../utils/dependency-graph';
import { resolveFromCrackle } from '../utils/resolve-from';
import { calculateTime } from '../utils/timer';
import { commonViteConfig } from '../vite-config';

import { logger } from './logger';
import { pageGlobSuffix } from './route-data';

type Socket = http.IncomingMessage['socket'];

export const start = async (
  inlineConfig?: PartialConfig,
): Promise<CrackleServer> => {
  const config = await getConfig(inlineConfig);
  const depGraph = await extractDependencyGraph(config.root);
  const ssrExternals = getSsrExternalsForCompiledDependency(
    '@vanilla-extract/css',
    depGraph,
  );

  const app = express();
  const connections = new Map<string, Socket>();

  const { createServer: createViteServer } = await import('vite');

  const { builtinModules } = await import('node:module');

  const vite = await createViteServer({
    ...commonViteConfig(config),
    appType: 'custom',
    server: { middlewareMode: true, port: config.web.port },
    plugins: [
      stripRouteData(),
      react(),
      vanillaExtractPlugin(),
      addPageRoots(config),
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
    ],
    build: {
      rollupOptions: { input: clientEntry },
    },
    optimizeDeps: {
      entries: [
        ...config.web.pageRoots.map((pageRoot) =>
          path.join(pageRoot, pageGlobSuffix),
        ),
        config.web.appShell,
      ],
      // Vite doesn't allow dependency bundling if the entry file is inside node_modules, so our client entry file is not scanned for deps.
      // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L56-L61
      // https://github.com/vitejs/vite/blob/bf0b631e7479ed70d02b98b780cf7e4b02d0344b/packages/vite/src/node/optimizer/scan.ts#L124-L125
      // We can force include our internal dependencies here, so that they also get prebundled.
      include: ['react-dom', '@crackle/router'],
      esbuildOptions: {
        plugins: [fixViteVanillaExtractDepScanPlugin()],
      },
    },
    ssr: {
      external: [
        ...builtinModules,
        // deps of ../../entries/render/dev.tsx
        '@crackle/router',
        '@vanilla-extract/css/adapter',
        'serialize-javascript',
        'used-styles',
      ],
      noExternal: ssrExternals.noExternal,
    },
  });

  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const startTime = performance.now();
    logger.info(`Received request: ${req.originalUrl}`);

    if (req.originalUrl.endsWith('favicon.ico')) {
      logger.info(`Favicon request aborted in ${calculateTime(startTime)}`);
      return res.status(404);
    }

    try {
      const { renderDevelopmentPage } = (await vite.ssrLoadModule(
        resolveFromCrackle('./entries/render/dev.tsx'),
      )) as { renderDevelopmentPage: RenderDevPageFn };

      // eslint-disable-next-line prefer-const
      let { html, statusCode } = await renderDevelopmentPage({
        path: req.originalUrl,
        entry: clientEntry,
      });

      html = await vite.transformIndexHtml(req.originalUrl, html);

      res.status(statusCode).set({ 'Content-Type': 'text/html' }).end(html);
      // defineRoutes(routes);
    } catch (e: any) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      logger.error(e);
      res.status(500).end(e.message);
    }

    logger.info(`Request completed in ${calculateTime(startTime)}`);
  });

  const url = `http://localhost:${config.web.port}`;

  const server = app.listen(config.web.port, () => {
    logger.info(`Server running at ${url}`);
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
      for (const [, conn] of connections) {
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
