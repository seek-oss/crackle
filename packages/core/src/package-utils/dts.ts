import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import type { EnhancedConfig } from '../config';
import { externals } from '../plugins/rollup';
import type { PackageEntryPoint } from '../types';
import { promiseMap } from '../utils/promise-map';

export const createDtsBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  // We're bundling each entry separately to avoid chunking
  await promiseMap(entries, async (entry) => {
    const bundle = await rollup({
      input: entry.entryPath,
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
      minifyInternalExports: false,
    });

    await bundle.close();
  });
};
