import { createRouteData, crackleLink } from '@crackle/router';
import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import type { BraidMetadata } from '../../types';

export const routeData = createRouteData<BraidMetadata>({
  route: '/extra',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'ExtraPage',
  },
});

export default function ExtraPage() {
  return (
    <Card>
      <Stack space="medium">
        <Text>Extra page</Text>
        <Text>
          <TextLink href="/details">Details</TextLink>
        </Text>
        <Text>
          <TextLink href={crackleLink('/')}>Home</TextLink>
        </Text>
      </Stack>
    </Card>
  );
}
