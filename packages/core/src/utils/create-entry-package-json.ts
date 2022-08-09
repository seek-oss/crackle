import type { PackageEntryPoint } from '../types';

import { promiseMap } from './promise-map';
import { writeIfRequired } from './write-file';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const packageContents = JSON.stringify(
    {
      main: 'index.cjs',
      module: 'index.mjs',
    },
    null,
    2,
  );

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writeIfRequired({
        dir: entryPoint.outputDir,
        fileName: 'package.json',
        contents: packageContents,
      });
    }
  });
};
