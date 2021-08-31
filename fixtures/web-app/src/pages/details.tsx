import React from 'react';
import type { RouteDataFn } from '@elmo/build';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import { TestAlert } from '../components/TestAlert';

export const routeData: RouteDataFn = () => ({
  route: '/details',
});

const Details = () => {
  return (
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
};

export default Details;
