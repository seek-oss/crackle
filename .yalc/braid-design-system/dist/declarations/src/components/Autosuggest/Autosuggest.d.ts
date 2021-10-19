import type { ReactElement, RefAttributes } from 'react';
import type { FieldBaseProps, FieldLabelVariant } from '../private/Field/Field';
import type { AutosuggestTranslations } from '../../translations/en';
declare type SuggestionMatch = Array<{
    start: number;
    end: number;
}>;
export interface AutosuggestValue<Value = any> {
    text: string;
    description?: string;
    value?: Value;
}
export interface Suggestion<Value = any> extends AutosuggestValue<Value> {
    label?: string;
    highlights?: SuggestionMatch;
    onClear?: (value: AutosuggestValue<Value>) => void;
    clearLabel?: string;
}
export interface GroupedSuggestions<Value> {
    label: string;
    suggestions: Array<Suggestion<Value>>;
}
export declare type Suggestions<Value> = Array<Suggestion<Value> | GroupedSuggestions<Value>>;
export declare type AutosuggestBaseProps<Value> = Omit<FieldBaseProps, 'value' | 'autoComplete' | 'labelId' | 'prefix'> & {
    value: AutosuggestValue<Value>;
    suggestions: Suggestions<Value> | {
        message: string;
    } | ((value: AutosuggestValue<Value>) => Suggestions<Value> | {
        message: string;
    });
    onChange: (value: AutosuggestValue<Value>) => void;
    automaticSelection?: boolean;
    hideSuggestionsOnSelection?: boolean;
    showMobileBackdrop?: boolean;
    scrollToTopOnMobile?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    onClear?: () => void;
    placeholder?: string;
    type?: 'text' | 'search';
    translations?: AutosuggestTranslations;
};
export declare type AutosuggestLabelProps = FieldLabelVariant;
export declare type AutosuggestProps<Value> = AutosuggestBaseProps<Value> & AutosuggestLabelProps;
export declare const Autosuggest: <Value>(props: AutosuggestProps<Value> & RefAttributes<HTMLInputElement>) => ReactElement;
export {};
