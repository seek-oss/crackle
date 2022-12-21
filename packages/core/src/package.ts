import fs from 'fs/promises';
import path from 'path';

import chalk from 'chalk';

import type { EnhancedConfig, PartialConfig } from './config';
import { getConfig } from './config';
import { fix } from './fix';
import { logger } from './logger';
import { createBundle } from './package/bundle';
import { createDtsBundle } from './package/dts';
import { renderPackageJsonValidationError } from './reporters/package';
import { renderBuildError } from './reporters/shared';
import type { Format, PackageJson } from './types';
import {
  cleanPackageEntryPoints,
  createEntryPackageJsons,
  getPackageEntryPoints,
} from './utils/entry-points';
import { updateGitignore } from './utils/gitignore';
import { validatePackageJson } from './utils/setup-package-json';

const getPackageName = async (config: EnhancedConfig): Promise<string> => {
  const packageJsonPath = config.resolveFromRoot('package.json');

  const packageJson = JSON.parse(
    await fs.readFile(packageJsonPath, {
      encoding: 'utf-8',
    }),
  ) as PackageJson;

  // The name field in package.json is the best source
  // If it doesn't have one for whatever reason, the root directory is a decent fallback
  return packageJson.name || path.dirname(config.root);
};

const build = async (config: EnhancedConfig, packageName: string) => {
  const entries = await getPackageEntryPoints(config.root);

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

  logger.info(`🛠  Building ${chalk.bold.green(packageName)}...`);

  if (config.clean) {
    logger.info('🧹 Cleaning output directories...');
    await cleanPackageEntryPoints(entries);
  }

  const withLogging = async (
    bundle: typeof createBundle | typeof createDtsBundle,
    format: Format,
  ) => {
    logger.info(`⚙️  Creating ${chalk.bold(format)} bundle...`);

    const toRollupFormat = { esm: 'esm', cjs: 'cjs', dts: 'esm' } as const;

    await bundle(config, entries, {
      dir: config.root,
      exports: 'auto',
      format: toRollupFormat[format],
      entryFileNames(chunkInfo) {
        const entry = entries.find(
          ({ entryPath }) => chunkInfo.facadeModuleId === entryPath,
        )!;

        return entry.getOutputPath(format);
      },
    });

    logger.info(`⚙️  Finished creating ${chalk.bold(format)} bundle`);
  };

  await Promise.all([
    withLogging(createBundle, 'cjs'),
    withLogging(createBundle, 'esm'),
    withLogging(createDtsBundle, 'dts'),
  ]);

  await createEntryPackageJsons(entries);

  await updateGitignore(config.root, entries);

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
