import { createRouteData } from '@crackle/router';
import React from 'react';

import type { BraidMetadata } from '../../types';

import { RemotePageContent } from './components/RemotePageContent';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/remote/page',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'Remote page',
  },
}));

const RemotePage = () => <RemotePageContent />;

export default RemotePage;
