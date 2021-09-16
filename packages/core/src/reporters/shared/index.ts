import { render } from 'ink';
import React from 'react';

export { ProgressBar } from './ProgressBar';
export { StatusIndicator } from './StatusIndicator';
export { Task } from './Task';
export { Timer } from './Timer';

type Reporter<EventType> = (event: EventType) => void;

export const createReporter =
  <EventType>(
    App: React.FC<{ registerHandler: (handler: Reporter<EventType>) => void }>,
  ) =>
  (): Promise<Reporter<EventType>> =>
    new Promise((res) => {
      const setHandler = (handler: Reporter<EventType>) => {
        res((event: EventType) => {
          handler(event);
        });
      };

      render(React.createElement(App, { registerHandler: setHandler }));
    });
