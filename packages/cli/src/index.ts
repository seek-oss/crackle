/* eslint-disable no-console */
import yargs from 'yargs';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command({
    command: 'start',
    handler: async () => {
      const { start } = await import('@crackle/core/start');
      await start({
        pageRoots: ['src/pages', 'src/components/RemotePage'],
      });
    },
  })
  .command({
    command: 'build',
    handler: async () => {
      const { build } = await import('@crackle/core/build');
      await build();
    },
  })
  .command({
    command: 'serve',
    handler: async () => {
      const { serve } = await import('@crackle/core/serve');
      await serve();
    },
  })
  .command({
    command: 'package',
    handler: async () => {
      const { buildPackage } = await import('@crackle/core/package');
      await buildPackage();
    },
  })
  .command({
    command: 'routes',
    handler: async () => {
      const { getAllRoutes } = await import('@crackle/core/route-data');
      const pages = await getAllRoutes();
      console.table(pages);
    },
  })
  .help()
  .wrap(72).argv;
