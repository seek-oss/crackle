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
export type AppShell<MetadataType extends Record<string, any>> = React.FC<{
  routeMetadata: Record<RoutePath, MetadataType>;
}>;

export interface CrackleServer {
  url: string;
  close: () => Promise<void>;
}
