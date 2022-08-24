/* eslint-disable react/no-unescaped-entities */
import { Text, render, Box } from 'ink';
import React from 'react';

import { partition } from '../../utils/partition';
import { Stack } from '../shared/Stack';

import type { PackageDiffDetails } from './components/PackageDiff';
import { PackageDiff } from './components/PackageDiff';

export type { PackageDiffDetails };

interface AppProps {
  packageDiffs: PackageDiffDetails[];
}

const App = ({ packageDiffs }: AppProps) => {
  if (packageDiffs.length === 0) {
    return <Text>Nothing to fix!</Text>;
  }

  const [changedPackages, unchangedPackages] = partition(
    packageDiffs,
    (diff) => diff.diffs.length > 0,
  );

  return (
    <Box paddingY={1}>
      <Stack>
        {changedPackages.length > 0 && (
          <>
            <Text>Fixed package.json for:</Text>

            <Stack indent={2}>
              {changedPackages.map((diff) => (
                <PackageDiff key={diff.packageName} packageDiff={diff} />
              ))}
            </Stack>
          </>
        )}

        {unchangedPackages.length > 0 && (
          <Stack gap={0}>
            <Text>Nothing to change for:</Text>
            <Stack gap={0} indent={2}>
              {unchangedPackages.map((pkg) => (
                <Text key={pkg.packageName} color="green">
                  {pkg.packageName}
                </Text>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export const renderApp = (packageDiffs: PackageDiffDetails[]) => {
  render(<App packageDiffs={packageDiffs} />);
};
