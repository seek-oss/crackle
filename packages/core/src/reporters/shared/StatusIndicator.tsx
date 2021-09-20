import { Text } from 'ink';
import React from 'react';
import type { ComponentProps } from 'react';

import type { Status } from './types';

type Color = NonNullable<ComponentProps<typeof Text>['color']>;

const colorMap: Record<Status, Color> = {
  Pending: 'gray',
  Running: 'yellow',
  Complete: 'green',
  Failed: 'red',
  Canceled: 'redBright',
};

interface StatusProps {
  status: Status;
}
export const StatusIndicator = ({ status }: StatusProps) => {
  const totalLength = 10;

  const startPadLength = Math.floor((totalLength - status.length) / 2);
  const endPadLength = totalLength - status.length - startPadLength;

  const startPadding = ''.padStart(startPadLength, ' ');
  const endPadding = ''.padStart(endPadLength, ' ');

  return (
    <Text inverse color={colorMap[status]} bold>
      {[startPadding, status, endPadding]}
    </Text>
  );
};
