import type { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';
import type { Breakpoint } from '../../css/breakpoints';
export declare function resolveResponsiveObject<Value>(breakpointName: Breakpoint, value: RequiredResponsiveObject<Value>): Value | null;
