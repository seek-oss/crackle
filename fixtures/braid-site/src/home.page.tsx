import { createRouteData } from '@crackle/router';
import { JobSummary } from '@crackle-fixtures/library-with-docs';
import { Card, Stack, Text, TextLink } from 'braid-design-system';

export const routeData = createRouteData({
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
        <JobSummary title="Job title" isNew />
      </Stack>
    </Card>
  );
}
