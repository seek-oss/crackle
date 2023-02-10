### Default behaviour

In the ESM (ECMAScript modules) build, Crackle will patch [import specifiers] in the output code so they point to an actual file when the imported package doesn't have an [`"exports"` field].

[`"exports"` field]: https://nodejs.org/api/packages.html#exports
[import specifiers]: https://nodejs.org/api/esm.html#import-specifiers

For example, this code

```ts
// src/index.ts
import mapValues from 'lodash/mapValues';
```

is valid in CommonJS but will not work in ESM and needs to be patched. It doesn't work because the package doesn't have an `"exports"` field the bare specifier needs to be patched to point to an actual file (including the extension).

Crackle will output:

```js
// dist/index.cjs
const mapValues = require('lodash/mapValues');
// dist/index.mjs
import mapValues from 'lodash/mapValues.js';
```

Another example, in which the code relies on [importing a folder] as a module:

[importing a folder]: https://nodejs.org/api/modules.html#folders-as-modules

```ts
// src/index.ts
import parse from 'autosuggest-highlight/parse';

// dist/index.cjs
const parse = require('autosuggest-highlight/parse');
// dist/index.mjs
import parse from 'autosuggest-highlight/parse/index.js';
```

### Overriding the default behaviour

However, there are cases where you may want to patch the import specifier even when a package has an `"exports"` field.

Consider this project setup:

```jsonc
// package.json
{
  "name": "my-project",
  "devDependencies": {
    "react": "^18.2.0"
  },
  "peerDependencies": {
    "react": "^17 || ^18"
  }
}
```

```tsx
// src/App.tsx
import * as React from 'react';
const App: React.FC = () => <div>App</div>;

// dist/App.mjs
import { jsx } from 'react/jsx-runtime';
const App = () => /* @__PURE__ */ jsx('div', { children: 'App' });
```

This code looks fine. The project has a dev dependency on `react@18.2.0` which has an an `"exports"` field for `jsx-runtime`, so no patching is necessary.
**However**, when the library is used in a project with `react@17` (as per the project's `peerDependencies`) Node.js will crash with the following error:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/___/node_modules/react/jsx-runtime' imported from /___/my-project/dist/App.mjs
Did you mean to import node_modules/react/jsx-runtime.js?
```

That's because `react@17` **does not** have an `"exports"` field but `react@18` does, and we're compiling against `react@18` since that's what's in our `devDependencies`.

Overriding the default behaviour is done by specifying a [semver range] in `crackle.config.ts`:

[semver range]: https://github.com/npm/node-semver#ranges

```ts
// crackle.config.ts
import type { CrackleConfig } from '@crackle/core';

export default {
  esmAlwaysPatchImports: {
    react: '<18',
  },
} satisfies CrackleConfig;
```

If there is an intersection between the semver range in `peerDependencies` and `esmAlwaysPatchImports` then Crackle will always patch imports from that package.

With the new config:

```tsx
// src/App.tsx
import * as React from 'react';
const App: React.FC = () => <div>App</div>;

// dist/App.mjs
import { jsx } from 'react/jsx-runtime.js';
const App = () => /* @__PURE__ */ jsx('div', { children: 'App' });
```
