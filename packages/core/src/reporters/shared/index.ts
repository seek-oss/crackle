import { render } from 'ink';
import React from 'react';

import type { Reporter } from './types';

export { ErrorStack } from './ErrorStack';
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
