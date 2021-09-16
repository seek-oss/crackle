import { performance } from 'perf_hooks';

import { Box, render, Text } from 'ink';
import prettyMs from 'pretty-ms';
import React, { useReducer, useEffect } from 'react';
import { useState } from 'react';
import type { RollupError } from 'rollup';

export type BuildError = RollupError & { location: string };

export type ReporterEvent =
  | { type: 'BUILD_CLIENT_STARTED' }
  | { type: 'BUILD_CLIENT_COMPLETE' }
  | { type: 'BUILD_RENDERER_STARTED' }
  | { type: 'BUILD_RENDERER_COMPLETE' }
  | { type: 'RENDER_PAGES_STARTED'; totalPages: number }
  | { type: 'RENDER_PAGES_COMPLETE' }
  | { type: 'RENDERED_PAGE' };

export type BuildReporter = (event: ReporterEvent) => void;

export const createBuildReporter = (): Promise<BuildReporter> =>
  new Promise((res) => {
    const setHandler = (handler: BuildReporter) => {
      res((event: ReporterEvent) => {
        handler(event);
      });
    };

    render(<App registerHandler={setHandler} />);
  });

type Status = 'Pending' | 'Running' | 'Failed' | 'Complete';

interface AppState {
  buildClient: {
    status: Status;
    startTime?: number;
    endTime?: number;
  };
  buildRenderer: {
    status: Status;
    startTime?: number;
    endTime?: number;
  };
  renderPages: {
    status: Status;
    totalPages?: number;
    renderedPages: number;
    startTime?: number;
    endTime?: number;
  };
}

const reducer: React.Reducer<AppState, ReporterEvent> = (state, action) => {
  if (action.type === 'BUILD_CLIENT_STARTED') {
    return {
      ...state,
      buildClient: {
        ...state.buildClient,
        status: 'Running',
        startTime: performance.now(),
      },
    };
  }

  if (action.type === 'BUILD_CLIENT_COMPLETE') {
    return {
      ...state,
      buildClient: {
        ...state.buildClient,
        status: 'Complete',
        endTime: performance.now(),
      },
    };
  }

  if (action.type === 'BUILD_RENDERER_STARTED') {
    return {
      ...state,
      buildRenderer: {
        ...state.buildRenderer,
        status: 'Running',
        startTime: performance.now(),
      },
    };
  }

  if (action.type === 'BUILD_RENDERER_COMPLETE') {
    return {
      ...state,
      buildRenderer: {
        ...state.buildRenderer,
        status: 'Complete',
        endTime: performance.now(),
      },
    };
  }

  if (action.type === 'RENDER_PAGES_STARTED') {
    return {
      ...state,
      renderPages: {
        ...state.renderPages,
        status: 'Running',
        startTime: performance.now(),
        totalPages: action.totalPages,
      },
    };
  }

  if (action.type === 'RENDER_PAGES_COMPLETE') {
    return {
      ...state,
      renderPages: {
        ...state.renderPages,
        status: 'Complete',
        endTime: performance.now(),
      },
    };
  }

  if (action.type === 'RENDERED_PAGE') {
    return {
      ...state,
      renderPages: {
        ...state.renderPages,
        renderedPages: state.renderPages.renderedPages + 1,
      },
    };
  }

  return state;
};

interface AppProps {
  registerHandler: (cb: BuildReporter) => void;
}

const StateContext = React.createContext<
  [AppState, React.Dispatch<ReporterEvent>] | null
>(null);

export function App({ registerHandler }: AppProps) {
  const reducerProps = useReducer(reducer, {
    buildClient: { status: 'Pending' },
    buildRenderer: { status: 'Pending' },
    renderPages: { status: 'Pending', renderedPages: 0 },
  });

  const [state, dispatch] = reducerProps;

  useEffect(() => {
    registerHandler((event) => dispatch(event));
  }, [dispatch, registerHandler]);

  return (
    <StateContext.Provider value={reducerProps}>
      <Task name="Build client" {...state.buildClient} />
      <Task name="Build renderer" {...state.buildRenderer} />
      <Box>
        <Task name="Render pages" {...state.renderPages} />
        {state.renderPages.totalPages ? (
          <Box paddingLeft={2}>
            <ProgressBar
              current={state.renderPages.renderedPages}
              total={state.renderPages.totalPages}
              width={50}
            />
          </Box>
        ) : null}
      </Box>
    </StateContext.Provider>
  );
}

interface ProgressBarProps {
  current: number;
  total: number;
  width?: number;
}

function ProgressBar({ current, total, width = 30 }: ProgressBarProps) {
  const progressLength = Math.floor(width * (current / total));
  const spaceLength = width - progressLength;

  const progress = ''.padStart(progressLength, '=');
  const space = ''.padStart(spaceLength, ' ');

  const loaderString = [progress, space].join('');

  return (
    <Text>
      [{loaderString}] {current}/{total}
    </Text>
  );
}

interface TaskProps {
  name: string;
  status: Status;
  startTime?: number;
  endTime?: number;
}
function Task({ name, status, startTime, endTime }: TaskProps) {
  return (
    <Box>
      <Box width={12}>
        <StatusIndicator status={status} />
      </Box>
      <Box width={16}>
        <Text color="blue">{name}</Text>
      </Box>
      {startTime ? (
        <Box width={6}>
          <Timer startTime={startTime} endTime={endTime} />
        </Box>
      ) : null}
    </Box>
  );
}

interface TimerProps {
  startTime: number;
  endTime?: number;
}
function Timer({ startTime, endTime }: TimerProps) {
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    if (!endTime) {
      const interval = setInterval(() => {
        forceUpdate((a) => a + 1);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [endTime]);

  if (endTime) {
    return <Text>{prettyMs(endTime - startTime)}</Text>;
  }

  return <Text>{prettyMs(performance.now() - startTime)}</Text>;
}

interface StatusProps {
  status: Status;
}
function StatusIndicator({ status }: StatusProps) {
  const totalLength = 10;

  const colorMap = {
    Pending: 'gray',
    Running: 'yellow',
    Complete: 'green',
    Failed: 'red',
  };

  const startPadLength = Math.floor((totalLength - status.length) / 2);
  const endPadLength = totalLength - status.length - startPadLength;

  const startPadding = ''.padStart(startPadLength, ' ');
  const endPadding = ''.padStart(endPadLength, ' ');

  return (
    <Text inverse color={colorMap[status]} bold>
      {[startPadding, status, endPadding]}
    </Text>
  );
}
