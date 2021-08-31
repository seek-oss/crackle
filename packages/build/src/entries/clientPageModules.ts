import { PageModule } from '../types';

type PageModules = Record<string, () => Promise<PageModule>>;
// @ts-expect-error
const pageDirModules: PageModules = import.meta.glob('/src/pages/*.tsx');
// @ts-expect-error
const remotePageModules: PageModules = import.meta.glob('/src/**/*.page.tsx');

export const clientPageModules: PageModules = {
  ...pageDirModules,
  ...remotePageModules,
};
