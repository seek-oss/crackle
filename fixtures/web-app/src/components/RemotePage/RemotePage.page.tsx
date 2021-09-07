import { createRouteData } from '@crackle/router';
import React from 'react';

import { BraidMetadata } from '../../types';

import { RemotePageContent } from './components/RemotePageContent';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/remote',
  globalMetadata: {
    isDeprecated: false,
    componentName: 'Remote page',
  },
}));

const RemotePage = () => <RemotePageContent />;

export default RemotePage;
