import type { ReactNode } from 'react';
import type { TextProps } from '../Text/Text';
import type { UseDisclosureProps, DisclosureStateProps } from '../Disclosure/useDisclosure';
import type { AccordionContextValue } from './AccordionContext';
import type { DataAttributeMap } from '../private/buildDataAttributes';
export declare type AccordionItemBaseProps = {
    label: string;
    children: ReactNode;
    size?: TextProps['size'];
    tone?: AccordionContextValue['tone'];
    data?: DataAttributeMap;
};
export declare type AccordionItemProps = AccordionItemBaseProps & UseDisclosureProps;
export declare type AccordionItemStateProps = DisclosureStateProps;
export declare const AccordionItem: ({ id, label, children, size: sizeProp, tone: toneProp, data, ...restProps }: AccordionItemProps) => JSX.Element;
