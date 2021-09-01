import React from 'react';
import { RouteDataFn } from '@crackle/build/';

import { RemotePageContent } from './components/RemotePageContent';

export const routeData: RouteDataFn = () => ({
  route: '/remote',
});

const RemotePage = () => <RemotePageContent />;

export default RemotePage;
