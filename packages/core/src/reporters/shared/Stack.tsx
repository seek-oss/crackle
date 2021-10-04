import { Box } from 'ink';
import React, { Fragment } from 'react';

export const Stack = ({
  children,
  gap = 1,
  indent = 0,
}: {
  children: React.ReactNode;
  gap?: number;
  indent?: number;
}) => (
  <Box flexDirection="column" paddingLeft={indent}>
    {React.Children.toArray(children).map((child, index) => (
      <Fragment key={index}>
        {index ? <Box paddingTop={gap} /> : null}
        {child}
      </Fragment>
    ))}
  </Box>
);
