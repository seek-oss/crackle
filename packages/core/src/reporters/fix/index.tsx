import { Text, render, Box } from 'ink';
import * as React from 'react';

import { partition } from '../../utils/partition';
import { Section, Stack } from '../shared';

import type { PackageDiffDetails } from './components/PackageDiff';
import { PackageDiff } from './components/PackageDiff';

export type { PackageDiffDetails };

const App: React.FC<{ packageDiffs: PackageDiffDetails[] }> = ({
  packageDiffs,
}) => {
  if (packageDiffs.length === 0) {
    return <Text>Nothing to fix!</Text>;
  }

  const [changedPackages, unchangedPackages] = partition(
    packageDiffs,
    (diff) => diff.diffs.length > 0,
  );

  return (
    <Box paddingTop={1}>
      <Stack>
        {changedPackages.length > 0 && (
          <Section message="Fixed package.json for:">
            {changedPackages.map((diff) => (
              <PackageDiff key={diff.packageName} packageDiff={diff} />
            ))}
          </Section>
        )}

        {unchangedPackages.length > 0 && (
          <Section message="Nothing to change for:">
            {unchangedPackages.map((pkg) => (
              <Text key={pkg.packageName} color="green">
                {pkg.packageName}
              </Text>
            ))}
          </Section>
        )}
      </Stack>
    </Box>
  );
};

export const renderApp = (packageDiffs: PackageDiffDetails[]) => {
  render(<App packageDiffs={packageDiffs} />, { patchConsole: false });
};
