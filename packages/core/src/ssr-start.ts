import type http from 'http';
import { performance } from 'perf_hooks';

// import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import builtinModules from 'builtin-modules';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { renderPage } from 'vite-plugin-ssr';
import { ssr } from 'vite-plugin-ssr/plugin';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { logger } from './logger';
import { fixViteVanillaExtractDepScanPlugin } from './plugins/esbuild';
import { internalPackageResolution } from './plugins/vite';
import type { CrackleServer } from './types';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from './utils/dependency-graph';
import { calculateTime } from './utils/timer';
import { commonViteConfig } from './vite-config';

export * from './types';

type Socket = http.IncomingMessage['socket'];

export const start = async (
  inlineConfig?: PartialConfig,
): Promise<CrackleServer> => {
  const config = getConfig(inlineConfig);
  const depGraph = await extractDependencyGraph(config.root);
  const ssrExternals = getSsrExternalsForCompiledDependency(
    '@vanilla-extract/css',
    depGraph,
  );

  const app = express();
  const connections = new Map<string, Socket>();

  const vite = await createViteServer({
    ...commonViteConfig(config),
    server: {
      middlewareMode: true,
      port: config.port,
    },
    plugins: [
      react(),
      // vanillaExtractPlugin(),
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
      ssr(),
    ],
    optimizeDeps: {
      esbuildOptions: {
        plugins: [fixViteVanillaExtractDepScanPlugin()],
      },
    },
    ssr: {
      external: [...builtinModules,
        '@vanilla-extract/css'
      ],
      noExternal: ssrExternals.noExternal,
    },
  });

  // use vite's connect instance as middleware
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const startTime = performance.now();
    logger.info(`Received request: ${req.originalUrl}`);

    if (req.originalUrl.endsWith('favicon.ico')) {
      logger.info(`Favicon request aborted in ${calculateTime(startTime)}`);
      return res.status(404);
    }

    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
      };
      const pageContext = await renderPage(pageContextInit);
      const { httpResponse } = pageContext;

      if (!httpResponse) return next();

      const { body, statusCode, contentType, earlyHints } = httpResponse;
      if (res.writeEarlyHints) {
        res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
      }
      res.status(statusCode).type(contentType).send(body);
    } catch (e: any) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      logger.error(e);
      res.status(500).end(e.message);
    }

    logger.info(`Request completed in ${calculateTime(startTime)}`);
  });

  const url = `http://localhost:${config.port}`;

  const server = app.listen(config.port, () => {
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
