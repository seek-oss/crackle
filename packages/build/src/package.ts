import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import glob from 'fast-glob';
import externals from 'rollup-plugin-node-externals';
import { build as viteBuild } from 'vite';

import typescriptDeclarations from './rollup-plugin-ts-declarations';
import type { ManualChunksFn } from './types';
import { getWorkdirPath } from './utils';
import { commonViteConfig } from './vite-config';
import { addVanillaDebugIds } from './vite-plugin-vanilla-libraries';

const manualChunks: ManualChunksFn = (id, { getModuleInfo }) => {
  if (
    cssFileFilter.test(id) ||
    getModuleInfo(id)?.importers.some((importer) =>
      cssFileFilter.test(importer),
    )
  ) {
    const [_projectRoot, localPath] = id.split('src/');
    return localPath.replace('/', '-').replace('.ts', '.js');
  }
};

export const buildPackage = async () => {
  const entries = await glob(['src/entries/*.ts', 'src/index.ts'], {
    absolute: true,
  });

  await viteBuild({
    ...commonViteConfig,
    plugins: [
      {
        ...externals({
          deps: true,
          packagePath: getWorkdirPath('./package.json'),
        }),
        enforce: 'pre',
      },
      typescriptDeclarations({
        directory: process.cwd(),
        name: 'my-package',
        entrypoints: entries.map((entry) => ({ source: entry })),
      }),
      addVanillaDebugIds,
    ],
    build: {
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: '',
        formats: ['es'],
      },
      outDir: process.cwd(),
      rollupOptions: {
        input: entries,
        treeshake: {
          moduleSideEffects: (id, external) => {
            if (external) {
              return false;
            }

            if (cssFileFilter.test(id)) {
              // Mark .css.ts files as side effect free except for reset and atoms as they
              // need to be hoisted to ensure they are first in the CSS order
              // TODO: make the reset and atom file checks more specific
              return id.includes('reset') || id.includes('atoms');
            }

            return true;
          },
        },
        output: {
          hoistTransitiveImports: false,
          manualChunks,
          chunkFileNames: (chunkInfo) => {
            const chunkPath = `dist/${chunkInfo.name}`;

            return chunkPath.endsWith('.js')
              ? chunkPath
              : `${chunkPath}.chunk.js`;
          },
          entryFileNames: (chunkInfo) =>
            chunkInfo.facadeModuleId?.includes('src/entries')
              ? `${path.basename(chunkInfo.facadeModuleId, '.ts')}/index.js`
              : `dist/${chunkInfo.name}.js`,
        },
      },
    },
  });
};
