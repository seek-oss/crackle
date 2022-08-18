import type { PackageEntryPoint } from '../types';

import { promiseMap } from './promise-map';
import { writePackageJson } from './write-file';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const packageContents = JSON.stringify(
    {
      main: 'index.cjs.js',
      module: 'index.esm.js',
    },
    null,
    2,
  );

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writePackageJson({
        dir: entryPoint.outputDir,
        contents: packageContents,
      });
    }
  });
};
