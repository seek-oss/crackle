import type { RouteData } from './types';

export interface CrackleContext {
  site: 'en' | 'jobsdb';
}

type ContextCallback<T> = (crackleContext: CrackleContext) => RouteData<T>;

interface CreateRouteData {
  <T>(routeData: RouteData<T>): ContextCallback<T>;
  <T>(contextCallback: ContextCallback<T>): ContextCallback<T>;
}

export const createRouteData: CreateRouteData = (input) => {
  if (typeof input === 'function') {
    return input;
  }

  return () => input;
};
