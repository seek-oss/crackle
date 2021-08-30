import { build as viteBuild } from 'vite';
import externals from 'rollup-plugin-node-externals';
import glob from 'fast-glob';
import path from 'path';

import { getLocalPath, getWorkdirPath } from './utils';

export const buildPackage = async () => {
  const entries = await glob(['src/entries/*.ts', 'src/index.ts'], {
    absolute: true,
  });
  console.log('entries: ', entries);

  const entriesPath = getWorkdirPath('src/entries');
  console.log('entriesPath: ', entriesPath);

  await viteBuild({
    plugins: [
      {
        ...externals({
          deps: true,
          packagePath: getWorkdirPath('./package.json'),
        }),
        enforce: 'pre',
      },
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
      emptyOutDir: true,
      minify: false,
      lib: {
        entry: '',
        formats: ['es'],
      },
      outDir: getWorkdirPath('lib'),
      rollupOptions: {
        input: entries,
        output: {
          // preserveModules: true,
          entryFileNames: (chunkInfo) => {
            const entryName = chunkInfo.facadeModuleId?.includes('src/entries')
              ? path.basename(chunkInfo.facadeModuleId, '.ts')
              : `lib/${chunkInfo.name}`;

            return `${entryName}/index.js`;
          },
        },
      },
    },
  });
};
