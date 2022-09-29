import path from 'path';

import type { Format, PackageEntryPoint } from '../types';

import { writePackageJson } from './files';
import { promiseMap } from './promise-map';

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const relativeOutputPath = (entryPoint: PackageEntryPoint, format: Format) =>
    path.relative(entryPoint.outputDir, entryPoint.getOutputPath(format));

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      await writePackageJson({
        dir: entryPoint.outputDir,
        contents: {
          main: relativeOutputPath(entryPoint, 'cjs'),
          module: relativeOutputPath(entryPoint, 'esm'),
          types: relativeOutputPath(entryPoint, 'dts'),
        },
      });
    }
  });
};
