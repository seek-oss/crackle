import fs from 'fs/promises';
import path from 'path';

import chalk from 'chalk';
import type { RollupOutput } from 'rollup';

import { type EnhancedConfig, type PartialConfig, getConfig } from '../config';
import { distDir } from '../constants';
import { createBundle } from '../package-utils/bundle';
import { createDtsBundle } from '../package-utils/dts';
import { renderPackageJsonValidationError } from '../reporters/package';
import { renderBuildError } from '../reporters/shared';
import type { PackageJson } from '../types';
import {
  cleanPackageEntryPoints,
  createEntryPackageJsons,
  getPackageEntryPoints,
} from '../utils/entry-points';
import { updateGitignore } from '../utils/gitignore';
import {
  updatePackageJsonExports,
  validatePackageJson,
} from '../utils/setup-package-json';

import { fix } from './fix';
import { logger } from './logger';

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
    label: string,
  ) => {
    logger.info(`⚙️  Creating ${chalk.bold(label)} bundle...`);
    const result = await bundle(config, entries);
    logger.info(`⚙️  Finished creating ${chalk.bold(label)} bundle`);
    return result;
  };

  const [bundles] = await Promise.all([
    withLogging(createBundle, 'esm/cjs'),
    withLogging(createDtsBundle, 'dts'),
  ]);

  await createEntryPackageJsons(entries);

  await updateGitignore(config.root, entries);

  const cssExports = (bundles as RollupOutput[])
    .flatMap((bundle) => bundle.output)
    .map((output) => output.fileName)
    .filter((fileName) => fileName.endsWith('.css'))
    .map((fileName) => path.join(distDir, fileName));

  await updatePackageJsonExports(config.root, cssExports);

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
