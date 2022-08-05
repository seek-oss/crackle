import { Text } from 'ink';
import React, { useEffect, useState } from 'react';

import { calculateTime } from '../../utils/timer';

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

  return <Text>{calculateTime(startTime, endTime)}</Text>;
};
