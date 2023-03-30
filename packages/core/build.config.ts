import glob from 'fast-glob';
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: glob
    .sync(['src/index.ts', 'src/entries/**/*.ts'])
    .map((entry) => entry.replace('.ts', '')),
  declaration: true,
  failOnWarn: false,
  rollup: {
    cjsBridge: true,
    emitCJS: true,
    esbuild: {
      loaders: {
        '.jsx': 'jsx',
        '.tsx': 'tsx',
      },
    },
  },
});
