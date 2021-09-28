import fs from 'fs/promises';
import path from 'path';

import type { EnhancedConfig } from '../config';

import { getPackages, getPackageEntryPoints } from './get-packages';
import { promiseMap } from './promise-map';

const exportDefaultRegex = /^export default/m;

const hasDefaultExport = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return exportDefaultRegex.test(fileContents);
};

export const generateDevDeclarationFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints({
      packageRoot: pkg.root,
    });

    const declarationFiles = await promiseMap(
      entryPaths.subEntries,
      async (entryPath) => {
        const entryName = path.basename(entryPath, '.ts');

        const declarationLines = [
          `export * from "../src/entries/${entryName}";`,
        ];

        if (await hasDefaultExport(path.join(pkg.root, entryPath))) {
          declarationLines.push(
            `export { default } from "../src/entries/${entryName}";`,
          );
        }

        return {
          dirPath: path.join(pkg.root, entryName),
          fileContents: declarationLines.join('\n'),
        };
      },
    );

    if (entryPaths.defaultEntry) {
      const declarationLines = ['export * from "../src/index";'];

      if (
        await hasDefaultExport(path.join(pkg.root, entryPaths.defaultEntry))
      ) {
        declarationLines.push('export { default } from "../src/index";');
      }

      declarationFiles.push({
        dirPath: path.join(pkg.root, 'dist'),
        fileContents: declarationLines.join('\n'),
      });
    }

    await promiseMap(declarationFiles, async (declarationFile) => {
      const fileName = path.join(declarationFile.dirPath, 'index.d.ts');
      await fs.mkdir(declarationFile.dirPath, { recursive: true });
      return fs.writeFile(fileName, declarationFile.fileContents, 'utf-8');
    });
  }
};
