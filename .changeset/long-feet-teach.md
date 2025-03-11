---
'@crackle/core': minor
---

`package`: CSS entrypoints are now named after the package

BREAKING CHANGE:

`vite` used to bundle CSS into a `style.css` file by default. `crackle` would then generate a `./dist/style.css` entrypoint for that file. Since `vite@6`, CSS is now bunled into a file named after the package. This means that the entrypoint for bundled CSS files is now named after the package. For example, if your package is named `my-package`, the entrypoint for the CSS file will be `./dist/my-package.css`.

Consumers may need to remove the old `./dist/style.css` entrypoint from their `package.json` files. Crackle will automatically add the new entrypoint for you.
