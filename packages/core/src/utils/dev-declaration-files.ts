import fs from 'fs/promises';
import path from 'path';

import type { EnhancedConfig } from '../config';

import { basename } from './basename';
import { getPackages, getPackageEntryPoints } from './get-packages';
import { promiseMap } from './promise-map';
import { writeFile } from './write-file';

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
      entryPaths,
      async ({ entryPath, isDefaultEntry }) => {
        const entryName = basename(entryPath);

        const declarationLines = [
          isDefaultEntry
            ? 'export * from "../src/index";'
            : `export * from "../src/entries/${entryName}";`,
        ];

        if (await hasDefaultExport(path.join(pkg.root, entryPath))) {
          declarationLines.push(
            isDefaultEntry
              ? 'export { default } from "../src/index";'
              : `export { default } from "../src/entries/${entryName}";`,
          );
        }

        return {
          dirPath: path.join(pkg.root, isDefaultEntry ? 'dist' : entryName),
          fileContents: declarationLines.join('\n'),
        };
      },
    );

    await promiseMap(declarationFiles, async (declarationFile) =>
      writeFile({
        dir: declarationFile.dirPath,
        fileName: 'index.cjs.d.ts',
        contents: declarationFile.fileContents,
      }),
    );
  }
};
