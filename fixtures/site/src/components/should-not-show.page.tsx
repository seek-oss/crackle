import { createRouteData } from '@crackle/router';
import { Text } from 'braid-design-system';
import React from 'react';

import type { BraidMetadata } from '../types';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/nope',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'Should not be a page',
  },
}));

const NotPage = () => <Text>Oops</Text>;

export default NotPage;
