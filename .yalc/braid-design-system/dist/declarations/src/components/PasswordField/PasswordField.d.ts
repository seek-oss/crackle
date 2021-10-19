import type { AllHTMLAttributes } from 'react';
import React from 'react';
import type { FieldBaseProps, FieldLabelVariant } from '../private/Field/Field';
declare type InputProps = AllHTMLAttributes<HTMLInputElement>;
export declare type PasswordFieldBaseProps = Omit<FieldBaseProps, 'value' | 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'> & {
    value: NonNullable<InputProps['value']>;
    onChange: NonNullable<InputProps['onChange']>;
    onBlur?: InputProps['onBlur'];
    onFocus?: InputProps['onFocus'];
    placeholder?: InputProps['placeholder'];
    onVisibilityToggle?: (visible: boolean) => void;
    visibilityToggleLabel?: string;
};
export declare type PasswordFieldLabelProps = FieldLabelVariant;
export declare type PasswordFieldProps = PasswordFieldBaseProps & PasswordFieldLabelProps;
export declare const PasswordField: React.ForwardRefExoticComponent<PasswordFieldProps & React.RefAttributes<HTMLInputElement>>;
export {};
