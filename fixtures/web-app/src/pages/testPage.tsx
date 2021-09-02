
import type { RouteDataFn } from '@crackle/build';
import { Alert, Card, Text } from 'braid-design-system';
import React from 'react';

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
