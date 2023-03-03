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
import { commonOutputOptions, commonViteConfig } from '../vite-config';

const isVanillaFile = (id: string) => vanillaCssFileFilter.test(id);

export const createBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
) => {
  const packagePath = path.join(config.root, 'package.json');
  const packageJson: PackageJson = await fse.readJson(packagePath, { fs });

  const createOutputOptionsForFormat = (format: Format) => {
    const extension = extensionForFormat(format);
    const replaceExtension = (srcPath: string) =>
      srcPath.replace(path.extname(srcPath), `.${extension}`);

    return {
      ...commonOutputOptions(config, entries, format),
      inlineDynamicImports: false,
      interop: 'compat',
      manualChunks(id, { getModuleInfo }) {
        const srcPath = replaceExtension(
          path.relative(`${config.root}/${srcDir}`, id),
        );

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
          return `${stylesDir}/${srcPath}`;
        }

        if (
          typeof packageJson.sideEffects !== 'boolean' &&
          moduleHasSideEffects(srcPath, packageJson.sideEffects) &&
          !getModuleInfo(id)?.isEntry
        ) {
          return `${sideEffectsDir}/${srcPath}`;
        }
      },
    } satisfies OutputOptions;
  };

  await viteBuild({
    ...commonViteConfig,
    plugins: [addVanillaDebugIds(config), externals(config, 'esm'), react()],
    logLevel: 'warn',
    build: {
      // output directory is the package root, so we don't want to remove it
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: entries.map(({ entryPath }) => entryPath),
        // don't need to specify "build.lib.formats" because it will be ignored when "build.rollupOptions.output" is an array
      },
      outDir: config.root,
      rollupOptions: {
        treeshake: {
          moduleSideEffects: 'no-external',
        },
        output: (['cjs', 'esm'] as const).map((format) =>
          createOutputOptionsForFormat(format),
        ),
      },
    },
  });
};
