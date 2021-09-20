/* eslint-disable no-console */
import type { CrackleServer } from '@crackle/core';
import { resolveConfig } from '@crackle/core/resolve-config';
import yargs from 'yargs';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command({
    command: 'start',
    handler: async () => {
      let server: CrackleServer | null = null;
      const config = await resolveConfig({
        onUpdate: async (newConfig) => {
          if (server) {
            console.log('Updated config found. Restarting server...');
            await server.close();

            server = null;
            server = await start(newConfig);
          }
        },
      });

      const { start } = await import('@crackle/core/start');
      server = await start(config);
    },
  })
  .command({
    command: 'build',
    handler: async () => {
      const config = await resolveConfig();

      const { build } = await import('@crackle/core/build');
      await build(config);
    },
  })
  .command({
    command: 'serve',
    handler: async () => {
      let server: CrackleServer | null = null;
      const config = await resolveConfig({
        onUpdate: async (newConfig) => {
          if (server) {
            console.log('Updated config found. Restarting server...');
            await server.close();

            server = null;
            server = serve(newConfig);
          }
        },
      });

      const { serve } = await import('@crackle/core/serve');
      server = serve(config);
    },
  })
  .command({
    command: 'package',
    handler: async () => {
      const config = await resolveConfig();

      const { buildPackages } = await import('@crackle/core/build-package');
      await buildPackages(config);
    },
  })
  .command({
    command: 'routes',
    handler: async () => {
      const config = await resolveConfig();
      const { getAllRoutes } = await import('@crackle/core/route-data');
      const pages = await getAllRoutes(config);
      console.table(pages);
    },
  })
  .help()
  .wrap(72).argv;
