import { Text } from 'ink';
import React from 'react';

import type { Difference } from '../../../utils/setup-package-json';
import { Stack } from '../../shared';

import { Diff } from './Diff';

export interface PackageDiffDetails {
  packageName: string;
  diffs: Difference[];
}

interface PackageDiffProps {
  packageDiff: PackageDiffDetails;
}

export const PackageDiff = ({ packageDiff }: PackageDiffProps) => (
  <>
    <Text color="green">{packageDiff.packageName}</Text>
    <Stack gap={0} indent={2}>
      {packageDiff.diffs.map((diff) => (
        <Diff key={diff.key} diff={diff} />
      ))}
    </Stack>
  </>
);
