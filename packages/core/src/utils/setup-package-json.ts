import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { isDeepStrictEqual } from 'util';

// @ts-ignore no declaration file
import structuredClonePolyfill from '@ungap/structured-clone';
import fse from 'fs-extra';

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
interface ExportObject {
  types: ExportString | Omit<ExportObject, 'types'>;
  import: ExportString;
  require: ExportString;
}
type Exports = Record<string, ExportString | ExportObject>;

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

const exportsDiff = (expected: Exports, actual: Exports) => {
  // Compare only keys which are the same in both objects.
  // This allows exports to be injected by `updatePackageJsonExports`
  const actualEntries = Object.entries(actual).filter(
    ([key]) => key in expected,
  );
  return !isDeepStrictEqual(Object.entries(expected), actualEntries);
};

const makeRelative = (value: string): ExportString =>
  value.startsWith('./') ? (value as ExportString) : `./${value}`;

const getExportsForPackage = (entries: Entry[], options: { from: string }) => {
  const [$default, other] = partition(entries, (entry) => entry.isDefaultEntry);
  const sortedEntries = [...$default, ...sort(other, 'entryName')];

  const exports: Exports = {};
  for (const entry of sortedEntries) {
    exports[entry.isDefaultEntry ? '.' : makeRelative(entry.entryName)] = {
      types: {
        import: makeRelative(entry.getOutputPath('dtsm', options)),
        require: makeRelative(entry.getOutputPath('dts', options)),
      },
      import: makeRelative(entry.getOutputPath('esm', options)),
      require: makeRelative(entry.getOutputPath('cjs', options)),
    };
  }
  exports[makeRelative('package.json')] = makeRelative('package.json');

  return exports as PackageJson['exports'];
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

export const diffPackageJson = async (
  packageRoot: string,
  packageJson: PackageJson,
  entries: Entry[],
): Promise<{
  diffs: Difference[];
  expectedPackageJson: PackageJson;
}> => {
  const diffs: Difference[] = [];

  // create expected package.json

  let expected = structuredClone(packageJson);

  const options = { from: packageRoot };
  expected.exports = getExportsForPackage(entries, options);

  const files = new Set(packageJson.files);
  for (const entry of entries) {
    if (entry.isDefaultEntry) {
      expected.main = makeRelative(entry.getOutputPath('cjs', options));
      expected.module = makeRelative(entry.getOutputPath('esm', options));
      expected.types = makeRelative(entry.getOutputPath('dts', options));
    }
    files.add(entry.entryName);
  }
  expected.files = sort(files);

  const { sideEffects, missingSideEffects } = getSideEffectsForPackage(
    entries,
    packageJson.sideEffects,
    options,
  );
  if (missingSideEffects.length) {
    expected.sideEffects = sideEffects;
  }

  const { default: sortPackageJson } = await import('sort-package-json');
  expected = sortPackageJson(expected);

  // do checks against expected package.json

  (['main', 'module', 'types'] as const).forEach((key) => {
    if (expected[key] !== packageJson[key]) {
      diffs.push({ key, from: packageJson[key], to: expected[key] });
    }
  });

  if (
    exportsDiff(
      expected.exports as Exports,
      (packageJson.exports ?? {}) as Exports,
    )
  ) {
    diffs.push({ key: 'exports' });
  }

  if (!isDeepStrictEqual(expected.files, packageJson.files)) {
    diffs.push({
      key: 'files',
      additions: arrayDiff(expected.files!, packageJson.files),
    });
  }

  if (!isDeepStrictEqual(expected.sideEffects, packageJson.sideEffects)) {
    diffs.push({ key: 'sideEffects', additions: missingSideEffects });
  }

  const expectedPackageJsonKeys = Object.keys(expected);
  const packageJsonKeys = Object.keys(packageJson);
  if (
    expectedPackageJsonKeys.length === packageJsonKeys.length &&
    !isDeepStrictEqual(expectedPackageJsonKeys, packageJsonKeys)
  ) {
    diffs.push({ key: 'order' });
  }

  return {
    diffs,
    expectedPackageJson: expected,
  };
};

const setupPackageJson =
  (write: boolean) =>
  async (packageRoot: string, entries: Entry[]): Promise<Difference[]> => {
    const packagePath = path.join(packageRoot, 'package.json');
    const packageJson: PackageJson = await fse.readJson(packagePath, { fs });

    const { diffs, expectedPackageJson } = await diffPackageJson(
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

export const updatePackageJsonExports = async (
  packageRoot: string,
  exports: string[],
) => {
  if (exports.length === 0) return;

  const packagePath = path.join(packageRoot, 'package.json');
  const packageJson: PackageJson = await fse.readJson(packagePath, { fs });

  const packageExports = packageJson.exports as Exports;
  const [lastKey, lastExport] = Object.entries(packageExports).pop()!;

  delete packageExports[lastKey];
  for (const entry of exports) {
    packageExports[makeRelative(entry)] = makeRelative(entry);
  }
  packageExports[lastKey] = lastExport;

  packageJson.exports = packageExports as PackageJson['exports'];

  await writePackageJson({
    dir: packageRoot,
    contents: packageJson,
  });
};
