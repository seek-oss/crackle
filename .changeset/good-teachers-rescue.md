---
'@crackle/core': minor
---

Overhaul configuration options, grouping them by feature or command.

The default config now looks like this:

```js
const defaultConfig = {
  root: process.cwd(),
  cjs: {},
  esm: {
    reconcileDependencies: {},
  },
  dts: {
    mode: 'bundle',
    options: {
      incremental: false,
      noEmitOnError: false,
    },
  },
  dev: {
    webpack: false,
  },
  package: {
    clean: true,
    fix: false,
  },
  web: {
    appShell: 'src/App.tsx',
    pageRoots: ['src'],
    port: 5000,
    publicPath: '/',
  },
};
```
