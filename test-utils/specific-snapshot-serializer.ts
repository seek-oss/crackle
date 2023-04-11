import { afterAll, expect } from 'vitest';

import stringSerializer from './string-serializer';

export function addSerializer() {
  // provide Vitest globals for `jest-specific-snapshot`
  const globalAny: any = global;
  globalAny.afterAll = afterAll;
  globalAny.expect = expect;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('jest-specific-snapshot').addSerializer(stringSerializer);
}
