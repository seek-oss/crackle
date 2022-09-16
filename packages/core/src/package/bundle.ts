import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { cssFileFilter } from '@vanilla-extract/integration';
import { rollup } from 'rollup';
import type { OutputOptions } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';

import type { Format } from '../package';
import { extensionForFormat } from '../package';
import { externals } from '../plugins/rollup';
import { addVanillaDebugIds } from '../plugins/vite';
import type { PackageEntryPoint } from '../types';

export const createBundle = async (
  packageRoot: string,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const { format } = outputOptions;

  // Vite 3 doesn't support multiple entrypoints in library mode, so we need to use rollup here directly.
  const bundle = await rollup({
    input: entries.map(({ entryPath }) => entryPath),
    plugins: [
      externals(packageRoot),
      nodeResolve(),
      commonjs(),
      esbuild({
        jsx: 'transform',
      }),
      addVanillaDebugIds(),
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
  });

  await bundle.close();
};
