import fs from 'fs';
import path from 'path';
import { isDeepStrictEqual } from 'util';

// @ts-ignore
import structuredClonePolyfill from '@ungap/structured-clone';
import fse from 'fs-extra';
import { sortPackageJson } from 'sort-package-json';

import type { PackageEntryPoint, PackageJson } from '../types';

import { writePackageJson } from './files';

type FromToDifference = {
  key: 'main' | 'module' | 'types';
  from?: string;
  to?: string;
};
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

global.structuredClone = global.structuredClone ?? structuredClonePolyfill;

const sortFiles = (files: Iterable<string>) =>
  Array.from(files).sort((a, b) => (a > b ? 1 : -1));

const getExportsForPackage = (
  entries: PackageEntryPoint[],
  { from }: { from: string },
) => {
  const exports: Record<string, ExportString | ExportObject> = {};

  for (const entryPoint of entries) {
    exports[entryPoint.isDefaultEntry ? '.' : `./${entryPoint.entryName}`] = {
      types: `./${entryPoint.getOutputPath('dts', { from })}`,
      import: `./${entryPoint.getOutputPath('esm', { from })}`,
      require: `./${entryPoint.getOutputPath('cjs', { from })}`,
    };
  }
  exports['./package.json'] = './package.json';

  return exports;
};

export const diffPackageJson = (
  packageRoot: string,
  packageJson: PackageJson,
  entries: PackageEntryPoint[],
): {
  diffs: Difference[];
  expectedPackageJson: PackageJson;
} => {
  const existingFiles = new Set(packageJson.files ?? []);
  const diffs: Difference[] = [];

  const expectedPackageJson = sortPackageJson(structuredClone(packageJson));

  const opts = { from: packageRoot };
  expectedPackageJson.exports = getExportsForPackage(entries, opts);

  const files = new Set(existingFiles);
  for (const entryPoint of entries) {
    if (entryPoint.isDefaultEntry) {
      expectedPackageJson.main = `./${entryPoint.getOutputPath('cjs', opts)}`;
      expectedPackageJson.module = `./${entryPoint.getOutputPath('esm', opts)}`;
      expectedPackageJson.types = `./${entryPoint.getOutputPath('dts', opts)}`;
      files.add('dist');
    } else {
      files.add(entryPoint.entryName);
    }
  }
  expectedPackageJson.files = sortFiles(files);

  (['main', 'module', 'types'] as const).forEach((key) => {
    if (expectedPackageJson[key] !== packageJson[key]) {
      diffs.push({
        key,
        from: packageJson[key],
        to: expectedPackageJson[key],
      });
    }
  });

  if (
    !isDeepStrictEqual(
      Object.entries(expectedPackageJson.exports!),
      Object.entries(packageJson.exports || {}),
    )
  ) {
    diffs.push({ key: 'exports' });
  }

  if (!isDeepStrictEqual(expectedPackageJson.files, packageJson.files)) {
    const missingFiles = expectedPackageJson.files.filter(
      (file) => !existingFiles.has(file),
    );
    diffs.push({ key: 'files', additions: missingFiles });
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
      packageRoot,
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
