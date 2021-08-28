import type { PageModule } from '../types';

type PageModules = Record<string, PageModule>;
// @ts-expect-error
const pageDirModules: PageModules = import.meta.globEager('/src/pages/*.tsx');
// @ts-expect-error
const remotePageModules: PageModules = import.meta.globEager(
  '/src/**/*.page.tsx',
);

export const serverPageModules: PageModules = {
  ...pageDirModules,
  ...remotePageModules,
};
