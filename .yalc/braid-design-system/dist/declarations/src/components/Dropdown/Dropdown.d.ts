import type { AllHTMLAttributes } from 'react';
import React from 'react';
import type { FieldBaseProps, FieldLabelVariant } from '../private/Field/Field';
declare type ValidDropdownChildren = AllHTMLAttributes<HTMLOptionElement | HTMLOptGroupElement>;
declare type SelectProps = AllHTMLAttributes<HTMLSelectElement>;
export declare type DropdownBaseProps = Omit<FieldBaseProps, 'value' | 'labelId' | 'secondaryMessage' | 'prefix'> & {
    children: ValidDropdownChildren[] | ValidDropdownChildren;
    value: NonNullable<SelectProps['value']>;
    onChange: NonNullable<SelectProps['onChange']>;
    onBlur?: SelectProps['onBlur'];
    onFocus?: SelectProps['onFocus'];
    placeholder?: string;
};
export declare type DropdownLabelProps = FieldLabelVariant;
export declare type DropdownProps = DropdownBaseProps & DropdownLabelProps;
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLSelectElement>>;
export {};
