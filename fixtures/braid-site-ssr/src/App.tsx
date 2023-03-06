import {
  Box,
  BraidProvider,
  Card,
  ContentBlock,
  Heading,
  Stack,
} from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

import type { PageContext } from './types';

const App: React.FC<{
  children: React.ReactNode;
  pageContext: PageContext;
}> = ({ children }) => (
  <BraidProvider theme={apac}>
    {/* <PageContextProvider vaue={pageContext}> */}
    <Stack space="medium">
      <Card tone="promote">
        <ContentBlock>
          <Box display="flex" justifyContent="spaceBetween" alignItems="center">
            <Heading level="2">Header</Heading>
          </Box>
        </ContentBlock>
      </Card>
      <ContentBlock>{children}</ContentBlock>
    </Stack>
    {/* </PageContextProvider> */}
  </BraidProvider>
);

export default App;
