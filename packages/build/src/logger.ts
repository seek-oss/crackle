import { Logger } from 'vite';

// eslint-disable-next-line no-console
const log = (level: string, msg: string) => console.log(`[${level}]`, msg);

export const customLogger: Logger = {
  info: (msg, _options) => log('info', msg),
  warn: (msg, _options) => log('warn', msg),
  warnOnce: (msg, _options) => log('warnOnce', msg),
  error: (msg, _options) => log('error', msg),
  clearScreen: (level) => {
    log('clearScreen', level);
  },
  hasErrorLogged: () => false,
  hasWarned: false,
};
