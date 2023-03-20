---
'@crackle/core': minor
---

Create an `index.d.ts` redirect for backwards-compatible entry points.

This prevents VS Code from auto-importing entry points from `dist/`. For example, wanting to use [Braid's CSS variables](https://seek-oss.github.io/braid-design-system/css/vars) (`vars`) VS Code would suggest `braid-design-system/dist/css` instead of `braid-design-system/css`.
