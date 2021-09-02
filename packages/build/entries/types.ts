import type React from 'react';
import type { Manifest } from 'vite';

interface RenderParams {
  path: string;
}

export type RenderAllPagesFn = (
  manifest: Manifest,
  publicPath: string,
) => Array<{ route: string; html: string }>;

export type RenderFn = (params: RenderParams) => {
  html: string;
  pageData: Record<string, string>;
};

export type RouteDataFn = () => {
  route: string;
};

export interface PageModule {
  routeData: RouteDataFn;
  default: React.FC;
}
