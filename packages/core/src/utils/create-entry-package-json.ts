import path from 'path';

import type { PackageEntryPoint } from '../types';

import { writePackageJson } from './files';
import { promiseMap } from './promise-map';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writePackageJson({
        dir: entryPoint.outputDir,
        contents: {
          main: path.relative(
            entryPoint.outputDir,
            entryPoint.getOutputPath('cjs'),
          ),
          module: path.relative(
            entryPoint.outputDir,
            entryPoint.getOutputPath('esm'),
          ),
        },
      });
    }
  });
};
