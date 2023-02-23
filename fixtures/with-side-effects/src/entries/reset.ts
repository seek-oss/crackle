import '../lib/reset';

if (process.env.NO_SIDE_EFFECTS !== 'clearly') {
  throw new Error('side-effect');
}

export * from '../lib/breakpoints';
