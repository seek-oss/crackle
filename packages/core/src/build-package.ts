import fs from 'fs/promises';
import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import chalk from 'chalk';
import type { OutputOptions } from 'rollup';
import externals from 'rollup-plugin-node-externals';
import { build as viteBuild } from 'vite';

import type { PartialConfig, EnhancedConfig } from './config';
import { getConfig } from './config';
import { logger } from './logger';
import { typescriptDeclarations } from './plugins/rollup';
import { addVanillaDebugIds } from './plugins/vite';
import {
  renderBuildError,
  renderPackageJsonValidationError,
} from './reporters/package/app';
import { basename } from './utils/basename';
import { createEntryPackageJsons } from './utils/create-entry-package-json';
import { getPackageEntryPoints } from './utils/get-packages';
import {
  fixPackageJson,
  validatePackageJson,
} from './utils/setup-package-json';
import { commonViteConfig } from './vite-config';

type Format = 'esm' | 'cjs';

const extensionForFormat = (format: Format) =>
  ({ esm: 'mjs', cjs: 'cjs' }[format]);

const getPackageName = async (config: EnhancedConfig): Promise<string> => {
  const packageJsonPath = config.resolveFromRoot('package.json');

  const packageJson = JSON.parse(
    await fs.readFile(packageJsonPath, {
      encoding: 'utf-8',
    }),
  );

  // The name field in package.json is the best source
  if (packageJson.name) {
    return packageJson.name as string;
  }

  // If it doesn't have one for whatever reason, the root directory is a decent fallback
  return path.dirname(config.root);
};

const createRollupOutputOptions = (format: Format): OutputOptions => {
  const extension = extensionForFormat(format);

  return {
    format,
    hoistTransitiveImports: false,
    manualChunks: (id, { getModuleInfo }) => {
      if (
        cssFileFilter.test(id) ||
        getModuleInfo(id)?.importers.some((importer) =>
          cssFileFilter.test(importer),
        )
      ) {
        const [_projectRoot, rawLocalPath] = id.split('src/');
        const localPath = rawLocalPath.replace('/', '-');

        if (cssFileFilter.test(id)) {
          return localPath.replace(cssFileFilter, `.css.${extension}`);
        }

        return localPath.replace(/\.(ts|tsx|js|mjs|cjs|jsx)$/, `.${extension}`);
      }
    },
    chunkFileNames: (chunkInfo) => {
      const chunkPath = `dist/${chunkInfo.name}`;

      return chunkPath.endsWith('.js')
        ? chunkPath
        : `${chunkPath}.chunk.${extension}`;
    },
    entryFileNames: (chunkInfo) =>
      chunkInfo.facadeModuleId?.includes('src/entries')
        ? `${basename(chunkInfo.facadeModuleId)}/index.${extension}`
        : `dist/${chunkInfo.name}.${extension}`,
  };
};

const build = async (
  config: EnhancedConfig,
  packageName: string,
  fix?: boolean,
) => {
  logger.info(`🛠  Building ${chalk.bold(packageName)}...`);

  const entries = await getPackageEntryPoints({
    packageRoot: config.root,
  });

  if (fix) {
    await fixPackageJson(config.root, entries);
  } else {
    const packageDiffs = await validatePackageJson(config.root, entries);

    if (packageDiffs.length) {
      logger.errorWithExitCode(
        renderPackageJsonValidationError(packageName, packageDiffs),
      );
      return;
    }
  }

  await viteBuild({
    ...commonViteConfig(config),
    plugins: [
      {
        ...externals({
          deps: true,
          packagePath: config.resolveFromRoot('./package.json'),
        }),
        enforce: 'pre',
      },
      typescriptDeclarations({
        directory: config.root,
        name: packageName,
        entrypoints: entries.map(({ entryPath }) => ({ source: entryPath })),
      }),
      addVanillaDebugIds,
    ],
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: '',
        formats: [],
      },
      outDir: config.root,
      rollupOptions: {
        input: entries.map(({ entryPath }) => entryPath),
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
        output: [
          createRollupOutputOptions('cjs'),
          createRollupOutputOptions('esm'),
        ],
      },
    },
  });

  await createEntryPackageJsons(entries);

  logger.info(`✅ Successfully built ${chalk.bold.green(packageName)}!`);
};

export const buildPackage = async (
  partialConfig?: PartialConfig,
  fix?: boolean,
) => {
  const config = getConfig(partialConfig);
  const packageName = await getPackageName(config);

  try {
    await build(config, packageName, fix);
  } catch (err: any) {
    logger.errorWithExitCode(renderBuildError(packageName, err));
  }
};
