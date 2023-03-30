---
'@crackle/core': minor
---

Enhance `crackle dev` with a "passive watcher".

This is a powerful feature that speeds up the feedback loop in development and testing. When running `crackle dev` in a package Crackle will create stub entries for CJS and ESM that loads code directly from the `src` folder, without needing to build the package first.
