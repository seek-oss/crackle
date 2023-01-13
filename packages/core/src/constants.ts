export const clientEntry = require.resolve('../entries/client.tsx');

export const distDir = 'dist';
export const stylesDir = 'styles';
export const sideEffectsDir = 'side-effects';

export const sideEffectsFlag = `${distDir}/${sideEffectsDir}/**`;

export const siteBuild = {
  outDir: distDir,
  rendererDir: 'dist-render',
} as const;
