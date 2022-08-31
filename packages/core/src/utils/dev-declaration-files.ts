import fs from 'fs/promises';

import type { EnhancedConfig } from '../config';

import { basename } from './basename';
import { createEntryPackageJsons } from './create-entry-package-json';
import { getPackages, getPackageEntryPoints } from './get-packages';
import { promiseMap } from './promise-map';
import { writeIfRequired } from './files';

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

    await promiseMap(
      entryPaths,
      async ({ entryPath, isDefaultEntry, outputDir }) => {
        const entryName = basename(entryPath);

        const declarationLines = [
          isDefaultEntry
            ? 'export * from "../src/index";'
            : `export * from "../src/entries/${entryName}";`,
        ];

        if (await hasDefaultExport(entryPath)) {
          declarationLines.push(
            isDefaultEntry
              ? 'export { default } from "../src/index";'
              : `export { default } from "../src/entries/${entryName}";`,
          );
        }

        await writeIfRequired({
          dir: outputDir,
          fileName: 'index.cjs.d.ts',
          contents: declarationLines.join('\n'),
        });
      },
    );

    await createEntryPackageJsons(entryPaths);
  }
};
