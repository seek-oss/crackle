import { resolveFromCrackle } from './utils/resolve-from';

export const clientEntry = resolveFromCrackle('./entries/client.tsx');

export const srcDir = 'src';
// the result of `crackle package` (compiled JS files) goes here
export const distDir = 'dist';
// pre-compiled vanilla-extract files go here
export const stylesDir = 'styles';
// JS files with side-effects go here
export const sideEffectsDir = 'side-effects';

export const siteBuild = {
  // HTML, JS and CSS files go here
  outDir: distDir,
  // temporary files created while building the site
  rendererDir: 'dist-render',
} as const;
