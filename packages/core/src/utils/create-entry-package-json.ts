import type { PackageEntryPoint } from '../types';

import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const packageContents = JSON.stringify(
    {
      main: 'dist/index.cjs',
      module: 'dist/index.mjs',
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
