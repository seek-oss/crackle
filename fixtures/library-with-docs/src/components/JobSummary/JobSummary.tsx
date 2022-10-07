import {
  Badge,
  Box,
  Card,
  Column,
  Columns,
  Heading,
  IconBookmark,
  IconLocation,
  IconMoney,
  IconTag,
  Inline,
  Rating,
  Stack,
  Text,
} from 'braid-design-system';
import values from 'lodash/values';
import React from 'react';

import { redBorder } from './styles.css';

interface JobSummaryProps {
  title: string;
  isNew: boolean;
}

export const JobSummary = ({ title, isNew }: JobSummaryProps) => (
  <Card>
    <Box className={redBorder} id="CUSTOM_STYLED_BOX_COMPONENT">
      <Stack space="gutter">
        <Columns space="gutter">
          <Column>
            <Stack space="small">
              {isNew && <Badge tone="positive">New</Badge>}
              <Heading level="3">{title}</Heading>
              <Inline space="small">
                <Text tone="secondary">Braid Design Pty Ltd</Text>
                <Rating rating={4.5} />
              </Inline>
            </Stack>
          </Column>
          <Column width="content">
            <IconBookmark />
          </Column>
        </Columns>
        <Stack space="small">
          <Text size="small" tone="secondary">
            <IconLocation /> Melbourne
          </Text>
          <Text size="small" tone="secondary">
            <IconTag /> Information Technology
          </Text>
          <Text size="small" tone="secondary">
            <IconMoney /> 150k+
          </Text>
        </Stack>
        <Text>
          Long description of card details providing more information.
        </Text>
        <Text size="xsmall" tone="secondary">
          {values({ value: '2d', suffix: 'ago' }).join(' ')}
        </Text>
      </Stack>
    </Box>
  </Card>
);
