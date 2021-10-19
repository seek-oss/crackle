import type { FontMetrics } from '@capsizecss/core';
import type { BraidTokens } from './tokenType';
declare const decorateTokens: (braidTokens: BraidTokens) => {
    utils: {
        responsiveStyle: ({ mobile, tablet, desktop, wide, }: ResponsiveStyle) => import("treat").Style;
    };
    border: {
        radius: {
            standard: string;
            large: string;
            xlarge: string;
        };
        width: {
            standard: number;
            large: number;
        };
        color: {
            brandAccent: string;
            caution: string;
            cautionLight: string;
            critical: string;
            criticalLight: string;
            field: string;
            focus: string;
            formAccent: string;
            formHover: string;
            info: string;
            infoLight: string;
            positive: string;
            positiveLight: string;
            promote: string;
            promoteLight: string;
            standard: string;
            standardInverted: string;
        };
    };
    breakpoint: {
        readonly mobile: 0;
        readonly tablet: 740;
        readonly desktop: 992;
        readonly wide: 1200;
    };
    color: {
        foreground: {
            brandAccent: string;
            caution: string;
            critical: string;
            formAccent: string;
            info: string;
            link: string;
            linkHover: string;
            linkVisited: string;
            neutral: string;
            neutralInverted: string;
            positive: string;
            promote: string;
            rating: string;
            secondary: string;
            secondaryInverted: string;
        };
        background: {
            body: string;
            brand: string;
            brandAccent: string;
            brandAccentActive: string;
            brandAccentHover: string;
            brandAccentSoft: string;
            brandAccentSoftActive: string;
            brandAccentSoftHover: string;
            card: string;
            caution: string;
            cautionLight: string;
            critical: string;
            criticalActive: string;
            criticalHover: string;
            criticalLight: string;
            criticalSoft: string;
            criticalSoftActive: string;
            criticalSoftHover: string;
            formAccent: string;
            formAccentActive: string;
            formAccentDisabled: string;
            formAccentHover: string;
            formAccentSoft: string;
            formAccentSoftActive: string;
            formAccentSoftHover: string;
            info: string;
            infoLight: string;
            input: string;
            inputDisabled: string;
            neutral: string;
            neutralLight: string;
            positive: string;
            positiveLight: string;
            promote: string;
            promoteLight: string;
            selection: string;
        };
    };
    contentWidth: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
    };
    displayName: string;
    grid: number;
    name: string;
    shadows: {
        small: string;
        medium: string;
        large: string;
    };
    space: {
        gutter: number;
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
    };
    touchableSize: number;
    transforms: {
        touchable: string;
    };
    transitions: {
        fast: string;
        touchable: string;
    };
    typography: {
        heading: {
            level: {
                1: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                2: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                3: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
                4: {
                    mobile: {
                        capHeight: number;
                        rows: number;
                    };
                    tablet: {
                        capHeight: number;
                        rows: number;
                    };
                };
            };
            weight: {
                weak: "strong" | "medium" | "regular";
                regular: "strong" | "medium" | "regular";
            };
        };
        text: {
            xsmall: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            small: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            standard: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
            large: {
                mobile: {
                    capHeight: number;
                    rows: number;
                };
                tablet: {
                    capHeight: number;
                    rows: number;
                };
            };
        };
        fontFamily: string;
        webFont: string | null;
        fontMetrics: FontMetrics;
        fontWeight: Record<"strong" | "medium" | "regular", 400 | 500 | 600 | 700 | 800>;
    };
};
export declare type TreatTheme = ReturnType<typeof decorateTokens>;
declare const _default: (braidTokens: BraidTokens) => {
    resolvedTokens: {
        readonly space: {
            gutter: string;
            xxsmall: string;
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
        };
        readonly touchableSize: string;
        readonly grid: string;
        readonly borderRadius: {
            standard: string;
            large: string;
            xlarge: string;
        };
        readonly borderColor: {
            brandAccent: string;
            caution: string;
            cautionLight: string;
            critical: string;
            criticalLight: string;
            field: string;
            focus: string;
            formAccent: string;
            formHover: string;
            info: string;
            infoLight: string;
            positive: string;
            positiveLight: string;
            promote: string;
            promoteLight: string;
            standard: string;
            standardInverted: string;
        };
        readonly borderWidth: {
            standard: string;
            large: string;
        };
        readonly focusRingSize: string;
        readonly contentWidth: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
        };
        readonly foregroundColor: {
            brandAccent: string;
            caution: string;
            critical: string;
            formAccent: string;
            info: string;
            link: string;
            linkHover: string;
            linkVisited: string;
            neutral: string;
            neutralInverted: string;
            positive: string;
            promote: string;
            rating: string;
            secondary: string;
            secondaryInverted: string;
        };
        readonly backgroundColor: {
            body: string;
            brand: string;
            brandAccent: string;
            brandAccentActive: string;
            brandAccentHover: string;
            brandAccentSoft: string;
            brandAccentSoftActive: string;
            brandAccentSoftHover: string;
            card: string;
            caution: string;
            cautionLight: string;
            critical: string;
            criticalActive: string;
            criticalHover: string;
            criticalLight: string;
            criticalSoft: string;
            criticalSoftActive: string;
            criticalSoftHover: string;
            formAccent: string;
            formAccentActive: string;
            formAccentDisabled: string;
            formAccentHover: string;
            formAccentSoft: string;
            formAccentSoftActive: string;
            formAccentSoftHover: string;
            info: string;
            infoLight: string;
            input: string;
            inputDisabled: string;
            neutral: string;
            neutralLight: string;
            positive: string;
            positiveLight: string;
            promote: string;
            promoteLight: string;
            selection: string;
        };
        readonly fontFamily: string;
        readonly fontMetrics: {
            ascent: string;
            descent: string;
            lineGap: string;
            unitsPerEm: string;
            capHeight: string;
        };
        readonly textSize: {
            xsmall: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            small: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            standard: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            large: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
        };
        readonly textWeight: {
            strong: string;
            medium: string;
            regular: string;
        };
        readonly headingLevel: {
            1: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            2: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            3: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
            4: {
                mobile: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
                tablet: {
                    fontSize: string;
                    lineHeight: string;
                    capHeight: string;
                    capsizeTrims: {
                        capHeightTrim: string;
                        baselineTrim: string;
                    };
                };
            };
        };
        readonly headingWeight: {
            readonly weak: string;
            readonly regular: string;
        };
        readonly inlineFieldSize: {
            readonly standard: string;
            readonly small: string;
        };
        readonly transition: {
            fast: string;
            touchable: string;
        };
        readonly transform: {
            touchable: string;
        };
        readonly shadow: {
            small: string;
            medium: string;
            large: string;
        };
    };
    runtimeTokens: {
        name: string;
        displayName: string;
        background: string;
        webFonts: {
            linkTag: string;
        }[];
        space: {
            grid: number;
            space: {
                gutter: number;
                xxsmall: number;
                xsmall: number;
                small: number;
                medium: number;
                large: number;
                xlarge: number;
                xxlarge: number;
            };
        };
        color: {
            foreground: {
                brandAccent: string;
                caution: string;
                critical: string;
                formAccent: string;
                info: string;
                link: string;
                linkHover: string;
                linkVisited: string;
                neutral: string;
                neutralInverted: string;
                positive: string;
                promote: string;
                rating: string;
                secondary: string;
                secondaryInverted: string;
            };
            background: {
                body: string;
                brand: string;
                brandAccent: string;
                brandAccentActive: string;
                brandAccentHover: string;
                brandAccentSoft: string;
                brandAccentSoftActive: string;
                brandAccentSoftHover: string;
                card: string;
                caution: string;
                cautionLight: string;
                critical: string;
                criticalActive: string;
                criticalHover: string;
                criticalLight: string;
                criticalSoft: string;
                criticalSoftActive: string;
                criticalSoftHover: string;
                formAccent: string;
                formAccentActive: string;
                formAccentDisabled: string;
                formAccentHover: string;
                formAccentSoft: string;
                formAccentSoftActive: string;
                formAccentSoftHover: string;
                info: string;
                infoLight: string;
                input: string;
                inputDisabled: string;
                neutral: string;
                neutralLight: string;
                positive: string;
                positiveLight: string;
                promote: string;
                promoteLight: string;
                selection: string;
            };
        };
        backgroundLightness: {
            body: "dark" | "light";
            brand: "dark" | "light";
            brandAccent: "dark" | "light";
            brandAccentActive: "dark" | "light";
            brandAccentHover: "dark" | "light";
            brandAccentSoft: "dark" | "light";
            brandAccentSoftActive: "dark" | "light";
            brandAccentSoftHover: "dark" | "light";
            card: "dark" | "light";
            caution: "dark" | "light";
            cautionLight: "dark" | "light";
            critical: "dark" | "light";
            criticalActive: "dark" | "light";
            criticalHover: "dark" | "light";
            criticalLight: "dark" | "light";
            criticalSoft: "dark" | "light";
            criticalSoftActive: "dark" | "light";
            criticalSoftHover: "dark" | "light";
            formAccent: "dark" | "light";
            formAccentActive: "dark" | "light";
            formAccentDisabled: "dark" | "light";
            formAccentHover: "dark" | "light";
            formAccentSoft: "dark" | "light";
            formAccentSoftActive: "dark" | "light";
            formAccentSoftHover: "dark" | "light";
            info: "dark" | "light";
            infoLight: "dark" | "light";
            input: "dark" | "light";
            inputDisabled: "dark" | "light";
            neutral: "dark" | "light";
            neutralLight: "dark" | "light";
            positive: "dark" | "light";
            positiveLight: "dark" | "light";
            promote: "dark" | "light";
            promoteLight: "dark" | "light";
            selection: "dark" | "light";
        };
    };
};
export default _default;
