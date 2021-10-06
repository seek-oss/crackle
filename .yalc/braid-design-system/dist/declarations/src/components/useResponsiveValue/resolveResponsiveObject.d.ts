import { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';
import { Breakpoint } from '../../css/breakpoints';
export declare function resolveResponsiveObject<Value>(breakpointName: Breakpoint, value: RequiredResponsiveObject<Value>): Value | null;
