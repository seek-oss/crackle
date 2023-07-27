---
'@crackle/core': patch
---

Correctly resolve module exports when running `crackle dev`

This fixes an issue where `crackle dev` would not resolve an entry's exports when the entry re-exported from another module using `export * from ...` syntax.
