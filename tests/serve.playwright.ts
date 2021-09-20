import path from 'path';

import type { CrackleServer } from '@crackle/core';
import { build } from '@crackle/core/build';
import { resolveConfig } from '@crackle/core/resolve-config';
import { serve } from '@crackle/core/serve';
import { test, expect } from '@playwright/test';

const serverTest = test.extend<
  Record<never, unknown>,
  { server: CrackleServer }
>({
  server: [
    async ({}, use) => {
      const cwd = path.join(__dirname, '../fixtures/web-app');
      const config = await resolveConfig({ cwd });

      await build(config);
      const server = await serve({
        ...config,
        port: 10000,
      });
      await use(server);

      await server.close();
    },
    { scope: 'worker' },
  ],
});

['/', '/details', '/remote/page'].forEach((route) => {
  serverTest(`should return valid page: ${route}`, async ({ page, server }) => {
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
