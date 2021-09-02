import { RouteDataFn } from '@crackle/build';
import { Card, Stack, Text } from 'braid-design-system';
import React from 'react';

import { JobSummary } from './JobSummary';

export const routeData: RouteDataFn = () => ({
  route: '/JobSummary',
});

const JobSummaryPage = () => (
  <Card>
    <Stack space="medium">
      <Text>Here's a job summary component</Text>
      <JobSummary title="One for the docs" isNew={true} />
    </Stack>
  </Card>
);

export default JobSummaryPage;
