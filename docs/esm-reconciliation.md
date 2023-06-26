# ESM reconciliation

From the TypeScript source, Crackle will produce both a CJS (CommonJS) and an ESM (ECMAScript modules) build.
In ESM, for [bare import specifiers][import specifiers] to resolve, a package must have an [`"exports"` field] in its `package.json`.
If this is not the case, then the import should point directly to an actual file, including the extension.

In the ESM build, Crackle will automatically reconcile import specifiers in the output code to point to an actual file when the imported package doesn't have an [`"exports"` field].

[`"exports"` field]: https://nodejs.org/api/packages.html#exports
[import specifiers]: https://nodejs.org/api/esm.html#import-specifiers

For example, the following code is valid in CJS, but will not work in ESM as there is no `"exports"` field.

```ts
// src/index.ts
import mapValues from 'lodash/mapValues';
```

For the ESM case, Crackle will re-write the import specifier to point to the actual file:

```js
// dist/index.cjs
const mapValues = require('lodash/mapValues');
// dist/index.mjs
import mapValues from 'lodash/mapValues.js';
```

Another scenario where bare import specifiers are used is [importing a folder] as a module, CJS will resolve the `index.js` file in the folder and ESM will not.

[importing a folder]: https://nodejs.org/api/modules.html#folders-as-modules

For example, the following code is valid in CJS, but will not work in ESM as it requires the path to the actual file.

```ts
// src/index.ts
import parse from 'autosuggest-highlight/parse';
```

Again, for the ESM case, Crackle will re-write the import specifier to point to the actual file:

```ts
// dist/index.cjs
const parse = require('autosuggest-highlight/parse');
// dist/index.mjs
import parse from 'autosuggest-highlight/parse/index.js';
```

## Reconciling peer dependencies

For libraries with peer dependencies spanning multiple major versions, it's possible that ESM support is only available beyond a particular version.
As a result, building the ESM bundle in different projects can differ in ESM compatibility, requiring Crackle to reconcile imports conditionally.

Let's have a look at an example project:

```jsonc
// package.json
{
  "name": "my-library",
  "peerDependencies": {
    "react": "^17 || ^18"
  },
  "devDependencies": {
    "react": "^18.2.0"
  }
}
```

The library supports both `react@17` and `react@18`, and is being built with `v18` as per the `devDependencies`.

```tsx
// src/Component.tsx
import * as React from 'react';
export const Component: React.FC = () => <div>Component</div>;

// dist/Component.mjs
import { jsx } from 'react/jsx-runtime';
export const Component = () =>
  /* @__PURE__ */ jsx('div', { children: 'Component' });
```

However, ESM support was only added in `v18`, therefore a consumer project with `v17` would fail to compile with the error below, as it cannot resolve the bare import specifier.

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/___/node_modules/react/jsx-runtime' imported from /___/my-project/dist/Component.mjs
Did you mean to import node_modules/react/jsx-runtime.js?
```

Crackle can be instructed to handle this via the `reconcileDependencies` option, listing the packages and versions that require ESM reconciliation.

```ts
// crackle.config.ts
import type { CrackleConfig } from '@crackle/cli';

export default {
  reconcileDependencies: {
    react: '<18',
  },
} satisfies CrackleConfig;
```

When the [semver range] specified in `reconcileDependencies` intersects the range in `peerDependencies` then Crackle will reconcile the imports specifiers from `react`.

[semver range]: https://github.com/npm/node-semver#ranges

With Crackle now reconciling `react@<18`, the ESM build will successfully resolve the import to the actual file:

```tsx
// src/Component.tsx
import * as React from 'react';
const Component: React.FC = () => <div>Component</div>;

// dist/Component.mjs
import { jsx } from 'react/jsx-runtime.js';
const Component = () => /* @__PURE__ */ jsx('div', { children: 'Component' });
```
