/* eslint-disable no-console */
import { start, build, serve } from '@elmo/build';
import yargs from 'yargs';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('elmo')
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
  .help()
  .wrap(72).argv;
