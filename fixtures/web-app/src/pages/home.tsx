import { JobSummary } from '@crackle-fixtures/single-entry-library';
import { createRouteData } from '@crackle/router';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import { BraidMetadata } from '../types';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'Home',
  },
}));

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

        <JobSummary isNew={true} title="Red bordered job" />
      </Stack>
    </Card>
  );
}
