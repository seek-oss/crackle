import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { CollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validInlineComponents: readonly ["div", "ol", "ul"];
export interface InlineProps extends CollapsibleAlignmentProps {
    space: ResponsiveSpace;
    component?: typeof validInlineComponents[number];
    data?: DataAttributeMap;
    children: ReactNodeNoStrings;
}
export declare const Inline: ({ space, align, alignY, collapseBelow, reverse, component, data, children, }: InlineProps) => JSX.Element;
