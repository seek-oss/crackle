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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var mapValues = require("lodash/mapValues");
var values = require("lodash/values");
var vanillaExtract = require("@capsizecss/vanilla-extract");
var core = require("@capsizecss/core");
var cssBreakpoints_cjs_js = require("./css-breakpoints.cjs.js");
var omit = require("lodash/omit");
var utilsIndex_cjs_js = require("./utils-index.cjs.js");
require("./css-responsiveStyle.cjs.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var mapValues__default = /* @__PURE__ */ _interopDefaultLegacy(mapValues);
var values__default = /* @__PURE__ */ _interopDefaultLegacy(values);
var omit__default = /* @__PURE__ */ _interopDefaultLegacy(omit);
const makeThemeUtils = (tokens) => {
  const makeMediaQuery = (breakpoint) => (styles) => !styles || Object.keys(styles).length === 0 ? {} : {
    [`screen and (min-width: ${tokens.breakpoint[breakpoint]}px)`]: styles
  };
  const mediaQuery = {
    tablet: makeMediaQuery("tablet"),
    desktop: makeMediaQuery("desktop"),
    wide: makeMediaQuery("wide")
  };
  const responsiveStyle = ({
    mobile,
    tablet,
    desktop,
    wide
  }) => __spreadValues(__spreadValues({}, omit__default["default"](mobile, "@media")), tablet || desktop || wide ? {
    "@media": __spreadValues(__spreadValues(__spreadValues({}, mediaQuery.tablet(tablet != null ? tablet : {})), mediaQuery.desktop(desktop != null ? desktop : {})), mediaQuery.wide(wide != null ? wide : {}))
  } : {});
  return { responsiveStyle };
};
const oldFontSizeToCapHeight = (definition, fontMetrics) => {
  const { mobile, tablet } = definition;
  return {
    mobile: {
      capHeight: core.getCapHeight({ fontSize: mobile.fontSize, fontMetrics }),
      rows: mobile.rows
    },
    tablet: {
      capHeight: core.getCapHeight({ fontSize: tablet.fontSize, fontMetrics }),
      rows: tablet.rows
    }
  };
};
const normaliseSizingToCapHeight = (typography) => {
  const { heading, text, fontMetrics } = typography;
  return __spreadProps(__spreadValues({}, typography), {
    heading: __spreadProps(__spreadValues({}, heading), {
      level: __spreadValues({}, mapValues__default["default"](heading.level, (definition) => oldFontSizeToCapHeight(definition, fontMetrics)))
    }),
    text: __spreadValues(__spreadValues({}, text), mapValues__default["default"](text, (definition) => oldFontSizeToCapHeight(definition, fontMetrics)))
  });
};
const decorateTokens = (braidTokens) => {
  const {
    border,
    color,
    contentWidth,
    displayName,
    grid,
    name,
    shadows,
    space,
    touchableSize,
    transforms,
    transitions,
    typography
  } = braidTokens;
  const treatTokens = {
    border,
    breakpoint: cssBreakpoints_cjs_js.breakpoints,
    color,
    contentWidth,
    displayName,
    grid,
    name,
    shadows,
    space,
    touchableSize,
    transforms,
    transitions,
    typography: normaliseSizingToCapHeight(typography)
  };
  return __spreadProps(__spreadValues({}, treatTokens), {
    utils: makeThemeUtils(treatTokens)
  });
};
const makeWebFonts = (tokens) => {
  const name = tokens.typography.webFont;
  if (!name) {
    return [];
  }
  const weights = values__default["default"](tokens.typography.fontWeight);
  const linkTag = `<link href="https://fonts.googleapis.com/css?family=${encodeURIComponent(`${name}:${weights.sort().join(",")}`)}" rel="stylesheet" />`;
  return [{ linkTag }];
};
const makeRuntimeTokens = (braidTokens) => {
  const tokens = decorateTokens(braidTokens);
  return {
    name: tokens.name,
    displayName: tokens.displayName,
    background: tokens.color.background.body,
    webFonts: makeWebFonts(tokens),
    space: {
      grid: tokens.grid,
      space: tokens.space
    },
    color: tokens.color,
    backgroundLightness: mapValues__default["default"](tokens.color.background, (background, name) => {
      if (tokens.name === "jobsDb" && /^brandAccent(Active|Hover|$)/.test(name)) {
        return "dark";
      }
      const referenceColorMap = {
        brandAccentActive: "brandAccent",
        brandAccentHover: "brandAccent",
        formAccentActive: "formAccent",
        formAccentHover: "formAccent"
      };
      const referenceColor = name in referenceColorMap ? tokens.color.background[referenceColorMap[name]] : background;
      if (!referenceColor) {
        throw new Error(`Error resolving background lightness for background "${background}" in "${tokens.name}" theme.`);
      }
      return utilsIndex_cjs_js.isLight(referenceColor, tokens.color.foreground.neutral) ? "light" : "dark";
    })
  };
};
const px = (v) => `${v}px`;
const fontSizeToCapHeight = (grid, definition, fontMetrics) => {
  const { mobile, tablet } = definition;
  const mobileCapHeight = core.getCapHeight({
    fontSize: mobile.fontSize,
    fontMetrics
  });
  const tabletCapHeight = core.getCapHeight({
    fontSize: tablet.fontSize,
    fontMetrics
  });
  const _a = vanillaExtract.precomputeValues({
    fontSize: mobile.fontSize,
    leading: mobile.rows * grid,
    fontMetrics
  }), {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight
  } = _a, mobileTrims = __objRest(_a, [
    "fontSize",
    "lineHeight"
  ]);
  const _b = vanillaExtract.precomputeValues({
    fontSize: tablet.fontSize,
    leading: tablet.rows * grid,
    fontMetrics
  }), {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight
  } = _b, tabletTrims = __objRest(_b, [
    "fontSize",
    "lineHeight"
  ]);
  return {
    mobile: {
      fontSize: mobileFontSize,
      lineHeight: mobileLineHeight,
      capHeight: px(mobileCapHeight),
      capsizeTrims: __spreadValues({}, mobileTrims)
    },
    tablet: {
      fontSize: tabletFontSize,
      lineHeight: tabletLineHeight,
      capHeight: px(tabletCapHeight),
      capsizeTrims: __spreadValues({}, tabletTrims)
    }
  };
};
var makeVanillaTheme = (braidTokens) => {
  const _a = braidTokens, { name, displayName } = _a, tokens = __objRest(_a, ["name", "displayName"]);
  const _b = tokens.typography, { webFont } = _b, typography = __objRest(_b, ["webFont"]);
  const { foreground, background } = tokens.color;
  const getInlineFieldSize = (size) => {
    const scale = typography.text[size].mobile.rows * tokens.grid / 42;
    return px(tokens.grid * Math.round(tokens.touchableSize * scale));
  };
  const resolvedTokens = {
    space: mapValues__default["default"](tokens.space, (sp) => px(sp * tokens.grid)),
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    borderRadius: tokens.border.radius,
    borderColor: tokens.border.color,
    borderWidth: mapValues__default["default"](tokens.border.width, px),
    focusRingSize: px(tokens.focusRingSize),
    contentWidth: mapValues__default["default"](tokens.contentWidth, px),
    foregroundColor: foreground,
    backgroundColor: background,
    fontFamily: typography.fontFamily,
    fontMetrics: mapValues__default["default"](typography.fontMetrics, String),
    textSize: mapValues__default["default"](tokens.typography.text, (definition) => fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics)),
    textWeight: mapValues__default["default"](typography.fontWeight, String),
    headingLevel: mapValues__default["default"](tokens.typography.heading.level, (definition) => fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics)),
    headingWeight: {
      weak: String(tokens.typography.fontWeight[tokens.typography.heading.weight.weak]),
      regular: String(tokens.typography.fontWeight[tokens.typography.heading.weight.regular])
    },
    inlineFieldSize: {
      standard: getInlineFieldSize("standard"),
      small: getInlineFieldSize("small")
    },
    transition: tokens.transitions,
    transform: tokens.transforms,
    shadow: tokens.shadows
  };
  return {
    resolvedTokens,
    runtimeTokens: makeRuntimeTokens(braidTokens)
  };
};
exports.makeVanillaTheme = makeVanillaTheme;
