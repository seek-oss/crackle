import path from 'path';

import type { Plugin } from 'rollup';

import { writeFile } from '../../../utils/write-file';

export function packageEntries(): Plugin {
  return {
    name: 'package-entries',
    async generateBundle(opts, bundle) {
      if (opts.format === 'es') {
        return;
      }

      if (!opts.dir) {
        throw new Error(`opts.dir is unexpectedly undefined for ${opts.name}`);
      }

      for (const chunk of Object.values(bundle)) {
        if (
          chunk.type === 'chunk' &&
          chunk.facadeModuleId?.includes('src/entries')
        ) {
          const packageContents = JSON.stringify(
            {
              main: 'index.cjs.js',
              module: 'index.esm.js',
            },
            null,
            2,
          );

          await writeFile({
            dir: path.join(opts.dir, path.dirname(chunk.fileName)),
            fileName: 'package.json',
            contents: packageContents,
          });
        }
      }
    },
  };
}
