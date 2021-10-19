import type { Style } from 'sku/treat';
import type { Breakpoint } from '../css/breakpoints';
declare type RequiredTokens = {
    breakpoint: Record<Breakpoint, number>;
};
export declare const makeThemeUtils: (tokens: RequiredTokens) => {
    responsiveStyle: ({ mobile, tablet, desktop, wide, }: ResponsiveStyle) => Style;
};
export {};
