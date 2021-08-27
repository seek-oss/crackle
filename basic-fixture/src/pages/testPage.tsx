import React from 'react';

import type { RouteDataFn } from '@elmo/build';
import { Alert, Card, Text } from 'braid-design-system';

export const routeData: RouteDataFn = () => ({
  route: '/test',
});

const TestPage = () => (
  <Card>
    <Alert tone="promote">
      <Text>Test page</Text>
    </Alert>
  </Card>
);

export default TestPage;
