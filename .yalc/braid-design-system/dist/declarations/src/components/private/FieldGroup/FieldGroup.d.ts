import { AllHTMLAttributes } from 'react';
import { FieldLabelProps } from '../../FieldLabel/FieldLabel';
import { FieldMessageProps } from '../../FieldMessage/FieldMessage';
import { StackProps } from '../../Stack/Stack';
import { DataAttributeMap } from '../buildDataAttributes';
import { ReactNodeNoStrings } from '../ReactNodeNoStrings';
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
export declare type FieldGroupBaseProps = {
    id: NonNullable<FormElementProps['id']>;
    disabled?: FormElementProps['disabled'];
    message?: FieldMessageProps['message'];
    reserveMessageSpace?: FieldMessageProps['reserveMessageSpace'];
    tone?: FieldMessageProps['tone'];
    required?: boolean;
    data?: DataAttributeMap;
};
interface FieldGroupRenderProps {
    disabled?: FieldGroupBaseProps['disabled'];
    'aria-describedby'?: string;
}
declare type InternalFieldGroupProps = FieldGroupBaseProps & FieldLabelVariant & {
    role?: FormElementProps['role'];
    space?: StackProps['space'];
    children(props: FieldGroupRenderProps): ReactNodeNoStrings;
};
export declare const FieldGroup: ({ id, disabled, children, secondaryLabel, tertiaryLabel, description, message, reserveMessageSpace, tone, required, role, space, data, ...restProps }: InternalFieldGroupProps) => JSX.Element;
export {};
