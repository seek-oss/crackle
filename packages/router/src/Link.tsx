import type React from 'react';
import { type LinkProps, Link as ReactRouterLink } from 'react-router-dom';

import type { ValidRoute } from './valid-routes';

type CrackleLinkProps = Exclude<LinkProps, 'to'> & {
  to: ValidRoute;
};

type CrackleLink = React.ForwardRefExoticComponent<
  CrackleLinkProps & React.RefAttributes<HTMLAnchorElement>
>;

export const Link: CrackleLink = ReactRouterLink as CrackleLink;

export const crackleLink = (href: ValidRoute) => href;
