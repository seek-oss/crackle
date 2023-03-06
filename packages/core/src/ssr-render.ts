import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import builtinModules from 'builtin-modules';
import chalk from 'chalk';
import fse from 'fs-extra';
import type { UserConfig as ViteConfig } from 'vite';
import { build as viteBuild } from 'vite';
import { ssr } from 'vite-plugin-ssr/plugin';
import { prerender } from 'vite-plugin-ssr/prerender';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { siteBuild } from './constants';
import { logger } from './logger';
import { internalPackageResolution } from './plugins/vite';
import { renderBuildError } from './reporters/shared';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from './utils/dependency-graph';
import { commonViteConfig } from './vite-config';

export const render = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  const depGraph = await extractDependencyGraph(config.root);
  const ssrExternals = getSsrExternalsForCompiledDependency(
    '@vanilla-extract/css',
    depGraph,
  );

  const commonBuildConfig: ViteConfig = {
    ...commonViteConfig(config),
    plugins: [
      react(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      // Crackle pretends it has knowledge of the monorepo at this stage
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
      ssr({
        prerender: true,
      }),
    ],
    logLevel: 'silent',
    base: config.publicPath,
    build: {
      manifest: true,
      minify: false,
    },
    ssr: {
      external: [...builtinModules, 'braid-design-system'],
      noExternal: ssrExternals.noExternal,
    },
  };

  const outDir = config.resolveFromRoot(siteBuild.outDir);
  const rendererDir = config.resolveFromRoot(siteBuild.rendererDir);

  await fse.rm(outDir, { force: true, recursive: true });
  await fse.rm(rendererDir, { force: true, recursive: true });

  try {
    // build client, then server
    for (const isClient of [true, false]) {
      const label = isClient ? 'client' : 'server';
      logger.info(`🛠  Building ${chalk.bold(label)}...`);
      await viteBuild({
        ...commonBuildConfig,
        build: {
          ...commonBuildConfig.build,
          ssr: !isClient,
        },
      });
      logger.info(`✅ Successfully built ${chalk.bold(label)}`);
    }

    logger.info(`🛠  Rendering...`);
    await prerender({
      viteConfig: {
        ...commonBuildConfig,
        configFile: false,
      },
    });
    logger.info(`✅ Finished rendering`);

    await fse.rm(rendererDir, { force: true, recursive: true });
    await fse.move(`${outDir}/client`, rendererDir);
    await fse.rm(outDir, { recursive: true });
    await fse.move(rendererDir, outDir);
  } catch (error: any) {
    logger.errorWithExitCode(
      renderBuildError(`Build failed for ${chalk.bold('client')}`, error),
    );
  }
};
