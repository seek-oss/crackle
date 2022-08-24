import type { PackageJson } from 'type-fest';

import type { PackageEntryPoint } from '../types';

import { promiseMap } from './promise-map';
import { writePackageJson } from './write-file';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const packageContents: PackageJson = {
    main: 'index.cjs.js',
    module: 'index.esm.js',
  };

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writePackageJson({
        dir: entryPoint.outputDir,
        contents: packageContents,
      });
    }
  });
};
