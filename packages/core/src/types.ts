import type React from 'react';

export type { PackageJson } from 'type-fest';

export type Format = 'esm' | 'cjs' | 'dts';

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
  getOutputPath: (format: Format, options?: { from?: string }) => string;
};
