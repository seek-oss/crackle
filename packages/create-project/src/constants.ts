export const templates = [
  { label: 'Site', value: 'site' },
  { label: 'Package', value: 'package' },
  { label: 'Monorepo - packages', value: 'monorepo-packages' },
  { label: 'Monorepo - packages and site', value: 'monorepo-mixed' },
] as const;

export type TemplateId = typeof templates[number]['value'];
