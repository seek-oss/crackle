import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import type { EnhancedConfig } from '../config';
import { logger } from '../entries/logger';
import { externals } from '../plugins/rollup/externals';
import type { PackageEntryPoint } from '../types';
import { extensionForFormat } from '../utils/files';
import { commonOutputOptions } from '../vite-config';

export const createDtsBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
) => {
  const bundle = await rollup({
    input: entries.map((entry) => entry.entryPath),
    plugins: [
      externals(
        config,
        'cjs', // patching imports is not needed for dts, as TypeScript can handle it (for now)
        /\.css$/, // ignore CSS files
      ),
      dts({
        respectExternal: true,
        compilerOptions: config.dtsOptions as any,
      }),
    ],
    onLog(level, log, defaultHandler) {
      switch (log.code) {
        case 'OPTIMIZE_CHUNK_STATUS':
        case 'EMPTY_BUNDLE':
          return false;
        case 'UNUSED_EXTERNAL_IMPORT':
          if (
            log.message.startsWith(
              '"RefAttributes" is imported from external module "react" but never used in',
            )
          )
            return false;
      }
      logger.debug(`onLog ${log.code}: ${log.message}`);
      defaultHandler(level, log);
    },
    preserveEntrySignatures: 'strict',
  });

  await bundle.write({
    ...commonOutputOptions(config, entries, 'dts'),
    exports: 'named',
    format: 'esm',
    experimentalMinChunkSize: Infinity,
    ...(config.dtsMode === 'preserve'
      ? {
          preserveModules: true,
          entryFileNames: `[name].${extensionForFormat('dts')}`,
        }
      : {}),
  });

  await bundle.close();
};
