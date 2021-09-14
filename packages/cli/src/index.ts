/* eslint-disable no-console */
import type { CrackleConfig } from '@crackle/core';
import { resolveConfig } from '@crackle/core/resolve-config';
import yargs from 'yargs';

let config: CrackleConfig;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('crackle')
  .middleware(async () => {
    config = await resolveConfig();
  })
  .command({
    command: 'start',
    handler: async () => {
      const { start } = await import('@crackle/core/start');
      await start(config);
    },
  })
  .command({
    command: 'build',
    handler: async () => {
      const { build } = await import('@crackle/core/build');
      await build(config);
    },
  })
  .command({
    command: 'serve',
    handler: async () => {
      const { serve } = await import('@crackle/core/serve');
      await serve(config);
    },
  })
  .command({
    command: 'package',
    handler: async () => {
      const { buildPackage } = await import('@crackle/core/package');
      await buildPackage(config);
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
