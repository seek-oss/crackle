import { render } from 'ink';
import React from 'react';

import { ErrorStack } from './Errors';
import { renderToString } from './ink-to-string';
import type { Reporter } from './types';
import type { BuildError } from './types';

export * from './Errors';
export { ProgressBar } from './ProgressBar';
export { StatusIndicator } from './StatusIndicator';
export { Task } from './Task';
export { Timer } from './Timer';

type AppComponent<EventType> = React.FC<{
  registerHandler: (handler: Reporter<EventType>) => void;
}>;

export interface ReporterOptions {
  patchConsole?: boolean;
}
export const createReporter =
  <EventType>(App: AppComponent<EventType>) =>
  ({ patchConsole = true }: ReporterOptions = {}): Promise<
    Reporter<EventType>
  > =>
    new Promise((res) => {
      const setHandler = (handler: Reporter<EventType>) => {
        res((event: EventType) => {
          handler(event);
        });
      };

      render(React.createElement(App, { registerHandler: setHandler }), {
        patchConsole,
      });
    });

export const renderBuildError = (name: string, error: BuildError) =>
  renderToString(React.createElement(ErrorStack, { title: name, error }));
