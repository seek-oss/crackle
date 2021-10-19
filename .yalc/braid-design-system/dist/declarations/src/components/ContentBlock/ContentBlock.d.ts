import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface ContentBlockProps {
    children: ReactNode;
    width?: BoxProps['maxWidth'];
    data?: DataAttributeMap;
}
export declare const ContentBlock: ({ width, data, children, }: ContentBlockProps) => JSX.Element;
