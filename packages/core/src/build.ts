import fs from 'fs/promises';
import path from 'path';

import { setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import chalk from 'chalk';
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
import type { GetArrayType } from './types';
import { promiseMap } from './utils/promise-map';
import { commonViteConfig } from './vite-config';

type Awaited<T> = T extends Promise<infer K> ? K : never; // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements
type BuildOutput = Awaited<ReturnType<typeof viteBuild>>;
type RollupOutput = GetArrayType<BuildOutput>;

const extractManifestFile = (buildOutput: BuildOutput): Manifest => {
  if (Array.isArray(buildOutput)) {
    throw new Error('Build output should not be an array');
  }

  const manifestString = (buildOutput as RollupOutput).output.find(
    (file) => file.fileName === 'manifest.json',
  );

  if (!manifestString) {
    throw new Error('Unable to locate manifest.json');
  }

  if (manifestString.type !== 'asset') {
    throw new Error();
  }

  return JSON.parse(manifestString.source as string) as Manifest;
};

export const build = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);

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
  };

  let output: BuildOutput;

  try {
    logger.info(`🛠  Building ${chalk.bold('client')}...`);
    output = await viteBuild({
      ...commonBuildConfig,
      base: config.publicPath,
      build: {
        manifest: true,
        rollupOptions: { input: clientEntry },
      },
    });

    logger.info(`✅ Successfully built ${chalk.bold('client')}!`);
  } catch (error: any) {
    logger.errorWithExitCode(
      renderBuildError(`Build failed for ${chalk.bold('client')}`, error),
    );
    return;
  }

  const rendererOutDir = config.resolveFromRoot('dist-render');

  try {
    logger.info(`🛠  Building ${chalk.bold('renderer')}...`);
    await viteBuild({
      ...commonBuildConfig,
      mode: 'development',
      base: config.publicPath,
      build: {
        minify: false,
        ssr: true,
        rollupOptions: {
          input: {
            bootstrap: require.resolve('../../entries/render/bootstrap.ts'),
            build: require.resolve('../../entries/render/build.tsx'),
          },
        },
        outDir: rendererOutDir,
      },
      legacy: {
        buildSsrCjsExternalHeuristics: true,
      },
    });

    logger.info(`✅ Successfully built ${chalk.bold('renderer')}!`);

    const manifest = extractManifestFile(output);

    setAdapter({
      appendCss: () => {},
      registerClassName: () => {},
      onEndFileScope: () => {},
      registerComposition: () => {},
      markCompositionUsed: () => {},
      getIdentOption: () => 'short',
    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const renderAllPages = require(`${rendererOutDir}/bootstrap`)
      .renderAllPages as RenderAllPagesFn;

    const pages = await renderAllPages(manifest, config.publicPath);

    await promiseMap(pages, async ({ route, html }) => {
      const dir = config.resolveFromRoot(path.join('dist', route));
      await fs.mkdir(dir, { recursive: true });
      return fs.writeFile(`${dir}/index.html`, html);
    });
    logger.info('✅ Rendered all pages');
  } catch (error: any) {
    logger.errorWithExitCode(renderBuildError(`Render pages failed`, error));
  } finally {
    await fs.rm(rendererOutDir, {
      recursive: true,
      force: true,
    });
  }
};
