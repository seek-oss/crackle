import { describe, expect, test } from 'vitest';

import { moduleHasSideEffects } from './side-effects';

describe('moduleHasSideEffects', () => {
  const srcFiles = [
    'src/index.ts',
    'src/entries/reset.ts',
    'src/lib/atoms/atomicProperties.ts',
    'src/lib/atoms/atoms.ts',
    'src/lib/atoms/sprinkles.css.ts',
    'src/lib/breakpoints.ts',
    'src/lib/reset/index.ts',
    'src/lib/reset/reset.css.ts',
    'src/lib/reset/resetTracker.ts',
    'src/lib/themes/makeVanillaTheme.ts',
    'src/lib/themes/palette.ts',
    'src/lib/themes/super/deep/tokens.ts',
    'src/lib/themes/vars.css.ts',
  ];
  const distFiles = [
    'dist/Box.chunk.cjs',
    'dist/Box.chunk.mjs',
    'dist/css-more.cjs',
    'dist/css-more.mjs',
    'dist/css.cjs',
    'dist/css.mjs',
    'dist/index.cjs',
    'dist/index.mjs',
    'dist/reset.cjs',
    'dist/reset.mjs',
    'dist/side-effects/lib/atoms/atomicProperties.cjs',
    'dist/side-effects/lib/atoms/atomicProperties.mjs',
    'dist/side-effects/lib/atoms/atoms.cjs',
    'dist/side-effects/lib/atoms/atoms.mjs',
    'dist/side-effects/lib/reset/index.cjs',
    'dist/side-effects/lib/reset/index.mjs',
    'dist/side-effects/lib/reset/resetTracker.cjs',
    'dist/side-effects/lib/reset/resetTracker.mjs',
    'dist/side-effects/lib/themes/makeVanillaTheme.cjs',
    'dist/side-effects/lib/themes/makeVanillaTheme.mjs',
    'dist/side-effects/lib/themes/palette.cjs',
    'dist/side-effects/lib/themes/palette.mjs',
    'dist/side-effects/lib/themes/super/deep/path/tokens.cjs',
    'dist/side-effects/lib/themes/super/deep/path/tokens.mjs',
    'dist/styles/lib/atoms/sprinkles.css.cjs',
    'dist/styles/lib/atoms/sprinkles.css.mjs',
    'dist/styles/lib/reset/reset.css.cjs',
    'dist/styles/lib/reset/reset.css.mjs',
    'dist/styles/lib/themes/vars.css.cjs',
    'dist/styles/lib/themes/vars.css.mjs',
  ];
  const packageSideEffects = [
    // from src
    'src/entries/reset.*',
    // from dist
    'dist/reset.*',
    'dist/side-effects/**',
    // from either
    '**/atoms/**',
    '**/playroom/**',
    '**/reset/**',
    '**/themes/**',
    '*.css.*',
  ];

  test('files from src', () => {
    const srcSideEffects = srcFiles.filter((file) =>
      moduleHasSideEffects(file, packageSideEffects),
    );

    expect(srcSideEffects).toMatchInlineSnapshot(`
      [
        "src/entries/reset.ts",
        "src/lib/atoms/atomicProperties.ts",
        "src/lib/atoms/atoms.ts",
        "src/lib/atoms/sprinkles.css.ts",
        "src/lib/reset/index.ts",
        "src/lib/reset/reset.css.ts",
        "src/lib/reset/resetTracker.ts",
        "src/lib/themes/makeVanillaTheme.ts",
        "src/lib/themes/palette.ts",
        "src/lib/themes/super/deep/tokens.ts",
        "src/lib/themes/vars.css.ts",
      ]
    `);
  });

  test('files from dist', () => {
    const distSideEffects = distFiles.filter((file) =>
      moduleHasSideEffects(file, packageSideEffects),
    );

    expect(distSideEffects).toMatchInlineSnapshot(`
      [
        "dist/reset.cjs",
        "dist/reset.mjs",
        "dist/side-effects/lib/atoms/atomicProperties.cjs",
        "dist/side-effects/lib/atoms/atomicProperties.mjs",
        "dist/side-effects/lib/atoms/atoms.cjs",
        "dist/side-effects/lib/atoms/atoms.mjs",
        "dist/side-effects/lib/reset/index.cjs",
        "dist/side-effects/lib/reset/index.mjs",
        "dist/side-effects/lib/reset/resetTracker.cjs",
        "dist/side-effects/lib/reset/resetTracker.mjs",
        "dist/side-effects/lib/themes/makeVanillaTheme.cjs",
        "dist/side-effects/lib/themes/makeVanillaTheme.mjs",
        "dist/side-effects/lib/themes/palette.cjs",
        "dist/side-effects/lib/themes/palette.mjs",
        "dist/side-effects/lib/themes/super/deep/path/tokens.cjs",
        "dist/side-effects/lib/themes/super/deep/path/tokens.mjs",
        "dist/styles/lib/atoms/sprinkles.css.cjs",
        "dist/styles/lib/atoms/sprinkles.css.mjs",
        "dist/styles/lib/reset/reset.css.cjs",
        "dist/styles/lib/reset/reset.css.mjs",
        "dist/styles/lib/themes/vars.css.cjs",
        "dist/styles/lib/themes/vars.css.mjs",
      ]
    `);
  });
});
