import type { ReactNode } from 'react';
import type { ResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validCardComponents: readonly ["div", "article", "aside", "details", "main", "section"];
declare type SimpleCardRounding = {
    rounded?: boolean;
    roundedAbove?: never;
};
declare type ResponsiveCardRounding = {
    rounded?: never;
    roundedAbove?: ResponsiveRangeProps['above'];
};
export declare type CardProps = {
    children: ReactNode;
    tone?: 'promote' | 'formAccent';
    component?: typeof validCardComponents[number];
    data?: DataAttributeMap;
} & (SimpleCardRounding | ResponsiveCardRounding);
export declare const Card: ({ children, component, tone, data, ...restProps }: CardProps) => JSX.Element;
export {};
