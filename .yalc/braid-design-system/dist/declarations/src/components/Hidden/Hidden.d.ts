import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';
import type { ResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface HiddenProps extends ResponsiveRangeProps {
    children: ReactNode;
    component?: BoxProps['component'];
    screen?: boolean;
    print?: boolean;
    inline?: boolean;
    data?: DataAttributeMap;
}
export declare const Hidden: ({ children, component, above, below, screen, print, inline: inlineProp, data, }: HiddenProps) => JSX.Element;
