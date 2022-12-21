import fs from 'fs/promises';
import path from 'path';
import { isDeepStrictEqual } from 'util';

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
  const files = new Set<string>(packageJson.files ?? []);

  let main: PackageJson['main'];
  let module: PackageJson['module'];

  for (const entryPoint of entries) {
    if (entryPoint.isDefaultEntry) {
      main = `./${entryPoint.getOutputPath('cjs')}`;
      module = `./${entryPoint.getOutputPath('esm')}`;
    }
    files.add(`/${entryPoint.entryName}`);
  }

  const exports = getExportsForPackage(entries);

  const filesArray = sortFiles(files);
  const diffs: Difference[] = [];

  if (main !== packageJson.main) {
    diffs.push({
      key: 'main',
      from: packageJson.main,
      to: main,
    });
  }

  if (module !== packageJson.module) {
    diffs.push({
      key: 'module',
      from: packageJson.module,
      to: module,
    });
  }

  if (!isDeepStrictEqual(filesArray, packageJson.files)) {
    const missingFiles = filesArray.filter(
      (file) => !packageJson.files?.includes(file),
    );
    diffs.push({ key: 'files', additions: missingFiles });
  }

  if (
    !isDeepStrictEqual(
      Object.entries(packageJson.exports || {}),
      Object.entries(exports),
    )
  ) {
    diffs.push({ key: 'exports' });
  }

  const expectedPackageJson =
    diffs.length > 0
      ? ({
          main,
          module,
          files: sortFiles(filesArray),
          exports,
        } as PackageJson)
      : packageJson;

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
    const packageJson = JSON.parse(
      await fs.readFile(packagePath, 'utf-8'),
    ) as PackageJson;

    const { diffs, expectedPackageJson } = diffPackageJson(
      packageJson,
      entries,
    );

    if (write && diffs.length > 0) {
      await writePackageJson({
        dir: packageRoot,
        contents: {
          ...packageJson,
          ...expectedPackageJson,
        },
      });
    }

    return diffs;
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
