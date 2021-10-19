import type { ReactNode, AllHTMLAttributes } from 'react';
import type { BoxProps } from '../../Box/Box';
import type { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import type { FieldMessageProps } from '../../FieldMessage/FieldMessage';
import type { DataAttributeMap } from '../buildDataAttributes';
declare type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export declare type FieldLabelVariant = {
    'aria-labelledby': string;
    secondaryLabel?: never;
    tertiaryLabel?: never;
    description?: never;
} | {
    'aria-label': string;
    secondaryLabel?: never;
    tertiaryLabel?: never;
    description?: never;
} | {
    label: FieldLabelProps['label'];
    secondaryLabel?: FieldLabelProps['secondaryLabel'];
    tertiaryLabel?: FieldLabelProps['tertiaryLabel'];
    description?: FieldLabelProps['description'];
};
export declare type FieldBaseProps = {
    id: NonNullable<FormElementProps['id']>;
    value?: FormElementProps['value'];
    labelId?: string;
    name?: FormElementProps['name'];
    disabled?: FormElementProps['disabled'];
    autoComplete?: FormElementProps['autoComplete'];
    message?: FieldMessageProps['message'];
    secondaryMessage?: FieldMessageProps['secondaryMessage'];
    reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
    tone?: FieldMessageProps['tone'];
    'aria-describedby'?: FormElementProps['aria-describedby'];
    data?: DataAttributeMap;
    autoFocus?: boolean;
    icon?: ReactNode;
    prefix?: string;
    required?: boolean;
};
declare type PassthroughProps = 'id' | 'name' | 'disabled' | 'autoComplete' | 'autoFocus';
interface FieldRenderProps extends Pick<FieldBaseProps, PassthroughProps> {
    background: BoxProps['background'];
    borderRadius: BoxProps['borderRadius'];
    width: BoxProps['width'];
    paddingLeft: BoxProps['paddingLeft'];
    paddingRight: BoxProps['paddingRight'];
    outline: BoxProps['outline'];
    'aria-describedby'?: string;
    'aria-required'?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    className: string;
}
declare type InternalFieldProps = FieldBaseProps & FieldLabelVariant & {
    secondaryIcon?: ReactNode;
    children(overlays: ReactNode, props: FieldRenderProps, icon: ReactNode, secondaryIcon: ReactNode, prefix: ReactNode): ReactNode;
};
export declare const Field: ({ id, value, labelId, name, disabled, autoComplete, children, message, secondaryMessage, reserveMessageSpace, tone, "aria-describedby": ariaDescribedBy, data, secondaryIcon, autoFocus, icon, prefix, required, ...restProps }: InternalFieldProps) => JSX.Element;
export {};
