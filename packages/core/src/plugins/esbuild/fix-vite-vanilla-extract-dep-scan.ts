import { dirname } from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import type { Plugin } from 'esbuild';

import { resolveFrom } from '../../utils/resolve-from';

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
    build.onResolve({ filter: cssFileFilter }, async ({ importer, path }) => ({
      path: await resolveFrom(dirname(importer), path),
      external: true,
    }));
  },
});
