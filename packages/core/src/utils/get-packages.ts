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

export const getPackageEntryPoints = async ({
  packageRoot,
}: {
  packageRoot: string;
}) => {
  const entryPaths = await glob('src/entries/*.ts', {
    cwd: packageRoot,
  });

  const defaultEntryFile = 'src/index.ts';

  // eslint-disable-next-line no-sync
  const defaultEntry = fs.existsSync(path.join(packageRoot, defaultEntryFile))
    ? defaultEntryFile
    : undefined;

  return {
    defaultEntry,
    subEntries: entryPaths,
  };
};
