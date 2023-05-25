import http from 'http';
import path from 'path';

import handler from 'serve-handler';

import { type PartialConfig, getConfig } from '../config';
import { siteBuild } from '../constants';
import type { CrackleServer } from '../types';

import { logger } from './logger';

export const serve = (inlineConfig?: PartialConfig): CrackleServer => {
  const config = getConfig(inlineConfig);
  const outDir = config.resolveFromRoot(siteBuild.outDir);
  const relativeOutDir = path.relative(process.cwd(), outDir);
  const url = `http://localhost:${config.port}`;

  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: outDir,
      trailingSlash: false,
      headers: [
        {
          source: '**/*.@(js|css)',
          headers: [
            {
              key: 'cache-control',
              value: 'max-age=5,immutable',
            },
          ],
        },
      ],
    }),
  );

  server.listen(config.port, () => {
    logger.info(`Serving static build from ./${relativeOutDir} at ${url}`);
  });

  return {
    close: () =>
      new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }

          resolve();
        });
      }),
    url,
  };
};
