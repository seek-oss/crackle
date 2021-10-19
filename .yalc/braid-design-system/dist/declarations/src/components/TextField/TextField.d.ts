import type { AllHTMLAttributes } from 'react';
import React from 'react';
import type { FieldBaseProps, FieldLabelVariant } from '../private/Field/Field';
declare const validTypes: {
    text: string;
    password: string;
    email: string;
    search: string;
    number: string;
    tel: string;
    url: string;
};
declare type InputProps = AllHTMLAttributes<HTMLInputElement>;
export declare type TextFieldBaseProps = Omit<FieldBaseProps, 'value' | 'labelId' | 'secondaryMessage'> & {
    value: NonNullable<InputProps['value']>;
    type?: keyof typeof validTypes;
    onChange: NonNullable<InputProps['onChange']>;
    onBlur?: InputProps['onBlur'];
    onFocus?: InputProps['onFocus'];
    onClear?: () => void;
    placeholder?: InputProps['placeholder'];
    characterLimit?: number;
};
export declare type TextFieldLabelProps = FieldLabelVariant;
export declare type TextFieldProps = TextFieldBaseProps & TextFieldLabelProps;
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export {};
