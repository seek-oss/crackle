import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import { externals } from '../plugins/rollup';
import type { PackageEntryPoint } from '../types';

export const createDtsBundle = async (
  packageRoot: string,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const bundle = await rollup({
    input: entries.map(({ entryPath }) => entryPath),
    plugins: [
      externals(packageRoot),
      dts({
        respectExternal: true,
      }),
    ],
  });

  await bundle.write({
    ...outputOptions,
    exports: 'named',
    format: 'esm',
  });

  await bundle.close();
};
