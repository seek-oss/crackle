import React from 'react';
import { RouteDataFn } from '@elmo/build/';
import { Alert, Card, Stack, Text } from 'braid-design-system';

export const routeData: RouteDataFn = () => ({
  route: '/remote',
});

const RemotePage = () => (
  <Card>
    <Stack space="medium">
      <Alert tone="info">
        <Text>This page is not in the pages directory</Text>
      </Alert>

      <Alert tone="positive">
        <Text>Remote page routing works!</Text>
      </Alert>
    </Stack>
  </Card>
);

export default RemotePage;
