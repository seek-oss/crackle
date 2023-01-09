import fs from 'fs/promises';
import path from 'path';

import { parse } from 'es-module-lexer';

import type { EnhancedConfig } from '../config';

import {
  createEntryPackageJsons,
  getPackageEntryPoints,
  getPackages,
} from './entry-points';
import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

const hasDefaultExport = async (filePath: string) => {
  const fileContents = await fs.readFile(filePath, 'utf-8');
  // `parse` returns a promise if not initialised
  // https://github.com/guybedford/es-module-lexer/blob/1.1.0/src/lexer.ts#L156-L159
  const [, exports] = await parse(fileContents, filePath);
  return exports.some((specifier) => specifier.n === 'default');
};

export const generateDevDeclarationFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints(pkg.root);

    await promiseMap(
      entryPaths,
      async ({ entryPath, outputDir, getOutputPath }) => {
        const outputPath = getOutputPath('dts');
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
      },
    );

    await createEntryPackageJsons(entryPaths);
  }
};
