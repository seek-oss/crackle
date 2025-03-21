# 💥 Crackle <!-- omit in toc -->

_A build tool for apps and packages, static and server-rendered sites. Built on [Vite], [Rollup] and [esbuild]._

[Vite]: https://vitejs.dev/
[Rollup]: https://rollupjs.org/
[esbuild]: https://esbuild.github.io/

## Features

- [Compile TypeScript to JavaScript](#crackle-package) and generate bundles for CJS and ESM
- [Generates type declaration files](#dts-bundles) (`.d.ts`) for entry points
- [Supports multiple (nested) entry points](#entry-points)
- [Generate stub entry points](#crackle-dev) for local development
- [ESM reconciliation](#esm-reconciliation)
- [Handles side-effects](#side-effects) for generated bundles
- Compile Vanilla Extract stylesheets to JavaScript
- Creates an entrypoint for third-party CSS
- 🚧 Start an HTTP server (with hot reloading) to preview your site **(WIP)**
- 🚧 Build a static version of your site (e.g. for deploying to S3) **(WIP)**

## Contents

- [Features](#features)
- [Contents](#contents)
- [Getting started](#getting-started)
- [Commands](#commands)
  - [`crackle package`](#crackle-package)
    - [Entry points](#entry-points)
    - [Third-party CSS](#third-party-css)
    - [Externals](#externals)
    - [Package mode](#package-mode)
    - [DTS mode](#dts-mode)
  - [`crackle dev`](#crackle-dev)
    - [Shim mode](#shim-mode)
  - [`crackle fix`](#crackle-fix)
- [Side-effects](#side-effects)
- [ESM reconciliation](#esm-reconciliation)
- [DTS bundles](#dts-bundles)
- [Backwards-compatible entry points](#backwards-compatible-entry-points)
- [Contributing](#contributing)
  - [Self-hosting / Bootstrap](#self-hosting--bootstrap)

## Getting started

```sh
pnpm add --save-dev @crackle/cli
```

Crackle will look for a `crackle.config.ts` file in the project directory, but if one doesn't exist, it will use the default configuration.

Here's how to specify a custom configuration file:

```ts
// crackle.config.ts
import { defineConfig } from '@crackle/cli/config';

export default defineConfig({
  // ...
});
```

or

```ts
// crackle.config.ts
import type { UserConfig } from '@crackle/cli/config';

export default {
  // ...
} satisfies UserConfig;
```

(the default config values are documented in the type `UserConfig`)

## Commands

You can find the full list of commands by running `crackle --help`.

The most common ones are listed below.

### `crackle package`

Compile the package for publishing.
This will compile TypeScript files to CJS- and ESM-compatible files and generate TypeScript declaration files (`.d.ts` files) for entry points.
Passing the `--fix` parameter will also run [`crackle fix`](#crackle-fix).

The default entry point is `src/index.ts`.
Multiple (nested) entry points are supported, by adding `.ts` files to `src/entries/`.

#### Entry points

Given this directory structure:

```
src
├── entries
│   ├── components.ts
│   └── themes
│       └── apac.ts
└── index.ts
```

Crackle will generate these entry points:

```
my-project (main entry point; mapped to src/index.ts)
my-project/components (mapped to src/entries/components.ts)
my-project/themes/apac (mapped to src/entries/themes/apac.ts)
```

#### Third-party CSS

If 3rd-party CSS is emitted as part of the bundling process, Crackle will generate an entry point
for it named after the package. For example:

```json
{
  "name": "my-package",
  "exports": {
    "./dist/my-package.css": "./dist/my-package.css"
  }
}
```

#### Externals

If a dependency is present in `devDependencies` (but not in `peerDependencies`) it is bundled along with the project's source code.
`dependencies`, `peerDependencies` and `optionalDependencies` are marked as external and not bundled.

#### Package mode

```bash
crackle package --mode=bundle
crackle package --mode=preserve
```

This controls how Crackle generates output files.

- `bundle` rolls up output files into as few chunks as possible (default behaviour)
- `preserve` creates separate files for all modules using the original module names as file names.
  This is similar to Rollup's [`output.preserveModules`](https://rollupjs.org/configuration-options/#output-preservemodules), but allows more fine-grained control because we hook into [`output.manualChunks`](https://rollupjs.org/configuration-options/#output-manualchunks).

The mode can also be configured via `crackle.config.ts`:

```ts
// crackle.config.ts
import { defineConfig } from '@crackle/cli/config';

export default defineConfig({
  package: {
    mode: 'preserve',
  },
});
```

#### DTS mode

Some libraries declare namespaces, which are hard/impossible to bundle.
For such cases, Crackle has an option to preserve the file structure of the generated `.d.ts` files.

```ts
// crackle.config.ts
import { defineConfig } from '@crackle/cli/config';

export default defineConfig({
  dts: {
    mode: 'preserve',
  },
});
```

- `bundle` rolls up output files into as few chunks as possible (default behaviour)
- `preserve` creates separate files for all modules using the original module names as file names.
  This is similar to Rollup's [`output.preserveModules`](https://rollupjs.org/configuration-options/#output-preservemodules).

### `crackle dev`

Generate entry points for local development.
This will generate stub entry points for local development.
Stub entry points import the source files directly instead of the compiled files.

#### Shim mode

By default, Crackle generates a `require` shim which enables the loading of TypeScript files in Node.js using a require hook.
There are situations where this is not _required_, such as when using a bundler that supports TypeScript natively, e.g. esbuild or Vite.
In these cases, the `--shim` option can be set to `none`.

```bash
crackle dev --shim=require
crackle dev --shim=none
```

- `require` generates a shim for use in Node.js (default behaviour)
- `none` doesn't generate a `require` shim

This can also be configured via `crackle.config.ts`:

```ts
// crackle.config.ts
import { defineConfig } from '@crackle/cli/config';

export default defineConfig({
  dev: {
    shim: 'none',
  },
});
```

### `crackle fix`

Updates `package.json` exports, files, [`sideEffects` field](#side-effects) and more:

- `package.json`: `"main"`, `"module"` and `"types"` are updated to point to the generated files in `dist`
- `package.json`: `"exports"` and `"files"` are updated to include generated entry points
- `package.json`: [`"sideEffects"` flag](#side-effects) is updated to match the generated files in `dist`
- `package.json`: keys are sorted using [`sort-package-json`](https://github.com/keithamus/sort-package-json)
- `.gitignore` is updated to ignore [backwards-compatible entry points](#backwards-compatible-entry-points)

## Side-effects

Crackle updates the [`sideEffects` flag][se flag] if needed.
If an entry point has side-effects (as defined via `package.json`'s `"sideEffects"` key), Crackle will update the `"sideEffects"` key to match the output path in `dist`.

[se flag]: https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free

Based on what's in `src` and the value of the flag, when running `crackle package` these things will happen:

- `.css.ts` files (and files importing them) will be placed in `dist/styles/<same-path-as-in-src>`
- files with side-effects (matching the globs defined in `"sideEffects"`) will be placed in `dist/side-effects/<same-path-as-in-src>`
- if an entry has side-effects, the `"sideEffects"` key will be updated to match the output path in `dist`

## ESM reconciliation

In the ESM build, Crackle will automatically reconcile import specifiers in the output code to point to an actual file when the imported package doesn't have an [`"exports"` field].

More details in [ESM reconciliation].

[`"exports"` field]: https://nodejs.org/api/packages.html#exports
[ESM reconciliation]: https://github.com/seek-oss/crackle/blob/master/docs/esm-reconciliation.md

## DTS bundles

Crackle will generate type declaration files (`.d.ts`) for entry points.
The same [rules for dependencies](#externals) apply here, meaning types for `devDependencies` (but not `peerDependencies`) are bundled with the project's types.

## Backwards-compatible entry points

Crackle generates backwards-compatible entry points for tools which don't support the `"exports"` field in `package.json`.
Although there is good support in bundlers and Node.js, there are still some tools that don't support it, mainly TypeScript versions below 5.0.

## Contributing

- Clone this repository
- Set up Node.js using a Node version manager of your choice
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run bootstrap script using `pnpm bootstrap`
- Run `pnpm dev` which runs [`crackle dev`](#crackle-dev) in every package or run `pnpm build` to build packages using [`crackle package`](#crackle-package)

### Self-hosting / Bootstrap

Crackle is self-hosting: it is built and tested with itself.
There's a `bootstrap` package that uses a published version of Crackle to build the packages in the monorepo.
This is done by running `pnpm bootstrap` at the root of the monorepo.

Once the bootstrap script is done, the current version of Crackle can be used to build itself.
If anything goes wrong and the bootstrap script fails, there's a fallback script to build `@crackle/core` using [unbuild](https://github.com/unjs/unbuild) by running `pnpm unbuild` in the `packages/core` directory.
