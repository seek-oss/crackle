import fs from 'fs/promises';
import path from 'path';

import type { EnhancedConfig } from '../config';

import {
  createEntryPackageJsons,
  getPackageEntryPoints,
  getPackages,
} from './entry-points';
import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

const exportDefaultRegex = /^export default/m;

const hasDefaultExport = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  return exportDefaultRegex.test(fileContents);
};

export const generateDevDeclarationFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints(pkg.root);

    await promiseMap(entryPaths, async ({ entryPath, getOutputPath }) => {
      const outputPath = getOutputPath('dts');
      const outputDir = path.join(pkg.root, path.dirname(outputPath));
      const relativePath = path.relative(
        outputDir,
        entryPath.replace(path.extname(entryPath), ''),
      );

      const declarationLines = [`export * from "${relativePath}";`];

      if (await hasDefaultExport(entryPath)) {
        declarationLines.push(`export { default } from "${relativePath}";`);
      }

      await writeIfRequired({
        dir: outputDir,
        fileName: path.basename(outputPath),
        contents: declarationLines.join('\n'),
      });
    });

    await createEntryPackageJsons(entryPaths);
  }
};
