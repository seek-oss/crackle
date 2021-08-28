import { Card, Stack, Alert, Text } from 'braid-design-system';
import React from 'react';

export const RemotePageContent = () => (
  <Card>
    <Stack space="medium">
      <Alert tone="info">
        <Text>This page is outside the pages directory</Text>
      </Alert>

      <Alert tone="positive">
        <Text>Remote page routing works!</Text>
      </Alert>
    </Stack>
  </Card>
);
