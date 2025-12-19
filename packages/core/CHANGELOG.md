# @crackle/core

## 0.34.4

### Patch Changes

- [#286](https://github.com/seek-oss/crackle/pull/286) [`df3cfc3`](https://github.com/seek-oss/crackle/commit/df3cfc33639c408f07244758b0a422715cf9b759) Thanks [@michaeltaranto](https://github.com/michaeltaranto)! - Fix compatibility with Node 24

  Wrap async operations in `context.run()` to ensure `AsyncLocalStorage` context propagates correctly across async boundaries.

## 0.34.3

### Patch Changes

- [#273](https://github.com/seek-oss/crackle/pull/273) [`f6fbbff`](https://github.com/seek-oss/crackle/commit/f6fbbffd1571a28c77d9a653a4c301bd0817b39c) Thanks [@renovate](https://github.com/apps/renovate)! - Update `esbuild` to `^0.27.0`

## 0.34.2

### Patch Changes

- [#232](https://github.com/seek-oss/crackle/pull/232) [`dff6fc5`](https://github.com/seek-oss/crackle/commit/dff6fc5478cb30aaaa2aaf61058e54aa166c920d) Thanks [@renovate](https://github.com/apps/renovate)! - Update `c12` dependency to `^3.0.0`

- [#259](https://github.com/seek-oss/crackle/pull/259) [`6013332`](https://github.com/seek-oss/crackle/commit/6013332597887816488f622a08dc34d3e2d893ea) Thanks [@renovate](https://github.com/apps/renovate)! - `deps`: Update `vite` from `^6.0.0` to `^7.0.0`

- [#255](https://github.com/seek-oss/crackle/pull/255) [`d7eac08`](https://github.com/seek-oss/crackle/commit/d7eac08947f09336366d171db9eedfbc40416300) Thanks [@renovate](https://github.com/apps/renovate)! - `deps`: Update `@vitejs/plugin-react-swc` from `^3.8.0` to `^4.0.0`

## 0.34.1

### Patch Changes

- [#249](https://github.com/seek-oss/crackle/pull/249) [`05815c1`](https://github.com/seek-oss/crackle/commit/05815c1c3669c77c14c618fe68639656de73d2de) Thanks [@renovate](https://github.com/apps/renovate)! - Fix compatibility issue with `rollup-plugin-node-externals>=8.1.0`

- Updated dependencies [[`025c4b7`](https://github.com/seek-oss/crackle/commit/025c4b72b9f8c086ebf297b4fbc6ee9c8af54584)]:
  - @crackle/router@0.6.0

## 0.34.0

### Minor Changes

- [#217](https://github.com/seek-oss/crackle/pull/217) [`4738b24`](https://github.com/seek-oss/crackle/commit/4738b244629bcac3b064288f46cd88d5f6113015) Thanks [@renovate](https://github.com/apps/renovate)! - `package`: CSS entrypoints are now named after the package

  BREAKING CHANGE:

  `vite` used to bundle CSS into a `style.css` file by default. `crackle` would then generate a `./dist/style.css` entrypoint for that file. Since `vite@6`, CSS is now bunled into a file named after the package. This means that the entrypoint for bundled CSS files is now named after the package. For example, if your package is named `my-package`, the entrypoint for the CSS file will be `./dist/my-package.css`.

  Consumers may need to remove the old `./dist/style.css` entrypoint from their `package.json` files. Crackle will automatically add the new entrypoint for you.

- [#226](https://github.com/seek-oss/crackle/pull/226) [`c369023`](https://github.com/seek-oss/crackle/commit/c369023159db40d2e470a01ec51a8789d5a510c3) Thanks [@askoufis](https://github.com/askoufis)! - Update minimum node version to `20.18.3`

  BREAKING CHANGE: Drop support for node versions below `20.18.3`

### Patch Changes

- [#227](https://github.com/seek-oss/crackle/pull/227) [`a1b8463`](https://github.com/seek-oss/crackle/commit/a1b8463e53a9b53ac8836f2b03cd612b1449d675) Thanks [@askoufis](https://github.com/askoufis)! - Replace `builtin-modules` dependency with native `builtinModules` from `node:module`

- [#217](https://github.com/seek-oss/crackle/pull/217) [`4738b24`](https://github.com/seek-oss/crackle/commit/4738b244629bcac3b064288f46cd88d5f6113015) Thanks [@renovate](https://github.com/apps/renovate)! - Update `vite` dependency to `^6.0.0`. Update `esbuild` dependency to `^0.25.0`.

- [#227](https://github.com/seek-oss/crackle/pull/227) [`a1b8463`](https://github.com/seek-oss/crackle/commit/a1b8463e53a9b53ac8836f2b03cd612b1449d675) Thanks [@askoufis](https://github.com/askoufis)! - Update various dependencies

- [#227](https://github.com/seek-oss/crackle/pull/227) [`a1b8463`](https://github.com/seek-oss/crackle/commit/a1b8463e53a9b53ac8836f2b03cd612b1449d675) Thanks [@askoufis](https://github.com/askoufis)! - Remove polyfill for `structuredClone`

- [#213](https://github.com/seek-oss/crackle/pull/213) [`f8cfe89`](https://github.com/seek-oss/crackle/commit/f8cfe899dcecbb92fd3c5d248715e7a2834a1411) Thanks [@askoufis](https://github.com/askoufis)! - Only render loader during development

- [#208](https://github.com/seek-oss/crackle/pull/208) [`ae4bf65`](https://github.com/seek-oss/crackle/commit/ae4bf655549df4dad3730a768d793931cff97ae9) Thanks [@renovate](https://github.com/apps/renovate)! - Update `sort-package-json` dependency

- [#224](https://github.com/seek-oss/crackle/pull/224) [`fce462d`](https://github.com/seek-oss/crackle/commit/fce462daa2d21d2d76ace5a98d91572bb5bb8048) Thanks [@renovate](https://github.com/apps/renovate)! - Update Vanilla Extract dependencies:
  - `@vanilla-extract/css@^1.17.1`
  - `@vanilla-extract/integration@^8.0.0`
  - `@vanilla-extract/vite-plugin@^5.0.0`

- Updated dependencies [[`c369023`](https://github.com/seek-oss/crackle/commit/c369023159db40d2e470a01ec51a8789d5a510c3)]:
  - @crackle/babel-plugin-remove-exports@0.4.0
  - @crackle/router@0.5.0

## 0.33.4

### Patch Changes

- [#200](https://github.com/seek-oss/crackle/pull/200) [`9993725`](https://github.com/seek-oss/crackle/commit/9993725ca4af0d51ba1665864552581ffb85a734) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 0.33.3

### Patch Changes

- [#197](https://github.com/seek-oss/crackle/pull/197) [`be1da6c`](https://github.com/seek-oss/crackle/commit/be1da6cb880739c855648fcc9a027874459edc40) Thanks [@askoufis](https://github.com/askoufis)! - Fix a bug caused by newer versions of `rollup-plugin-node-externals`

  We were assuming that `rollup-plugin-node-externals` hooks would always be functions, but they can be objects too. We now check for this at runtime.

## 0.33.2

### Patch Changes

- [#176](https://github.com/seek-oss/crackle/pull/176) [`4c60648`](https://github.com/seek-oss/crackle/commit/4c60648a3f7779a0a224bd458e476256c839c48e) Thanks [@renovate](https://github.com/apps/renovate)! - Update `rollup-plugin-node-externals` to v7

## 0.33.1

### Patch Changes

- [#184](https://github.com/seek-oss/crackle/pull/184) [`e00526c`](https://github.com/seek-oss/crackle/commit/e00526c0ed1d96aa9d49bcb4fd0623122140b2c8) Thanks [@mrm007](https://github.com/mrm007)! - Correctly generate import paths in stub entry points for deeply nested entries

## 0.33.0

### Minor Changes

- [#168](https://github.com/seek-oss/crackle/pull/168) [`3e954b6`](https://github.com/seek-oss/crackle/commit/3e954b6cbc1b55e5be4510820deeff8415b2f47c) Thanks [@mrm007](https://github.com/mrm007)! - Add a `dev.shim` config option with choices `none` and `require` (default)

  The `dev.webpack` config option has been removed, replaced with `dev.shim: 'none'`

- [#167](https://github.com/seek-oss/crackle/pull/167) [`82675c6`](https://github.com/seek-oss/crackle/commit/82675c6862fd0f6afa1e62254b6216aec7931451) Thanks [@mrm007](https://github.com/mrm007)! - Add a `package.mode` config option with choices `preserve` and `bundle` (default)

  This controls how Crackle generates output files:
  - `bundle` rolls up output files into as few chunks as possible
  - `preserve` creates separate files for all modules using the original module names as file names

### Patch Changes

- [#170](https://github.com/seek-oss/crackle/pull/170) [`750e012`](https://github.com/seek-oss/crackle/commit/750e012d38928ed2a13c273b110a471aef8237ac) Thanks [@mrm007](https://github.com/mrm007)! - Update Vite plugin for Vanilla Extract

## 0.32.1

### Patch Changes

- [#169](https://github.com/seek-oss/crackle/pull/169) [`6125c6b`](https://github.com/seek-oss/crackle/commit/6125c6b60b72b4311ec932463c1cebb18c563f7b) Thanks [@mrm007](https://github.com/mrm007)! - `crackle fix`: don't overwrite `package.json` if not needed

## 0.32.0

### Minor Changes

- [#162](https://github.com/seek-oss/crackle/pull/162) [`5a559cc`](https://github.com/seek-oss/crackle/commit/5a559cc8323f01fdd787db75349bc46070442b33) Thanks [@mrm007](https://github.com/mrm007)! - Improved logging using [🐨 Consola](https://github.com/unjs/consola)

- [#164](https://github.com/seek-oss/crackle/pull/164) [`e5c5b67`](https://github.com/seek-oss/crackle/commit/e5c5b67e6436c899e697a1569c01850ec3f76eae) Thanks [@mrm007](https://github.com/mrm007)! - Overhaul configuration options, grouping them by feature or command.

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

- [#164](https://github.com/seek-oss/crackle/pull/164) [`e5c5b67`](https://github.com/seek-oss/crackle/commit/e5c5b67e6436c899e697a1569c01850ec3f76eae) Thanks [@mrm007](https://github.com/mrm007)! - Export `UserConfig` and `ResolvedConfig` types

  Remove `CrackleConfig` export type

### Patch Changes

- [#162](https://github.com/seek-oss/crackle/pull/162) [`5a559cc`](https://github.com/seek-oss/crackle/commit/5a559cc8323f01fdd787db75349bc46070442b33) Thanks [@mrm007](https://github.com/mrm007)! - Lazy load Vite to avoid the CJS warning

- Updated dependencies [[`d70335d`](https://github.com/seek-oss/crackle/commit/d70335d1228dd9480aea5953260d322a832da639)]:
  - @crackle/router@0.4.1

## 0.31.0

### Minor Changes

- [#156](https://github.com/seek-oss/crackle/pull/156) [`4633a23`](https://github.com/seek-oss/crackle/commit/4633a230c74a7079e7f9cf581993ac54fdccce5c) Thanks [@mrm007](https://github.com/mrm007)! - Now generating types correctly according to https://arethetypeswrong.github.io

### Patch Changes

- Updated dependencies [[`4633a23`](https://github.com/seek-oss/crackle/commit/4633a230c74a7079e7f9cf581993ac54fdccce5c)]:
  - @crackle/babel-plugin-remove-exports@0.3.0
  - @crackle/router@0.4.0

## 0.30.0

### Minor Changes

- [#138](https://github.com/seek-oss/crackle/pull/138) [`1cbd099`](https://github.com/seek-oss/crackle/commit/1cbd0990e15ec4ae8765b67390e105cd50b1f96c) Thanks [@mrm007](https://github.com/mrm007)! - Require TypeScript >= 5.2.2 as a peer dependency

## 0.29.0

### Minor Changes

- [#136](https://github.com/seek-oss/crackle/pull/136) [`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4) Thanks [@mrm007](https://github.com/mrm007)! - Don't hoist transitive imports in the output bundle

- [#136](https://github.com/seek-oss/crackle/pull/136) [`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4) Thanks [@mrm007](https://github.com/mrm007)! - Prevent modules that import (or are imported by) Vanilla Extract styles from being merged in the output bundle

- [#136](https://github.com/seek-oss/crackle/pull/136) [`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade to Vite 5 and update dependencies

- [#134](https://github.com/seek-oss/crackle/pull/134) [`3f7e51a`](https://github.com/seek-oss/crackle/commit/3f7e51a289dc2880e4884f9dc685a9943250e1ec) Thanks [@mrm007](https://github.com/mrm007)! - Use `tsx` for dev entry points

## 0.28.0

### Minor Changes

- [#128](https://github.com/seek-oss/crackle/pull/128) [`433a30f`](https://github.com/seek-oss/crackle/commit/433a30f5ac81a107083b8d1c24ab9999f6f33ea4) Thanks [@mrm007](https://github.com/mrm007)! - Crackle now supports importing external CSS.

  This is useful when consuming packages which come with their own CSS, such as [Pure React Carousel](https://github.com/express-labs/pure-react-carousel).

  External CSS can be imported with a side-effect `import`, same as how you would import a JavaScript or TypeScript module:

  ```tsx
  // src/components/MyComponent.tsx
  import 'package-with-styles/dist/styles.css';

  import { Component } from 'package-with-styles';

  export const MyComponent = (props) => {
    <Component {...props} />;
  };
  ```

  The side-effect import will be preserved in the output bundles.

  External CSS can also be imported with a CSS `@import` rule:

  ```css
  /* src/components/MyComponent/third-party.css */
  @import 'package-with-styles/dist/styles.css';
  ```

  ```tsx
  // src/components/MyComponent.tsx
  import './third-party.css';

  export const MyComponent = () => {
    // ...
  };
  ```

  When importing with a CSS `@import` rule, Crackle will bundle all external CSS into one file and output it to the `dist` directory.
  Package exports will also be updated so consumers can import the bundled CSS.

- [#127](https://github.com/seek-oss/crackle/pull/127) [`f52495d`](https://github.com/seek-oss/crackle/commit/f52495dfaf603ba8f4dd87fc516b5ddb5ad07bd6) Thanks [@mrm007](https://github.com/mrm007)! - Update dependencies

### Patch Changes

- [#129](https://github.com/seek-oss/crackle/pull/129) [`2b57d2f`](https://github.com/seek-oss/crackle/commit/2b57d2f1cb84a2452c8a33c46dcb42b58becb095) Thanks [@mrm007](https://github.com/mrm007)! - Correctly resolve module exports when running `crackle dev`

  This fixes an issue where `crackle dev` would not resolve an entry's exports when the entry re-exported from another module using `export * from ...` syntax.

## 0.27.1

### Patch Changes

- [#125](https://github.com/seek-oss/crackle/pull/125) [`7903ab9`](https://github.com/seek-oss/crackle/commit/7903ab901a53494b162f2c5e9d7b176e36298351) Thanks [@mrm007](https://github.com/mrm007)! - Ensure we are not attempting to include external modules in manual chunks

## 0.27.0

### Minor Changes

- [#119](https://github.com/seek-oss/crackle/pull/119) [`ed8cdc9`](https://github.com/seek-oss/crackle/commit/ed8cdc9c4d0cf2d6e3240cfbb8312d0de3747416) Thanks [@mrm007](https://github.com/mrm007)! - Add a `dtsMode` config option for outputting `.d.ts` files (`bundle` or `declaration`)

### Patch Changes

- [#118](https://github.com/seek-oss/crackle/pull/118) [`071c03f`](https://github.com/seek-oss/crackle/commit/071c03f5da93f4d5658d7d80bdc862582698657e) Thanks [@mrm007](https://github.com/mrm007)! - Export a `defineConfig` function to simplify typing the config object

- [#120](https://github.com/seek-oss/crackle/pull/120) [`c131b93`](https://github.com/seek-oss/crackle/commit/c131b93eaaf68f378ae79a59befb00af8af8b6e4) Thanks [@mrm007](https://github.com/mrm007)! - Don't crash on unresolvable imports

## 0.26.0

### Minor Changes

- [#113](https://github.com/seek-oss/crackle/pull/113) [`d34eb26`](https://github.com/seek-oss/crackle/commit/d34eb2693d3ca6669568aafa32f7d5d098309d31) Thanks [@mrm007](https://github.com/mrm007)! - Replace `@vitejs/plugin-react` with the [appropriate esbuild options](https://esbuild.github.io/api/#jsx) for `crackle package`

  Replace `@vitejs/plugin-react` with `@vitejs/plugin-react-swc` for `crackle build` and `crackle start`

- [#113](https://github.com/seek-oss/crackle/pull/113) [`d34eb26`](https://github.com/seek-oss/crackle/commit/d34eb2693d3ca6669568aafa32f7d5d098309d31) Thanks [@mrm007](https://github.com/mrm007)! - Require minimum TypeScript version 5.0.4

### Patch Changes

- [#116](https://github.com/seek-oss/crackle/pull/116) [`74e8653`](https://github.com/seek-oss/crackle/commit/74e86539b8dd6303f9af4c94a6f32db312786fe4) Thanks [@mrm007](https://github.com/mrm007)! - Update Rollup deps

- [#117](https://github.com/seek-oss/crackle/pull/117) [`9956efa`](https://github.com/seek-oss/crackle/commit/9956efaa51ed1ab1bc7dc7a054818fde81f2be41) Thanks [@mrm007](https://github.com/mrm007)! - Ensure DTS entries have the same exports as their source files

## 0.25.0

### Minor Changes

- [#108](https://github.com/seek-oss/crackle/pull/108) [`e49b68b`](https://github.com/seek-oss/crackle/commit/e49b68b580e2d496efad6cd7f8840a7166f10063) Thanks [@mrm007](https://github.com/mrm007)! - Added a `webpack` config option which generates Webpack-compatible shims when `crackle dev` is run.

### Patch Changes

- [#110](https://github.com/seek-oss/crackle/pull/110) [`24420cd`](https://github.com/seek-oss/crackle/commit/24420cdb278b8d9c8738fbe34f05e0d145fe4273) Thanks [@mrm007](https://github.com/mrm007)! - Update dependencies

- [#108](https://github.com/seek-oss/crackle/pull/108) [`e49b68b`](https://github.com/seek-oss/crackle/commit/e49b68b580e2d496efad6cd7f8840a7166f10063) Thanks [@mrm007](https://github.com/mrm007)! - Fixed an issue with `crackle dev` not generating correct paths in dev entry points

## 0.24.1

### Patch Changes

- [#106](https://github.com/seek-oss/crackle/pull/106) [`5baad79`](https://github.com/seek-oss/crackle/commit/5baad791fa243912141eae481adf980a08e3ac37) Thanks [@mrm007](https://github.com/mrm007)! - Update dependencies

## 0.24.0

### Minor Changes

- [#104](https://github.com/seek-oss/crackle/pull/104) [`c4f5623`](https://github.com/seek-oss/crackle/commit/c4f56238151245aec5042356830f67b7d849d6b4) Thanks [@mrm007](https://github.com/mrm007)! - Handle Vocab translation files

  Crackle now produces an output that is compatible with the Vocab Webpack plugin.
  When packaging, Crackle will ensure that the `translation.json` files are present in the output directory, next to the generated translation files.
  This allows the Vocab plugin to still work with compiled (CJS/ESM) translation files.

## 0.23.2

### Patch Changes

- [#100](https://github.com/seek-oss/crackle/pull/100) [`840d387`](https://github.com/seek-oss/crackle/commit/840d387a769e27e02d7de3708f6b9a62602549ff) Thanks [@mrm007](https://github.com/mrm007)! - Fix side-effects evaluation for packages without a `"sideEffects"` flag

## 0.23.1

### Patch Changes

- [#96](https://github.com/seek-oss/crackle/pull/96) [`d094c8b`](https://github.com/seek-oss/crackle/commit/d094c8bca57eed399f1b724f4f58e15a7c549de3) Thanks [@mrm007](https://github.com/mrm007)! - Don't fail on Vocab translation imports

- [#97](https://github.com/seek-oss/crackle/pull/97) [`f933e67`](https://github.com/seek-oss/crackle/commit/f933e6738cdd0a5bc0bb1847cabba6978d145443) Thanks [@mrm007](https://github.com/mrm007)! - Add back `entries` to NPM package

## 0.23.0

### Minor Changes

- [#91](https://github.com/seek-oss/crackle/pull/91) [`560489a`](https://github.com/seek-oss/crackle/commit/560489afdadda7f8b3985f0639ae55f83815875e) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade to Vite 4.3

### Patch Changes

- [#88](https://github.com/seek-oss/crackle/pull/88) [`6e14926`](https://github.com/seek-oss/crackle/commit/6e149269730ec088452823583fb270d8a889db1c) Thanks [@mrm007](https://github.com/mrm007)! - Remove `dist-render` from `.gitignore`

- [#92](https://github.com/seek-oss/crackle/pull/92) [`057dd54`](https://github.com/seek-oss/crackle/commit/057dd548b04992e8f645cdf034bab91d3562bb96) Thanks [@mrm007](https://github.com/mrm007)! - Fix `crackle dev` for entries which don't export anything, e.g. CLIs

- [#93](https://github.com/seek-oss/crackle/pull/93) [`f6aaebb`](https://github.com/seek-oss/crackle/commit/f6aaebbf0ec01df130cfcf17dbcc1c7cf266bd5b) Thanks [@mrm007](https://github.com/mrm007)! - Update all `@babel/*` deps

- [#94](https://github.com/seek-oss/crackle/pull/94) [`622477a`](https://github.com/seek-oss/crackle/commit/622477aa4b53b42d8810621921c291d02d03324a) Thanks [@mrm007](https://github.com/mrm007)! - Don't reconcile import specifiers for `.d.ts` files

- Updated dependencies [[`f6aaebb`](https://github.com/seek-oss/crackle/commit/f6aaebbf0ec01df130cfcf17dbcc1c7cf266bd5b)]:
  - @crackle/babel-plugin-remove-exports@0.2.1

## 0.22.0

### Minor Changes

- [#84](https://github.com/seek-oss/crackle/pull/84) [`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538) Thanks [@mrm007](https://github.com/mrm007)! - Build Crackle with Crackle

- [#84](https://github.com/seek-oss/crackle/pull/84) [`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538) Thanks [@mrm007](https://github.com/mrm007)! - Enhance `crackle dev` with a "passive watcher".

  This is a powerful feature that speeds up the feedback loop in development and testing. When running `crackle dev` in a package Crackle will create stub entries for CJS and ESM that loads code directly from the `src` folder, without needing to build the package first.

### Patch Changes

- Updated dependencies [[`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538)]:
  - @crackle/babel-plugin-remove-exports@0.2.0
  - @crackle/router@0.3.0

## 0.21.0

### Minor Changes

- [#82](https://github.com/seek-oss/crackle/pull/82) [`8f43a59`](https://github.com/seek-oss/crackle/commit/8f43a59734bb878728e2e0cbdb642239b0a760ef) Thanks [@mrm007](https://github.com/mrm007)! - Create an `index.d.ts` redirect for backwards-compatible entry points.

  This prevents VS Code from auto-importing entry points from `dist/`. For example, wanting to use [Braid's CSS variables](https://seek-oss.github.io/braid-design-system/css/vars) (`vars`) VS Code would suggest `braid-design-system/dist/css` instead of `braid-design-system/css`.

## 0.20.0

### Minor Changes

- [#78](https://github.com/seek-oss/crackle/pull/78) [`c82606f`](https://github.com/seek-oss/crackle/commit/c82606f9d2e63ea82f533709a9c0140d791f7a4f) Thanks [@mrm007](https://github.com/mrm007)! - Build ESM and CJS bundles simultaneously and run DTS build once for all entries.

  This means building Braid is now over twice as fast and Metropolis packages would see a huge boost as well.

  #### `@crackle/core@0.19.1`

  ```
  ➜ hyperfine "nr build"
  Benchmark 1: nr build
    Time (mean ± σ):     28.016 s ±  0.630 s    [User: 39.951 s, System: 5.235 s]
    Range (min … max):   26.568 s … 28.737 s    10 runs
  ```

  #### This release

  ```
  ➜ hyperfine "nr build"
  Benchmark 1: nr build
    Time (mean ± σ):     13.141 s ±  0.448 s    [User: 19.233 s, System: 2.623 s]
    Range (min … max):   12.614 s … 14.199 s    10 runs
  ```

### Patch Changes

- [#78](https://github.com/seek-oss/crackle/pull/78) [`c82606f`](https://github.com/seek-oss/crackle/commit/c82606f9d2e63ea82f533709a9c0140d791f7a4f) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade Vite and Rollup to latest

## 0.19.1

### Patch Changes

- [#75](https://github.com/seek-oss/crackle/pull/75) [`578a1ee`](https://github.com/seek-oss/crackle/commit/578a1ee16e3e8b5f3e120b1758418fa6d17494c1) Thanks [@mrm007](https://github.com/mrm007)! - Clean up references to treat

## 0.19.0

### Minor Changes

- [#49](https://github.com/seek-oss/crackle/pull/49) [`7d64541`](https://github.com/seek-oss/crackle/commit/7d6454191f60059bed50fa0b898428e30cadf85e) Thanks [@mrm007](https://github.com/mrm007)! - Remove `externals` logic from dependency graph scanner

## 0.18.2

### Patch Changes

- [#68](https://github.com/seek-oss/crackle/pull/68) [`b87adf8`](https://github.com/seek-oss/crackle/commit/b87adf823ea7876139be27d30e82eb6a1b2e93f7) Thanks [@mrm007](https://github.com/mrm007)! - Don't put output files for entry points in `dist/side-effects`

## 0.18.1

### Patch Changes

- [#66](https://github.com/seek-oss/crackle/pull/66) [`5ba5e57`](https://github.com/seek-oss/crackle/commit/5ba5e57694763c8a52f43b47906dbecda578a040) Thanks [@mrm007](https://github.com/mrm007)! - When bundling, make sure the output is compatible with faux ESM exports e.g. code transpiled with the [TypeScript `esModuleInterop` flag](https://www.typescriptlang.org/tsconfig#esModuleInterop)

- [#66](https://github.com/seek-oss/crackle/pull/66) [`5ba5e57`](https://github.com/seek-oss/crackle/commit/5ba5e57694763c8a52f43b47906dbecda578a040) Thanks [@mrm007](https://github.com/mrm007)! - Bump Vite to 4.1.1 and sync dependencies

## 0.18.0

### Minor Changes

- [#63](https://github.com/seek-oss/crackle/pull/63) [`ff23b47`](https://github.com/seek-oss/crackle/commit/ff23b477b7a7e96f98948e4eac6af3cf2febb5e3) Thanks [@mrm007](https://github.com/mrm007)! - Add a config option to [reconcile peer dependencies][reconcile] from a package:

  [reconcile]: https://github.com/seek-oss/crackle/blob/master/docs/esm-reconciliation.md#reconciling-peer-dependencies

  ```ts
  // crackle.config.ts
  import type { CrackleConfig } from '@crackle/core';

  export default {
    reconcileDependencies: {
      react: '<18',
    },
  } satisfies CrackleConfig;
  ```

### Patch Changes

- [#63](https://github.com/seek-oss/crackle/pull/63) [`ff23b47`](https://github.com/seek-oss/crackle/commit/ff23b477b7a7e96f98948e4eac6af3cf2febb5e3) Thanks [@mrm007](https://github.com/mrm007)! - Fix import specifier patching with scoped packages

## 0.17.0

### Minor Changes

- [#59](https://github.com/seek-oss/crackle/pull/59) [`ce03d87`](https://github.com/seek-oss/crackle/commit/ce03d875cdbb082dd3895868f378a2edd5b9b991) Thanks [@mrm007](https://github.com/mrm007)! - Update `"sideEffects"` flag if needed.

  If an entry point has side-effects (as defined via the **package.json**'s `"sideEffects"` key) Crackle will update the `"sideEffects"` key so it also matches the output path in `dist`.

## 0.16.0

### Minor Changes

- [#58](https://github.com/seek-oss/crackle/pull/58) [`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31) Thanks [@mrm007](https://github.com/mrm007)! - Put all output files in `dist`.

  This allows library authors to have better control over the [`sideEffects` flag](https://github.com/webpack/webpack/blob/main/examples/side-effects/README.md).

- [#58](https://github.com/seek-oss/crackle/pull/58) [`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31) Thanks [@mrm007](https://github.com/mrm007)! - Set the value for `"types"` in `package.json` on `crackle fix`

### Patch Changes

- [#58](https://github.com/seek-oss/crackle/pull/58) [`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31) Thanks [@mrm007](https://github.com/mrm007)! - Polyfill `structuredClone` when running in Node.js <17

## 0.15.0

### Minor Changes

- [#56](https://github.com/seek-oss/crackle/pull/56) [`db148fa`](https://github.com/seek-oss/crackle/commit/db148fab6810c2f55d8ee43f6e87a51da3f7870f) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade to Vite 4

### Patch Changes

- [#55](https://github.com/seek-oss/crackle/pull/55) [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f) Thanks [@mrm007](https://github.com/mrm007)! - Fix resolution for packages which don't expose their `package.json`

- [#55](https://github.com/seek-oss/crackle/pull/55) [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f) Thanks [@mrm007](https://github.com/mrm007)! - Update `.gitignore` on `crackle fix`

- [#55](https://github.com/seek-oss/crackle/pull/55) [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f) Thanks [@mrm007](https://github.com/mrm007)! - Better validation of `package.json`

## 0.14.0

### Minor Changes

- [#53](https://github.com/seek-oss/crackle/pull/53) [`248d413`](https://github.com/seek-oss/crackle/commit/248d41309dad7b975172abebc01bcca2f48cef32) Thanks [@mrm007](https://github.com/mrm007)! - Add a `crackle clean` command to clean output directories

### Patch Changes

- [#51](https://github.com/seek-oss/crackle/pull/51) [`a10aeaa`](https://github.com/seek-oss/crackle/commit/a10aeaadcd95925623dad9644c3572f05a36d5c9) Thanks [@mrm007](https://github.com/mrm007)! - Update dependencies

- Updated dependencies [[`a10aeaa`](https://github.com/seek-oss/crackle/commit/a10aeaadcd95925623dad9644c3572f05a36d5c9)]:
  - @crackle/babel-plugin-remove-exports@0.1.1
  - @crackle/router@0.2.1

## 0.13.0

### Minor Changes

- [#47](https://github.com/seek-oss/crackle/pull/47) [`4ea357f`](https://github.com/seek-oss/crackle/commit/4ea357faf06affe880741581689508a3b3b348e6) Thanks [@mrm007](https://github.com/mrm007)! - Use `.mjs` file extension for ESM bundles. Please read the [pull request description](https://github.com/seek-oss/crackle/pull/47) for more details.

## 0.12.2

### Patch Changes

- Updated dependencies [[`87605cf`](https://github.com/seek-oss/crackle/commit/87605cf6b6fa0deba5d1abd0dbc4e6f7318f5845)]:
  - @crackle/router@0.2.0

## 0.12.1

### Patch Changes

- [#45](https://github.com/seek-oss/crackle/pull/45) [`4e83155`](https://github.com/seek-oss/crackle/commit/4e831559a5d6107fa4226e854ecfa627e7cd1b58) Thanks [@mrm007](https://github.com/mrm007)! - Bump `@vanilla-extract/*` deps, update vanilla-extract debug ids plugin

- [#44](https://github.com/seek-oss/crackle/pull/44) [`b7235af`](https://github.com/seek-oss/crackle/commit/b7235afe88054ab817438bdea5613ec7d308943e) Thanks [@mrm007](https://github.com/mrm007)! - Use `.js` file extension for compiled artifacts

## 0.12.0

### Minor Changes

- [#41](https://github.com/seek-oss/crackle/pull/41) [`7c71eb2`](https://github.com/seek-oss/crackle/commit/7c71eb25ddd2e2b9a0e4634ac227e727a7b170c5) Thanks [@mrm007](https://github.com/mrm007)! - Add a `clean` config option to clean the output directory on `crackle package`

- [#41](https://github.com/seek-oss/crackle/pull/41) [`7c71eb2`](https://github.com/seek-oss/crackle/commit/7c71eb25ddd2e2b9a0e4634ac227e727a7b170c5) Thanks [@mrm007](https://github.com/mrm007)! - Add a `dtsOptions` config option to override the default TypeScript `compilerOptions` for `.d.ts` bundle generation

## 0.11.0

### Minor Changes

- [#39](https://github.com/seek-oss/crackle/pull/39) [`ad3602d`](https://github.com/seek-oss/crackle/commit/ad3602da562a00c6ee577fe93f6e474b8933f227) Thanks [@mrm007](https://github.com/mrm007)! - Fix `.d.ts` generation

## 0.10.5

### Patch Changes

- [#34](https://github.com/seek-oss/crackle/pull/34) [`c5f7c8e`](https://github.com/seek-oss/crackle/commit/c5f7c8e1910eb10d6fafc7a1e1a3fbe94d28f8eb) Thanks [@mattcompiles](https://github.com/mattcompiles)! - Fix start mode

- [#37](https://github.com/seek-oss/crackle/pull/37) [`6f42e65`](https://github.com/seek-oss/crackle/commit/6f42e65ff00a057700c34889db1f7574a52a3da7) Thanks [@mattcompiles](https://github.com/mattcompiles)! - Fix HMR

## 0.10.4

### Patch Changes

- [#27](https://github.com/seek-oss/crackle/pull/27) [`f5464e8`](https://github.com/seek-oss/crackle/commit/f5464e83776d81580cbf162086c9b1b7803a5909) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade to Vite 3, migrate package script to Rollup

## 0.10.3

### Patch Changes

- [#25](https://github.com/seek-oss/crackle/pull/25) [`d451526`](https://github.com/seek-oss/crackle/commit/d451526f3cbb2ab3db57c58a9c350e8738f3e108) Thanks [@mrm007](https://github.com/mrm007)! - Fix extensions and paths for generated entrypoints

## 0.10.2

### Patch Changes

- [#23](https://github.com/seek-oss/crackle/pull/23) [`933fe86`](https://github.com/seek-oss/crackle/commit/933fe862ea6dd7fa04ce25a6837942cf364ae2ba) Thanks [@askoufis](https://github.com/askoufis)! - Add missing `/mocks` to published package

## 0.10.1

### Patch Changes

- [#21](https://github.com/seek-oss/crackle/pull/21) [`44a55a6`](https://github.com/seek-oss/crackle/commit/44a55a66bfb96433687e62eb319aad8949bab805) Thanks [@askoufis](https://github.com/askoufis)! - Add missing `/entries` to published package

## 0.10.0

### Minor Changes

- [#16](https://github.com/seek-oss/crackle/pull/16) [`d7490f3`](https://github.com/seek-oss/crackle/commit/d7490f3cd50840e1958c3d378a521b6b7e3bb0a3) Thanks [@mrm007](https://github.com/mrm007)! - Added a `fix` config option that automatically runs `crackle fix` when necessary.

## 0.9.0

### Minor Changes

- [#15](https://github.com/seek-oss/crackle/pull/15) [`0f48228`](https://github.com/seek-oss/crackle/commit/0f48228dbad78df0b497ff7229964cd644f111e6) Thanks [@mrm007](https://github.com/mrm007)! - `crackle package` now generates/updates the project's `.gitignore` using [`ensure-gitignore`](https://github.com/seek-oss/ensure-gitignore)

## 0.8.0

### Minor Changes

- [#14](https://github.com/seek-oss/crackle/pull/14) [`8266de3`](https://github.com/seek-oss/crackle/commit/8266de35ce45fce2bd863253659b29913252cf21) Thanks [@mrm007](https://github.com/mrm007)! - Exported logging utility as `@crackle/core/logger`

## 0.7.0

### Minor Changes

- [#8](https://github.com/seek-oss/crackle/pull/8) [`117b674`](https://github.com/seek-oss/crackle/commit/117b674e2ef4e439beb95bd263633efb7689f621) Thanks [@benjervis](https://github.com/benjervis)! - The ESM compliant `exports` key is now checked as part of package.json validation

## 0.6.2

### Patch Changes

- [#6](https://github.com/seek-oss/crackle/pull/6) [`686ba96`](https://github.com/seek-oss/crackle/commit/686ba96bb1651308345786ec4c554014331356b7) Thanks [@benjervis](https://github.com/benjervis)! - Ensures correct filenames are being passed to vanilla-extract

- Updated dependencies [[`686ba96`](https://github.com/seek-oss/crackle/commit/686ba96bb1651308345786ec4c554014331356b7)]:
  - @crackle/router@0.1.2

## 0.6.1

### Patch Changes

- [#4](https://github.com/seek-oss/crackle/pull/4) [`1ac46da`](https://github.com/seek-oss/crackle/commit/1ac46daea12f4db29da36eed99db2b06d67d652e) Thanks [@benjervis](https://github.com/benjervis)! - Update to use the vanilla vite plugin v3

* [#1](https://github.com/seek-oss/crackle/pull/1) [`66f40d1`](https://github.com/seek-oss/crackle/commit/66f40d1a9a13405b626a43c39aabbfed5cf8b2f1) Thanks [@benjervis](https://github.com/benjervis)! - Write package.json files in dev mode

## 0.6.0

### Minor Changes

- 32e7785: Support packaged .css.js files

### Patch Changes

- 59f6d7b: Update to the new vanilla runtime.

  This means that the vanilla specific deps items in start can be removed, as vanilla inserts them itself.

- b50b2b7: Provide better terminal experience for "fix" cli command
- c7ad544: Fix serve when not run from correct CWD

## 0.5.1

### Patch Changes

- 46c92de: Fix .css.ts format extension bug.
- 62e72a7: Bug fixes:
  - Generated chunks are now also built in esm and cjs
  - The package entries rollup plugin was limiting itself to packages called multi-entry-library

## 0.5.0

### Minor Changes

- 792b534: Build esm and cjs outputs.

  Package build now outputs both formats, which means that entry directories need to contain a package.json to route to the correct version.
  These entry package.json files are autogenerated on each build (and don't get committed), but the parent package.json needs to be updated manually, because it is committed.

  @crackle/cli now provides "fix" to update the parent package.json.

### Patch Changes

- 8628918: Add react-router-dom to include optimize deps list
- cd64413: Add missing babel deps

## 0.4.1

### Patch Changes

- Updated dependencies [8e80af5]
  - @crackle/router@0.1.1

## 0.4.0

### Minor Changes

- a4dc0f9: Strip route data from pages files in client builds

  This will make sure `routeData` dependencies don't end up in the client bundle, as well as allowing react fast-refresh to work on `.page.tsx` files in development.

### Patch Changes

- Updated dependencies [a4dc0f9]
  - @crackle/babel-plugin-remove-exports@0.1.0

## 0.3.0

### Minor Changes

- eeb9611: Improve things

## 0.2.4

### Patch Changes

- 6a3cde3: Change the entrypoint for package command, to avoid importing the package.json file.

## 0.2.3

### Patch Changes

- bfe0faf: getAllRoutes function now respects the config file for pageRoots

## 0.2.2

### Patch Changes

- Updated dependencies [1d3f7f9]
  - @crackle/router@0.1.0

## 0.2.1

### Patch Changes

- Add `appShell` config item

## 0.2.0

### Minor Changes

- 2ec1ec2: Change package name from build to core
- a259cdb: Multiple page roots can now be specified to determine where to look for .page.tsx files. The implicit inclusion of the src/pages directory is gone, every page file must have the extension now.
- 72e74fc: Support `crackle.config.ts` files

### Patch Changes

- dd09753: Allowing passing of config to top level commands

## 0.1.1

### Patch Changes

- 6fba012: Fix the dependency prebundling when installed

## 0.1.0

### Minor Changes

- Add global metadata feature.

  Pages can now export `globalMetadata` in the `routeData`, and that information becomes available to consume as a prop on the app shell.

## 0.0.7

### Patch Changes

- Refactor2021: Make critical css work with HMR

## 0.0.6

### Patch Changes

- 167646a: Ensure deps of .css.ts files get chunked separately

## 0.0.5

### Patch Changes

- Fix rollup typescript generation

## 0.0.4

### Patch Changes

- Fix incorrect mock references, Add loading icon for start

## 0.0.3

### Patch Changes

- Improve mocks and entries bundling

## 0.0.2

### Patch Changes

- a114e5e: Mark externals and .css.ts files as sideEffect free in package script
