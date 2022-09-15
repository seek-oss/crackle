import path from 'path';

import rollupExternals from 'rollup-plugin-node-externals';

export const externals = (packageRoot: string) =>
  rollupExternals({
    deps: true,
    devDeps: false,
    packagePath: path.resolve(packageRoot, 'package.json'),
  });
