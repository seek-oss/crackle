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
export type AppShell<MetadataType extends Record<string, any> | void = void> =
  React.FC<
    React.PropsWithChildren<
      MetadataType extends void
        ? unknown
        : { routeMetadata: Record<RoutePath, MetadataType> }
    >
  >;

export interface CrackleServer {
  url: string;
  close: () => Promise<void>;
}

export type PackageEntryPoint = {
  isDefaultEntry: boolean;
  entryName: string;
  entryPath: string;
  outputDir: string;
  packageDir: string;
  getOutputPath: (format: Format, opts?: { from?: string }) => string;
};
