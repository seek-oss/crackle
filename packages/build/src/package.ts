import path from 'path';
import { build as viteBuild } from 'vite';
import externals from 'rollup-plugin-node-externals';
import glob from 'fast-glob';
import { cssFileFilter } from '@vanilla-extract/integration';

import { getWorkdirPath } from './utils';
import typescriptDeclarations from './rollup-plugin-ts-declarations';
import { addVanillaDebugIds } from './babel-plugin-vanilla-libraries';

export const buildPackage = async () => {
  const entries = await glob(['src/entries/*.ts', 'src/index.ts'], {
    absolute: true,
  });

  await viteBuild({
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
    resolve: {
      alias: {
        __THE_ENTRY: getWorkdirPath('/src/App.tsx'),
        'sku/react-treat': require.resolve('@crackle/build/mock-react-treat'),
        'sku/treat': require.resolve('@crackle/build/mock-treat'),
      },
    },
    define: {
      'process.env.NODE_DEBUG': JSON.stringify(false),
      global: JSON.stringify({}),
    },
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
          manualChunks: (id) => {
            if (id.endsWith('.css.ts')) {
              const [_projectRoot, localPath] = id.split('src/');
              return localPath.replace('/', '-').replace('.ts', '.js');
            }
          },
          chunkFileNames: (chunkInfo) => {
            const chunkPath = `dist/${chunkInfo.name}`;

            return chunkPath.endsWith('.css.js')
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
