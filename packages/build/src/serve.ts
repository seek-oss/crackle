import handler from 'serve-handler';
import http from 'http';

export const serve = () => {
  const server = http.createServer((request, response) =>
    handler(request, response, {
      public: './dist',
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

  server.listen(5000, () => {
    console.log(
      'Serving static build from ./dist at ',
      'http://localhost:5000',
    );
  });
};
