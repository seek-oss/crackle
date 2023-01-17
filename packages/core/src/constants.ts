export const clientEntry = require.resolve('../entries/client.tsx');

export const srcDir = 'src';
export const distDir = 'dist';
export const stylesDir = 'styles';
export const sideEffectsDir = 'side-effects';

export const siteBuild = {
  outDir: distDir,
  rendererDir: 'dist-render',
} as const;
