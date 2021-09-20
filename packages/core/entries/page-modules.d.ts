/* eslint-disable import/order */
declare module '__NODE_PAGE_MODULES' {
  import type { RouteData } from '@crackle/router';
  import type React from 'react';

  type RouteDataFn<Metadata extends Record<string, any>> =
    () => RouteData<Metadata>;

  interface PageModule {
    routeData: RouteDataFn<Record<string, unknown>>;
    default: React.FC;
  }
  const pageModules: Record<string, PageModule>;

  export default pageModules;
}

declare module '__BROWSER_PAGE_MODULES' {
  import type { RouteData } from '@crackle/router';
  import type React from 'react';

  type RouteDataFn<Metadata extends Record<string, any>> =
    () => RouteData<Metadata>;

  interface PageModule {
    routeData: RouteDataFn<Record<string, unknown>>;
    default: React.FC;
  }
  const pageModules: Record<string, () => Promise<PageModule>>;

  export default pageModules;
}
