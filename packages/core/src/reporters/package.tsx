import { Box, Text, render } from 'ink';
import React, { useContext, useReducer, useEffect } from 'react';
import type { RollupError } from 'rollup';

export type BuildStatus = 'Building' | 'Done' | 'Failed';

export type BuildError = RollupError & { location: string };

export type PackageError = Error | BuildError;

export type PackageState = {
  name: PackageName;
  buildStatus: BuildStatus;
  error?: PackageError;
};

export type ReporterEvent =
  | { type: 'BUILD_FAILED'; packageName: string; error: PackageError }
  | { type: 'BUILD_COMPLETED'; packageName: string }
  | { type: 'BUILD_STARTED'; packageName: string };

export type PackageReporter = (event: ReporterEvent) => void;

type PackageName = string;

interface AppState {
  packages: Record<PackageName, PackageState>;
}

export const createPackageReporter = () => {
  let handler: PackageReporter;

  const setHandler = (cb: PackageReporter) => {
    handler = cb;
  };

  render(<App registerHandler={setHandler} />);

  return (event: ReporterEvent) => {
    if (handler) {
      handler(event);
    }
  };
};

const reducer: React.Reducer<AppState, ReporterEvent> = (prevState, action) => {
  if (action.type === 'BUILD_FAILED') {
    const { packages } = prevState;
    const packageDetails = packages[action.packageName];

    if (!packageDetails) {
      throw new Error(`No existing package named ${action.packageName}`);
    }

    const newPackageDetails: PackageState = {
      ...packageDetails,
      buildStatus: 'Failed',
      error: action.error,
    };

    return {
      packages: {
        ...packages,
        [action.packageName]: newPackageDetails,
      },
    };
  }

  if (action.type === 'BUILD_COMPLETED') {
    const packageDetails = prevState.packages[action.packageName];

    if (!packageDetails) {
      throw new Error(`No existing package named ${action.packageName}`);
    }

    return {
      packages: {
        ...prevState.packages,
        [action.packageName]: {
          ...packageDetails,
          buildStatus: 'Done',
        },
      },
    };
  }

  if (action.type === 'BUILD_STARTED') {
    return {
      packages: {
        ...prevState.packages,
        [action.packageName]: {
          name: action.packageName,
          buildStatus: 'Building',
        },
      },
    };
  }

  return prevState;
};

interface AppProps {
  registerHandler: (cb: PackageReporter) => void;
}

const StateContext = React.createContext<
  [AppState, React.Dispatch<ReporterEvent>] | null
>(null);

export function App({ registerHandler }: AppProps) {
  const reducerProps = useReducer(reducer, { packages: {} });

  const [state, dispatch] = reducerProps;

  useEffect(() => {
    registerHandler((event) => dispatch(event));
  }, [dispatch, registerHandler]);

  const failingBuilds = Object.values(state.packages).filter(
    (pkg) => pkg.buildStatus === 'Failed',
  );
  const allBuildsComplete = Object.values(state.packages).every(
    (pkg) => pkg.buildStatus !== 'Building',
  );

  return (
    <StateContext.Provider value={reducerProps}>
      <Box flexDirection="column">
        {Object.keys(state.packages).map((packageName) => (
          <Package key={packageName} name={packageName} />
        ))}

        {failingBuilds.length < 1 || !allBuildsComplete
          ? null
          : failingBuilds.map(({ name, error }) => (
              <PackageError key={name} packageName={name} error={error!} />
            ))}
      </Box>
    </StateContext.Provider>
  );
}
interface PackageProps {
  name: string;
}
function Package({ name }: PackageProps) {
  const [state] = useContext(StateContext)!;

  const { buildStatus } = state.packages[name];

  return (
    <Box>
      <Box width={12}>
        <BuildStatusIndicator status={buildStatus} />
      </Box>
      <Text color="blue">{name}</Text>
    </Box>
  );
}

interface BuildStatusProps {
  status: BuildStatus;
}
function BuildStatusIndicator({ status }: BuildStatusProps) {
  const colorMap = { Building: 'yellow', Done: 'green', Failed: 'red' };
  const padding = ''.padStart((10 - status.length) / 2, ' ');

  return (
    <Text inverse color={colorMap[status]} bold>
      {[padding, status, padding]}
    </Text>
  );
}

const isBuildError = (error: Error | BuildError): error is BuildError =>
  Boolean((error as BuildError).loc?.line);

interface PackageErrorProps {
  error: NonNullable<PackageState['error']>;
  packageName: string;
}

function PackageError({ error, packageName }: PackageErrorProps) {
  return (
    <Box marginTop={1}>
      <Box
        paddingX={2}
        flexDirection="column"
        borderColor="red"
        borderStyle="round"
      >
        <Text color="red">{packageName}</Text>
        {isBuildError(error) ? (
          <>
            <Box marginBottom={1}>
              <Text>
                <Text dimColor>Error in</Text>{' '}
                {error.location ?? (error as any).loc.file}
              </Text>
            </Box>
            <Text>{error.frame?.trim()}</Text>
          </>
        ) : (
          <Text>{error.stack}</Text>
        )}
      </Box>
    </Box>
  );
}
