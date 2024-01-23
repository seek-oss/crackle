import assert from 'assert';

import type { OutputOptions } from 'rollup';
import type { UserConfig } from 'vite';

import type { EnhancedConfig } from './config';
import { distDir } from './constants';
import type { Format, PackageEntryPoint } from './types';
import { extensionForFormat } from './utils/files';

export const commonViteConfig = (config: EnhancedConfig) =>
  ({
    root: config.root,
    resolve: {
      alias: {
        __THE_ENTRY: config.web.appShell,
      },
    },
    define: {
      'process.env.NODE_DEBUG': JSON.stringify(false),
      global: JSON.stringify({}),
    },
  } satisfies UserConfig);

export const commonOutputOptions = (
  config: EnhancedConfig,
  entryPoints: PackageEntryPoint[],
  format: Format = 'esm',
) => {
  const extension = extensionForFormat(format);

  return {
    dir: `${config.root}/${distDir}`,
    hoistTransitiveImports: false,
    minifyInternalExports: false,
    entryFileNames(chunkInfo) {
      const entry = entryPoints.find(
        ({ entryPath }) => chunkInfo.facadeModuleId === entryPath,
      );
      assert(entry, `entry not found for ${chunkInfo.facadeModuleId}`);

      return entry.getOutputPath(format);
    },
    chunkFileNames: ({ name }) =>
      name.endsWith(extension) ? name : `${name}.chunk.${extension}`,
  } satisfies OutputOptions;
};
