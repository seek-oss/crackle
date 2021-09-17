import { Text } from 'ink';
import prettyMs from 'pretty-ms';
import React, { useState } from 'react';
import { useEffect } from 'react';

const prettMsConfig: Parameters<typeof prettyMs>[1] = {
  secondsDecimalDigits: 1,
  keepDecimalsOnWholeSeconds: true,
};

interface TimerProps {
  startTime: number;
  endTime?: number;
}
export const Timer = ({ startTime, endTime }: TimerProps) => {
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    if (!endTime) {
      const interval = setInterval(() => {
        forceUpdate((a) => a + 1);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [endTime]);

  if (endTime) {
    return <Text>{prettyMs(endTime - startTime, prettMsConfig)}</Text>;
  }

  return <Text>{prettyMs(performance.now() - startTime, prettMsConfig)}</Text>;
};
