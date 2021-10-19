import { JobSummary } from '@crackle-fixtures/single-entry-library';
import { createRouteData, crackleLink } from '@crackle/router';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import type { BraidMetadata } from '../types';

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
          <TextLink href={crackleLink('/remote/page')}>Remote page</TextLink>
        </Text>

        <JobSummary isNew={true} title="Papayawhip bordered job" />
      </Stack>
    </Card>
  );
}
