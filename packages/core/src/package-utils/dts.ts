import path from 'path';

import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';

import type { EnhancedConfig } from '../config';
import { logger } from '../entries/logger';
import { externals } from '../plugins/rollup/externals';
import type { PackageEntryPoint } from '../types';
import { copyFile, extensionForFormat } from '../utils/files';
import { promiseMap } from '../utils/promise-map';
import { commonOutputOptions } from '../vite-config';

export const createDtsBundle = async (
  config: EnhancedConfig,
  entries: PackageEntryPoint[],
) => {
  const localLogger = logger.withDefaults({ tag: 'dts' });

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
        compilerOptions: config.dts.options as any,
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
      localLogger.debug(`onLog ${log.code}: ${log.message}`);
      defaultHandler(level, log);
    },
    preserveEntrySignatures: 'strict',
  });

  const result = await bundle.write({
    ...commonOutputOptions(config, entries, 'dts'),
    exports: 'named',
    format: 'esm',
    experimentalMinChunkSize: Infinity,
    ...(config.dts.mode === 'preserve'
      ? {
          preserveModules: true,
          entryFileNames: `[name].${extensionForFormat('dts')}`,
        }
      : {}),
  });

  await bundle.close();

  await promiseMap(entries, async (entry) => {
    await copyFile(
      path.join(entry.outputDir, entry.getOutputPath('dts')),
      path.join(entry.outputDir, entry.getOutputPath('dtsm')),
    );
  });

  return result;
};
