import { createRouteData } from '@crackle/router';
import { Alert, Card, Text } from 'braid-design-system';
import React from 'react';

import { BraidMetadata } from '../types';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/test',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'Test',
  },
}));

const TestPage = () => (
  <Card>
    <Alert tone="promote">
      <Text>Test page</Text>
    </Alert>
  </Card>
);

export default TestPage;
