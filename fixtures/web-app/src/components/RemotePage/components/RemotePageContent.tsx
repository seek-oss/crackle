import { Card, Stack, Alert, Text } from 'braid-design-system';
import React from 'react';

import { JobSummary } from '@crackle-fixtures/multi-entry-library/components';

export const RemotePageContent = () => (
  <Card>
    <Stack space="medium">
      <Alert tone="info">
        <Text>This page is outside the pages directory</Text>
      </Alert>

      <Alert tone="positive">
        <Text>Remote page routing works!</Text>
      </Alert>

      <JobSummary isNew title="Test job" />
    </Stack>
  </Card>
);
