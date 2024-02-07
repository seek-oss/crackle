---
'@crackle/cli': minor
---

Add a `crackle dev --shim` option with choices `none` and `require` (default)

The `--webpack` option has been removed from the `dev` command in favour of the more generic `--shim` option.

Consumers should migrate to use `--shim=none` as follows:

```diff
-crackle dev --webpack
+crackle dev --shim=none
```
