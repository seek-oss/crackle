import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import type { UseIconProps } from '../../hooks/useIcon';
declare type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface IconButtonProps {
    label: string;
    children: (props: UseIconProps) => ReactNode;
    onClick?: NativeButtonProps['onClick'];
    onMouseDown?: NativeButtonProps['onMouseDown'];
    onKeyUp?: NativeButtonProps['onKeyUp'];
    onKeyDown?: NativeButtonProps['onKeyDown'];
    'aria-haspopup'?: NativeButtonProps['aria-haspopup'];
    'aria-expanded'?: NativeButtonProps['aria-expanded'];
    keyboardAccessible?: boolean;
    active?: boolean;
    tone?: 'neutral' | 'secondary';
    data?: DataAttributeMap;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
