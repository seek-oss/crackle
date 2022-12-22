import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  // clean: false,
  entries: [
    'src/index',
    'src/entries/build',
    'src/entries/clean',
    'src/entries/dev',
    'src/entries/fix',
    'src/entries/logger',
    'src/entries/package',
    'src/entries/resolve-config',
    'src/entries/route-data',
    'src/entries/serve',
    'src/entries/start',
  ],
  declaration: true,
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
