import React from 'react';
import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';

import { ValidRoute } from './valid-routes';

type CrackleLinkProps = Exclude<LinkProps, 'to'> & {
  to: ValidRoute;
};

type CrackleLink = React.ForwardRefExoticComponent<
  CrackleLinkProps & React.RefAttributes<HTMLAnchorElement>
>;

export const Link: CrackleLink = ReactRouterLink as CrackleLink;

export const crackleLink = (href: ValidRoute) => href;
