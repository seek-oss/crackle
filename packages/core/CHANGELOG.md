# @crackle/core

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
