---
'@crackle/core': minor
---

Add a `package.mode` config option with choices `preserve` and `bundle` (default)

This controls how Crackle generates output files:

- `bundle` rolls up output files into as few chunks as possible
- `preserve` creates separate files for all modules using the original module names as file names
