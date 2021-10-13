import fs from 'fs/promises';
import path from 'path';

import type { PackageEntryPoint } from '../types';

import { basename } from './basename';

type FromToDifference = { key: 'main' | 'module'; from?: string; to?: string };
type AdditionsDifference = { key: 'files'; additions: string[] };
export type Difference = FromToDifference | AdditionsDifference;

const setupPackageJson =
  (write: boolean) =>
  async (
    packageRoot: string,
    entries: PackageEntryPoint[],
  ): Promise<Difference[]> => {
    const packagePath = path.join(packageRoot, 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packagePath, 'utf-8'));

    const files = new Set<string>(packageJson.files ?? []);

    let main: string | undefined;
    let module: string | undefined;

    for (const entryPoint of entries) {
      if (entryPoint.isDefaultEntry) {
        main = 'dist/index.cjs.js';
        module = 'dist/index.esm.js';
        files.add('/dist');
      } else {
        const entryName = basename(entryPoint.entryPath);
        files.add(`/${entryName}`);
      }
    }

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

    if (files.size !== packageJson.files.length) {
      const missingFiles = filesArray.filter(
        (file) => !packageJson.files.includes(file),
      );
      diffs.push({ key: 'files', additions: missingFiles });
    }

    if (diffs.length > 0) {
      packageJson.main = main;
      packageJson.module = module;
      packageJson.files = filesArray.sort((a, b) => (a > b ? 1 : -1));

      if (write) {
        await fs.writeFile(
          packagePath,
          JSON.stringify(packageJson, null, 2).concat('\n'),
          'utf-8',
        );
      }
    }

    return diffs;
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
