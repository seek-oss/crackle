import { ensureResetImported } from './lib/reset/resetTracker';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

export {};
