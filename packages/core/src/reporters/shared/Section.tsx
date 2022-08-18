import type chalk from 'chalk';
import { Text } from 'ink';
import * as React from 'react';

import { Stack } from './Stack';

export const Section: React.FC<{
  message: string;
  messageColor?: typeof chalk.Color;
}> = ({ message, messageColor, children }) => (
  <Stack gap={0}>
    <Text color={messageColor}>{message}</Text>
    <Stack gap={0} indent={2}>
      {children}
    </Stack>
  </Stack>
);