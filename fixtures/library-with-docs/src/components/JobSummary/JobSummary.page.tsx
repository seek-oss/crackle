import { createRouteData } from '@crackle/router';
import { Card, Stack, Text } from 'braid-design-system';

import { JobSummary } from './JobSummary';

export const routeData = createRouteData(() => ({
  route: '/JobSummary',
}));

const JobSummaryPage = () => (
  <Card>
    <Stack space="medium">
      <Text>Here’s a job summary component</Text>
      <JobSummary title="One for the docs" isNew={true} />
    </Stack>
  </Card>
);

export default JobSummaryPage;
