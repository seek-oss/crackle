import cjsDirIndex from 'autosuggest-highlight/parse';
import cjsFauxEsm from 'react-keyed-flatten-children';

import scopedSubpath from '@crackle-fixtures/dep-with-exports/subpath';
import scopedPatchedSubpath from '@crackle-fixtures/dep-with-exports-always-patch/subpath';

// imports must be exported otherwise they will be removed by Rollup
export { cjsFauxEsm, cjsDirIndex, scopedSubpath, scopedPatchedSubpath };

export { App, render } from './render';
