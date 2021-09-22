---
'@crackle/core': minor
---

Strip route data from pages files in client builds

This will make sure `routeData` dependencies don't end up in the client bundle, as well as allowing react fast-refresh to work on `.page.tsx` files in development.
