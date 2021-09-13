/* eslint-disable no-console */
import yargs from 'yargs';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command({
    command: 'start',
    handler: async () => {
      const { start } = await import('@crackle/build/start');
      await start();
    },
  })
  .command({
    command: 'build',
    handler: async () => {
      const { build } = await import('@crackle/build/build');
      await build();
    },
  })
  .command({
    command: 'serve',
    handler: async () => {
      const { serve } = await import('@crackle/build/serve');
      await serve();
    },
  })
  .command({
    command: 'package',
    handler: async () => {
      const { buildPackage } = await import('@crackle/build/package');
      await buildPackage();
    },
  })
  .command({
    command: 'routes',
    handler: async () => {
      const { getAllRoutes } = await import('@crackle/build/route-data');
      const pages = await getAllRoutes();
      console.table(pages);
    },
  })
  .help()
  .wrap(72).argv;
