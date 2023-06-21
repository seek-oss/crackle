import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import type { EnhancedConfig } from '../config';
import { externals } from '../plugins/rollup/externals';
import type { PackageEntryPoint } from '../types';
import { commonOutputOptions } from '../vite-config';

export const createDtsBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
) => {
  const bundle = await rollup({
    input: entries.map((entry) => entry.entryPath),
    plugins: [
      // patching imports is not needed for dts, as TypeScript can handle it (for now)
      externals(config, 'cjs'),
      dts({
        respectExternal: true,
        compilerOptions: config.dtsOptions as any,
      }),
    ],
    onLog(level, log, defaultHandler) {
      if (log.code === 'OPTIMIZE_CHUNK_STATUS') return false;
      if (log.code === 'EMPTY_BUNDLE') return false;
      defaultHandler(level, log);
    },
    preserveEntrySignatures: 'strict',
  });

  await bundle.write({
    ...commonOutputOptions(config, entries, 'dts'),
    exports: 'named',
    format: 'esm',
    experimentalMinChunkSize: Infinity,
  });

  await bundle.close();
};
