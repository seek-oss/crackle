/* eslint-disable no-console */
import http from 'http';

import handler from 'serve-handler';

import type { PartialConfig } from '../config';
import { getConfig } from '../config';
import type { CrackleServer } from '../types';

export const serve = (inlineConfig?: PartialConfig): CrackleServer => {
  const config = getConfig(inlineConfig);
  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: config.resolveFromRoot('dist'),
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

  const url = `http://localhost:${config.port}`;

  server.listen(config.port, () => {
    console.log('Serving static build from ./dist at ', url);
  });

  return {
    close: () =>
      new Promise<void>((res, rej) => {
        server.close((err) => {
          if (err) {
            return rej(err);
          }

          res();
        });
      }),
    url,
  };
};
