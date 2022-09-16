import fs from 'fs';
import path from 'path';

import glob from 'fast-glob';

import type { EnhancedConfig } from '../config';
import type { PackageEntryPoint } from '../types';

export interface Package {
  name: string;
  root: string;
}

export type Packages = Map<string, Package>;

export const getPackages = async (
  config: EnhancedConfig,
): Promise<Packages> => {
  const monorepoPackages = await glob(['packages/*/package.json'], {
    cwd: config.root,
    absolute: true,
    fs,
  });

  const isMonorepo = monorepoPackages.length > 0;

  const allPackageJsons = isMonorepo
    ? monorepoPackages
    : [config.resolveFromRoot('package.json')];

  const packages = new Map<string, Package>();

  for (const packageJsonPath of allPackageJsons) {
    const packageJson = JSON.parse(
      await fs.promises.readFile(packageJsonPath, { encoding: 'utf-8' }),
    );

    packages.set(packageJson.name, {
      name: packageJson.name,
      root: path.dirname(packageJsonPath),
    });
  }

  return packages;
};

const defaultEntry = 'src/index.ts';
const otherEntries = 'src/entries';

interface GetPackageEntryPointsOpts {
  packageRoot: string;
}
export const getPackageEntryPoints = async ({
  packageRoot,
}: GetPackageEntryPointsOpts): Promise<PackageEntryPoint[]> => {
  const entryPaths = await glob([defaultEntry, `${otherEntries}/**/*.ts`], {
    cwd: packageRoot,
    fs,
  });

  return entryPaths.map((entryPath) => {
    const extension = path.extname(entryPath);
    const isDefaultEntry = entryPath === defaultEntry;
    const entryName = isDefaultEntry
      ? 'dist'
      : path.relative(otherEntries, entryPath).replace(extension, '');
    const outputDir = path.join(packageRoot, entryName);

    return {
      entryName,
      entryPath: path.join(packageRoot, entryPath),
      isDefaultEntry,
      outputDir,
    };
  });
};
