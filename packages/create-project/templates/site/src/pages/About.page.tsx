import { createRouteData } from '@crackle/router';
import React from 'react';

export const routeData = createRouteData({
  route: '/about',
});

const AboutPage = () => <p>Some neat facts about Crackle</p>;

export default AboutPage;
