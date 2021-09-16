import { Text } from 'ink';
import prettyMs from 'pretty-ms';
import React, { useState } from 'react';
import { useEffect } from 'react';

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
    return (
      <Text>{prettyMs(endTime - startTime, { colonNotation: true })}</Text>
    );
  }

  return <Text>{prettyMs(performance.now() - startTime)}</Text>;
};
