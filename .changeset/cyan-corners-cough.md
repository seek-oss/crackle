---
'@crackle/core': patch
---

Fix compatibility with Node 24

Wrap async operations in `context.run()` to ensure `AsyncLocalStorage` context propagates correctly across async boundaries.
