import { createRouteData } from '@crackle/router';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { TestAlert } from '../components/TestAlert';
import { BraidMetadata } from '../types';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/details',
  globalMetadata: {
    isDeprecated: true,
    componentName: 'Details',
  },
}));

const Details = () => (
  <Card>
    <Stack space="medium">
      <Text>Details page 2</Text>
      <TestAlert />
      <Text>
        <TextLink href="/">Home</TextLink>
      </Text>
    </Stack>
  </Card>
);

export default Details;
