import { cpus } from 'os';

import type { PlaywrightTestConfig } from '@playwright/test';

// Prevent Vite from attempting to clear the screen
process.stdout.isTTY = false;

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: '**/*.playwright.ts',
  workers: process.env.CI ? cpus().length : undefined,
  retries: process.env.CI ? 2 : 0,
};

export default config;
