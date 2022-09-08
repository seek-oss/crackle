import fs from 'fs/promises';
import path from 'path';
import { isDeepStrictEqual } from 'util';

import type { PackageJson } from 'type-fest';

import type { PackageEntryPoint } from '../types';

import { writePackageJson } from './files';

type FromToDifference = { key: 'main' | 'module'; from?: string; to?: string };
type AdditionsDifference = { key: 'files'; additions: string[] };
type ExportsDifference = { key: 'exports' };
export type Difference =
  | FromToDifference
  | AdditionsDifference
  | ExportsDifference;

type ExportString = `./${string}`;

type ExportWithTypes = {
  types: ExportString;
  default: ExportString;
};

type ExportObject = {
  import: ExportWithTypes;
  require: ExportWithTypes;
};

const getExportsForPackage = (entries: PackageEntryPoint[]) => {
  const exports: Record<string, ExportString | ExportObject> = {
    './package.json': './package.json',
  };

  for (const entryPoint of entries) {
    if (entryPoint.isDefaultEntry) {
      const types = './dist/index.cjs.d.ts';
      exports['.'] = {
        import: { types, default: './dist/index.mjs' },
        require: { types, default: './dist/index.cjs' },
      };
      continue;
    }

    const types = `./${entryPoint.entryName}/index.cjs.d.ts` as const;
    exports[`./${entryPoint.entryName}`] = {
      import: { types, default: `./${entryPoint.entryName}/index.mjs` },
      require: { types, default: `./${entryPoint.entryName}/index.cjs` },
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
      main = 'dist/index.cjs';
      module = 'dist/index.mjs';
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
