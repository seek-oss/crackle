import { performance } from 'perf_hooks';

import type { AppState, PackageEvent, PackageState } from './types';

const createStateUpdater =
  (state: AppState) =>
  (packageName: string, newState: Partial<PackageState>) => {
    const { packages } = state;
    const packageDetails = packages[packageName];

    return {
      packages: {
        ...packages,
        [packageName]: { ...packageDetails, name: packageName, ...newState },
      },
    };
  };

export const reducer: React.Reducer<AppState, PackageEvent> = (
  prevState,
  action,
) => {
  const updateState = createStateUpdater(prevState);

  if (action.type === 'BUILD_FAILED') {
    return updateState(action.packageName, {
      status: 'Failed',
      error: action.error,
      endTime: performance.now(),
    });
  }

  if (action.type === 'BUILD_COMPLETED') {
    return updateState(action.packageName, {
      status: 'Complete',
      endTime: performance.now(),
    });
  }

  if (action.type === 'BUILD_STARTED') {
    return updateState(action.packageName, {
      status: 'Running',
      startTime: performance.now(),
    });
  }

  if (action.type === 'PACKAGE_JSON_VALIDATION_FAILED') {
    return updateState(action.packageName, {
      status: 'Failed',
      endTime: performance.now(),
      diffs: action.diffs,
    });
  }

  return prevState;
};
