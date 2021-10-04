import 'braid-design-system/reset';

import type { AppShell } from '@crackle/core';
import { Link } from '@crackle/router';
import type { ValidRoute } from '@crackle/router';
import {
  Box,
  BraidProvider,
  Card,
  ContentBlock,
  Inline,
  makeLinkComponent,
  Stack,
  Text,
  TextLink,
} from 'braid-design-system';
import { apac } from 'braid-design-system/themes';
import React from 'react';

import type { BraidMetadata } from './types';

const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <Link ref={ref} to={href as ValidRoute} {...restProps} />
  ) : (
    <a ref={ref} href={href} {...restProps} />
  ),
);

const App: AppShell<BraidMetadata> = ({ children, routeMetadata }) => {
  const navLinks = Object.entries(routeMetadata).map(([route, metadata]) => (
    <Text key={route}>
      <TextLink
        key={route}
        weight={metadata.isDeprecated ? 'weak' : 'regular'}
        href={route}
      >
        {metadata.componentName}
      </TextLink>
    </Text>
  ));

  return (
    <BraidProvider theme={apac} linkComponent={CustomLink}>
      <Stack space="medium">
        <Card tone="promote">
          <ContentBlock>
            <Box display="flex" justifyContent="spaceBetween">
              <Text>Header</Text>
              <Inline space="small">{...navLinks}</Inline>
            </Box>
          </ContentBlock>
        </Card>
        <ContentBlock>{children}</ContentBlock>
      </Stack>
    </BraidProvider>
  );
};

export default App;
