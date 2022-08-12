import path from 'path';

import type { CrackleServer } from '@crackle/core';
import { resolveConfig } from '@crackle/core/resolve-config';
import { start as startCrackle } from '@crackle/core/start';
import { test, expect } from '@playwright/test';

const serverTest = test.extend<
  Record<never, unknown>,
  { server: CrackleServer }
>({
  server: [
    async ({}, use) => {
      const cwd = path.join(__dirname, '../fixtures/monorepo/site');
      const config = await resolveConfig({ cwd });
      const server = await startCrackle({
        ...config,
        port: 9000,
      });
      await use(server);

      await server.close();
    },
    { scope: 'worker' },
  ],
});

['/', '/details', '/remote/page'].forEach((route) => {
  serverTest(`should return valid page: ${route}`, async ({ page, server }) => {
    const errors: Error[] = [];
    page.on('pageerror', (error) => {
      errors.push(error);
    });

    const response = await page.goto(`${server.url}${route}`, {
      waitUntil: 'networkidle',
    });

    expect(response!.status()).toBe(200);
    expect(errors).toEqual([]);
  });
});
