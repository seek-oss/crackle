import path from 'path';

import type { EnhancedConfig } from '../config';

import {
  createEntryPackageJsons,
  getPackageEntryPoints,
  getPackages,
  hasDefaultExport,
} from './entry-points';
import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

export const generateDevDeclarationFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints(pkg.root);

    await promiseMap(
      entryPaths,
      async ({ entryPath, outputDir, getOutputPath }) => {
        const outputPath = getOutputPath('dts', { from: config.root });
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
