import { Atoms } from '../css/atoms/atoms';
import { responsiveStyle } from '../css/responsiveStyle';
import { breakpoints } from '../css/breakpoints';
import { globalHeadingStyle, globalTextStyle } from '../hooks/typography';
import type { Breakpoint } from '../css/breakpoints';
declare const vars: any;
declare function atoms(props: Omit<Atoms, 'background'>): string;
export { vars, atoms, breakpoints, responsiveStyle, globalTextStyle, globalHeadingStyle, };
export type { Breakpoint };
