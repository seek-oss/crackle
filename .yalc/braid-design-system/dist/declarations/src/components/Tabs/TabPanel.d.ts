import type { ReactNode } from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface TabPanelProps {
    children: ReactNode;
    item?: string;
    data?: DataAttributeMap;
}
export declare const TabPanel: ({ children, data, item }: TabPanelProps) => JSX.Element;
