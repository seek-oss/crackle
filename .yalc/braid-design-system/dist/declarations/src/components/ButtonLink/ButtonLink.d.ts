import type { ReactNode } from 'react';
import React from 'react';
import type { PrivateButtonRendererProps } from '../ButtonRenderer/ButtonRenderer';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface ButtonLinkProps extends Omit<PrivateButtonRendererProps, 'children'>, Omit<LinkComponentProps, 'className' | 'style'> {
    children?: ReactNode;
    data?: DataAttributeMap;
}
export declare const ButtonLink: React.ForwardRefExoticComponent<ButtonLinkProps & React.RefAttributes<HTMLAnchorElement>>;
