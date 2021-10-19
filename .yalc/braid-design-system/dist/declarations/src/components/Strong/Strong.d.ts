import type { ReactNode } from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface StrongProps {
    children: ReactNode;
    id?: string;
    data?: DataAttributeMap;
}
export declare const Strong: ({ children, data, id }: StrongProps) => JSX.Element;
