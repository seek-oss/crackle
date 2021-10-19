import type { ReactNode } from 'react';
import type { OptionalResponsiveValue } from '../css/atoms/sprinkles.css';
import type { ResponsiveRangeProps } from './resolveResponsiveRangeProps';
import type { Align, AlignY } from './align';
export interface CollapsibleAlignmentProps {
    collapseBelow?: ResponsiveRangeProps['below'];
    align?: OptionalResponsiveValue<Align>;
    alignY?: OptionalResponsiveValue<AlignY>;
    reverse?: boolean;
}
export declare function resolveCollapsibleAlignmentProps({ align, alignY, collapseBelow, reverse, }: CollapsibleAlignmentProps): {
    readonly collapseMobile: boolean;
    readonly collapseTablet: boolean;
    readonly collapseDesktop: boolean;
    readonly orderChildren: (children: ReactNode) => (import("react").ReactChild | import("react").ReactFragment | import("react").ReactPortal)[];
    readonly collapsibleAlignmentProps: {
        readonly display: readonly ("flex" | "block" | null)[] & {
            length: 4 | 3 | 2;
        } & {
            0: "flex" | "block" | null;
        };
        readonly flexDirection: readonly ("row" | "column" | "rowReverse" | null)[] & {
            length: 4 | 3 | 2;
        } & {
            0: "row" | "column" | "rowReverse" | null;
        };
        readonly justifyContent: (readonly ("center" | "flexStart" | "flexEnd" | null)[] & {
            length: 4 | 3 | 2;
        } & {
            0: "center" | "flexStart" | "flexEnd" | null;
        }) | undefined;
        readonly alignItems: "center" | "flexStart" | "flexEnd" | Partial<Record<"mobile" | "tablet" | "desktop" | "wide", "center" | "flexStart" | "flexEnd">> | undefined;
    };
    readonly collapsibleAlignmentChildProps: {
        readonly display: readonly ("flex" | "block" | null)[] & {
            length: 4 | 3 | 2;
        } & {
            0: "flex" | "block" | null;
        };
        readonly justifyContent: readonly ("center" | "flexStart" | "flexEnd" | null)[] & {
            length: 4 | 3 | 2;
        } & {
            0: "center" | "flexStart" | "flexEnd" | null;
        };
    };
};
