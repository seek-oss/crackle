---
'@crackle/core': minor
---

Add a config option to [reconcile peer dependencies][reconcile] from a package:

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
