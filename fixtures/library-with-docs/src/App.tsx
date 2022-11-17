import 'braid-design-system/reset';

import type { AppShell } from '@crackle/core';
import { Link as ReactRouterLink } from '@crackle/router';
import {
  Box,
  BraidProvider,
  ContentBlock,
  Heading,
  makeLinkComponent,
  Stack,
} from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <ReactRouterLink ref={ref} to={href} {...restProps} />
  ) : (
    <a ref={ref} href={href} {...restProps} />
  ),
);

const App: AppShell = ({ children }) => (
  <BraidProvider theme={apac} linkComponent={CustomLink}>
    <Stack space="medium">
      <Box background="brand">
        <ContentBlock>
          <Box paddingX="gutter" paddingY="large">
            <Heading level="1">Library Documentation</Heading>
          </Box>
        </ContentBlock>
      </Box>

      <ContentBlock>{children}</ContentBlock>
    </Stack>
  </BraidProvider>
);

export default App;
