"use strict";
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
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var vanillaExtract = require("@capsizecss/vanilla-extract");
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
var cssResponsiveStyle_cjs_js = require("../css-responsiveStyle.cjs.js");
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var __vanilla_filescope____namespace = /* @__PURE__ */ _interopNamespace(__vanilla_filescope__);
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/hooks/typography/typography.css.ts", "braid-monorepo");
const fontFamily = css.style({
  fontFamily: themesVars_cjs_css_js.vars.fontFamily
}, "fontFamily");
const fontWeight = css.styleVariants(themesVars_cjs_css_js.vars.textWeight, utilsIndex_cjs_js.mapToProperty("fontWeight"), "fontWeight");
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
    untrimmed: css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight
      }
    }), "makeTypographyRules_untrimmed"),
    trimmed: vanillaExtract.createTextStyle(__spreadValues({
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight
    }, mobileCapsizeTrims), {
      "@media": {
        [cssResponsiveStyle_cjs_js.breakpointQuery.tablet]: __spreadValues({
          fontSize: tabletFontSize,
          lineHeight: tabletLineHeight
        }, tabletCapsizeTrims)
      }
    }, debug)
  };
};
const text = {
  xsmall: makeTypographyRules(themesVars_cjs_css_js.vars.textSize.xsmall, "xsmall"),
  small: makeTypographyRules(themesVars_cjs_css_js.vars.textSize.small, "small"),
  standard: makeTypographyRules(themesVars_cjs_css_js.vars.textSize.standard, "standard"),
  large: makeTypographyRules(themesVars_cjs_css_js.vars.textSize.large, "large")
};
const headingWeight = css.styleVariants(themesVars_cjs_css_js.vars.headingWeight, utilsIndex_cjs_js.mapToProperty("fontWeight"), "headingWeight");
const heading = {
  "1": makeTypographyRules(themesVars_cjs_css_js.vars.headingLevel["1"], "heading1"),
  "2": makeTypographyRules(themesVars_cjs_css_js.vars.headingLevel["2"], "heading2"),
  "3": makeTypographyRules(themesVars_cjs_css_js.vars.headingLevel["3"], "heading3"),
  "4": makeTypographyRules(themesVars_cjs_css_js.vars.headingLevel["4"], "heading4")
};
const tone = __spreadProps(__spreadValues({}, css.styleVariants({
  brandAccent: themesVars_cjs_css_js.vars.foregroundColor.brandAccent,
  caution: themesVars_cjs_css_js.vars.foregroundColor.caution,
  critical: themesVars_cjs_css_js.vars.foregroundColor.critical,
  formAccent: themesVars_cjs_css_js.vars.foregroundColor.formAccent,
  info: themesVars_cjs_css_js.vars.foregroundColor.info,
  positive: themesVars_cjs_css_js.vars.foregroundColor.positive,
  promote: themesVars_cjs_css_js.vars.foregroundColor.promote,
  secondary: themesVars_cjs_css_js.vars.foregroundColor.secondary
}, utilsIndex_cjs_js.mapToProperty("color"), "tone")), {
  link: css.style(__spreadValues({
    color: themesVars_cjs_css_js.vars.foregroundColor.link
  }, themesVars_cjs_css_js.vars.foregroundColor.link !== themesVars_cjs_css_js.vars.foregroundColor.linkHover ? {
    ":hover": {
      color: themesVars_cjs_css_js.vars.foregroundColor.linkHover
    },
    ":focus": {
      color: themesVars_cjs_css_js.vars.foregroundColor.linkHover
    }
  } : {}), "tone_link")
});
const invertableTone = {
  neutral: css.styleVariants({
    light: {
      color: themesVars_cjs_css_js.vars.foregroundColor.neutral
    },
    dark: {
      color: themesVars_cjs_css_js.vars.foregroundColor.neutralInverted
    }
  }, "invertableTone_neutral"),
  secondary: css.styleVariants({
    light: {
      color: themesVars_cjs_css_js.vars.foregroundColor.secondary
    },
    dark: {
      color: themesVars_cjs_css_js.vars.foregroundColor.secondaryInverted
    }
  }, "invertableTone_secondary")
};
const makeTouchableSpacing = (touchableHeight, textHeight) => {
  const space = cssUtils.calc(touchableHeight).subtract(textHeight).divide(2).toString();
  return {
    paddingTop: space,
    paddingBottom: space
  };
};
const touchable = css.styleVariants(themesVars_cjs_css_js.vars.textSize, (textDefinition) => cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: makeTouchableSpacing(themesVars_cjs_css_js.vars.touchableSize, textDefinition.mobile.lineHeight),
  tablet: makeTouchableSpacing(themesVars_cjs_css_js.vars.touchableSize, textDefinition.tablet.lineHeight)
}), "touchable");
__vanilla_filescope____namespace.endFileScope();
exports.fontFamily = fontFamily;
exports.fontWeight = fontWeight;
exports.heading = heading;
exports.headingWeight = headingWeight;
exports.invertableTone = invertableTone;
exports.text = text;
exports.tone = tone;
exports.touchable = touchable;
