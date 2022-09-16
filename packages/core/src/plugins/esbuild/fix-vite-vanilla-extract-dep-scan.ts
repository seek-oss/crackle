import { dirname } from 'path';

import type { Plugin } from 'esbuild';
import resolveFrom from 'resolve-from';

/**
 * Forces all vanilla files (e.g. .css.ts/.js) to be excluded from dep optimisation.
 * This fixes the chunk import ordering problem, which was causing CSS to be in the wrong
 * order in development.
 *
 * https://github.com/evanw/esbuild/issues/465
 */

export const fixViteVanillaExtractDepScanPlugin = (): Plugin => ({
  name: 'crackle:fix-vite-vanilla-extract-dep-scan',
  setup(build) {
    build.onResolve({ filter: /\.css(\.[cm]?js)$/ }, ({ importer, path }) => ({
      path: resolveFrom(dirname(importer), path),
      external: true,
    }));
  },
});
