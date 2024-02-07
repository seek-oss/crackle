import type { CrackleServer, UserConfig, ResolvedConfig } from '@crackle/core';
import { logger } from '@crackle/core/logger';
import { mergeConfig, resolveConfig } from '@crackle/core/resolve-config';
import yargs, { type ArgumentsCamelCase, type CommandModule } from 'yargs';

const withoutYargs = <T>(obj: T & Pick<ArgumentsCamelCase<T>, '_' | '$0'>) => {
  const { _, $0, ...objWithoutYargs } = obj;
  return objWithoutYargs;
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

      let config = await resolveConfig({
        onUpdate: async (newConfig) => {
          config = mergeConfig(newConfig, { web: withoutYargs(overrides) });

          if (server) {
            logger.info('Updated config found. Restarting server...');
            await server.close();
            server = null;
            server = await start(config);
          }
        },
      });
      config = mergeConfig(config, { web: withoutYargs(overrides) });

      server = await start(config);
    },
  } satisfies CommandModule<unknown, UserConfig['web']>)
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

      let config = await resolveConfig({
        onUpdate: async (newConfig) => {
          config = mergeConfig(newConfig, { web: withoutYargs(overrides) });

          if (server) {
            logger.info('Updated config found. Restarting server...');
            await server.close();
            server = null;
          }
          server = await serve(config);
        },
      });
      config = mergeConfig(config, { web: withoutYargs(overrides) });

      const { serve } = await import('@crackle/core/serve');
      server = await serve(config);
    },
  } satisfies CommandModule<unknown, UserConfig['web']>)
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
      const config = mergeConfig(await resolveConfig(), {
        package: withoutYargs(overrides),
      });

      const { buildPackage } = await import('@crackle/core/package');
      await buildPackage(config);
    },
  } satisfies CommandModule<unknown, UserConfig['package']>)
  .command({
    command: 'dev',
    describe: 'Generate entry points for local development',
    builder: {
      shim: {
        description: 'Controls whether Crackle should generate a shim',
        choices: ['require', 'none'] satisfies Array<
          ResolvedConfig['dev']['shim']
        >,
      },
    },
    handler: async (overrides) => {
      const config = mergeConfig(await resolveConfig(), {
        dev: withoutYargs(overrides),
      });

      const { dev } = await import('@crackle/core/dev');
      await dev(config);
    },
  } satisfies CommandModule<unknown, UserConfig['dev']>)
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
