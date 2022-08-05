import { performance } from 'perf_hooks';

import prettyMsNotConfigured from 'pretty-ms';

const prettyMs = (ms: number) =>
  prettyMsNotConfigured(ms, {
    secondsDecimalDigits: 1,
    keepDecimalsOnWholeSeconds: true,
  });

export const calculateTime = (startTime: number, endTime?: number) => {
  if (endTime) {
    return prettyMs(endTime - startTime);
  }

  return prettyMs(performance.now() - startTime);
};
