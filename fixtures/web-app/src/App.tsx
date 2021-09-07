import 'braid-design-system/reset';

import type { AppShell } from '@crackle/build';
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
import apac from 'braid-design-system/themes/apac';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { BraidMetadata } from './types';

const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <ReactRouterLink ref={ref} to={href} {...restProps} />
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
