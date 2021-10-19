import React from 'react';
import type { InlineFieldProps } from '../private/InlineField/InlineField';
import type { CheckboxChecked } from '../private/InlineField/StyledInput';
export interface CheckboxProps extends Omit<InlineFieldProps, 'checked'> {
    checked: CheckboxChecked | Array<boolean>;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
