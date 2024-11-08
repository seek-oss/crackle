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
import seekJobs from 'braid-design-system/themes/seekJobs';

const App: AppShell = ({ children }) => (
  <BraidProvider theme={seekJobs}>
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
  </BraidProvider>
);

export default App;
