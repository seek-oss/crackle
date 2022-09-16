import { expect } from 'vitest';

import snapshotDiff from './snapshot-diff-serializer';

expect.addSnapshotSerializer(snapshotDiff);
