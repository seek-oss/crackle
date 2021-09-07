export interface RouteData<MetadataType extends Record<string, any>> {
  route: string;
  globalMetadata?: MetadataType;
}
