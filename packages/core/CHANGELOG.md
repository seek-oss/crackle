# @crackle/core

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
