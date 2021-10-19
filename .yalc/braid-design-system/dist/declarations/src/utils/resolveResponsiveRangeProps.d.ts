import type { Breakpoint } from '../css/breakpoints';
export interface ResponsiveRangeProps {
    above?: Exclude<Breakpoint, 'wide'>;
    below?: Exclude<Breakpoint, 'mobile'>;
}
export declare const resolveResponsiveRangeProps: (props: ResponsiveRangeProps) => [boolean, boolean, boolean, boolean];
