import fs from 'fs/promises';
import path from 'path';

import { setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import builtinModules from 'builtin-modules';
import chalk from 'chalk';
import { readJson } from 'fs-extra';
import type { RollupOutput } from 'rollup';
import type { InlineConfig as ViteConfig, Manifest } from 'vite';
import { build as viteBuild } from 'vite';

import type { RenderAllPagesFn } from '../entries/types';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { clientEntry } from './constants';
import { logger } from './logger';
import {
  addPageRoots,
  internalPackageResolution,
  stripRouteData,
} from './plugins/vite';
import { renderBuildError } from './reporters/shared';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from './utils/dependency-graph';
import { promiseMap } from './utils/promise-map';
import { commonViteConfig } from './vite-config';

export const build = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  const depGraph = await extractDependencyGraph(config.root);
  const ssrExternals = getSsrExternalsForCompiledDependency(
    '@vanilla-extract/css',
    depGraph,
  );

  const commonBuildConfig: ViteConfig = {
    ...commonViteConfig(config),
    plugins: [
      stripRouteData(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      addPageRoots(config),
      // Crackle pretends it has knowledge of the monorepo at this stage
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
    ],
    logLevel: 'silent',
    ssr: {
      external: [
        'serialize-javascript',
        'used-styles',
        ...builtinModules,
        ...ssrExternals.external,
      ],
      noExternal: ssrExternals.noExternal,
    },
  };

  try {
    logger.info(`🛠  Building ${chalk.bold('client')}...`);
    await viteBuild({
      ...commonBuildConfig,
      base: config.publicPath,
      build: {
        manifest: true,
        rollupOptions: {
          input: clientEntry,
        },
      },
    });

    logger.info(`✅ Successfully built ${chalk.bold('client')}!`);
  } catch (error: any) {
    logger.errorWithExitCode(
      renderBuildError(`Build failed for ${chalk.bold('client')}`, error),
    );
    return;
  }

  const rendererDir = config.resolveFromRoot('dist-render');
  const outDir = config.resolveFromRoot('dist');

  try {
    logger.info(`🛠  Building ${chalk.bold('renderer')}...`);

    const {
      output: [rendererOutput],
    } = (await viteBuild({
      ...commonBuildConfig,
      mode: 'development',
      base: config.publicPath,
      build: {
        minify: false,
        ssr: true,
        rollupOptions: {
          input: require.resolve('../../entries/render/build.tsx'),
        },
        outDir: rendererDir,
      },
    })) as RollupOutput;

    logger.info(`✅ Successfully built ${chalk.bold('renderer')}!`);

    setAdapter({
      appendCss: () => {},
      registerClassName: () => {},
      onEndFileScope: () => {},
      registerComposition: () => {},
      markCompositionUsed: () => {},
      getIdentOption: () => 'short',
    });

    // TODO: use vite-node instead
    const { renderAllPages } = (await import(
      `${rendererDir}/${rendererOutput.fileName}`
    )) as {
      renderAllPages: RenderAllPagesFn;
    };
    const manifest = (await readJson(`${outDir}/manifest.json`)) as Manifest;
    const pages = await renderAllPages(manifest, config.publicPath);

    await promiseMap(pages, async ({ route, html }) => {
      const routeDir = path.join(outDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      return fs.writeFile(`${routeDir}/index.html`, html);
    });

    logger.info('✅ Rendered all pages');
  } catch (error: any) {
    logger.errorWithExitCode(renderBuildError(`Render pages failed`, error));
  } finally {
    await fs.rm(rendererDir, {
      recursive: true,
      force: true,
    });
  }
};
