export declare const pseudoProperties: any;
export declare type PseudoProperties = keyof typeof pseudoProperties;
export declare const unresponsiveProperties: any;
export declare type UnresponsiveProperties = keyof typeof unresponsiveProperties;
export declare const responsiveProperties: {
    readonly display: {
        readonly none: "none";
        readonly block: "block";
        readonly inline: "inline";
        readonly inlineBlock: "inline-block";
        readonly flex: "flex";
    };
    readonly position: readonly ["relative", "absolute", "fixed"];
    readonly borderRadius: {
        readonly standard: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly none: "0px";
        readonly full: "9999px";
    };
    readonly paddingTop: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly paddingBottom: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly paddingRight: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly paddingLeft: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly marginTop: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly marginBottom: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly marginRight: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly marginLeft: {
        readonly none: 0;
        readonly gutter: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xsmall: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly small: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly medium: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly large: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
        readonly xxlarge: import("@vanilla-extract/css/dist/declarations/src/types").CSSVarFunction;
    };
    readonly alignItems: {
        readonly flexStart: "flex-start";
        readonly center: "center";
        readonly flexEnd: "flex-end";
    };
    readonly justifyContent: {
        readonly flexStart: "flex-start";
        readonly center: "center";
        readonly flexEnd: "flex-end";
        readonly spaceBetween: "space-between";
    };
    readonly flexDirection: {
        readonly row: "row";
        readonly rowReverse: "row-reverse";
        readonly column: "column";
        readonly columnReverse: "column-reverse";
    };
    readonly flexWrap: {
        readonly wrap: "wrap";
        readonly nowrap: "nowrap";
    };
    readonly flexShrink: readonly [0];
    readonly flexGrow: readonly [0, 1];
    readonly textAlign: readonly ["left", "center", "right"];
};
export declare type ResponsiveProperties = keyof typeof responsiveProperties;
