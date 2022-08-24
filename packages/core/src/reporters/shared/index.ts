import React from 'react';

import { ErrorStack } from './Errors';
import { renderToString } from './ink-to-string';
import type { BuildError } from './types';

export { ErrorStack, ValidationError } from './Errors';
export { Section } from './Section';
export { Stack } from './Stack';
export { Timer } from './Timer';

export const renderBuildError = (name: string, error: BuildError) =>
  renderToString(React.createElement(ErrorStack, { title: name, error }));
