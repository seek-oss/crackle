import type { PlaywrightTestConfig } from '@playwright/test';

// Prevent Vite from attempting to clear the screen
process.stdout.isTTY = false;

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: '**/*.playwright.ts',
};

export default config;
