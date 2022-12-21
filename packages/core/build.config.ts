import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  // entries are inferred from package.json
  // entries: [
  //   'src/index',
  //   'src/build',
  //   'src/clean',
  //   'src/dev',
  //   'src/fix',
  //   'src/logger',
  //   'src/package',
  //   'src/resolve-config',
  //   'src/route-data',
  //   'src/serve',
  //   'src/start',
  // ],
  declaration: true,
  rollup: {
    cjsBridge: true,
    emitCJS: true,
    esbuild: {
      loaders: {
        '.tsx': 'tsx',
      },
    },
  },
  clean: false,
});
