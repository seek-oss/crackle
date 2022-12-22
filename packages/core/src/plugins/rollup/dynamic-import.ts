import type { Plugin } from 'rollup';

import type { Format } from '../../types';

export const dynamicImport = (format: Format): Plugin => ({
  name: 'crackle:resolve-dynamic-imports',
  renderDynamicImport() {
    if (format === 'cjs') return { left: 'import(', right: ')' };
  },
});
