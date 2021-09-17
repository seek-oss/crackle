import type { PageModule } from '../types';

type PageModules = Record<string, PageModule>;

// @ts-expect-error
const remotePageModules: PageModules = import.meta.globEager('/__PAGE_ROOTS');

export const nodePageModules: PageModules = {
  ...remotePageModules,
};
