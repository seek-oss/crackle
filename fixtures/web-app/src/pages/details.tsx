import type { RouteDataFn } from '@crackle/build';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { TestAlert } from '../components/TestAlert';

export const routeData: RouteDataFn = () => ({
  route: '/details',
});

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
