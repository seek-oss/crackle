import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { build as viteBuild, InlineConfig, Manifest } from 'vite';
import { getWorkdirPath } from './utils';
import fs from 'fs/promises';
import type { GetArrayType, ValueType } from './types';
import { setAdapter } from '@vanilla-extract/css/adapter';
import type { RenderAllPagesFn } from '../entries/types';

type BuildOutput = ValueType<ReturnType<typeof viteBuild>>;
type RollupOutput = GetArrayType<BuildOutput>;

const PUBLIC_PATH = '/';

const commonBuildConfig: InlineConfig = {
  plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
  resolve: {
    alias: {
      __THE_ENTRY: getWorkdirPath('/src/App.tsx'),
      'sku/react-treat': require.resolve('../mocks/react-treat.tsx'),
      'sku/treat': require.resolve('../mocks/treat.ts'),
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
  },
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
    base: PUBLIC_PATH,
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
    base: PUBLIC_PATH,
    build: {
      minify: false,
      ssr: true,
      rollupOptions: {
        input: require.resolve('../entries/render.tsx'),
      },
      outDir: getWorkdirPath('/dist-render'),
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

  const renderAllPages = require(getWorkdirPath('dist-render/render'))
    .renderAllPages as RenderAllPagesFn;

  const pages = renderAllPages(manifest, PUBLIC_PATH);

  await Promise.all(
    pages.map(async ({ route, html }) => {
      const dir = `dist/${route}`;
      await fs.mkdir(dir, { recursive: true });
      return fs.writeFile(`${dir}/index.html`, html);
    }),
  );

  await fs.rm('dist-render', { recursive: true, force: true });
};
