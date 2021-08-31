interface Entrypoint {
  source: string;
}

export interface Package {
  entrypoints: Entrypoint[];
  directory: string;
  name: string;
}
