import { Box, Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import type { PageProps } from '../types';

export function Page({ initialData }: PageProps) {
  return (
    <Card>
      <Stack space="medium">
        <Text>Home page</Text>
        <Text>
          <TextLink href="/details">Details</TextLink>
        </Text>
        <Box display="block" overflow="auto">
          <Text size="small" component="pre" baseline={false}>
            <code>{JSON.stringify((initialData as any[])[0], null, 2)}</code>
          </Text>
        </Box>
      </Stack>
    </Card>
  );
}

export const query = 'https://star-wars.brillout.com/api/films.json';
