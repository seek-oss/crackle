import fs from 'fs';
import path from 'path';

import glob from 'fast-glob';

import type { EnhancedConfig } from '../config';
import type { Format, PackageEntryPoint } from '../types';

import { emptyDir, extensionForFormat, writePackageJson } from './files';
import { promiseMap } from './promise-map';

export interface Package {
  name: string;
  root: string;
}

export type Packages = Map<string, Package>;

export const getPackages = async (
  config: EnhancedConfig,
): Promise<Packages> => {
  // TODO: remove/replace with monorepo-aware library
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

export const getPackageEntryPoints = async (
  packageRoot: string,
): Promise<PackageEntryPoint[]> => {
  const defaultEntry = 'src/index.ts';
  const otherEntries = 'src/entries';

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
      getOutputPath: (format: Format) =>
        path.join(
          entryName,
          isDefaultEntry ? '' : 'dist',
          `index.${extensionForFormat(format)}`,
        ),
    };
  });
};

export const cleanPackageEntryPoints = async (
  entryPoints: PackageEntryPoint[],
  pre?: (entryPoint: PackageEntryPoint) => void,
) => {
  await promiseMap(entryPoints, async (entryPoint) => {
    pre?.(entryPoint);
    await emptyDir(entryPoint.outputDir);
  });
};

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const relativeOutputPath = (entryPoint: PackageEntryPoint, format: Format) =>
    path.relative(entryPoint.outputDir, entryPoint.getOutputPath(format));

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writePackageJson({
        dir: entryPoint.outputDir,
        contents: {
          main: relativeOutputPath(entryPoint, 'cjs'),
          module: relativeOutputPath(entryPoint, 'esm'),
          types: relativeOutputPath(entryPoint, 'dts'),
        },
      });
    }
  });
};
