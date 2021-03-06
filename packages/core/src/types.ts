import type React from 'react';
import type { InlineConfig } from 'vite';

export type ValueType<T> = T extends Promise<infer U> ? U : T;
export type GetArrayType<T> = T extends Array<infer U> ? U : never;

export type ManualChunksFn = NonNullable<
  GetArrayType<
    NonNullable<
      NonNullable<NonNullable<InlineConfig['build']>['rollupOptions']>['output']
    >
  >['manualChunks']
>;

type RoutePath = string;
export type AppShell<
  MetadataType extends Record<string, any> | undefined = undefined,
> = MetadataType extends undefined
  ? React.FC
  : React.FC<{
      routeMetadata: Record<RoutePath, MetadataType>;
    }>;

export interface CrackleServer {
  url: string;
  close: () => Promise<void>;
}

interface DefaultPackageEntryPoint {
  isDefaultEntry: true;
  entryPath: string;
  outputDir: string;
}

interface OtherPackageEntryPoint {
  isDefaultEntry: false;
  entryPath: string;
  outputDir: string;
  entryName: string;
}

export type PackageEntryPoint =
  | DefaultPackageEntryPoint
  | OtherPackageEntryPoint;
