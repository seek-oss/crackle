import { build as viteBuild } from 'vite';
import externals from 'rollup-plugin-node-externals';
import glob from 'fast-glob';
import path from 'path';

import { getLocalPath, getWorkdirPath } from './utils';
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
        'sku/react-treat': getLocalPath('../src/mocks/reactTreat.tsx'),
        'sku/treat': getLocalPath('../src/mocks/treat.ts'),
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
