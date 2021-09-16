import { Box, Text } from 'ink';
import React from 'react';

import { StatusIndicator } from './StatusIndicator';
import { Timer } from './Timer';
import type { Status } from './types';

interface TaskProps {
  name: string;
  status: Status;
  startTime?: number;
  endTime?: number;
}

export const Task = ({ name, status, startTime, endTime }: TaskProps) => (
  <Box>
    <Box width={12}>
      <StatusIndicator status={status} />
    </Box>
    <Box width={16}>
      <Text color="blue">{name}</Text>
    </Box>
    {startTime ? (
      <Box width={6}>
        <Timer startTime={startTime} endTime={endTime} />
      </Box>
    ) : null}
  </Box>
);
