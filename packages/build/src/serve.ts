/* eslint-disable no-console */
import http from 'http';

import handler from 'serve-handler';

import { getConfig, InlineConfig } from './config';

export const serve = (inlineConfig?: InlineConfig) => {
  const config = getConfig(inlineConfig);
  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: './dist',
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
    console.log(
      'Serving static build from ./dist at ',
      `http://localhost:${config.port}`,
    );
  });
};
