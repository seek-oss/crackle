import { Text, Box } from 'ink';
import * as React from 'react';

import { logger } from '../../entries/logger';
import { partition } from '../../utils/partition';
import { renderToString, Section, Stack } from '../shared';

import { type PackageDiffDetails, PackageDiff } from './components/PackageDiff';

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
    <Box paddingY={1}>
      <Stack gap={1}>
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
  logger.info(renderToString(<App packageDiffs={packageDiffs} />));
};
