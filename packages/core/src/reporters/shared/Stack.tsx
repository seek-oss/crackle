import { Box } from 'ink';
import * as React from 'react';

export const Stack: React.FC<
  { gap?: number; indent?: number } & React.ComponentProps<typeof Box>
> = ({ children, gap = 1, indent = 0, ...boxProps }) => (
  <Box flexDirection="column" paddingLeft={indent} {...boxProps}>
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
