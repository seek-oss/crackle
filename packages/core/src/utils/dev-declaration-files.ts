import fs from 'fs/promises';
import path from 'path';

import type { EnhancedConfig } from '../config';

import { getPackages, getPackageEntryPoints } from './get-packages';

const hasDefaultExport = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return new RegExp('^export default', 'm').test(fileContents);
};

export const generateDevDeclarationFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints({
      packageRoot: pkg.root,
    });

    const declarationFiles = await Promise.all(
      entryPaths.subEntries.map(async (entryPath) => {
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
      }),
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

    await Promise.all(
      declarationFiles.map(async (declarationFile) => {
        const fileName = path.join(declarationFile.dirPath, 'index.d.ts');
        await fs.mkdir(declarationFile.dirPath, { recursive: true });
        return fs.writeFile(fileName, declarationFile.fileContents, 'utf-8');
      }),
    );
  }
};
