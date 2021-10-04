import { dirname } from 'path';

import type { Plugin } from 'esbuild';
import resolveFrom from 'resolve-from';

export const fixViteVanillaExtractDepScanPlugin = (): Plugin => ({
  name: 'crackle:fix-vite-vanilla-extract-dep-scan',
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, ({ importer, path }) => ({
      path: resolveFrom(dirname(importer), `${path}.ts`),
    }));
  },
});
