import fs from 'fs/promises';
import path from 'path';

import type { PackageEntryPoint } from '../types';

const setupPackageJson =
  (write: boolean) =>
  async (
    packageRoot: string,
    entries: PackageEntryPoint[],
  ): Promise<string[]> => {
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
        const entryName = path.basename(entryPoint.entryPath, '.ts');
        files.add(`/${entryName}`);
      }
    }

    const filesArray = Array.from(files);
    const diffs: string[] = [];

    if (main !== packageJson.main) {
      diffs.push(
        `The main entry is pointing at "${packageJson.main}"", but should be "${main}".`,
      );
    }

    if (module !== packageJson.module) {
      diffs.push(
        `The module entry is pointing at "${packageJson.module}", but should be "${module}".`,
      );
    }

    if (files.size !== packageJson.files.length) {
      const missingFiles = filesArray
        .filter((file) => !packageJson.files.includes(file))
        .map((missingFile) => `"${missingFile}"`)
        .join(', ');
      diffs.push(`The files array is missing ${missingFiles}.`);
    }

    if (diffs.length > 0) {
      packageJson.main = main;
      packageJson.module = module;
      packageJson.files = Array.from(files).sort((a, b) => (a > b ? 1 : -1));

      if (!write) {
        return diffs;
      }

      await fs.writeFile(
        packagePath,
        JSON.stringify(packageJson, null, 2).concat('\n'),
        'utf-8',
      );
    }

    return [];
  };

export const validatePackageJson = setupPackageJson(false);
export const fixPackageJson = setupPackageJson(true);
