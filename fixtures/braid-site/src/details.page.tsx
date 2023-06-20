import { createRouteData } from '@crackle/router';
import { Card, Stack, Text, TextLink } from 'braid-design-system';

export const routeData = createRouteData({
  route: '/details',
});

export default function Details() {
  return (
    <Card>
      <Stack space="medium">
        <Text>Details page</Text>
        <Text>
          <TextLink href="/">Home</TextLink>
        </Text>
      </Stack>
    </Card>
  );
}
