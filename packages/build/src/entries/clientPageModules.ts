import { PageModule } from '../types';

type PageModules = Record<string, () => Promise<PageModule>>;
// @ts-expect-error
export const clientPageModules: PageModules = import.meta.glob(
  '/src/pages/*.tsx',
);
