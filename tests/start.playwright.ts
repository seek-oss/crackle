import path from 'path';

import type { CrackleServer } from '@crackle/core';
import { start as startCrackle } from '@crackle/core/start';
import { resolveConfig } from '@crackle/core/resolve-config';
import { test, expect } from '@playwright/test';

let server: CrackleServer;

test.beforeAll(async () => {
  const cwd = path.join(__dirname, '../fixtures/web-app');
  const config = await resolveConfig({ cwd });
  server = await startCrackle({
    ...config,
    port: 9000,
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
