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

const getExportsForPackage = (entries: PackageEntryPoint[]) => {
  const exports: Record<string, ExportString | ExportObject> = {
    './package.json': './package.json',
  };

  for (const entryPoint of entries) {
    exports[entryPoint.isDefaultEntry ? '.' : `./${entryPoint.entryName}`] = {
      types: `./${entryPoint.getOutputPath('dts')}`,
      import: `./${entryPoint.getOutputPath('esm')}`,
      require: `./${entryPoint.getOutputPath('cjs')}`,
    };
  }

  return exports;
};

export const diffPackageJson = (
  packageJson: PackageJson,
  entries: PackageEntryPoint[],
) => {
  const files = new Set<string>(packageJson.files ?? []);

  let main: string | undefined;
  let module: string | undefined;

  for (const entryPoint of entries) {
    if (entryPoint.isDefaultEntry) {
      main = `./${entryPoint.getOutputPath('cjs')}`;
      module = `./${entryPoint.getOutputPath('esm')}`;
    }

    files.add(`/${entryPoint.entryName}`);
  }

  const exportsKey = getExportsForPackage(entries);

  const filesArray = Array.from(files);
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

  if (files.size !== packageJson.files?.length) {
    const missingFiles = filesArray.filter(
      (file) => !packageJson.files?.includes(file),
    );
    diffs.push({ key: 'files', additions: missingFiles });
  }

  const packageJsonExports = packageJson.exports;

  if (!isDeepStrictEqual(packageJsonExports, exportsKey)) {
    diffs.push({ key: 'exports' });
  }

  const expectedPackageJson =
    diffs.length > 0
      ? {
          main,
          module,
          files: filesArray.sort((a, b) => (a > b ? 1 : -1)),
          exports: exportsKey,
        }
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
