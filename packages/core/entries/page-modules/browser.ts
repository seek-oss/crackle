import type { PageModule } from '../types';

type PageModules = Record<string, () => Promise<PageModule>>;
// @ts-expect-error
const remotePageModules: PageModules = import.meta.glob('__PAGE_ROOTS');

export const browserPageModules: PageModules = {
  ...remotePageModules,
};
