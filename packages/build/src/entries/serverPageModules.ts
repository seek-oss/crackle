import type { PageModule } from '../types';

type PageModules = Record<string, PageModule>;
// @ts-expect-error
export const serverPageModules: PageModules = import.meta.globEager([
  '/src/pages/*.tsx',
  'src/**/*.page.tsx',
]);
