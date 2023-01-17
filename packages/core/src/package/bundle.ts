import assert from 'assert';
import fs from 'fs';
import path from 'path';

import { cssFileFilter as vanillaCssFileFilter } from '@vanilla-extract/integration';
import react from '@vitejs/plugin-react';
import fse from 'fs-extra';
import type { OutputOptions } from 'rollup';
import { build as viteBuild } from 'vite';

import type { EnhancedConfig } from '../config';
import { sideEffectsDir, srcDir, stylesDir } from '../constants';
import { addVanillaDebugIds, externals } from '../plugins/rollup';
import type { Format, PackageEntryPoint, PackageJson } from '../types';
import { extensionForFormat } from '../utils/files';
import { moduleHasSideEffects } from '../utils/side-effects';
import { commonViteConfig } from '../vite-config';

const isVanillaFile = (id: string) => vanillaCssFileFilter.test(id);

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
  const packagePath = path.join(config.root, 'package.json');
  const packageJson: PackageJson = await fse.readJson(packagePath, { fs });

  const replaceExtension = (srcPath: string) =>
    srcPath.replace(path.extname(srcPath), `.${extension}`);

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
          moduleSideEffects: 'no-external',
        },
        output: {
          ...outputOptions,
          hoistTransitiveImports: false,
          inlineDynamicImports: false,
          manualChunks(id, { getModuleInfo }) {
            const srcPath = path.relative(`${config.root}/${srcDir}`, id);

            // internal package resolved by plugins/vite/internal-package-resolution.ts
            if (srcPath.startsWith('../')) return;

            assert(
              !srcPath.startsWith('.'),
              `relative path ${srcPath} should not start with '.'`,
            );

            if (
              isVanillaFile(id) ||
              getModuleInfo(id)?.importers.some(isVanillaFile)
            ) {
              // TODO: check if bundling all styles works
              return replaceExtension(`${stylesDir}/${srcPath}`);
            }

            if (
              typeof packageJson.sideEffects !== 'boolean' &&
              moduleHasSideEffects(srcPath, packageJson.sideEffects)
            ) {
              return replaceExtension(`${sideEffectsDir}/${srcPath}`);
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
