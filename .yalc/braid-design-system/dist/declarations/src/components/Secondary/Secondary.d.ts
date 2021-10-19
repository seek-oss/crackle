import type { ReactNode } from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export interface SecondaryProps {
    children: ReactNode;
    id?: string;
    data?: DataAttributeMap;
}
export declare const Secondary: ({ children, data, id }: SecondaryProps) => JSX.Element;
