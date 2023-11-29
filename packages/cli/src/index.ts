import type { CrackleConfig, CrackleServer } from '@crackle/core';
import { logger } from '@crackle/core/logger';
import { resolveConfig } from '@crackle/core/resolve-config';
import yargs, { type Arguments, type CommandModule } from 'yargs';

type CrackleConfigWithYargs = CrackleConfig & Pick<Arguments, '_' | '$0'>;

const setConfigOverrides = (
  config: CrackleConfig,
  overrides: CrackleConfigWithYargs,
) => {
  const { _, $0, ...overridesWithoutYargs } = overrides;
  Object.assign(config, overridesWithoutYargs);
};

yargs(process.argv.slice(2))
  .scriptName('crackle')
  .command({
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
      const { start } = await import('@crackle/core/start');

      let server: CrackleServer | null = null;

      const config = await resolveConfig({
        onUpdate: async (newConfig) => {
          setConfigOverrides(newConfig, overrides);

          if (server) {
            logger.info('Updated config found. Restarting server...');
            await server.close();
            server = null;
            server = await start(newConfig);
          }
        },
      });
      setConfigOverrides(config, overrides);

      server = await start(config);
    },
  } satisfies CommandModule<unknown, Pick<CrackleConfig, 'port'>>)
  .command({
    command: 'build',
    describe: 'Build a static version the site (e.g. for deploying to S3)',
    handler: async () => {
      const config = await resolveConfig();

      const { build } = await import('@crackle/core/build');
      await build(config);
    },
  })
  .command({
    command: 'serve',
    describe: 'Serve static site build from ./dist',
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
          server = serve(newConfig);
        },
      });
      setConfigOverrides(config, overrides);

      const { serve } = await import('@crackle/core/serve');
      server = serve(config);
    },
  } satisfies CommandModule<unknown, Pick<CrackleConfig, 'port'>>)
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
    command: 'package',
    describe: 'Compile package for publishing',
    builder: {
      fix: {
        description: 'Run `crackle fix` if necessary',
        type: 'boolean',
      },
      clean: {
        description: 'Clean output directory',
        type: 'boolean',
      },
    },
    handler: async (overrides) => {
      const config = await resolveConfig();
      setConfigOverrides(config, overrides);

      const { buildPackage } = await import('@crackle/core/package');
      await buildPackage(config);
    },
  } satisfies CommandModule<unknown, Pick<CrackleConfig, 'fix' | 'clean'>>)
  .command({
    command: 'dev',
    describe: 'Generate entry points for local development',
    builder: {
      webpack: {
        description: 'Generate Webpack-compatible shims',
        type: 'boolean',
      },
    },
    handler: async (overrides) => {
      const config = await resolveConfig();
      const { dev } = await import('@crackle/core/dev');

      setConfigOverrides(config, overrides);
      await dev(config);
    },
  } satisfies CommandModule<unknown, Pick<CrackleConfig, 'webpack'>>)
  .command({
    command: 'fix',
    describe: 'Fixes invalid project configuration',
    handler: async () => {
      const config = await resolveConfig();
      const { fix } = await import('@crackle/core/fix');
      await fix(config);
    },
  })
  .command({
    command: 'clean',
    describe: 'Clean output directories',
    handler: async () => {
      const config = await resolveConfig();
      const { clean } = await import('@crackle/core/clean');
      clean(config);
    },
  })
  .strict()
  .help()
  .wrap(null)
  .parse();
