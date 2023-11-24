import type { ReactNode } from 'react';

import { ensureResetImported } from '../reset/resetTracker';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export const BraidProvider = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);
