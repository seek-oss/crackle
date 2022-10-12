import type { RouteData } from './types';

export interface CrackleContext {
  site: 'en' | 'jobsdb';
}

type RouteDataFunction<T extends Record<string, any>> = (
  crackleContext: CrackleContext,
) => RouteData<T>;

interface CreateRouteData {
  <T extends Record<string, any>>(
    routeData: RouteData<T>,
  ): RouteDataFunction<T>;
  <T extends Record<string, any>>(
    contextCallback: RouteDataFunction<T>,
  ): RouteDataFunction<T>;
}

export const createRouteData: CreateRouteData = (input) => {
  if (typeof input === 'function') {
    return input;
  }

  return () => input;
};
