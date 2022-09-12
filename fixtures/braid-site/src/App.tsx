import 'braid-design-system/reset';

import type { AppShell } from '@crackle/core';
import {
  Box,
  BraidProvider,
  Card,
  ContentBlock,
  Heading,
  Stack,
} from 'braid-design-system';
import apac from 'braid-design-system/apacTheme';
import React from 'react';

import { background } from './App.css';

const App: AppShell = ({ children }) => (
  <BraidProvider theme={apac}>
    <Stack space="medium">
      <Card tone="promote">
        <ContentBlock>
          <Box
            display="flex"
            justifyContent="spaceBetween"
            alignItems="center"
            className={background}
          >
            <Heading level="2">Header text</Heading>
          </Box>
        </ContentBlock>
      </Card>
      <ContentBlock>{children}</ContentBlock>
    </Stack>
  </BraidProvider>
);

export default App;
