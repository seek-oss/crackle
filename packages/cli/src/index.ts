import type { CrackleConfig, CrackleServer } from '@crackle/core';
import { logger } from '@crackle/core/logger';
import { resolveConfig } from '@crackle/core/resolve-config';
import yargs from 'yargs';

const setConfigOverrides = (
  config: CrackleConfig,
  overrides: CrackleConfig & Pick<yargs.Arguments, '_' | '$0'>,
) => {
  const { _, $0, ...overridesWithoutYargs } = overrides;
  Object.assign(config, overridesWithoutYargs);
};

yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command<{ port?: number }>({
    command: 'start',
    describe:
      'Start an HTTP server (with hot reloading) to preview the website',
    builder: {
      port: {
        description: 'Override the HTTP server port',
        type: 'number',
      },
    },
    handler: async (overrides) => {
      let server: CrackleServer | null = null;

      const config = await resolveConfig({
        onUpdate: async (newConfig) => {
          setConfigOverrides(newConfig, overrides);

          if (server) {
            logger.info('Updated config found. Restarting server...');
            await server.close();
            server = null;
          }
          server = await start(newConfig);
        },
      });
      setConfigOverrides(config, overrides);

      const { start } = await import('@crackle/core/start');
      server = await start(config);
    },
  })
  .command({
    command: 'build',
    describe: '#TODO',
    handler: async () => {
      const config = await resolveConfig();

      const { build } = await import('@crackle/core/build');
      await build(config);
    },
  })
  .command<{ port?: number }>({
    command: 'serve',
    describe: 'Serve static build from ./dist',
    builder: {
      port: {
        description: 'Override the HTTP server port',
        type: 'number',
      },
    },
    handler: async (overrides) => {
      let server: CrackleServer | null = null;

      const config = await resolveConfig({
        onUpdate: async (newConfig) => {
          setConfigOverrides(config, overrides);

          if (server) {
            logger.info('Updated config found. Restarting server...');
            await server.close();
            server = null;
          }
          server = serve(newConfig);
        },
      });
      setConfigOverrides(config, overrides);

      const { serve } = await import('@crackle/core/serve');
      server = serve(config);
    },
  })
  .command<{ fix?: boolean }>({
    command: 'package',
    describe: '#TODO',
    builder: {
      fix: {
        description: 'Run `crackle fix` if necessary',
        type: 'boolean',
      },
    },
    handler: async (overrides) => {
      const config = await resolveConfig();
      setConfigOverrides(config, overrides);

      const { buildPackage } = await import('@crackle/core/build-package');
      await buildPackage(config);
    },
  })
  .command({
    command: 'routes',
    describe: 'Show website routes',
    handler: async () => {
      const config = await resolveConfig();
      const { getAllRoutes } = await import('@crackle/core/route-data');
      const pages = await getAllRoutes(config);
      console.table(pages); // eslint-disable-line no-console
    },
  })
  .command({
    command: 'dev',
    describe: '#TODO',
    handler: async () => {
      const config = await resolveConfig();
      const { dev } = await import('@crackle/core/dev');
      await dev(config);
    },
  })
  .command({
    command: 'fix',
    describe: '#TODO',
    handler: async () => {
      const config = await resolveConfig();
      const { fix } = await import('@crackle/core/fix');
      await fix(config);
    },
  })
  .strict()
  .help()
  .wrap(null)
  .parse();
