import type { ReactNode } from 'react';
import type { AllOrNone } from '../private/AllOrNone';
import type { DataAttributeMap } from '../private/buildDataAttributes';
declare type Tone = 'promote' | 'info' | 'positive' | 'caution' | 'critical';
declare type CloseProps = AllOrNone<{
    onClose: () => void;
    closeLabel: string;
}>;
export declare type AlertProps = {
    tone?: Tone;
    children: ReactNode;
    data?: DataAttributeMap;
    id?: string;
} & CloseProps;
export declare const Alert: ({ tone, children, id, closeLabel, data, onClose, }: AlertProps) => JSX.Element;
export {};
