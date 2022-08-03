# Package Compilation Strategy

Crackle compiles packages into a particular format to enable as much dual ESM/CJS compatibility as possible, especially when it comes to working with subpath exports.
This strategy has two major parts: the output structure, and the exports field.

## TL;DR

To support everything, crackle:

- generates a [preconstruct] style directory structure for outputs
- sets the main and module keys in package.json
- generates and sets the exports key with both import and require conditions, for all default and subpath entrypoints as well as package.json
- sets the types key at the top level and within exports conditions

This supports:

- TypeScript loading types in regular CJS mode (with the output structure)
- TypeScript loading types in the new `node16` ESM module resolution mode (by putting `types` in the exports field)
- Node and bundlers loading subpath imports in CJS mode (with the output structure)
- Node and bundlers loading subpath imports in ESM mode (with the exports field)

## Output Structure

To support subpath exports in the commonjs world, crackle outputs the build artefacts into a structure heavily inspired by [preconstruct].
There are two types of entrypoints to consider here:

- default entrypoints, which are imported/required just with the name of the package
- subpath entrypoints, which have `/some-sub-path` after the package name in an import/require (e.g. `import { something } from 'my-package/something'`)

[preconstruct]: https://preconstruct.tools/

### Default entrypoint

There is only one default entrypoint per package, and should point to the code that is accessible by importing the package name (`import { something } from 'my-package'`).

The existing standard for this was to use the [`main` key][mainkey] in the package.json to point to the right file for this.

In the early days of ES modules, bundlers adopted the [`module` key][modulekey] to point to the ESM version of a build, although Node doesn't understand it.

```json
{
  // package.json
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js"
}
```

Now that Node has a spec for ESM, the `exports` key should be used to define the entrypoints of a package, and the default can be referenced with `"."`.

```json
{
  // package.json
  "exports": {
    ".": "./dist/index.cjs.js"
  }
}
```

[mainkey]: https://docs.npmjs.com/cli/v8/configuring-npm/package-json#main
[modulekey]: https://nodejs.org/api/packages.html#dual-commonjses-module-packages
