import path from 'path';

import { build, serve, CrackleServer, PartialConfig } from '@crackle/build';
import { test, expect } from '@playwright/test';

let server: CrackleServer;

test.beforeAll(async () => {
  const config: PartialConfig = {
    root: path.join(__dirname, '../fixtures/web-app'),
    port: 10000,
  };

  await build(config);
  server = serve(config);
});

test.afterAll(async () => {
  await server.close();
});

['/', '/details', '/remote/page'].forEach((route) => {
  test(`should return valid page: ${route}`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => {
      errors.push(error);
    });

    const response = await page.goto(`${server.url}${route}`, {
      waitUntil: 'networkidle',
    });

    await expect(response.status()).toBe(200);
    await expect(errors).toEqual([]);
  });
});
