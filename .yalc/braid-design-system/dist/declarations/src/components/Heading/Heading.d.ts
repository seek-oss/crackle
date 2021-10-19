import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';
import type { HeadingLevel, HeadingWeight } from '../../hooks/typography';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface HeadingProps {
    children: ReactNode;
    level: HeadingLevel;
    weight?: HeadingWeight;
    align?: BoxProps['textAlign'];
    component?: BoxProps['component'];
    id?: string;
    truncate?: boolean;
    data?: DataAttributeMap;
}
export declare const Heading: ({ level, weight, component, children, align, id, truncate, data, }: HeadingProps) => JSX.Element;
