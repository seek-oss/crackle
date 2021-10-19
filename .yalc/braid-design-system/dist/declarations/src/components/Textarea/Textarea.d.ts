import type { AllHTMLAttributes } from 'react';
import React from 'react';
import type { FieldBaseProps, FieldLabelVariant } from '../private/Field/Field';
declare type NativeTextareaProps = AllHTMLAttributes<HTMLTextAreaElement>;
export declare type TextareaBaseProps = Omit<FieldBaseProps, 'value' | 'labelId' | 'secondaryMessage' | 'icon' | 'prefix'> & {
    value: NonNullable<NativeTextareaProps['value']>;
    onChange: NonNullable<NativeTextareaProps['onChange']>;
    onBlur?: NativeTextareaProps['onBlur'];
    onFocus?: NativeTextareaProps['onFocus'];
    onPaste?: NativeTextareaProps['onPaste'];
    placeholder?: NativeTextareaProps['placeholder'];
    highlightRanges?: Array<{
        start: number;
        end?: number;
    }>;
    characterLimit?: number;
    lines?: number;
    lineLimit?: number;
    grow?: boolean;
};
export declare type TextareaLabelProps = FieldLabelVariant;
export declare type TextareaProps = TextareaBaseProps & TextareaLabelProps;
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
