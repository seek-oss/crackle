import type { BuildError, Reporter, Status } from '../shared/types';

export type BuildEvent =
  | { type: 'BUILD_CLIENT_STARTED' }
  | { type: 'BUILD_CLIENT_COMPLETE' }
  | { type: 'BUILD_CLIENT_FAILED'; error: BuildError }
  | { type: 'BUILD_RENDERER_STARTED' }
  | { type: 'BUILD_RENDERER_COMPLETE' }
  | { type: 'RENDER_PAGES_STARTED'; totalPages: number }
  | { type: 'RENDER_PAGES_FAILED'; error: BuildError }
  | { type: 'RENDER_PAGES_COMPLETE' }
  | { type: 'RENDERED_PAGE' };

export type BuildReporter = Reporter<BuildEvent>;

export interface AppState {
  buildClient: {
    status: Status;
    startTime?: number;
    endTime?: number;
    error?: BuildError;
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
    error?: BuildError;
  };
}
