---
'@crackle/core': minor
---

Build ESM and CJS bundles simultaneously and run DTS build once for all entries.

This means building Braid is now twice as fast.

#### `@crackle/cli@0.10.8`

```
➜ hyperfine "nr build"
Benchmark 1: nr build
  Time (mean ± σ):     28.016 s ±  0.630 s    [User: 39.951 s, System: 5.235 s]
  Range (min … max):   26.568 s … 28.737 s    10 runs
```

#### This release

```
➜ hyperfine "nr build"
Benchmark 1: nr build
  Time (mean ± σ):     13.141 s ±  0.448 s    [User: 19.233 s, System: 2.623 s]
  Range (min … max):   12.614 s … 14.199 s    10 runs
```
