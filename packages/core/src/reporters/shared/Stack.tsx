import { Box } from 'ink';
import * as React from 'react';

export const Stack: React.FC<{ gap?: number; indent?: number }> = ({
  children,
  gap = 1,
  indent = 0,
}) => (
  <Box flexDirection="column" paddingLeft={indent}>
    {React.Children.toArray(children)
      .filter(Boolean)
      .map((child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Box paddingTop={gap} />}
          {child}
        </React.Fragment>
      ))}
  </Box>
);
