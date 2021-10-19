import type { ReactNode } from 'react';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { UseDisclosureProps } from './useDisclosure';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export declare type DisclosureBaseProps = {
    expandLabel: string;
    collapseLabel?: string;
    space?: ResponsiveSpace;
    data?: DataAttributeMap;
    children: ReactNode;
};
export declare type DisclosureProps = DisclosureBaseProps & UseDisclosureProps;
export type { DisclosureStateProps } from './useDisclosure';
export declare const Disclosure: ({ id, expandLabel, collapseLabel, space, children, data, ...restProps }: DisclosureProps) => JSX.Element;
