import type { RollupError } from 'rollup';

export type BuildStatus = 'Building' | 'Done' | 'Failed';
type PackageName = string;

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

export type ReporterHandler = (event: ReporterEvent) => void;
