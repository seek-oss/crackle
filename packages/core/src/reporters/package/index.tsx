import type { Difference } from '../../utils/setup-package-json';
import { ValidationError } from '../shared';
import { renderToString } from '../shared/ink-to-string';

export const renderPackageJsonValidationError = (
  name: string,
  diffs: Difference[],
) => renderToString(<ValidationError title={name} diffs={diffs} />);
