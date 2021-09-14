import { PageModule } from '../types';

type PageModules = Record<string, () => Promise<PageModule>>;
// @ts-expect-error
const remotePageModules: PageModules = import.meta.glob(
  `/{__PAGE_ROOTS}/**/*.page.tsx`,
);

console.log('remotePageModules Browser: ', remotePageModules);
console.log(
  '`/{__PAGE_ROOTS}/**/*.page.tsx`: ',
  `/{__PAGE_ROOTS}/**/*.page.tsx`,
);
export const browserPageModules: PageModules = {
  ...remotePageModules,
};
