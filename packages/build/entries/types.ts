import type { RouteData } from '@crackle/router';
import type React from 'react';
import type { Manifest } from 'vite';

export type RenderAllPagesFn = (
  manifest: Manifest,
  publicPath: string,
) => Array<{ route: string; html: string }>;

interface RenderParams {
  path: string;
  entry: string;
}
export type RenderPageFn = (params: RenderParams) => Promise<string>;
export type RenderDevPageFn = (
  params: RenderParams,
) => Promise<{ html: string; routes: string[] }>;

export type RouteDataFn<Metadata extends Record<string, any>> =
  () => RouteData<Metadata>;

export interface PageModule {
  routeData: RouteDataFn<Record<string, unknown>>;
  default: React.FC;
}

type Route = string;
export type RouteMetadata = Record<Route, Record<string, unknown>>;

export type RouteMap = Record<
  Route,
  {
    pageName: string;
    globalMetadata?: Record<string, unknown>;
  }
>;

export interface PageData {
  routeMap: RouteMap;
}
