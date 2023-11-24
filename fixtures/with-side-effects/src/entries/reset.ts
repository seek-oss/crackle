// This entry aims to mimic the reset from Braid
// https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/entries/reset.ts

import '../lib/reset/reset.css';
import '../lib/atoms/sprinkles.css';

import { markResetImported } from '../lib/reset/resetTracker';

if (process.env.NODE_ENV === 'development') {
  markResetImported();
}
