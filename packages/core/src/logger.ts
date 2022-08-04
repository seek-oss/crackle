/* eslint-disable no-console */

export const logger = {
  info: (msg: string) => console.info(msg),
  error: (msg: string) => console.error(msg),
  warn: (msg: string) => console.warn(msg),
  errorWithExitCode: (msg: string) => {
    console.error(msg);
    process.exitCode = 1;
  },
};
