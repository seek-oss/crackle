import type { ClassValue } from 'clsx';
import type { AllHTMLAttributes, ElementType } from 'react';
import type { Atoms } from '../../css/atoms/atoms';
export interface BoxProps extends Omit<Atoms, 'reset'>, Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
    component?: ElementType;
    className?: ClassValue;
}
export declare const Box: import("react").ForwardRefExoticComponent<BoxProps & import("react").RefAttributes<HTMLElement>>;
