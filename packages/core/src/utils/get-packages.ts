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

interface GetPackageEntryPointsOpts {
  packageRoot: string;
}
export const getPackageEntryPoints = async ({
  packageRoot,
}: GetPackageEntryPointsOpts): Promise<PackageEntryPoint[]> => {
  const entryPaths = await glob([defaultEntry, 'src/entries/**/*.ts'], {
    cwd: packageRoot,
    absolute: true,
  });

  return entryPaths.map((entryPath) => {
    const isDefaultEntry = entryPath.includes(defaultEntry);
    const entryName = isDefaultEntry
      ? 'dist'
      : path
          .relative(path.join(packageRoot, 'src/entries'), entryPath)
          .replace(/\..*$/, '');

    const outputDir = path.join(packageRoot, entryName);

    return { entryPath, outputDir, isDefaultEntry, entryName };
  });
};
