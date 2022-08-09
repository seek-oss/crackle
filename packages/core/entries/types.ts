import type { Manifest } from 'vite';

export type RenderAllPagesFn = (
  manifest: Manifest,
  publicPath: string,
) => Promise<Array<{ route: string; html: string }>>;

interface RenderParams {
  path: string;
  entry: string;
}
export type RenderDevPageFn = (
  params: RenderParams,
) => Promise<{ html: string; routes: string[]; statusCode: number }>;

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
