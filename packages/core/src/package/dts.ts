import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import type { EnhancedConfig } from '../config';
import { externals } from '../plugins/rollup';
import type { PackageEntryPoint } from '../types';

export const createDtsBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const bundle = await rollup({
    input: entries.map(({ entryPath }) => entryPath),
    plugins: [
      externals(config.root),
      dts({
        respectExternal: true,
        compilerOptions: config.dtsOptions as any,
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
