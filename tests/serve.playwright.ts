import path from 'path';

import type { CrackleServer } from '@crackle/core';
import { build } from '@crackle/core/build';
import { resolveConfig } from '@crackle/core/resolve-config';
import { serve } from '@crackle/core/serve';
import { test, expect } from '@playwright/test';

let server: CrackleServer;

test.beforeAll(async () => {
  const cwd = path.join(__dirname, '../fixtures/web-app');
  const config = await resolveConfig({ cwd });

  await build(config);
  server = serve({
    ...config,
    port: 10000,
  });
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
