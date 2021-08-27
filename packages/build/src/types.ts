import React from 'react';
import { Manifest } from 'vite';

interface RenderParams {
  path: string;
}

export type RenderFn = (
  params: RenderParams,
) => {
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

export type RenderAllPagesFn = (
  manifest: Manifest,
) => Array<{ route: string; html: string }>;

export type ValueType<T> = T extends Promise<infer U> ? U : T;
export type GetArrayType<T> = T extends Array<infer U> ? U : never;
