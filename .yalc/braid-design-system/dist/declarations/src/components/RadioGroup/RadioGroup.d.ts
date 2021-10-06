import { FormEvent, ReactElement } from 'react';
import { FieldGroupBaseProps, FieldLabelVariant } from '../private/FieldGroup/FieldGroup';
import { RadioItemProps } from '../RadioGroup/RadioItem';
import { InlineFieldProps } from '../private/InlineField/InlineField';
export declare type RadioGroupBaseProps<Value = NonNullable<string | number>> = FieldGroupBaseProps & {
    children: ReactElement<RadioItemProps>[];
    value: Value;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    name?: string;
    size?: InlineFieldProps['size'];
};
export declare type RadioGroupLabelProps = FieldLabelVariant;
export declare type RadioGroupProps<Value = NonNullable<string | number>> = RadioGroupBaseProps<Value> & RadioGroupLabelProps;
declare const RadioGroup: {
    ({ children, id, value, name, onChange, disabled, tone, size, ...props }: RadioGroupProps): JSX.Element;
    displayName: string;
};
export { RadioGroup };
