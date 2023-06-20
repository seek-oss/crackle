import type { Difference } from '../../../utils/setup-package-json';
import { Section } from '../../shared';

import { Diff } from './Diff';

export interface PackageDiffDetails {
  packageName: string;
  diffs: Difference[];
}

interface PackageDiffProps {
  packageDiff: PackageDiffDetails;
}

export const PackageDiff = ({ packageDiff }: PackageDiffProps) => (
  <Section message={packageDiff.packageName} messageColor="green">
    {packageDiff.diffs.map((diff) => (
      <Diff key={diff.key} diff={diff} />
    ))}
  </Section>
);
