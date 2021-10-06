export declare const breakpointNames: readonly ["mobile", "tablet", "desktop", "wide"];
export declare const breakpoints: {
    readonly mobile: 0;
    readonly tablet: 740;
    readonly desktop: 992;
    readonly wide: 1200;
};
export declare type Breakpoint = keyof typeof breakpoints;
