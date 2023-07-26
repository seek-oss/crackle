---
'@crackle/core': minor
---

Crackle now supports bundling external CSS.

This is useful when consuming packages which come with their own CSS, such as [Pure React Carousel](https://github.com/express-labs/pure-react-carousel).

External CSS can be imported with a CSS `@import` rule, similar to how you would import a JavaScript or TypeScript module:

```css
/* src/components/MyComponent/third-party.css */
@import 'package-with-styles/dist/styles.css';
```

```tsx
// src/components/MyComponent.tsx
import './third-party.css';

export const MyComponent = () => {
  // ...
};
```

Crackle will bundle all external CSS into one file and output it to the `dist` directory.
Package exports will also be updated so consumers can import the bundled CSS.
