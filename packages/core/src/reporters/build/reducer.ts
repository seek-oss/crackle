import type { AppState, ReporterEvent } from './types';

const createStateUpdater =
  <State>(state: State) =>
  <Key extends keyof State>(key: Key, newState: Partial<State[Key]>) => ({
    ...state,
    [key]: { ...state[key], ...newState },
  });

export const reducer: React.Reducer<AppState, ReporterEvent> = (
  state,
  action,
) => {
  const updateState = createStateUpdater(state);

  if (action.type === 'BUILD_CLIENT_STARTED') {
    return updateState('buildClient', {
      status: 'Running',
      startTime: performance.now(),
    });
  }

  if (action.type === 'BUILD_CLIENT_COMPLETE') {
    return updateState('buildClient', {
      status: 'Complete',
      endTime: performance.now(),
    });
  }

  if (action.type === 'BUILD_CLIENT_FAILED') {
    return {
      ...updateState('buildClient', {
        status: 'Failed',
        error: action.error,
        endTime: performance.now(),
      }),
      ...updateState('buildRenderer', {
        status: 'Canceled',
      }),
      ...updateState('renderPages', {
        status: 'Canceled',
      }),
    };
  }

  if (action.type === 'BUILD_RENDERER_STARTED') {
    return updateState('buildRenderer', {
      status: 'Running',
      startTime: performance.now(),
    });
  }

  if (action.type === 'BUILD_RENDERER_COMPLETE') {
    return updateState('buildRenderer', {
      status: 'Complete',
      endTime: performance.now(),
    });
  }

  if (action.type === 'RENDER_PAGES_STARTED') {
    return updateState('renderPages', {
      status: 'Running',
      startTime: performance.now(),
      totalPages: action.totalPages,
    });
  }

  if (action.type === 'RENDER_PAGES_COMPLETE') {
    return updateState('renderPages', {
      status: 'Complete',
      endTime: performance.now(),
    });
  }

  if (action.type === 'RENDERED_PAGE') {
    return updateState('renderPages', {
      renderedPages: state.renderPages.renderedPages + 1,
    });
  }

  if (action.type === 'RENDER_PAGES_FAILED') {
    return updateState('renderPages', {
      status: 'Failed',
      error: action.error,
      endTime: performance.now(),
    });
  }

  return state;
};
