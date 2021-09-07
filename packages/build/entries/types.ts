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

export type RouteDataFn = () => {
  route: string;
};

export interface PageModule {
  routeData: RouteDataFn;
  default: React.FC;
}
