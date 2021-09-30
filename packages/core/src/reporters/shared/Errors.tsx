import { Box, Text } from 'ink';
import React from 'react';
import { Fragment } from 'react';

import { Stack } from './Stack';
import type { BuildError, RollupError } from './types';

interface ErrorBoxProps {
  title?: string;
  children: JSX.Element;
}

const ErrorBox = ({ title, children }: ErrorBoxProps) => (
  <Box marginTop={1}>
    <Box
      paddingX={2}
      flexDirection="column"
      borderColor="red"
      borderStyle="round"
    >
      <Text color="red">{title}</Text>
      {children}
    </Box>
  </Box>
);

const isBuildError = (error: BuildError): error is RollupError =>
  Boolean((error as RollupError).loc?.line);

interface ErrorStackProps {
  error: BuildError;
  title?: string;
}

export const ErrorStack = ({ error, title }: ErrorStackProps) => (
  <ErrorBox title={title}>
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
  </ErrorBox>
);

interface ValidationErrorProps {
  diffs: string[];
  title: string;
}

export const ValidationError = ({ title, diffs }: ValidationErrorProps) => (
  <ErrorBox title={title}>
    <Stack>
      <Text>The package.json is out of sync and needs to be fixed.</Text>

      <Fragment>
        {diffs.map((diff) => (
          <Text key={diff}>- {diff}</Text>
        ))}
      </Fragment>

      <Text>
        To fix, run{' '}
        <Text underline bold color="green">
          crackle fix
        </Text>
        .
      </Text>
    </Stack>
  </ErrorBox>
);
