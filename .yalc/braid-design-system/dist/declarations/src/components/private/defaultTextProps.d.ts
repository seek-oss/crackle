import { ReactNode } from 'react';
import { UseTextProps } from '../../hooks/typography';
interface DefaultTextProps {
    tone?: NonNullable<UseTextProps['tone']>;
    weight?: NonNullable<UseTextProps['weight']>;
    size?: NonNullable<UseTextProps['size']>;
}
interface DefaultTextPropsProviderProps extends DefaultTextProps {
    children: ReactNode;
}
export declare const DefaultTextPropsProvider: ({ size, weight, tone, children, }: DefaultTextPropsProviderProps) => JSX.Element;
export declare const useDefaultTextProps: ({ size: sizeProp, weight: weightProp, tone: toneProp, }: DefaultTextProps) => {
    size: "small" | "large" | "xsmall" | "standard";
    weight: "strong" | "medium" | "regular";
    tone: "link" | "brandAccent" | "caution" | "critical" | "formAccent" | "info" | "neutral" | "positive" | "promote" | "secondary";
};
export {};
