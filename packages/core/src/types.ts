import type React from 'react';
import type { InlineConfig } from 'vite';

export type { PackageJson } from 'type-fest';

export type Format = 'esm' | 'cjs' | 'dts';

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

export type PackageEntryPoint = {
  isDefaultEntry: boolean;
  entryName: string;
  entryPath: string;
  outputDir: string;
  getOutputPath: (format: Format) => string;
};
