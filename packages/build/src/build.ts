import fs from 'fs/promises';

import { setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { build as viteBuild, InlineConfig, Manifest } from 'vite';

import type { RenderAllPagesFn } from '../entries/types';

import { config } from './config';
import type { GetArrayType, ValueType } from './types';
import { getWorkdirPath } from './utils';
import { commonViteConfig } from './vite-config';

type BuildOutput = ValueType<ReturnType<typeof viteBuild>>;
type RollupOutput = GetArrayType<BuildOutput>;

const commonBuildConfig: InlineConfig = {
  ...commonViteConfig,
  plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
};

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

export const build = async () => {
  const output = await viteBuild({
    ...commonBuildConfig,
    base: config.publicPath,
    build: {
      manifest: true,
      rollupOptions: {
        input: require.resolve('../entries/client.tsx'),
      },
    },
  });

  await viteBuild({
    ...commonBuildConfig,
    mode: 'development',
    base: config.publicPath,
    build: {
      minify: false,
      ssr: true,
      rollupOptions: {
        input: { render: require.resolve('../entries/render/build.tsx') },
      },
      outDir: getWorkdirPath('dist-render'),
    },
    // @ts-expect-error
    ssr: {
      external: [
        'assert',
        'autosuggest-highlight',
        'capsize',
        'clsx',
        'csstype',
        'dedent',
        'gradient-parser',
        'is-mobile',
        'lodash',
        'polished',
        'react',
        'react-element-to-jsx-string',
        'react-focus-lock',
        'react-keyed-flatten-children',
        'react-popper-tooltip',
        'react-remove-scroll',
        'react-router',
        'react-router-dom',
        'serialize-javascript',
        'utility-types',
        'uuid',
        '@vanilla-extract/css',
        'serialize-javascript',
      ],
      noExternal: ['braid-design-system'],
    },
  });

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
  const renderAllPages = require(getWorkdirPath('dist-render/render'))
    .renderAllPages as RenderAllPagesFn;

  const pages = renderAllPages(manifest, config.publicPath);

  await Promise.all(
    pages.map(async ({ route, html }) => {
      const dir = `dist/${route}`;
      await fs.mkdir(dir, { recursive: true });
      return fs.writeFile(`${dir}/index.html`, html);
    }),
  );

  await fs.rm('dist-render', { recursive: true, force: true });
};
