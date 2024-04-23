---
'@crackle/core': patch
---

Fix a bug caused by newer versions of `rollup-plugin-node-externals`

We were assuming that `rollup-plugin-node-externals` hooks would always be functions, but they can be objects too. We now check for this at runtime.
