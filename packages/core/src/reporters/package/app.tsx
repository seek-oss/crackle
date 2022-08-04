import React from 'react';

import type { Difference } from '../../utils/setup-package-json';
import { ErrorStack, ValidationError } from '../shared';
import type { BuildError } from '../shared/types';

import { renderToString } from './ink-to-string';

export const renderPackageJsonValidationError = (
  name: string,
  diffs: Difference[],
) => renderToString(<ValidationError title={name} diffs={diffs} />);

export const renderBuildError = (name: string, error: BuildError) =>
  renderToString(<ErrorStack title={name} error={error} />);
