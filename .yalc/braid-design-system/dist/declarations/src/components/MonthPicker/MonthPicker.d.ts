import { FieldLabelVariant, FieldGroupBaseProps } from '../private/FieldGroup/FieldGroup';
interface MonthPickerValue {
    month?: number;
    year?: number;
}
declare type MonthNames = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
];
declare type FocusHandler = () => void;
declare type ChangeHandler = (value: MonthPickerValue) => void;
export declare type MonthPickerBaseProps = Omit<FieldGroupBaseProps, 'value' | 'labelId' | 'aria-describedby' | 'name' | 'autoComplete' | 'secondaryMessage' | 'autoFocus' | 'icon' | 'prefix'> & {
    value: MonthPickerValue;
    onChange: ChangeHandler;
    onBlur?: FocusHandler;
    onFocus?: FocusHandler;
    minYear?: number;
    maxYear?: number;
    ascendingYears?: boolean;
    monthLabel?: string;
    yearLabel?: string;
    monthNames?: MonthNames;
};
export declare type MonthPickerLabelProps = FieldLabelVariant;
export declare type MonthPickerProps = MonthPickerBaseProps & MonthPickerLabelProps;
declare const MonthPicker: {
    ({ id, value, onChange, onBlur, onFocus, tone, disabled, minYear, maxYear, ascendingYears, monthLabel, yearLabel, monthNames, ...restProps }: MonthPickerProps): JSX.Element;
    displayName: string;
};
export { MonthPicker };
