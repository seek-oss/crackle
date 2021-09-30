import { Box } from 'ink';
import React, { useReducer, useEffect } from 'react';

import { Task, ProgressBar, createReporter } from '../shared';
import { ErrorStack } from '../shared/Errors';

import { reducer } from './reducer';
import type { AppState, BuildReporter, BuildEvent } from './types';

const StateContext = React.createContext<
  [AppState, React.Dispatch<BuildEvent>] | null
>(null);

interface AppProps {
  registerHandler: (cb: BuildReporter) => void;
}

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
      {state.buildClient.error ? (
        <ErrorStack error={state.buildClient.error} />
      ) : null}
      {state.renderPages.error ? (
        <ErrorStack error={state.renderPages.error} />
      ) : null}
    </StateContext.Provider>
  );
}

export const createBuildReporter = createReporter(App);
