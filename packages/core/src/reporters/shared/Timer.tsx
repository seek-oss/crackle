import { Text } from 'ink';
import type * as React from 'react';
import { useEffect, useState } from 'react';

import { calculateTime } from '../../utils/timer';

export const Timer: React.FC<{ startTime: number; endTime?: number }> = ({
  startTime,
  endTime,
}) => {
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
