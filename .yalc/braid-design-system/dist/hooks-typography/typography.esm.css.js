var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { createTextStyle } from "@capsizecss/vanilla-extract";
import { v as vars } from "../themes-vars.esm.css.js";
import { r as responsiveStyle, b as breakpointQuery } from "../css-responsiveStyle.esm.js";
import { m as mapToProperty } from "../utils-index.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/hooks/typography/typography.css.ts", "braid-monorepo");
const fontFamily = style({
  fontFamily: vars.fontFamily
}, "fontFamily");
const fontWeight = styleVariants(vars.textWeight, mapToProperty("fontWeight"), "fontWeight");
const makeTypographyRules = (textDefinition, debug) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    capsizeTrims: mobileCapsizeTrims
  } = textDefinition.mobile;
  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    capsizeTrims: tabletCapsizeTrims
  } = textDefinition.tablet;
  return {
    untrimmed: style(responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight
      }
    }), "makeTypographyRules_untrimmed"),
    trimmed: createTextStyle(__spreadValues({
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight
    }, mobileCapsizeTrims), {
      "@media": {
        [breakpointQuery.tablet]: __spreadValues({
          fontSize: tabletFontSize,
          lineHeight: tabletLineHeight
        }, tabletCapsizeTrims)
      }
    }, debug)
  };
};
const text = {
  xsmall: makeTypographyRules(vars.textSize.xsmall, "xsmall"),
  small: makeTypographyRules(vars.textSize.small, "small"),
  standard: makeTypographyRules(vars.textSize.standard, "standard"),
  large: makeTypographyRules(vars.textSize.large, "large")
};
const headingWeight = styleVariants(vars.headingWeight, mapToProperty("fontWeight"), "headingWeight");
const heading = {
  "1": makeTypographyRules(vars.headingLevel["1"], "heading1"),
  "2": makeTypographyRules(vars.headingLevel["2"], "heading2"),
  "3": makeTypographyRules(vars.headingLevel["3"], "heading3"),
  "4": makeTypographyRules(vars.headingLevel["4"], "heading4")
};
const tone = __spreadProps(__spreadValues({}, styleVariants({
  brandAccent: vars.foregroundColor.brandAccent,
  caution: vars.foregroundColor.caution,
  critical: vars.foregroundColor.critical,
  formAccent: vars.foregroundColor.formAccent,
  info: vars.foregroundColor.info,
  positive: vars.foregroundColor.positive,
  promote: vars.foregroundColor.promote,
  secondary: vars.foregroundColor.secondary
}, mapToProperty("color"), "tone")), {
  link: style(__spreadValues({
    color: vars.foregroundColor.link
  }, vars.foregroundColor.link !== vars.foregroundColor.linkHover ? {
    ":hover": {
      color: vars.foregroundColor.linkHover
    },
    ":focus": {
      color: vars.foregroundColor.linkHover
    }
  } : {}), "tone_link")
});
const invertableTone = {
  neutral: styleVariants({
    light: {
      color: vars.foregroundColor.neutral
    },
    dark: {
      color: vars.foregroundColor.neutralInverted
    }
  }, "invertableTone_neutral"),
  secondary: styleVariants({
    light: {
      color: vars.foregroundColor.secondary
    },
    dark: {
      color: vars.foregroundColor.secondaryInverted
    }
  }, "invertableTone_secondary")
};
const makeTouchableSpacing = (touchableHeight, textHeight) => {
  const space = calc(touchableHeight).subtract(textHeight).divide(2).toString();
  return {
    paddingTop: space,
    paddingBottom: space
  };
};
const touchable = styleVariants(vars.textSize, (textDefinition) => responsiveStyle({
  mobile: makeTouchableSpacing(vars.touchableSize, textDefinition.mobile.lineHeight),
  tablet: makeTouchableSpacing(vars.touchableSize, textDefinition.tablet.lineHeight)
}), "touchable");
__vanilla_filescope__.endFileScope();
export { touchable as a, fontWeight as b, heading as c, tone as d, fontFamily as f, headingWeight as h, invertableTone as i, text as t };
