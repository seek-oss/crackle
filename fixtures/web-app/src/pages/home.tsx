import React from 'react';
import type { RouteDataFn } from '@elmo/build';
import { Card, Stack, Text, TextLink } from 'braid-design-system';

export const routeData: RouteDataFn = () => ({
  route: '/',
});

export default function Home() {
  return (
    <Card>
      <Stack space="medium">
        <Text>Home page</Text>
        <Text>
          <TextLink href="/details">Details</TextLink>
        </Text>
        <Text>
          <TextLink href="/remote">Remote page</TextLink>
        </Text>
      </Stack>
    </Card>
  );
}
