import fs from 'fs';
import path from 'path';

import { cssFileFilter as vanillaCssFileFilter } from '@vanilla-extract/integration';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import fse from 'fs-extra';
import type { Rollup } from 'vite';

import type { EnhancedConfig } from '../config';
import { sideEffectsDir, srcDir, stylesDir } from '../constants';
import { logger } from '../entries/logger';
import { externals } from '../plugins/rollup/externals';
import {
  isVocabFile,
  vocabTranslations,
} from '../plugins/rollup/vocab-translations';
import type { PackageEntryPoint, PackageJson } from '../types';
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

  const formats = ['cjs', 'esm'] as const;

  const { normalizePath, build: viteBuild } = await import('vite');

  const getRelativePath = (id: string) => path.relative(config.root, id);
  const getSrcPath = (id: string) =>
    normalizePath(path.relative(`${config.root}/${srcDir}`, id));
  const getVocabPath = getSrcPath;

  const createOutputOptionsForFormat = (format: (typeof formats)[number]) => {
    const extension = extensionForFormat(format);
    const replaceExtension = (filePath: string) =>
      `${filePath.slice(0, -path.extname(filePath).length)}.${extension}`;

    const localLogger = logger.withDefaults({ tag: format });

    return {
      ...commonOutputOptions(config, entries, format),
      inlineDynamicImports: false,
      interop: 'compat',
      format,
      hoistTransitiveImports: false,
      // prevent chunks -- we'll manage them ourselves
      experimentalMinChunkSize: 0,
      manualChunks(id, { getModuleInfo }) {
        const srcPath = replaceExtension(getSrcPath(id));

        // internal package resolved by plugins/vite/internal-package-resolution.ts
        if (srcPath.startsWith('../')) {
          localLogger.debug(`Internal package: ${id}`);
          return;
        }

        const moduleInfo = getModuleInfo(id);

        if (!moduleInfo) return;

        if (moduleInfo.isExternal) {
          localLogger.debug(`External module: ${id}`);
          return;
        }
        if (config.package.mode === 'preserve') {
          localLogger.debug(`Preserved module: ${getRelativePath(id)}`);
          return srcPath;
        }
        if (isVanillaFile(id)) {
          localLogger.debug(`Vanilla file: ${getRelativePath(id)}`);
          return `${stylesDir}/${srcPath}`;
        }
        if (isVocabFile(moduleInfo.id)) {
          localLogger.debug(`Vocab file: ${getRelativePath(id)}`);
          return replaceExtension(getVocabPath(id));
        }
        if (
          typeof packageJson.sideEffects !== 'undefined' &&
          moduleHasSideEffects(srcPath, packageJson.sideEffects) &&
          !moduleInfo.isEntry
        ) {
          localLogger.debug(`Has side-effects: ${getRelativePath(id)}`);
          return `${sideEffectsDir}/${srcPath}`;
        }
        if (
          // Prevent concatenation of files imported by Vanilla Extract styles, to improve performance of the Vanilla Extract compiler
          moduleInfo.importers.some(isVanillaFile) ||
          // Prevent concatenation of files which import Vanilla Extract styles, to ensure only the CSS for one file is extracted at build time. Concatenating these files would cause the CSS for all of them to be extracted at build time.
          moduleInfo.importedIds.some(isVanillaFile)
        ) {
          localLogger.debug(`Vanilla deps: ${getRelativePath(id)}`);
          return `${stylesDir}/${srcPath}`;
        }
      },
    } satisfies Rollup.OutputOptions;
  };

  const result = (await viteBuild({
    ...commonViteConfig(config),
    esbuild: {
      jsx: 'automatic',
    },
    plugins: [
      // because we don't know ahead of time what the output format will be, we always patch imports
      externals(config, 'esm'),
      vanillaExtractPlugin({
        identifiers: 'debug',
        unstable_mode: 'transform',
      }),
      vocabTranslations(config, { toDistPath: getVocabPath }),
    ],
    logLevel: 'warn',
    build: {
      outDir: config.root,
      // we don't want to remove the output of the DTS build
      emptyOutDir: false,
      lib: {
        entry: entries.map(({ entryPath }) => entryPath),
        // don't need to specify "build.lib.formats" because it will be ignored when "build.rollupOptions.output" is an array
      },
      minify: false,
      rollupOptions: {
        preserveEntrySignatures: 'strict',
        treeshake: {
          // keep only CSS side-effect imports
          moduleSideEffects: (id, external) => !external || id.endsWith('.css'),
        },
        output: formats.map((format) => createOutputOptionsForFormat(format)),
        onLog(level, log, defaultHandler) {
          if (
            log.code === 'EMPTY_BUNDLE' ||
            log.code === 'OPTIMIZE_CHUNK_STATUS'
          ) {
            return false;
          }
          defaultHandler(level, log);
        },
      },
    },
  })) as Rollup.RollupOutput[]; // because we know that we're building esm and cjs

  return result;
};
