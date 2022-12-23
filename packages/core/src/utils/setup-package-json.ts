import fs from 'fs';
import path from 'path';
import { isDeepStrictEqual } from 'util';

import fse from 'fs-extra';
import { sortPackageJson } from 'sort-package-json';

import type { PackageEntryPoint, PackageJson } from '../types';

import { writePackageJson } from './files';

type FromToDifference = { key: 'main' | 'module'; from?: string; to?: string };
type AdditionsDifference = { key: 'files'; additions: string[] };
type ExportsDifference = { key: 'exports' };
export type Difference =
  | FromToDifference
  | AdditionsDifference
  | ExportsDifference;

type ExportString = `./${string}`;
type ExportObject = {
  types: ExportString;
  import: ExportString;
  require: ExportString;
};

const sortFiles = (files: Iterable<string>) =>
  Array.from(files).sort((a, b) => (a > b ? 1 : -1));

const getExportsForPackage = (entries: PackageEntryPoint[]) => {
  const exports: Record<string, ExportString | ExportObject> = {};

  for (const entryPoint of entries) {
    exports[entryPoint.isDefaultEntry ? '.' : `./${entryPoint.entryName}`] = {
      types: `./${entryPoint.getOutputPath('dts')}`,
      import: `./${entryPoint.getOutputPath('esm')}`,
      require: `./${entryPoint.getOutputPath('cjs')}`,
    };
  }
  exports['./package.json'] = './package.json';

  return exports;
};

export const diffPackageJson = (
  packageJson: PackageJson,
  entries: PackageEntryPoint[],
): {
  diffs: Difference[];
  expectedPackageJson: PackageJson;
} => {
  const existingFiles = new Set(packageJson.files ?? []);
  const diffs: Difference[] = [];

  const expectedPackageJson = sortPackageJson(structuredClone(packageJson));

  expectedPackageJson.exports = getExportsForPackage(entries);

  const files = new Set(existingFiles);
  for (const entryPoint of entries) {
    if (entryPoint.isDefaultEntry) {
      expectedPackageJson.main = `./${entryPoint.getOutputPath('cjs')}`;
      expectedPackageJson.module = `./${entryPoint.getOutputPath('esm')}`;
    }
    files.add(entryPoint.entryName);
  }
  expectedPackageJson.files = sortFiles(files);

  if (expectedPackageJson.main !== packageJson.main) {
    diffs.push({
      key: 'main',
      from: packageJson.main,
      to: expectedPackageJson.main,
    });
  }

  if (expectedPackageJson.module !== packageJson.module) {
    diffs.push({
      key: 'module',
      from: packageJson.module,
      to: expectedPackageJson.module,
    });
  }

  if (!isDeepStrictEqual(expectedPackageJson.files, packageJson.files)) {
    const missingFiles = expectedPackageJson.files.filter(
      (file) => !existingFiles.has(file),
    );
    diffs.push({ key: 'files', additions: missingFiles });
  }

  if (
    !isDeepStrictEqual(
      Object.entries(expectedPackageJson.exports!),
      Object.entries(packageJson.exports || {}),
    )
  ) {
    diffs.push({ key: 'exports' });
  }

  return {
    diffs,
    expectedPackageJson,
  };
};

const setupPackageJson =
  (write: boolean) =>
  async (
    packageRoot: string,
    entries: PackageEntryPoint[],
  ): Promise<Difference[]> => {
    const packagePath = path.join(packageRoot, 'package.json');
    const packageJson: PackageJson = await fse.readJson(packagePath, { fs });

    const { diffs, expectedPackageJson } = diffPackageJson(
      packageJson,
      entries,
    );

    if (write && diffs.length > 0) {
      await writePackageJson({
        dir: packageRoot,
        contents: expectedPackageJson,
      });
    }

    return diffs;
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
