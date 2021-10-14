import { getPackageEntryPoints } from './get-packages';
import { promiseMap } from './promise-map';
import { writeFile } from './write-file';

export const createEntryPackageJsons = async (packageRoot: string) => {
  const entryPoints = await getPackageEntryPoints({
    packageRoot,
  });

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
      await writeFile({
        dir: entryPoint.outputDir,
        fileName: 'package.json',
        contents: packageContents,
      });
    }
  });
};
