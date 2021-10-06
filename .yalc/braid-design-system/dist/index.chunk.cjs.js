"use strict";
var __defProp = Object.defineProperty;
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
var React = require("react");
var clsx = require("clsx");
var assert = require("assert");
var themesVars_cjs_css_js = require("./themes-vars.cjs.css.js");
var cssResponsiveStyle_cjs_js = require("./css-responsiveStyle.cjs.js");
var hooksTypography_typography_cjs_css_js = require("./hooks-typography/typography.cjs.css.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var clsx__default = /* @__PURE__ */ _interopDefaultLegacy(clsx);
var assert__default = /* @__PURE__ */ _interopDefaultLegacy(assert);
const BraidThemeContext = React.createContext(null);
const useBraidTheme = () => {
  const braidTheme = React.useContext(BraidThemeContext);
  if (braidTheme === null) {
    throw new Error("No Braid theme available on context");
  }
  return braidTheme;
};
const backgroundContext = React.createContext("body");
const BackgroundProvider = backgroundContext.Provider;
const renderBackgroundProvider = (background, element) => background ? /* @__PURE__ */ React__default["default"].createElement(BackgroundProvider, {
  value: background
}, element) : element;
const useBackground = () => React.useContext(backgroundContext);
const useBackgroundLightness = (backgroundOverride) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useBraidTheme();
  const defaultLightness = backgroundLightness.body;
  if (background === "UNKNOWN_DARK") {
    return "dark";
  }
  if (background === "UNKNOWN_LIGHT") {
    return "light";
  }
  return background ? backgroundLightness[background] || defaultLightness : defaultLightness;
};
var TextLinkRendererContext = React.createContext(null);
const DefaultTextPropsContext = React.createContext({
  tone: void 0,
  weight: void 0,
  size: void 0
});
const DefaultTextPropsProvider = ({
  size,
  weight,
  tone,
  children
}) => {
  const defaultTextProps = React.useMemo(() => ({
    size,
    weight,
    tone
  }), [size, weight, tone]);
  return /* @__PURE__ */ React__default["default"].createElement(DefaultTextPropsContext.Provider, {
    value: defaultTextProps
  }, children);
};
const useDefaultTextProps = ({
  size: sizeProp,
  weight: weightProp,
  tone: toneProp
}) => {
  var _a, _b, _c;
  const { size, weight, tone } = React.useContext(DefaultTextPropsContext);
  return {
    size: (_a = sizeProp != null ? sizeProp : size) != null ? _a : "standard",
    weight: (_b = weightProp != null ? weightProp : weight) != null ? _b : "regular",
    tone: (_c = toneProp != null ? toneProp : tone) != null ? _c : "neutral"
  };
};
const globalTextStyle = ({
  weight = "regular",
  size = "standard"
} = {}) => __spreadValues({
  fontFamily: themesVars_cjs_css_js.vars.fontFamily,
  fontWeight: themesVars_cjs_css_js.vars.textWeight[weight],
  color: themesVars_cjs_css_js.vars.foregroundColor.neutral
}, cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    fontSize: themesVars_cjs_css_js.vars.textSize[size].mobile.fontSize,
    lineHeight: themesVars_cjs_css_js.vars.textSize[size].mobile.lineHeight
  },
  tablet: {
    fontSize: themesVars_cjs_css_js.vars.textSize[size].tablet.fontSize,
    lineHeight: themesVars_cjs_css_js.vars.textSize[size].tablet.lineHeight
  }
}));
function useText({
  weight = "regular",
  size = "standard",
  tone = "neutral",
  baseline,
  backgroundContext: backgroundContext2
}) {
  const textTone = useTextTone({ tone, backgroundContext: backgroundContext2 });
  return clsx__default["default"](hooksTypography_typography_cjs_css_js.fontFamily, textTone, hooksTypography_typography_cjs_css_js.fontWeight[weight], baseline ? hooksTypography_typography_cjs_css_js.text[size].trimmed : hooksTypography_typography_cjs_css_js.text[size].untrimmed);
}
const globalHeadingStyle = ({
  weight = "regular",
  level
}) => __spreadValues({
  fontFamily: themesVars_cjs_css_js.vars.fontFamily,
  fontWeight: themesVars_cjs_css_js.vars.headingWeight[weight],
  color: themesVars_cjs_css_js.vars.foregroundColor.neutral
}, cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    fontSize: themesVars_cjs_css_js.vars.headingLevel[level].mobile.fontSize,
    lineHeight: themesVars_cjs_css_js.vars.headingLevel[level].mobile.lineHeight
  },
  tablet: {
    fontSize: themesVars_cjs_css_js.vars.headingLevel[level].tablet.fontSize,
    lineHeight: themesVars_cjs_css_js.vars.headingLevel[level].tablet.lineHeight
  }
}));
function useHeading({
  weight = "regular",
  level,
  baseline,
  backgroundContext: backgroundContext2
}) {
  const textTone = useTextTone({ tone: "neutral", backgroundContext: backgroundContext2 });
  return clsx__default["default"](hooksTypography_typography_cjs_css_js.fontFamily, hooksTypography_typography_cjs_css_js.headingWeight[weight], baseline ? hooksTypography_typography_cjs_css_js.heading[level].trimmed : hooksTypography_typography_cjs_css_js.heading[level].untrimmed, textTone);
}
function textSize(size) {
  return hooksTypography_typography_cjs_css_js.text[size].untrimmed;
}
function useWeight(weight) {
  const inTextLinkRenderer = React.useContext(TextLinkRendererContext);
  return inTextLinkRenderer ? void 0 : hooksTypography_typography_cjs_css_js.fontWeight[weight];
}
const neutralToneOverrideForBackground = {
  formAccentSoft: "formAccent",
  formAccentSoftActive: "formAccent",
  formAccentSoftHover: "formAccent",
  criticalLight: "critical",
  criticalSoft: "critical",
  criticalSoftActive: "critical",
  criticalSoftHover: "critical",
  caution: "caution",
  cautionLight: "caution",
  positiveLight: "positive",
  infoLight: "info",
  promoteLight: "promote"
};
function useTextTone({
  tone: toneProp,
  backgroundContext: backgroundContextOverride
}) {
  const textLinkContext = React.useContext(TextLinkRendererContext);
  const backgroundContext2 = useBackground();
  const background = backgroundContextOverride || backgroundContext2;
  const backgroundLightness = useBackgroundLightness(background);
  const { tone } = useDefaultTextProps({ tone: toneProp });
  if (tone === "neutral" && background in neutralToneOverrideForBackground) {
    const toneOverride = neutralToneOverrideForBackground[background];
    assert__default["default"](toneOverride, `Tone override not found for tone: ${tone}`);
    return hooksTypography_typography_cjs_css_js.tone[toneOverride];
  }
  if (tone !== "neutral") {
    return tone in hooksTypography_typography_cjs_css_js.invertableTone ? hooksTypography_typography_cjs_css_js.invertableTone[tone][backgroundLightness] : hooksTypography_typography_cjs_css_js.tone[tone];
  }
  if (textLinkContext && textLinkContext !== "weak") {
    return hooksTypography_typography_cjs_css_js.tone.link;
  }
  return hooksTypography_typography_cjs_css_js.invertableTone.neutral[backgroundLightness];
}
const touchableText = hooksTypography_typography_cjs_css_js.touchable;
exports.BackgroundProvider = BackgroundProvider;
exports.BraidThemeContext = BraidThemeContext;
exports.DefaultTextPropsProvider = DefaultTextPropsProvider;
exports.TextLinkRendererContext = TextLinkRendererContext;
exports.globalHeadingStyle = globalHeadingStyle;
exports.globalTextStyle = globalTextStyle;
exports.renderBackgroundProvider = renderBackgroundProvider;
exports.textSize = textSize;
exports.touchableText = touchableText;
exports.useBackground = useBackground;
exports.useBackgroundLightness = useBackgroundLightness;
exports.useBraidTheme = useBraidTheme;
exports.useDefaultTextProps = useDefaultTextProps;
exports.useHeading = useHeading;
exports.useText = useText;
exports.useTextTone = useTextTone;
exports.useWeight = useWeight;
