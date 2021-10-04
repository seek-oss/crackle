/* eslint-disable react/no-unescaped-entities */
import { Text, render, Box } from 'ink';
import React from 'react';
import { Fragment } from 'react';

import { partition } from '../../utils/partition';
import { Stack } from '../shared/Stack';

import { PackageDiff } from './components/PackageDiff';

interface AppProps {
  packageDiffs: PackageDiff[];
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
        {changedPackages.length === 0 ? null : (
          <Fragment>
            <Text>Fixed package.json for:</Text>

            <Stack indent={2}>
              {changedPackages.map((diff) => (
                <PackageDiff key={diff.packageName} packageDiff={diff} />
              ))}
            </Stack>
          </Fragment>
        )}

        {unchangedPackages.length === 0 ? null : (
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

export const renderApp = (packageDiffs: PackageDiff[]) => {
  render(<App packageDiffs={packageDiffs} />);
};
