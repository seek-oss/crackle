/* eslint-disable react/no-unescaped-entities */
import { Box, Text } from 'ink';
import React from 'react';

import type { Difference } from '../../utils/setup-package-json';

import { Stack } from './Stack';
import type { BuildError, RollupError, SetRequired } from './types';

const isBuildError = (
  error: BuildError,
): error is SetRequired<RollupError, 'loc'> =>
  Boolean((error as RollupError).loc);
const isPluginError = (
  error: BuildError,
): error is SetRequired<RollupError, 'plugin'> =>
  Boolean((error as RollupError).plugin);

interface ErrorBoxProps {
  title?: string;
  children: React.ReactNode;
}
const ErrorBox = ({ title, children }: ErrorBoxProps) => (
  <Box marginTop={1}>
    <Stack indent={2} gap={0} borderColor="red" borderStyle="round">
      <Text color="red">{title}</Text>
      {children}
    </Stack>
  </Box>
);

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
            <Text dimColor>Error in</Text> {error.loc.file}
          </Text>
        </Box>
        <Text>{error.frame?.trim()}</Text>
      </>
    ) : (
      <Stack gap={0}>
        {isPluginError(error) && (
          <Text>
            From Rollup plugin <Text bold>{error.plugin}</Text>:
          </Text>
        )}
        <Text>{error.stack}</Text>
      </Stack>
    )}
  </ErrorBox>
);

const Diff = ({ diff }: { diff: Difference }) => {
  if (diff.key === 'files') {
    const missingFiles = diff.additions.map((addition) => (
      <Text key={addition} color="blueBright">
        {addition}
      </Text>
    ));
    return <Text>- "files" is missing {missingFiles}</Text>;
  }

  if (diff.key === 'exports') {
    return <Text>- The "exports" key is incorrect</Text>;
  }

  if (diff.from && !diff.to) {
    return (
      <Text>
        - "{diff.key}" needs to be removed (currently{' '}
        <Text color="yellow">{diff.from}</Text>).
      </Text>
    );
  }

  return (
    <Text>
      - "{diff.key}" should be <Text color="blueBright">{diff.to}</Text>
      {diff.from ? (
        <>
          {' '}
          (currently <Text color="yellow">{diff.from}</Text>)
        </>
      ) : null}
    </Text>
  );
};

interface ValidationErrorProps {
  diffs: Difference[];
  title: string;
}

export const ValidationError = ({ title, diffs }: ValidationErrorProps) => (
  <ErrorBox title={title}>
    <Stack>
      <Text>The package.json is out of sync and needs to be fixed.</Text>

      <>
        {diffs?.map((diff) => (
          <Diff key={diff.key} diff={diff} />
        ))}
      </>

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
