import fs from 'fs/promises';
import path from 'path';

import { setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { InlineConfig as ViteConfig, Manifest } from 'vite';
import { build as viteBuild } from 'vite';

import type { RenderAllPagesFn } from '../entries/types';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { clientEntry } from './constants';
import {
  addPageRoots,
  internalPackageResolution,
  stripRouteData,
} from './plugins/vite';
import { createBuildReporter } from './reporters/build';
import type { GetArrayType, ValueType } from './types';
import { promiseMap } from './utils/promise-map';
import { commonViteConfig } from './vite-config';

type BuildOutput = ValueType<ReturnType<typeof viteBuild>>;
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

interface Options {
  patchConsole?: boolean;
}
export const build = async (
  inlineConfig?: PartialConfig,
  { patchConsole }: Options = {},
) => {
  const dispatchEvent = await createBuildReporter({ patchConsole });

  const config = getConfig(inlineConfig);

  const commonBuildConfig: ViteConfig = {
    ...commonViteConfig(config),
    plugins: [
      stripRouteData(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      addPageRoots(config),
      internalPackageResolution(config),
    ],
    logLevel: 'silent',
  };

  type UnPromise<T> = T extends Promise<infer K> ? K : never;

  let output: UnPromise<ReturnType<typeof viteBuild>>;

  try {
    dispatchEvent({ type: 'BUILD_CLIENT_STARTED' });
    output = await viteBuild({
      ...commonBuildConfig,
      base: config.publicPath,
      build: {
        manifest: true,
        rollupOptions: { input: clientEntry },
      },
    });

    dispatchEvent({ type: 'BUILD_CLIENT_COMPLETE' });
  } catch (error: any) {
    dispatchEvent({
      type: 'BUILD_CLIENT_FAILED',
      error: error.loc
        ? {
            ...error,
            location: path.relative(config.root, error.loc.file),
          }
        : error,
    });
    return;
  }

  try {
    dispatchEvent({ type: 'BUILD_RENDERER_STARTED' });
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

    dispatchEvent({ type: 'BUILD_RENDERER_COMPLETE' });

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

    const pages = await renderAllPages(
      manifest,
      config.publicPath,
      dispatchEvent,
    );

    await promiseMap(pages, async ({ route, html }) => {
      const dir = config.resolveFromRoot(path.join('dist', route));
      await fs.mkdir(dir, { recursive: true });
      return fs.writeFile(`${dir}/index.html`, html);
    });
    dispatchEvent({ type: 'RENDER_PAGES_COMPLETE' });
  } catch (error: any) {
    // eslint-disable-next-line no-console
    dispatchEvent({
      type: 'RENDER_PAGES_FAILED',
      error: error.loc
        ? {
            ...error,
            location: path.relative(config.root, error.loc.file),
          }
        : error,
    });
  } finally {
    await fs.rm(config.resolveFromRoot('dist-render'), {
      recursive: true,
      force: true,
    });
  }
};
