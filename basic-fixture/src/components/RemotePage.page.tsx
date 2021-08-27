import React from 'react';
import { RouteDataFn } from '@elmo/build/';
import { Alert, Card, Text } from 'braid-design-system';

export const routeData: RouteDataFn = () => ({
  route: '/remote',
});

const RemotePage = () => (
  <Card>
    <Alert tone="info">
      <Text>This page is not in the pages directory</Text>
    </Alert>
  </Card>
);

export default RemotePage;
