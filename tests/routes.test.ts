import { resolveConfig } from '@crackle/core/resolve-config';
import { getAllRoutes } from '@crackle/core/route-data';
import fixturez from 'fixturez';
import { expect, test } from 'vitest';

const f = fixturez(__dirname);

test('getAllRoutes', async () => {
  const config = await resolveConfig({ cwd: f.find('braid-site') });

  expect(await getAllRoutes(config)).toMatchInlineSnapshot(`
    [
      {
        "path": "src/details.page.tsx",
        "route": "/details",
      },
      {
        "path": "src/home.page.tsx",
        "route": "/",
      },
    ]
  `);
});
