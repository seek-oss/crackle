import { ConditionalValue, RequiredConditionalValue } from '@vanilla-extract/sprinkles';
import { breakpointNames, Breakpoint } from '../breakpoints';
declare const responsiveAtomicStyles: {
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        padding: {
            mappings: ("paddingBottom" | "paddingTop" | "paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingBottom" | "paddingTop")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        margin: {
            mappings: ("marginBottom" | "marginTop" | "marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginBottom" | "marginTop")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
    };
};
export declare const sprinkles: import("@vanilla-extract/sprinkles/dist/declarations/src/createAtomsFn").AtomsFn<[{
    conditions: never;
    styles: {
        readonly background: {
            values: {
                body: {
                    defaultClass: string;
                };
                input: {
                    defaultClass: string;
                };
                brand: {
                    defaultClass: string;
                };
                brandAccent: {
                    defaultClass: string;
                };
                brandAccentActive: {
                    defaultClass: string;
                };
                brandAccentHover: {
                    defaultClass: string;
                };
                brandAccentSoft: {
                    defaultClass: string;
                };
                brandAccentSoftActive: {
                    defaultClass: string;
                };
                brandAccentSoftHover: {
                    defaultClass: string;
                };
                card: {
                    defaultClass: string;
                };
                caution: {
                    defaultClass: string;
                };
                cautionLight: {
                    defaultClass: string;
                };
                critical: {
                    defaultClass: string;
                };
                criticalActive: {
                    defaultClass: string;
                };
                criticalHover: {
                    defaultClass: string;
                };
                criticalLight: {
                    defaultClass: string;
                };
                criticalSoft: {
                    defaultClass: string;
                };
                criticalSoftActive: {
                    defaultClass: string;
                };
                criticalSoftHover: {
                    defaultClass: string;
                };
                formAccent: {
                    defaultClass: string;
                };
                formAccentActive: {
                    defaultClass: string;
                };
                formAccentDisabled: {
                    defaultClass: string;
                };
                formAccentHover: {
                    defaultClass: string;
                };
                formAccentSoft: {
                    defaultClass: string;
                };
                formAccentSoftActive: {
                    defaultClass: string;
                };
                formAccentSoftHover: {
                    defaultClass: string;
                };
                info: {
                    defaultClass: string;
                };
                infoLight: {
                    defaultClass: string;
                };
                inputDisabled: {
                    defaultClass: string;
                };
                neutral: {
                    defaultClass: string;
                };
                neutralLight: {
                    defaultClass: string;
                };
                positive: {
                    defaultClass: string;
                };
                positiveLight: {
                    defaultClass: string;
                };
                promote: {
                    defaultClass: string;
                };
                promoteLight: {
                    defaultClass: string;
                };
                selection: {
                    defaultClass: string;
                };
            };
        };
        readonly overflow: {
            values: {
                hidden: {
                    defaultClass: string;
                };
                scroll: {
                    defaultClass: string;
                };
                visible: {
                    defaultClass: string;
                };
                auto: {
                    defaultClass: string;
                };
            };
        };
        readonly userSelect: {
            values: {
                none: {
                    defaultClass: string;
                };
            };
        };
        readonly outline: {
            values: {
                none: {
                    defaultClass: string;
                };
            };
        };
        readonly opacity: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly zIndex: {
            values: {
                0: {
                    defaultClass: string;
                };
                1: {
                    defaultClass: string;
                };
                2: {
                    defaultClass: string;
                };
                dropdownBackdrop: {
                    defaultClass: string;
                };
                dropdown: {
                    defaultClass: string;
                };
                sticky: {
                    defaultClass: string;
                };
                modalBackdrop: {
                    defaultClass: string;
                };
                modal: {
                    defaultClass: string;
                };
                notification: {
                    defaultClass: string;
                };
            };
        };
        readonly boxShadow: {
            values: {
                small: {
                    defaultClass: string;
                };
                medium: {
                    defaultClass: string;
                };
                large: {
                    defaultClass: string;
                };
                outlineFocus: {
                    defaultClass: string;
                };
                borderField: {
                    defaultClass: string;
                };
                borderStandard: {
                    defaultClass: string;
                };
                borderStandardInverted: {
                    defaultClass: string;
                };
                borderCritical: {
                    defaultClass: string;
                };
                borderCriticalLight: {
                    defaultClass: string;
                };
                borderCriticalLarge: {
                    defaultClass: string;
                };
                borderCaution: {
                    defaultClass: string;
                };
                borderCautionLight: {
                    defaultClass: string;
                };
                borderPositive: {
                    defaultClass: string;
                };
                borderPositiveLight: {
                    defaultClass: string;
                };
                borderInfo: {
                    defaultClass: string;
                };
                borderInfoLight: {
                    defaultClass: string;
                };
                borderPromote: {
                    defaultClass: string;
                };
                borderPromoteLight: {
                    defaultClass: string;
                };
                borderFormHover: {
                    defaultClass: string;
                };
                borderFormAccent: {
                    defaultClass: string;
                };
                borderFormAccentLarge: {
                    defaultClass: string;
                };
                borderBrandAccentLarge: {
                    defaultClass: string;
                };
                borderStandardInvertedLarge: {
                    defaultClass: string;
                };
            };
        };
        readonly cursor: {
            values: {
                default: {
                    defaultClass: string;
                };
                pointer: {
                    defaultClass: string;
                };
            };
        };
        readonly pointerEvents: {
            values: {
                none: {
                    defaultClass: string;
                };
            };
        };
        readonly top: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly bottom: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly left: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly right: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly height: {
            values: {
                touchable: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
            };
        };
        readonly width: {
            values: {
                touchable: {
                    defaultClass: string;
                };
                full: {
                    defaultClass: string;
                };
            };
        };
        readonly minWidth: {
            values: {
                0: {
                    defaultClass: string;
                };
            };
        };
        readonly maxWidth: {
            values: {
                small: {
                    defaultClass: string;
                };
                medium: {
                    defaultClass: string;
                };
                large: {
                    defaultClass: string;
                };
                xsmall: {
                    defaultClass: string;
                };
            };
        };
        readonly transition: {
            values: {
                fast: {
                    defaultClass: string;
                };
                touchable: {
                    defaultClass: string;
                };
            };
        };
    };
}, {
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        padding: {
            mappings: ("paddingBottom" | "paddingTop" | "paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingBottom" | "paddingTop")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        margin: {
            mappings: ("marginBottom" | "marginTop" | "marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginBottom" | "marginTop")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
    };
}, {
    conditions: {
        defaultCondition: false;
        conditionNames: "active"[];
    };
    styles: {
        readonly transform: {
            values: {
                touchable: {
                    defaultClass: undefined;
                    conditions: {
                        active: string;
                    };
                };
            };
        };
    };
}]>;
export declare type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveAtomicStyles, Value>;
export declare type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<typeof responsiveAtomicStyles, Value>;
export declare type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> & Record<typeof breakpointNames[0], Value>;
export declare const normalizeResponsiveValue: <Value extends string | number>(value: ConditionalValue<{
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        padding: {
            mappings: ("paddingBottom" | "paddingTop" | "paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingBottom" | "paddingTop")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        margin: {
            mappings: ("marginBottom" | "marginTop" | "marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginBottom" | "marginTop")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
    };
}, Value>) => Partial<Record<"mobile" | "tablet" | "desktop" | "wide", Value>>;
export declare const mapResponsiveValue: <OutputValue extends string | number, Value extends ConditionalValue<{
    conditions: {
        defaultCondition: "mobile";
        conditionNames: ("mobile" | "tablet" | "desktop" | "wide")[];
        responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
            length: 4;
        };
    };
    styles: {
        readonly display: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inline: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flex: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                block: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                inlineBlock: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly position: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                fixed: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                relative: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                absolute: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly borderRadius: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                standard: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                full: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly paddingLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginTop: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginBottom: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginRight: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly marginLeft: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                small: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                none: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                medium: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                large: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                gutter: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xsmall: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                xxlarge: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly alignItems: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly justifyContent: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexStart: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                flexEnd: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                spaceBetween: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexDirection: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                row: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                column: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                rowReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                columnReverse: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexWrap: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                wrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                nowrap: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexShrink: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly flexGrow: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                0: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                1: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
        readonly textAlign: {
            responsiveArray: ("mobile" | "tablet" | "desktop" | "wide")[] & {
                length: 4;
            };
            values: {
                left: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                right: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
                center: {
                    defaultClass: string;
                    conditions: {
                        mobile: string;
                        tablet: string;
                        desktop: string;
                        wide: string;
                    };
                };
            };
        };
    };
} & {
    styles: {
        padding: {
            mappings: ("paddingBottom" | "paddingTop" | "paddingLeft" | "paddingRight")[];
        };
        paddingY: {
            mappings: ("paddingBottom" | "paddingTop")[];
        };
        paddingX: {
            mappings: ("paddingLeft" | "paddingRight")[];
        };
        margin: {
            mappings: ("marginBottom" | "marginTop" | "marginLeft" | "marginRight")[];
        };
        marginY: {
            mappings: ("marginBottom" | "marginTop")[];
        };
        marginX: {
            mappings: ("marginLeft" | "marginRight")[];
        };
    };
}, string | number>>(value: Value, fn: (inputValue: Value extends ResponsiveArray<1, string | number | null> | ResponsiveArray<1 | 2, string | number | null> | ResponsiveArray<1 | 3 | 2, string | number | null> | ResponsiveArray<1 | 4 | 3 | 2, string | number | null> | ResponsiveArray<1 | 4 | 3 | 2 | 5, string | number | null> | ResponsiveArray<1 | 4 | 3 | 2 | 5 | 6, string | number | null> | ResponsiveArray<1 | 4 | 3 | 2 | 5 | 6 | 7, string | number | null> | ResponsiveArray<1 | 4 | 3 | 2 | 5 | 6 | 7 | 8, string | number | null> ? NonNullable<Value[number]> : Value extends Partial<Record<string, string | number>> ? NonNullable<Value[keyof Value]> : Value, key: "mobile" | "tablet" | "desktop" | "wide") => OutputValue) => Value extends string | number ? OutputValue : Partial<Record<"mobile" | "tablet" | "desktop" | "wide", OutputValue>>;
export {};
