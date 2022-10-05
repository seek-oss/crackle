import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { cssFileFilter } from '@vanilla-extract/integration';
import { rollup } from 'rollup';
import type { OutputOptions } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

import type { EnhancedConfig } from '../config';
import { addVanillaDebugIds, externals } from '../plugins/rollup';
import type { Format, PackageEntryPoint } from '../types';
import { extensionForFormat } from '../utils/files';

export const createBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const { format } = outputOptions;

  // Vite 3 doesn't support multiple entrypoints in library mode, so we need to use rollup here directly.
  const bundle = await rollup({
    input: entries.map(({ entryPath }) => entryPath),
    plugins: [
      addVanillaDebugIds(config.root),
      externals(config.root),
      nodeResolve(),
      commonjs(),
      esbuild({
        jsx: 'transform',
      }),
    ],
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
  });

  const extension = extensionForFormat(format as Format);

  await bundle.write({
    ...outputOptions,
    hoistTransitiveImports: false,
    manualChunks(id, { getModuleInfo }) {
      if (
        cssFileFilter.test(id) ||
        getModuleInfo(id)?.importers.some((importer) =>
          cssFileFilter.test(importer),
        )
      ) {
        const [_projectRoot, rawLocalPath] = id.split('src/');
        const localPath = rawLocalPath.replace('/', '-');

        return cssFileFilter.test(id)
          ? localPath.replace(cssFileFilter, `.css.${extension}`)
          : localPath.replace(/\.(ts|tsx|js|mjs|cjs|jsx)$/, `.${extension}`);
      }
    },
    chunkFileNames(chunkInfo) {
      const chunkPath = `dist/${chunkInfo.name}`;

      return chunkPath.endsWith(extension)
        ? chunkPath
        : `${chunkPath}.chunk.${extension}`;
    },
  });

  await bundle.close();
};
