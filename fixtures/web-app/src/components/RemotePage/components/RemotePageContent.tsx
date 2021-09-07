import { JobSummary } from '@crackle-fixtures/multi-entry-library/components';
import { Card, Stack, Alert, Text, Box } from 'braid-design-system';
import React from 'react';

import { background } from './test.css';

export const RemotePageContent = () => (
  <Card>
    <Stack space="medium">
      <Alert tone="info">
        <Text>This page is outside the pages directory</Text>
      </Alert>

      <Alert tone="positive">
        <Text>Remote page routing works!</Text>
      </Alert>

      <Box padding="medium" className={background}>
        Special box
      </Box>

      <JobSummary isNew title="Test job" />
    </Stack>
  </Card>
);
