---
'@crackle/cli': patch
---

Re-export `CrackleConfig` and `defineConfig` so that they can be used in `crackle.config.ts` without adding `@crackle/core` as a dependency

```ts
// crackle.config.ts
import { defineConfig } from '@crackle/cli/config';

export default defineConfig({
  // ...
});
```
