---
'@crackle/core': minor
---

Handle Vocab translation files

Crackle now produces an output that is compatible with the Vocab Webpack plugin.
When packaging, Crackle will ensure that the `translation.json` files are present in the output directory, next to the generated translation files.
This allows the Vocab plugin to still work with compiled (CJS/ESM) translation files.
