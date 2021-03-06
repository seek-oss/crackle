import path from 'path';

import { resolveConfig } from '@crackle/core/resolve-config';
import { getAllRoutes } from '@crackle/core/route-data';

test('getAllRoutes', async () => {
  const cwd = path.join(__dirname, '../fixtures/monorepo');
  const config = await resolveConfig({ cwd });

  expect(await getAllRoutes(config)).toMatchInlineSnapshot(`
Array [
  Object {
    "globalMetadata": Object {
      "componentName": "Details",
      "isDeprecated": true,
    },
    "path": "site/src/pages/details.page.tsx",
    "route": "/details",
  },
  Object {
    "globalMetadata": Object {
      "componentName": "Home",
      "isDeprecated": false,
    },
    "path": "site/src/pages/home.page.tsx",
    "route": "/",
  },
  Object {
    "globalMetadata": Object {
      "componentName": "Test",
      "isDeprecated": false,
    },
    "path": "site/src/pages/testPage.page.tsx",
    "route": "/test",
  },
  Object {
    "globalMetadata": Object {
      "componentName": "ExtraPage",
      "isDeprecated": false,
    },
    "path": "site/src/components/RemotePage/ErrorPage.page.tsx",
    "route": "/extra",
  },
  Object {
    "globalMetadata": Object {
      "componentName": "Remote page",
      "isDeprecated": false,
    },
    "path": "site/src/components/RemotePage/RemotePage.page.tsx",
    "route": "/remote/page",
  },
]
`);
});
