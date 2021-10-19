import type { RouteData } from './types';

export interface CrackleContext {
  site: 'en' | 'jobsdb';
}

type ContextCallback<T> = (crackleContext: CrackleContext) => RouteData<T>;

interface CreateRouteData {
  <T>(routeData: RouteData<T>): RouteData<T>;
  <T>(contextCallback: ContextCallback<T>): RouteData<T>;
}

export const createRouteData: CreateRouteData = (input) => {
  const fakeContext = { site: 'en' } as const;

  if (typeof input === 'function') {
    return input(fakeContext);
  }

  return input;
};
