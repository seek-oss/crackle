import type { RouteData } from './types';

export interface CrackleContext {
  site: 'en' | 'jobsdb';
}

type RouteDataFunction<T> = (crackleContext: CrackleContext) => RouteData<T>;

interface CreateRouteData {
  <T>(routeData: RouteData<T>): RouteDataFunction<T>;
  <T>(contextCallback: RouteDataFunction<T>): RouteDataFunction<T>;
}

export const createRouteData: CreateRouteData = (input) => {
  if (typeof input === 'function') {
    return input;
  }

  return () => input;
};
