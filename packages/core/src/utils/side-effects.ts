import glob2regexp from 'glob-to-regexp';

import type { PackageJson } from '../types';

const globToRegexpCache = new Map<string, RegExp>();

const globToRegexp = (glob: string, cache: Map<string, RegExp>) => {
  const cacheEntry = cache.get(glob);
  if (cacheEntry !== undefined) return cacheEntry;
  if (!glob.includes('/')) {
    // eslint-disable-next-line no-param-reassign
    glob = `**/${glob}`;
  }
  const baseRegexp = glob2regexp(glob, { globstar: true, extended: true });
  const regexpSource = baseRegexp.source;
  // regexpSource starts with ^
  const regexp = new RegExp(`^(\\./)?${regexpSource.slice(1)}`);
  cache.set(glob, regexp);
  return regexp;
};

export const moduleHasSideEffects = (
  moduleName: string,
  flagValue: PackageJson['sideEffects'] | string,
  cache = globToRegexpCache,
): boolean => {
  switch (typeof flagValue) {
    case 'undefined':
      return true;
    case 'boolean':
      return flagValue;
    case 'string':
      return globToRegexp(flagValue, cache).test(moduleName);
    case 'object':
      return Array.from(flagValue).some((glob) =>
        moduleHasSideEffects(moduleName, glob, cache),
      );
  }
};
