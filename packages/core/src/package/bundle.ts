import assert from 'assert';
import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import react from '@vitejs/plugin-react';
import type { OutputOptions } from 'rollup';
import { build as viteBuild } from 'vite';

import type { EnhancedConfig } from '../config';
import { addVanillaDebugIds, externals } from '../plugins/rollup';
import type { Format, PackageEntryPoint } from '../types';
import { extensionForFormat } from '../utils/files';
import { commonViteConfig } from '../vite-config';

export const createBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const format = outputOptions.format as Format;
  const extension = extensionForFormat(format);

  const defaultEntry = entries.find(({ isDefaultEntry }) => isDefaultEntry);
  assert(defaultEntry, 'Could not find default entry');

  const outputDir = path.relative(config.root, defaultEntry.outputDir);

  await viteBuild({
    ...commonViteConfig,
    plugins: [
      addVanillaDebugIds(config.root),
      externals(config.root, format),
      react(),
    ],
    logLevel: 'warn',
    build: {
      // output directory is the package root, so we don't want to remove it
      emptyOutDir: false,
      minify: false,
      lib: {
        // doesn't matter what the value is because it's overridden by rollupOptions.input
        entry: '',
        formats: [format === 'cjs' ? 'cjs' : 'es'],
      },
      outDir: config.root,
      rollupOptions: {
        input: entries.map(({ entryPath }) => entryPath),
        treeshake: {
          moduleSideEffects(id, external) {
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
          ...outputOptions,
          hoistTransitiveImports: false,
          inlineDynamicImports: false,
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
                : localPath.replace(path.extname(localPath), `.${extension}`);
            }
          },
          chunkFileNames(chunkInfo) {
            const chunkPath = `${outputDir}/${chunkInfo.name}`;

            return chunkPath.endsWith(extension)
              ? chunkPath
              : `${chunkPath}.chunk.${extension}`;
          },
        },
      },
    },
  });
};
