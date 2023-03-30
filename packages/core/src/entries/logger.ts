/* eslint-disable no-console */

const isDebug = process.env.DEBUG != null;

export const logger = {
  debug: (msg: string) => isDebug && console.info(msg),
  info: (msg: string) => console.info(msg),
  warn: (msg: string) => console.warn(msg),
  error: (msg: string) => console.error(msg),
  errorWithExitCode: (msg: string) => {
    console.error(msg);
    process.exitCode = 1;
  },
};
