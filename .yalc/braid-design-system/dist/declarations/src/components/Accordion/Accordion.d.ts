import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { RequiredResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import type { AccordionContextValue } from './AccordionContext';
export declare const validSpaceValues: readonly ["medium", "large", "xlarge"];
export interface AccordionProps {
    children: ReactNodeNoStrings;
    dividers?: boolean;
    size?: AccordionContextValue['size'];
    tone?: AccordionContextValue['tone'];
    space?: RequiredResponsiveValue<typeof validSpaceValues[number]>;
    data?: DataAttributeMap;
}
export declare const Accordion: ({ children, size, tone, space: spaceProp, dividers, data, }: AccordionProps) => JSX.Element;
