---
'@crackle/core': minor
---

Add a config option to [always patch imports][patch imports] from a package:

[patch imports]: https://github.com/seek-oss/crackle/blob/master/docs/patch-imports.md

```ts
// crackle.config.ts
import type { CrackleConfig } from '@crackle/core';

export default {
  esmAlwaysPatchImports: {
    react: '<18',
  },
} satisfies CrackleConfig;
```
