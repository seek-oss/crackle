import { Box, Text } from 'ink';
import React from 'react';

import type { BuildError, RollupError } from './types';

const isBuildError = (error: BuildError): error is RollupError =>
  Boolean((error as RollupError).loc?.line);

interface ErrorStackProps {
  error: BuildError;
}

export const ErrorStack = ({ error }: ErrorStackProps) => (
  <Box marginTop={1}>
    <Box
      paddingX={2}
      flexDirection="column"
      borderColor="red"
      borderStyle="round"
    >
      {isBuildError(error) ? (
        <>
          <Box marginBottom={1}>
            <Text>
              <Text dimColor>Error in</Text>{' '}
              {error.location ?? (error as any).loc.file}
            </Text>
          </Box>
          <Text>{error.frame?.trim()}</Text>
        </>
      ) : (
        <Text>{error.stack}</Text>
      )}
    </Box>
  </Box>
);
