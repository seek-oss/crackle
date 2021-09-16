import { Text } from 'ink';
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  width?: number;
}

export const ProgressBar = ({
  current,
  total,
  width = 30,
}: ProgressBarProps) => {
  const progressLength = Math.floor(width * (current / total));
  const spaceLength = width - progressLength;

  const progress = ''.padStart(progressLength, '=');
  const space = ''.padStart(spaceLength, ' ');

  const loaderString = [progress, space].join('');

  return (
    <Text>
      [{loaderString}] {current}/{total}
    </Text>
  );
};
