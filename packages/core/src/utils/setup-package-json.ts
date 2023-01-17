import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { isDeepStrictEqual } from 'util';

// @ts-ignore no declaration file
import structuredClonePolyfill from '@ungap/structured-clone';
import fse from 'fs-extra';
import { sortPackageJson } from 'sort-package-json';

import { distDir, sideEffectsDir } from '../constants';
import type { PackageEntryPoint as Entry, PackageJson } from '../types';

import { writePackageJson } from './files';
import { partition } from './partition';
import { moduleHasSideEffects } from './side-effects';

export type Difference =
  | { key: 'main' | 'module' | 'types'; from?: string; to?: string }
  | { key: 'files'; additions: string[] }
  | { key: 'sideEffects'; additions: string[] }
  | { key: 'exports' }
  | { key: 'order' };

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

const arrayDiff = <T>(array: T[], comparison: T[] | undefined) => {
  const existingItems = new Set(comparison ?? []);
  const missingItems = array.filter((file) => !existingItems.has(file));
  return missingItems;
};

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

const getSideEffectsForPackage = (
  entries: Entry[],
  existingSideEffects: PackageJson['sideEffects'],
  options: { from: string },
) => {
  if (
    typeof existingSideEffects === 'boolean' ||
    typeof existingSideEffects === 'undefined'
  ) {
    return {
      sideEffects: existingSideEffects,
      missingSideEffects: [],
    };
  }

  if (typeof existingSideEffects === 'string') {
    // eslint-disable-next-line no-param-reassign
    existingSideEffects = [existingSideEffects];
  }

  assert(
    Array.isArray(existingSideEffects),
    `sideEffects should be an array, but is ${existingSideEffects}.`,
  );

  const sideEffects = [...existingSideEffects];

  const addIfRequired = (flag: string) => {
    if (!sideEffects.includes(flag)) sideEffects.push(flag);
  };

  for (const entry of entries) {
    // we must use the relative path to ensure the package path doesn't match the flag
    const relativeEntryPath = path.relative(options.from, entry.entryPath);
    if (moduleHasSideEffects(relativeEntryPath, sideEffects)) {
      for (const outputPath of [
        entry.getOutputPath('cjs', options),
        entry.getOutputPath('esm', options),
      ]) {
        // add a new flag only if existing flags don't match
        if (!moduleHasSideEffects(outputPath, sideEffects)) {
          addIfRequired(outputPath.replace(path.extname(outputPath), '.*'));
        }
      }
    }
  }
  // catch-all flag
  addIfRequired(`${distDir}/${sideEffectsDir}/**`);

  return {
    sideEffects: sort(sideEffects),
    missingSideEffects: arrayDiff(sideEffects, existingSideEffects),
  };
};

export const diffPackageJson = (
  packageRoot: string,
  packageJson: PackageJson,
  entries: Entry[],
): {
  diffs: Difference[];
  expectedPackageJson: PackageJson;
} => {
  const diffs: Difference[] = [];

  // create expected package.json

  let expectedPackageJson: PackageJson = structuredClone(packageJson);

  const options = { from: packageRoot };
  expectedPackageJson.exports = getExportsForPackage(entries, options);

  const files = new Set(packageJson.files);
  for (const entry of entries) {
    if (entry.isDefaultEntry) {
      expectedPackageJson.main = `./${entry.getOutputPath('cjs', options)}`;
      expectedPackageJson.module = `./${entry.getOutputPath('esm', options)}`;
      expectedPackageJson.types = `./${entry.getOutputPath('dts', options)}`;
    }
    files.add(entry.entryName);
  }
  expectedPackageJson.files = sort(files);

  const { sideEffects, missingSideEffects } = getSideEffectsForPackage(
    entries,
    packageJson.sideEffects,
    options,
  );
  if (missingSideEffects.length) {
    expectedPackageJson.sideEffects = sideEffects;
  }

  expectedPackageJson = sortPackageJson(expectedPackageJson);

  // do checks against expected package.json

  (['main', 'module', 'types'] as const).forEach((key) => {
    if (expectedPackageJson[key] !== packageJson[key]) {
      diffs.push({ key, from: packageJson[key], to: expectedPackageJson[key] });
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
    diffs.push({
      key: 'files',
      additions: arrayDiff(expectedPackageJson.files!, packageJson.files),
    });
  }

  if (
    !isDeepStrictEqual(expectedPackageJson.sideEffects, packageJson.sideEffects)
  ) {
    diffs.push({ key: 'sideEffects', additions: missingSideEffects });
  }

  const expectedPackageJsonKeys = Object.keys(expectedPackageJson);
  const packageJsonKeys = Object.keys(packageJson);
  if (
    expectedPackageJsonKeys.length === packageJsonKeys.length &&
    !isDeepStrictEqual(expectedPackageJsonKeys, packageJsonKeys)
  ) {
    diffs.push({ key: 'order' });
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

    if (write) {
      await writePackageJson({
        dir: packageRoot,
        contents: expectedPackageJson,
      });
    }

    return diffs;
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
