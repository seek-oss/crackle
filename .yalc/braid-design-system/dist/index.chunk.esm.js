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
import React, { createContext, useContext, useMemo } from "react";
import clsx from "clsx";
import assert from "assert";
import { v as vars } from "./themes-vars.esm.css.js";
import { r as responsiveStyle } from "./css-responsiveStyle.esm.js";
import { t as text, a as touchable, f as fontFamily, b as fontWeight, h as headingWeight, c as heading, d as tone, i as invertableTone } from "./hooks-typography/typography.esm.css.js";
const BraidThemeContext = createContext(null);
const useBraidTheme = () => {
  const braidTheme = useContext(BraidThemeContext);
  if (braidTheme === null) {
    throw new Error("No Braid theme available on context");
  }
  return braidTheme;
};
const backgroundContext = createContext("body");
const BackgroundProvider = backgroundContext.Provider;
const renderBackgroundProvider = (background, element) => background ? /* @__PURE__ */ React.createElement(BackgroundProvider, {
  value: background
}, element) : element;
const useBackground = () => useContext(backgroundContext);
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
var TextLinkRendererContext = createContext(null);
const DefaultTextPropsContext = createContext({
  tone: void 0,
  weight: void 0,
  size: void 0
});
const DefaultTextPropsProvider = ({
  size,
  weight,
  tone: tone2,
  children
}) => {
  const defaultTextProps = useMemo(() => ({
    size,
    weight,
    tone: tone2
  }), [size, weight, tone2]);
  return /* @__PURE__ */ React.createElement(DefaultTextPropsContext.Provider, {
    value: defaultTextProps
  }, children);
};
const useDefaultTextProps = ({
  size: sizeProp,
  weight: weightProp,
  tone: toneProp
}) => {
  var _a, _b, _c;
  const { size, weight, tone: tone2 } = useContext(DefaultTextPropsContext);
  return {
    size: (_a = sizeProp != null ? sizeProp : size) != null ? _a : "standard",
    weight: (_b = weightProp != null ? weightProp : weight) != null ? _b : "regular",
    tone: (_c = toneProp != null ? toneProp : tone2) != null ? _c : "neutral"
  };
};
const globalTextStyle = ({
  weight = "regular",
  size = "standard"
} = {}) => __spreadValues({
  fontFamily: vars.fontFamily,
  fontWeight: vars.textWeight[weight],
  color: vars.foregroundColor.neutral
}, responsiveStyle({
  mobile: {
    fontSize: vars.textSize[size].mobile.fontSize,
    lineHeight: vars.textSize[size].mobile.lineHeight
  },
  tablet: {
    fontSize: vars.textSize[size].tablet.fontSize,
    lineHeight: vars.textSize[size].tablet.lineHeight
  }
}));
function useText({
  weight = "regular",
  size = "standard",
  tone: tone2 = "neutral",
  baseline,
  backgroundContext: backgroundContext2
}) {
  const textTone = useTextTone({ tone: tone2, backgroundContext: backgroundContext2 });
  return clsx(fontFamily, textTone, fontWeight[weight], baseline ? text[size].trimmed : text[size].untrimmed);
}
const globalHeadingStyle = ({
  weight = "regular",
  level
}) => __spreadValues({
  fontFamily: vars.fontFamily,
  fontWeight: vars.headingWeight[weight],
  color: vars.foregroundColor.neutral
}, responsiveStyle({
  mobile: {
    fontSize: vars.headingLevel[level].mobile.fontSize,
    lineHeight: vars.headingLevel[level].mobile.lineHeight
  },
  tablet: {
    fontSize: vars.headingLevel[level].tablet.fontSize,
    lineHeight: vars.headingLevel[level].tablet.lineHeight
  }
}));
function useHeading({
  weight = "regular",
  level,
  baseline,
  backgroundContext: backgroundContext2
}) {
  const textTone = useTextTone({ tone: "neutral", backgroundContext: backgroundContext2 });
  return clsx(fontFamily, headingWeight[weight], baseline ? heading[level].trimmed : heading[level].untrimmed, textTone);
}
function textSize(size) {
  return text[size].untrimmed;
}
function useWeight(weight) {
  const inTextLinkRenderer = useContext(TextLinkRendererContext);
  return inTextLinkRenderer ? void 0 : fontWeight[weight];
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
  const textLinkContext = useContext(TextLinkRendererContext);
  const backgroundContext2 = useBackground();
  const background = backgroundContextOverride || backgroundContext2;
  const backgroundLightness = useBackgroundLightness(background);
  const { tone: tone$1 } = useDefaultTextProps({ tone: toneProp });
  if (tone$1 === "neutral" && background in neutralToneOverrideForBackground) {
    const toneOverride = neutralToneOverrideForBackground[background];
    assert(toneOverride, `Tone override not found for tone: ${tone$1}`);
    return tone[toneOverride];
  }
  if (tone$1 !== "neutral") {
    return tone$1 in invertableTone ? invertableTone[tone$1][backgroundLightness] : tone[tone$1];
  }
  if (textLinkContext && textLinkContext !== "weak") {
    return tone.link;
  }
  return invertableTone.neutral[backgroundLightness];
}
const touchableText = touchable;
export { BraidThemeContext as B, DefaultTextPropsProvider as D, TextLinkRendererContext as T, useDefaultTextProps as a, useText as b, useTextTone as c, useBackground as d, useBackgroundLightness as e, useWeight as f, touchableText as g, BackgroundProvider as h, useHeading as i, globalTextStyle as j, globalHeadingStyle as k, renderBackgroundProvider as r, textSize as t, useBraidTheme as u };
