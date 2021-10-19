import type { ReactElement } from 'react';
import React from 'react';
import type { ColumnProps } from '../Column/Column';
import type { Space, ResponsiveSpace } from '../../css/atoms/atoms';
import type { CollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import type { DataAttributeMap } from '../private/buildDataAttributes';
declare type CollapsibleAlignmentChildProps = ReturnType<typeof resolveCollapsibleAlignmentProps>['collapsibleAlignmentChildProps'];
interface ColumnsContextValue {
    collapseMobile: boolean;
    collapseTablet: boolean;
    collapseDesktop: boolean;
    mobileSpace: Space;
    tabletSpace: Space;
    desktopSpace: Space;
    wideSpace: Space;
    collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
}
export declare const ColumnsContext: React.Context<ColumnsContextValue>;
export interface ColumnsProps extends CollapsibleAlignmentProps {
    space: ResponsiveSpace;
    children: Array<ReactElement<ColumnProps> | null> | ReactElement<ColumnProps> | null;
    data?: DataAttributeMap;
}
export declare const Columns: ({ children, collapseBelow, reverse, space, align, alignY, data, }: ColumnsProps) => JSX.Element;
export {};
