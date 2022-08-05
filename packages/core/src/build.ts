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
      // TODO: solve this root problem
      // fixtures/monorepo/packages/* are part of the crackle workspace
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
      addPageRoots(config),
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
            render: require.resolve('../../entries/render/build.tsx'),
          },
        },
        outDir: config.resolveFromRoot('dist-render'),
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
    const renderAllPages = require(config.resolveFromRoot('dist-render/render'))
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
    await fs.rm(config.resolveFromRoot('dist-render'), {
      recursive: true,
      force: true,
    });
  }
};
