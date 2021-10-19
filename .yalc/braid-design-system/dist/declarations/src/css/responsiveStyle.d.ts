import type { StyleRule } from '@vanilla-extract/css';
declare type CSSProps = Omit<StyleRule, '@media' | '@supports'>;
export declare const breakpointQuery: {
    readonly tablet: string;
    readonly desktop: string;
    readonly wide: string;
};
interface ResponsiveStyle {
    mobile?: CSSProps;
    tablet?: CSSProps;
    desktop?: CSSProps;
    wide?: CSSProps;
}
export declare const responsiveStyle: ({ mobile, tablet, desktop, wide, }: ResponsiveStyle) => StyleRule;
export {};
