import fs from 'fs';
import path from 'path';
import { isDeepStrictEqual } from 'util';

// @ts-ignore no declaration file
import structuredClonePolyfill from '@ungap/structured-clone';
import fse from 'fs-extra';
import { sortPackageJson } from 'sort-package-json';

import type { PackageEntryPoint as Entry, PackageJson } from '../types';

import { writePackageJson } from './files';
import { partition } from './partition';

export type Difference =
  | { key: 'main' | 'module' | 'types'; from?: string; to?: string }
  | { key: 'files'; additions: string[] }
  | { key: 'exports' };

type ExportString = `./${string}`;
type ExportObject = {
  types: ExportString;
  import: ExportString;
  require: ExportString;
};

const structuredClone = global.structuredClone ?? structuredClonePolyfill;

const sort = <T>(items: Iterable<T>, key?: keyof T) =>
  Array.from(items).sort((a, b) => {
    const aValue = key ? a[key] : a;
    const bValue = key ? b[key] : b;
    return aValue > bValue ? 1 : -1;
  });

const getExportsForPackage = (entries: Entry[], options: { from: string }) => {
  const [$default, other] = partition(entries, (entry) => entry.isDefaultEntry);
  const sortedEntries = [...$default, ...sort(other, 'entryName')];

  const exports: Record<string, ExportString | ExportObject> = {};
  for (const entry of sortedEntries) {
    exports[entry.isDefaultEntry ? '.' : `./${entry.entryName}`] = {
      types: `./${entry.getOutputPath('dts', options)}`,
      import: `./${entry.getOutputPath('esm', options)}`,
      require: `./${entry.getOutputPath('cjs', options)}`,
    };
  }
  exports['./package.json'] = './package.json';

  return exports;
};

export const diffPackageJson = (
  packageRoot: string,
  packageJson: PackageJson,
  entries: Entry[],
): {
  diffs: Difference[];
  expectedPackageJson: PackageJson;
} => {
  const existingFiles = new Set(packageJson.files ?? []);
  const diffs: Difference[] = [];

  const expectedPackageJson = sortPackageJson(structuredClone(packageJson));

  const options = { from: packageRoot };
  expectedPackageJson.exports = getExportsForPackage(entries, options);

  const files = new Set(existingFiles);
  for (const entry of entries) {
    if (entry.isDefaultEntry) {
      expectedPackageJson.main = `./${entry.getOutputPath('cjs', options)}`;
      expectedPackageJson.module = `./${entry.getOutputPath('esm', options)}`;
      expectedPackageJson.types = `./${entry.getOutputPath('dts', options)}`;
    }
    files.add(entry.entryName);
  }
  expectedPackageJson.files = sort(files);

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
      Object.entries(packageJson.exports ?? {}),
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
  async (packageRoot: string, entries: Entry[]): Promise<Difference[]> => {
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
