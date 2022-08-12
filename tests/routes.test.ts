import path from 'path';

import { resolveConfig } from '@crackle/core/resolve-config';
import { getAllRoutes } from '@crackle/core/route-data';

test('getAllRoutes', async () => {
  const cwd = path.join(__dirname, '../fixtures/monorepo/site');
  const config = await resolveConfig({ cwd });

  expect(await getAllRoutes(config)).toMatchInlineSnapshot(`
    [
      {
        "globalMetadata": {
          "componentName": "Details",
          "isDeprecated": true,
        },
        "path": "src/pages/details.page.tsx",
        "route": "/details",
      },
      {
        "globalMetadata": {
          "componentName": "Home",
          "isDeprecated": false,
        },
        "path": "src/pages/home.page.tsx",
        "route": "/",
      },
      {
        "globalMetadata": {
          "componentName": "Test",
          "isDeprecated": false,
        },
        "path": "src/pages/testPage.page.tsx",
        "route": "/test",
      },
      {
        "globalMetadata": {
          "componentName": "ExtraPage",
          "isDeprecated": false,
        },
        "path": "src/components/RemotePage/ErrorPage.page.tsx",
        "route": "/extra",
      },
      {
        "globalMetadata": {
          "componentName": "Remote page",
          "isDeprecated": false,
        },
        "path": "src/components/RemotePage/RemotePage.page.tsx",
        "route": "/remote/page",
      },
    ]
  `);
});
