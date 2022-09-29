import { fs, vol } from 'memfs';
import { expect, test, vi } from 'vitest';

import { getPackageEntryPoints } from './get-packages';

vi.mock('fs', () => ({ default: fs }));

test('getPackageEntryPoints', async () => {
  const packageRoot = '/fixtures/multi-entry';

  vol.reset();
  vol.fromJSON(
    {
      'src/index.ts': '',
      'src/entries/components.ts': '',
      'src/entries/extras.ts': '',
      'src/entries/themes/apac.ts': '',
    },
    packageRoot,
  );

  const entryPoints = await getPackageEntryPoints({
    packageRoot,
  });

  expect(entryPoints).toMatchInlineSnapshot(`
    [
      {
        "entryName": "dist",
        "entryPath": "/fixtures/multi-entry/src/index.ts",
        "getOutputPath": [Function],
        "isDefaultEntry": true,
        "outputDir": "/fixtures/multi-entry/dist",
      },
      {
        "entryName": "components",
        "entryPath": "/fixtures/multi-entry/src/entries/components.ts",
        "getOutputPath": [Function],
        "isDefaultEntry": false,
        "outputDir": "/fixtures/multi-entry/components",
      },
      {
        "entryName": "extras",
        "entryPath": "/fixtures/multi-entry/src/entries/extras.ts",
        "getOutputPath": [Function],
        "isDefaultEntry": false,
        "outputDir": "/fixtures/multi-entry/extras",
      },
      {
        "entryName": "themes/apac",
        "entryPath": "/fixtures/multi-entry/src/entries/themes/apac.ts",
        "getOutputPath": [Function],
        "isDefaultEntry": false,
        "outputDir": "/fixtures/multi-entry/themes/apac",
      },
    ]
  `);
});
