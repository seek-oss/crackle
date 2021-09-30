import type { BuildError, Reporter, Status } from '../shared/types';

export type PackageState = {
  name: PackageName;
  status: Status;
  error?: BuildError;
  startTime?: number;
  endTime?: number;
  diffs?: string[];
};

export type PackageEvent =
  | { type: 'BUILD_FAILED'; packageName: string; error: BuildError }
  | { type: 'BUILD_COMPLETED'; packageName: string }
  | { type: 'BUILD_STARTED'; packageName: string }
  | {
      type: 'PACKAGE_JSON_VALIDATION_FAILED';
      packageName: string;
      diffs: string[];
    };

export type PackageReporter = Reporter<PackageEvent>;

type PackageName = string;

export interface AppState {
  packages: Record<PackageName, PackageState>;
}