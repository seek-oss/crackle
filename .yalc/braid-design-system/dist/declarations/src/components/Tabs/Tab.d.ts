import type { ReactNode, ReactElement } from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import type { BadgeProps } from '../Badge/Badge';
export interface TabProps {
    children: ReactNode;
    item?: string;
    badge?: ReactElement<BadgeProps>;
    data?: DataAttributeMap;
}
export declare const Tab: ({ children, data, badge, item }: TabProps) => JSX.Element;
