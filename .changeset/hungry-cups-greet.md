---
'@crackle/core': minor
---

Update `"sideEffects"` flag if needed.

If an entry point has side-effects (as defined via the **package.json**'s `"sideEffects"` key) Crackle will update the `"sideEffects"` key so it also matches the output path in `dist`.
