import { Logger } from 'vite';

const log = (level: string, msg: string) => console.log(`[${level}]`, msg);

export const customLogger: Logger = {
  info: (msg, options) => log('info', msg),
  warn: (msg, options) => log('warn', msg),
  warnOnce: (msg, options) => log('warnOnce', msg),
  error: (msg, options) => log('error', msg),
  clearScreen: (level) => {
    log('clearScreen', level);
  },
  hasErrorLogged: () => false,
  hasWarned: false,
};
