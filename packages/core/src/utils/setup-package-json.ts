import fs from 'fs/promises';
import path from 'path';
import { isDeepStrictEqual } from 'util';

import type { PackageJson } from 'type-fest';

import type { PackageEntryPoint } from '../types';

import { basename } from './basename';
import { writeFile } from './write-file';

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

    const files = new Set<string>(packageJson.files ?? []);

    let main: string | undefined;
    let module: string | undefined;

    for (const entryPoint of entries) {
      if (entryPoint.isDefaultEntry) {
        main = 'dist/index.cjs';
        module = 'dist/index.mjs';
        files.add('/dist');
      } else {
        const entryName = basename(entryPoint.entryPath);
        files.add(`/${entryName}`);
      }
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

    if (write && diffs.length > 0) {
      packageJson.main = main;
      packageJson.module = module;
      packageJson.files = filesArray.sort((a, b) => (a > b ? 1 : -1));
      packageJson.exports = exportsKey;

      await writeFile({
        dir: packageRoot,
        fileName: 'package.json',
        contents: JSON.stringify(packageJson, null, 2).concat('\n'),
      });
    }

    return diffs;
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
