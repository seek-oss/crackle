/* eslint-disable no-console */
import {
  start,
  build,
  buildPackage,
  serve,
  getAllRoutes,
} from '@crackle/build';
import yargs from 'yargs';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command({
    command: 'start',
    handler: async () => {
      start();
    },
  })
  .command({
    command: 'build',
    handler: async () => {
      build();
    },
  })
  .command({
    command: 'serve',
    handler: async () => {
      serve();
    },
  })
  .command({
    command: 'package',
    handler: async () => {
      buildPackage();
    },
  })
  .command({
    command: 'routes',
    handler: async () => {
      getAllRoutes();
    },
  })
  .help()
  .wrap(72).argv;
