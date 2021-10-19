import React from 'react';
import type { PrivateTextLinkRendererProps } from '../TextLinkRenderer/TextLinkRenderer';
import type { LinkComponentProps } from '../BraidProvider/BraidProvider';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface TextLinkProps extends Omit<PrivateTextLinkRendererProps, 'reset' | 'children'>, Omit<LinkComponentProps, 'className' | 'style'> {
    data?: DataAttributeMap;
}
export declare const TextLink: React.ForwardRefExoticComponent<TextLinkProps & React.RefAttributes<HTMLAnchorElement>>;
