# @crackle/cli

## 0.13.0

### Minor Changes

- [#156](https://github.com/seek-oss/crackle/pull/156) [`4633a23`](https://github.com/seek-oss/crackle/commit/4633a230c74a7079e7f9cf581993ac54fdccce5c) Thanks [@mrm007](https://github.com/mrm007)! - Now generating types correctly according to https://arethetypeswrong.github.io

### Patch Changes

- Updated dependencies [[`4633a23`](https://github.com/seek-oss/crackle/commit/4633a230c74a7079e7f9cf581993ac54fdccce5c)]:
  - @crackle/core@0.31.0

## 0.12.6

### Patch Changes

- Updated dependencies [[`1cbd099`](https://github.com/seek-oss/crackle/commit/1cbd0990e15ec4ae8765b67390e105cd50b1f96c)]:
  - @crackle/core@0.30.0

## 0.12.5

### Patch Changes

- Updated dependencies [[`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4), [`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4), [`92e9b08`](https://github.com/seek-oss/crackle/commit/92e9b085268663802015f68a65b202295ae0f6a4), [`3f7e51a`](https://github.com/seek-oss/crackle/commit/3f7e51a289dc2880e4884f9dc685a9943250e1ec)]:
  - @crackle/core@0.29.0

## 0.12.4

### Patch Changes

- Updated dependencies [[`433a30f`](https://github.com/seek-oss/crackle/commit/433a30f5ac81a107083b8d1c24ab9999f6f33ea4), [`f52495d`](https://github.com/seek-oss/crackle/commit/f52495dfaf603ba8f4dd87fc516b5ddb5ad07bd6), [`2b57d2f`](https://github.com/seek-oss/crackle/commit/2b57d2f1cb84a2452c8a33c46dcb42b58becb095)]:
  - @crackle/core@0.28.0

## 0.12.3

### Patch Changes

- Updated dependencies [[`7903ab9`](https://github.com/seek-oss/crackle/commit/7903ab901a53494b162f2c5e9d7b176e36298351)]:
  - @crackle/core@0.27.1

## 0.12.2

### Patch Changes

- [#118](https://github.com/seek-oss/crackle/pull/118) [`071c03f`](https://github.com/seek-oss/crackle/commit/071c03f5da93f4d5658d7d80bdc862582698657e) Thanks [@mrm007](https://github.com/mrm007)! - Re-export `CrackleConfig` and `defineConfig` so that they can be used in `crackle.config.ts` without adding `@crackle/core` as a dependency

  ```ts
  // crackle.config.ts
  import { defineConfig } from '@crackle/cli/config';

  export default defineConfig({
    // ...
  });
  ```

- Updated dependencies [[`071c03f`](https://github.com/seek-oss/crackle/commit/071c03f5da93f4d5658d7d80bdc862582698657e), [`ed8cdc9`](https://github.com/seek-oss/crackle/commit/ed8cdc9c4d0cf2d6e3240cfbb8312d0de3747416), [`c131b93`](https://github.com/seek-oss/crackle/commit/c131b93eaaf68f378ae79a59befb00af8af8b6e4)]:
  - @crackle/core@0.27.0

## 0.12.1

### Patch Changes

- Updated dependencies [[`74e8653`](https://github.com/seek-oss/crackle/commit/74e86539b8dd6303f9af4c94a6f32db312786fe4), [`9956efa`](https://github.com/seek-oss/crackle/commit/9956efaa51ed1ab1bc7dc7a054818fde81f2be41), [`d34eb26`](https://github.com/seek-oss/crackle/commit/d34eb2693d3ca6669568aafa32f7d5d098309d31), [`d34eb26`](https://github.com/seek-oss/crackle/commit/d34eb2693d3ca6669568aafa32f7d5d098309d31)]:
  - @crackle/core@0.26.0

## 0.12.0

### Minor Changes

- [#108](https://github.com/seek-oss/crackle/pull/108) [`e49b68b`](https://github.com/seek-oss/crackle/commit/e49b68b580e2d496efad6cd7f8840a7166f10063) Thanks [@mrm007](https://github.com/mrm007)! - Added a `--webpack` option to `crackle dev` which generates Webpack-compatible shims.

### Patch Changes

- Updated dependencies [[`e49b68b`](https://github.com/seek-oss/crackle/commit/e49b68b580e2d496efad6cd7f8840a7166f10063), [`24420cd`](https://github.com/seek-oss/crackle/commit/24420cdb278b8d9c8738fbe34f05e0d145fe4273), [`e49b68b`](https://github.com/seek-oss/crackle/commit/e49b68b580e2d496efad6cd7f8840a7166f10063)]:
  - @crackle/core@0.25.0

## 0.11.5

### Patch Changes

- Updated dependencies [[`5baad79`](https://github.com/seek-oss/crackle/commit/5baad791fa243912141eae481adf980a08e3ac37)]:
  - @crackle/core@0.24.1

## 0.11.4

### Patch Changes

- Updated dependencies [[`c4f5623`](https://github.com/seek-oss/crackle/commit/c4f56238151245aec5042356830f67b7d849d6b4)]:
  - @crackle/core@0.24.0

## 0.11.3

### Patch Changes

- Updated dependencies [[`840d387`](https://github.com/seek-oss/crackle/commit/840d387a769e27e02d7de3708f6b9a62602549ff)]:
  - @crackle/core@0.23.2

## 0.11.2

### Patch Changes

- Updated dependencies [[`d094c8b`](https://github.com/seek-oss/crackle/commit/d094c8bca57eed399f1b724f4f58e15a7c549de3), [`f933e67`](https://github.com/seek-oss/crackle/commit/f933e6738cdd0a5bc0bb1847cabba6978d145443)]:
  - @crackle/core@0.23.1

## 0.11.1

### Patch Changes

- Updated dependencies [[`6e14926`](https://github.com/seek-oss/crackle/commit/6e149269730ec088452823583fb270d8a889db1c), [`057dd54`](https://github.com/seek-oss/crackle/commit/057dd548b04992e8f645cdf034bab91d3562bb96), [`560489a`](https://github.com/seek-oss/crackle/commit/560489afdadda7f8b3985f0639ae55f83815875e), [`f6aaebb`](https://github.com/seek-oss/crackle/commit/f6aaebbf0ec01df130cfcf17dbcc1c7cf266bd5b), [`622477a`](https://github.com/seek-oss/crackle/commit/622477aa4b53b42d8810621921c291d02d03324a)]:
  - @crackle/core@0.23.0

## 0.11.0

### Minor Changes

- [#84](https://github.com/seek-oss/crackle/pull/84) [`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538) Thanks [@mrm007](https://github.com/mrm007)! - Build Crackle with Crackle

### Patch Changes

- Updated dependencies [[`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538), [`3250fdf`](https://github.com/seek-oss/crackle/commit/3250fdffcf364f461789bdad90136824756f7538)]:
  - @crackle/core@0.22.0

## 0.10.10

### Patch Changes

- Updated dependencies [[`8f43a59`](https://github.com/seek-oss/crackle/commit/8f43a59734bb878728e2e0cbdb642239b0a760ef)]:
  - @crackle/core@0.21.0

## 0.10.9

### Patch Changes

- Updated dependencies [[`c82606f`](https://github.com/seek-oss/crackle/commit/c82606f9d2e63ea82f533709a9c0140d791f7a4f), [`c82606f`](https://github.com/seek-oss/crackle/commit/c82606f9d2e63ea82f533709a9c0140d791f7a4f)]:
  - @crackle/core@0.20.0

## 0.10.8

### Patch Changes

- Updated dependencies [[`578a1ee`](https://github.com/seek-oss/crackle/commit/578a1ee16e3e8b5f3e120b1758418fa6d17494c1)]:
  - @crackle/core@0.19.1

## 0.10.7

### Patch Changes

- Updated dependencies [[`7d64541`](https://github.com/seek-oss/crackle/commit/7d6454191f60059bed50fa0b898428e30cadf85e)]:
  - @crackle/core@0.19.0

## 0.10.6

### Patch Changes

- Updated dependencies [[`b87adf8`](https://github.com/seek-oss/crackle/commit/b87adf823ea7876139be27d30e82eb6a1b2e93f7)]:
  - @crackle/core@0.18.2

## 0.10.5

### Patch Changes

- [#65](https://github.com/seek-oss/crackle/pull/65) [`3f0da5c`](https://github.com/seek-oss/crackle/commit/3f0da5cecee68850a11f92bf38e978abe037e03e) Thanks [@mrm007](https://github.com/mrm007)! - Add descriptions to CLI commands

- Updated dependencies [[`5ba5e57`](https://github.com/seek-oss/crackle/commit/5ba5e57694763c8a52f43b47906dbecda578a040), [`5ba5e57`](https://github.com/seek-oss/crackle/commit/5ba5e57694763c8a52f43b47906dbecda578a040)]:
  - @crackle/core@0.18.1

## 0.10.4

### Patch Changes

- Updated dependencies [[`ff23b47`](https://github.com/seek-oss/crackle/commit/ff23b477b7a7e96f98948e4eac6af3cf2febb5e3), [`ff23b47`](https://github.com/seek-oss/crackle/commit/ff23b477b7a7e96f98948e4eac6af3cf2febb5e3)]:
  - @crackle/core@0.18.0

## 0.10.3

### Patch Changes

- Updated dependencies [[`ce03d87`](https://github.com/seek-oss/crackle/commit/ce03d875cdbb082dd3895868f378a2edd5b9b991)]:
  - @crackle/core@0.17.0

## 0.10.2

### Patch Changes

- Updated dependencies [[`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31), [`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31), [`b28f124`](https://github.com/seek-oss/crackle/commit/b28f124bff011b04c7223751b4481abbdeab8c31)]:
  - @crackle/core@0.16.0

## 0.10.1

### Patch Changes

- [#55](https://github.com/seek-oss/crackle/pull/55) [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f) Thanks [@mrm007](https://github.com/mrm007)! - Update `.gitignore` on `crackle fix`

- Updated dependencies [[`db148fa`](https://github.com/seek-oss/crackle/commit/db148fab6810c2f55d8ee43f6e87a51da3f7870f), [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f), [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f), [`942264e`](https://github.com/seek-oss/crackle/commit/942264ebf21fe00be082e5e5b1ec179dace26f6f)]:
  - @crackle/core@0.15.0

## 0.10.0

### Minor Changes

- [#53](https://github.com/seek-oss/crackle/pull/53) [`248d413`](https://github.com/seek-oss/crackle/commit/248d41309dad7b975172abebc01bcca2f48cef32) Thanks [@mrm007](https://github.com/mrm007)! - Add a `crackle clean` command to clean output directories

### Patch Changes

- [#51](https://github.com/seek-oss/crackle/pull/51) [`a10aeaa`](https://github.com/seek-oss/crackle/commit/a10aeaadcd95925623dad9644c3572f05a36d5c9) Thanks [@mrm007](https://github.com/mrm007)! - Update dependencies

- Updated dependencies [[`a10aeaa`](https://github.com/seek-oss/crackle/commit/a10aeaadcd95925623dad9644c3572f05a36d5c9), [`248d413`](https://github.com/seek-oss/crackle/commit/248d41309dad7b975172abebc01bcca2f48cef32)]:
  - @crackle/core@0.14.0

## 0.9.3

### Patch Changes

- Updated dependencies [[`4ea357f`](https://github.com/seek-oss/crackle/commit/4ea357faf06affe880741581689508a3b3b348e6)]:
  - @crackle/core@0.13.0

## 0.9.2

### Patch Changes

- [#48](https://github.com/seek-oss/crackle/pull/48) [`87605cf`](https://github.com/seek-oss/crackle/commit/87605cf6b6fa0deba5d1abd0dbc4e6f7318f5845) Thanks [@mrm007](https://github.com/mrm007)! - Fix config overrides for `crackle serve`

- Updated dependencies []:
  - @crackle/core@0.12.2

## 0.9.1

### Patch Changes

- Updated dependencies [[`4e83155`](https://github.com/seek-oss/crackle/commit/4e831559a5d6107fa4226e854ecfa627e7cd1b58), [`b7235af`](https://github.com/seek-oss/crackle/commit/b7235afe88054ab817438bdea5613ec7d308943e)]:
  - @crackle/core@0.12.1

## 0.9.0

### Minor Changes

- [#41](https://github.com/seek-oss/crackle/pull/41) [`7c71eb2`](https://github.com/seek-oss/crackle/commit/7c71eb25ddd2e2b9a0e4634ac227e727a7b170c5) Thanks [@mrm007](https://github.com/mrm007)! - Add a `--clean` CLI argument for `crackle package` to clean the output directory

### Patch Changes

- Updated dependencies [[`7c71eb2`](https://github.com/seek-oss/crackle/commit/7c71eb25ddd2e2b9a0e4634ac227e727a7b170c5), [`7c71eb2`](https://github.com/seek-oss/crackle/commit/7c71eb25ddd2e2b9a0e4634ac227e727a7b170c5)]:
  - @crackle/core@0.12.0

## 0.8.0

### Minor Changes

- [#39](https://github.com/seek-oss/crackle/pull/39) [`ad3602d`](https://github.com/seek-oss/crackle/commit/ad3602da562a00c6ee577fe93f6e474b8933f227) Thanks [@mrm007](https://github.com/mrm007)! - Fix `.d.ts` generation

### Patch Changes

- Updated dependencies [[`ad3602d`](https://github.com/seek-oss/crackle/commit/ad3602da562a00c6ee577fe93f6e474b8933f227)]:
  - @crackle/core@0.11.0

## 0.7.2

### Patch Changes

- Updated dependencies [[`c5f7c8e`](https://github.com/seek-oss/crackle/commit/c5f7c8e1910eb10d6fafc7a1e1a3fbe94d28f8eb), [`6f42e65`](https://github.com/seek-oss/crackle/commit/6f42e65ff00a057700c34889db1f7574a52a3da7)]:
  - @crackle/core@0.10.5

## 0.7.1

### Patch Changes

- [#27](https://github.com/seek-oss/crackle/pull/27) [`f5464e8`](https://github.com/seek-oss/crackle/commit/f5464e83776d81580cbf162086c9b1b7803a5909) Thanks [@mrm007](https://github.com/mrm007)! - Upgrade to Vite 3, migrate package script to Rollup

- Updated dependencies [[`f5464e8`](https://github.com/seek-oss/crackle/commit/f5464e83776d81580cbf162086c9b1b7803a5909)]:
  - @crackle/core@0.10.4

## 0.7.0

### Minor Changes

- [#16](https://github.com/seek-oss/crackle/pull/16) [`d7490f3`](https://github.com/seek-oss/crackle/commit/d7490f3cd50840e1958c3d378a521b6b7e3bb0a3) Thanks [@mrm007](https://github.com/mrm007)! - Added a `--fix` option to `crackle package` which runs `crackle fix` if necessary.

### Patch Changes

- Updated dependencies [[`d7490f3`](https://github.com/seek-oss/crackle/commit/d7490f3cd50840e1958c3d378a521b6b7e3bb0a3)]:
  - @crackle/core@0.10.0

## 0.6.1

### Patch Changes

- Updated dependencies [[`0f48228`](https://github.com/seek-oss/crackle/commit/0f48228dbad78df0b497ff7229964cd644f111e6)]:
  - @crackle/core@0.9.0

## 0.6.0

### Minor Changes

- [#14](https://github.com/seek-oss/crackle/pull/14) [`8266de3`](https://github.com/seek-oss/crackle/commit/8266de35ce45fce2bd863253659b29913252cf21) Thanks [@mrm007](https://github.com/mrm007)! - Added a `--port` option to `crackle start` and `crackle serve`

### Patch Changes

- Updated dependencies [[`8266de3`](https://github.com/seek-oss/crackle/commit/8266de35ce45fce2bd863253659b29913252cf21)]:
  - @crackle/core@0.8.0

## 0.5.2

### Patch Changes

- Updated dependencies [[`117b674`](https://github.com/seek-oss/crackle/commit/117b674e2ef4e439beb95bd263633efb7689f621)]:
  - @crackle/core@0.7.0

## 0.5.1

### Patch Changes

- Updated dependencies [59f6d7b]
- Updated dependencies [32e7785]
- Updated dependencies [b50b2b7]
- Updated dependencies [c7ad544]
  - @crackle/core@0.6.0

## 0.5.0

### Minor Changes

- 792b534: Build esm and cjs outputs.

  Package build now outputs both formats, which means that entry directories need to contain a package.json to route to the correct version.
  These entry package.json files are autogenerated on each build (and don't get committed), but the parent package.json needs to be updated manually, because it is committed.

  @crackle/cli now provides "fix" to update the parent package.json.

### Patch Changes

- Updated dependencies [8628918]
- Updated dependencies [cd64413]
- Updated dependencies [792b534]
  - @crackle/core@0.5.0

## 0.4.0

### Patch Changes

- Updated dependencies [a4dc0f9]
  - @crackle/core@0.4.0

## 0.3.0

### Patch Changes

- Updated dependencies [eeb9611]
  - @crackle/core@0.3.0

## 0.1.2

### Patch Changes

- 6a3cde3: Change the entrypoint for package command, to avoid importing the package.json file.
- Updated dependencies [6a3cde3]
  - @crackle/core@0.2.4

## 0.1.1

### Patch Changes

- bfe0faf: getAllRoutes function now respects the config file for pageRoots
- Updated dependencies [bfe0faf]
  - @crackle/core@0.2.3

## 0.1.0

### Minor Changes

- 72e74fc: Support `crackle.config.ts` files

### Patch Changes

- Updated dependencies [2ec1ec2]
- Updated dependencies [a259cdb]
- Updated dependencies [72e74fc]
- Updated dependencies [dd09753]
  - @crackle/core@0.2.0

## 0.0.8

### Patch Changes

- Updated dependencies [undefined]
  - @crackle/build@0.1.0

## 0.0.7

### Patch Changes

- Updated dependencies [undefined]
  - @crackle/build@0.0.7

## 0.0.6

### Patch Changes

- Updated dependencies [167646a]
  - @crackle/build@0.0.6

## 0.0.5

### Patch Changes

- Updated dependencies [undefined]
  - @crackle/build@0.0.5

## 0.0.4

### Patch Changes

- Updated dependencies [undefined]
  - @crackle/build@0.0.4

## 0.0.3

### Patch Changes

- Updated dependencies [undefined]
  - @crackle/build@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [a114e5e]
  - @crackle/build@0.0.2
