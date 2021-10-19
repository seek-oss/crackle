import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { DividerProps } from '../Divider/Divider';
import type { Align } from '../../utils/align';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validStackComponents: readonly ["div", "ol", "ul"];
export interface StackProps {
    component?: typeof validStackComponents[number];
    children: ReactNodeNoStrings;
    space: ResponsiveSpace;
    align?: OptionalResponsiveValue<Align>;
    dividers?: boolean | DividerProps['weight'];
    data?: DataAttributeMap;
}
export declare const Stack: ({ component, children, space, align, dividers, data, }: StackProps) => JSX.Element;
