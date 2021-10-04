import { Text } from 'ink';
import React from 'react';
import { Fragment } from 'react';

import type { Difference } from '../../../utils/setup-package-json';
import { Stack } from '../../shared/Stack';

import { Diff } from './Diff';

export interface PackageDiff {
  packageName: string;
  diffs: Difference[];
}

interface PackageDiffProps {
  packageDiff: PackageDiff;
}

export const PackageDiff = ({ packageDiff }: PackageDiffProps) => (
  <Fragment>
    <Text color="green">{packageDiff.packageName}</Text>
    <Stack gap={0} indent={2}>
      {packageDiff.diffs.map((diff) => (
        <Diff key={diff.key} diff={diff} />
      ))}
    </Stack>
  </Fragment>
);
