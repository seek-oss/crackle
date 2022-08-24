/* eslint-disable no-console */

export const logger = {
  info: (msg: string) => console.info(msg),
  warn: (msg: string) => console.warn(msg),
  error: (msg: string) => console.error(msg),
  errorWithExitCode: (msg: string) => {
    console.error(msg);
    process.exitCode = 1;
  },
};
