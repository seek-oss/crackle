import 'braid-design-system/reset';

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

const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
  href[0] === '/' ? (
    <ReactRouterLink ref={ref} to={href} {...restProps} />
  ) : (
    <a ref={ref} href={href} {...restProps} />
  ),
);

const App: React.FC = ({ children }) => (
  <BraidProvider theme={apac} linkComponent={CustomLink}>
    <Stack space="medium">
      <Card tone="promote">
        <ContentBlock>
          <Box display="flex" justifyContent="spaceBetween">
            <Text>Header</Text>
            <Inline space="small">
              <Text>
                <TextLink href="/">Home</TextLink>
              </Text>
              <Text>
                <TextLink href="/details">Detail</TextLink>
              </Text>
              <Text>
                <TextLink href="/test">Test</TextLink>
              </Text>
            </Inline>
          </Box>
        </ContentBlock>
      </Card>
      <ContentBlock>{children}</ContentBlock>
    </Stack>
  </BraidProvider>
);

export default App;
