import type { RouteData } from './types';

export interface CrackleContext {
  site: 'en' | 'jobsdb';
}

type ContextCallback<T> = (crackleContext: CrackleContext) => RouteData<T>;

export const createRouteData = <T>(contextCallback: ContextCallback<T>) =>
  contextCallback;
