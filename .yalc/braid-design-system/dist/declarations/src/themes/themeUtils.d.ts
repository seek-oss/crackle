import { Style } from 'sku/treat';
import { Breakpoint } from '../css/breakpoints';
declare type RequiredTokens = {
    breakpoint: Record<Breakpoint, number>;
};
export declare const makeThemeUtils: (tokens: RequiredTokens) => {
    responsiveStyle: ({ mobile, tablet, desktop, wide, }: ResponsiveStyle) => Style;
};
export {};
