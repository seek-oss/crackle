import { Box } from 'ink';
import React, { Fragment } from 'react';

export const Stack = ({ children }: { children: React.ReactNode }) => (
  <Box flexDirection="column">
    {React.Children.toArray(children).map((child, index) => (
      <Fragment key={index}>
        {index ? <Box paddingTop={1} /> : null}
        {child}
      </Fragment>
    ))}
  </Box>
);
