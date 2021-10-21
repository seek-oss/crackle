import { createRouteData } from '@crackle/router';
import React from 'react';

export const routeData = createRouteData({
  route: '/',
});

const HomePage = () => <p>This is the home page</p>;

export default HomePage;
