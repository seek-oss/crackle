import fs from 'fs';
import path from 'path';

import glob from 'fast-glob';

import type { EnhancedConfig } from '../config';

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

interface GetPackageEntryPointsOpts {
  packageRoot: string;
  absolute?: boolean;
}

export const getPackageEntryPoints = async ({
  packageRoot,
  absolute = false,
}: GetPackageEntryPointsOpts) => {
  const entryPaths = await glob(['src/index.ts', 'src/entries/*.ts'], {
    cwd: packageRoot,
    absolute,
  });

  return entryPaths.map((entryPath) => ({
    entryPath,
    isDefaultEntry: entryPath.includes('src/index.ts'),
  }));
};
