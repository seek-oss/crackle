import type React from 'react';

export type { PackageJson } from 'type-fest';

export type PartialDeep<T> = T extends object
  ? {
      [P in keyof T]?: PartialDeep<T[P]>;
    }
  : T;

export type Format = 'cjs' | 'esm' | 'dts' | 'dtsm';

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

export interface PackageEntryPoint {
  isDefaultEntry: boolean;
  entryName: string;
  entryPath: string;
  outputDir: string;
  packageDir: string;
  getOutputPath: (format: Format, options?: { from?: string }) => string;
}
