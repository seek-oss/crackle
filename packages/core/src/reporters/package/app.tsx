import { Box } from 'ink';
import React, { useContext, useReducer, useEffect } from 'react';

import { createReporter, Task, ErrorStack, ValidationError } from '../shared';

import { reducer } from './reducer';
import type { AppState, PackageEvent, PackageReporter } from './types';

export const createPackageReporter = createReporter(App);

interface AppProps {
  registerHandler: (cb: PackageReporter) => void;
}

const StateContext = React.createContext<
  [AppState, React.Dispatch<PackageEvent>] | null
>(null);

export function App({ registerHandler }: AppProps) {
  const reducerProps = useReducer(reducer, { packages: {} });

  const [state, dispatch] = reducerProps;

  useEffect(() => {
    registerHandler((event) => dispatch(event));
  }, [dispatch, registerHandler]);

  const failingBuilds = Object.values(state.packages).filter(
    (pkg) => pkg.status === 'Failed' && pkg.error,
  );

  const invalidBuilds = Object.values(state.packages).filter(
    (pkg) => pkg.status === 'Failed' && Array.isArray(pkg.diffs),
  );

  const allBuildsComplete = Object.values(state.packages).every(
    (pkg) => !['Canceled', 'Running'].includes(pkg.status),
  );

  const longestPackageNameLength = Math.max(
    ...Object.values(state.packages).map(({ name }) => name.length),
  );

  return (
    <StateContext.Provider value={reducerProps}>
      <Box flexDirection="column">
        {Object.keys(state.packages).map((packageName) => (
          <Package
            key={packageName}
            name={packageName}
            width={longestPackageNameLength}
          />
        ))}

        {failingBuilds.length < 1 || !allBuildsComplete
          ? null
          : failingBuilds.map(({ name, error }) => (
              <ErrorStack key={name} title={name} error={error!} />
            ))}

        {invalidBuilds.length < 1 || !allBuildsComplete
          ? null
          : invalidBuilds.map(({ name, diffs }) => (
              <ValidationError key={name} title={name} diffs={diffs!} />
            ))}
      </Box>
    </StateContext.Provider>
  );
}

interface PackageProps {
  name: string;
  width: number;
}

function Package({ name, width }: PackageProps) {
  const [state] = useContext(StateContext)!;

  return <Task width={width} {...state.packages[name]} />;
}
