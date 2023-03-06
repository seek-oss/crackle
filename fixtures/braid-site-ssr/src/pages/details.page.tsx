import { Card, Stack, Text, TextLink } from 'braid-design-system';
import React from 'react';

import type { DocumentProps, PageProps } from '../types';

export function Page({ initialData }: PageProps) {
  return (
    <Card>
      <Stack space="medium">
        <Text>Details page</Text>
        <Text>
          <TextLink href="/">Home</TextLink>
        </Text>
        <Text>
          The answer to life, the universe, and everything is{' '}
          {initialData as number}
        </Text>
      </Stack>
    </Card>
  );
}

export async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        initialData: 42,
      },
    },
  };
}

export const documentProps = {
  title: 'Details',
  description: 'What is the answer to life, the universe, and everything?',
} satisfies DocumentProps;
