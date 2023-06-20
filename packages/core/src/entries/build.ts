import fs from 'fs/promises';
import path from 'path';

import { mockAdapter, setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import builtinModules from 'builtin-modules';
import chalk from 'chalk';
import fse from 'fs-extra';
import type { RollupOutput } from 'rollup';
import {
  type UserConfig as ViteConfig,
  type Manifest,
  build as viteBuild,
} from 'vite';

import type { RenderAllPagesFn } from '../../entries/types';
import { type PartialConfig, getConfig } from '../config';
import { clientEntry, siteBuild } from '../constants';
import { internalPackageResolution } from '../plugins/vite/internal-package-resolution';
import { addPageRoots } from '../plugins/vite/page-roots';
import { stripRouteData } from '../plugins/vite/strip-route-data';
import { renderBuildError } from '../reporters/shared';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from '../utils/dependency-graph';
import { promiseMap } from '../utils/promise-map';
import { resolveFromCrackle } from '../utils/resolve-from';
import { commonViteConfig } from '../vite-config';

import { logger } from './logger';

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
      react(),
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
      external: [...builtinModules],
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

  const outDir = config.resolveFromRoot(siteBuild.outDir);
  const rendererDir = config.resolveFromRoot(siteBuild.rendererDir);

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
          input: resolveFromCrackle('./entries/render/build.tsx'),
        },
        outDir: rendererDir,
      },
    })) as RollupOutput;

    logger.info(`✅ Successfully built ${chalk.bold('renderer')}!`);

    setAdapter(mockAdapter);

    // TODO: use vite-node instead
    const { renderAllPages } = (await import(
      `${rendererDir}/${rendererOutput.fileName}`
    )) as {
      renderAllPages: RenderAllPagesFn;
    };
    const manifest = (await fse.readJson(
      `${outDir}/manifest.json`,
    )) as Manifest;
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
