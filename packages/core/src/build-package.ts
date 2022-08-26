import fs from 'fs/promises';
import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import chalk from 'chalk';
import ensureGitignore from 'ensure-gitignore';
import type { OutputOptions } from 'rollup';
import externals from 'rollup-plugin-node-externals';
import type { PackageJson } from 'type-fest';
import { build as viteBuild } from 'vite';

import type { PartialConfig, EnhancedConfig } from './config';
import { getConfig } from './config';
import { fix } from './fix';
import { logger } from './logger';
import { typescriptDeclarations } from './plugins/rollup';
import { addVanillaDebugIds } from './plugins/vite';
import { renderPackageJsonValidationError } from './reporters/package';
import { renderBuildError } from './reporters/shared';
import { basename } from './utils/basename';
import { createEntryPackageJsons } from './utils/create-entry-package-json';
import { getPackageEntryPoints } from './utils/get-packages';
import { validatePackageJson } from './utils/setup-package-json';
import { commonViteConfig } from './vite-config';

type Format = 'esm' | 'cjs';

const extensionForFormat = (format: Format) =>
  ({ esm: 'mjs', cjs: 'cjs' }[format]);

const getPackageJson = async (config: EnhancedConfig): Promise<PackageJson> => {
  const packageJsonPath = config.resolveFromRoot('package.json');

  return JSON.parse(
    await fs.readFile(packageJsonPath, {
      encoding: 'utf-8',
    }),
  );
};

const getPackageName = async (config: EnhancedConfig): Promise<string> => {
  const packageJson = await getPackageJson(config);

  // The name field in package.json is the best source
  if (packageJson.name) {
    return packageJson.name;
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

      return chunkPath.endsWith(extension)
        ? chunkPath
        : `${chunkPath}.chunk.${extension}`;
    },
    entryFileNames: (chunkInfo) =>
      chunkInfo.facadeModuleId?.includes('src/entries')
        ? `${basename(chunkInfo.facadeModuleId)}/index.${extension}`
        : `dist/${chunkInfo.name}.${extension}`,
  };
};

const build = async (config: EnhancedConfig, packageName: string) => {
  const entries = await getPackageEntryPoints({
    packageRoot: config.root,
  });

  const diffs = await validatePackageJson(config.root, entries);

  if (diffs.length) {
    if (config.fix) {
      await fix(config);
    } else {
      logger.errorWithExitCode(
        renderPackageJsonValidationError(packageName, diffs),
      );
      return;
    }
  }

  logger.info(`🛠  Building ${chalk.bold(packageName)}…`);
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

  await ensureGitignore({
    filepath: config.resolveFromRoot('.gitignore'),
    comment: 'managed by crackle',
    patterns: entries.map((entry) => `/${entry.entryName}`),
  });

  logger.info(`✅ Successfully built ${chalk.bold.green(packageName)}!`);
};

export const buildPackage = async (partialConfig?: PartialConfig) => {
  const config = getConfig(partialConfig);
  const packageName = await getPackageName(config);

  try {
    await build(config, packageName);
  } catch (err: any) {
    logger.errorWithExitCode(renderBuildError(packageName, err));
  }
};
