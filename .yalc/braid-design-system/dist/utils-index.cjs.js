"use strict";
var polished = require("polished");
var gradientParser = require("gradient-parser");
var cssResponsiveStyle_cjs_js = require("./css-responsiveStyle.cjs.js");
const getLinearGradientColors = (color) => {
  const gradients = gradientParser.parse(color);
  return gradients[0].colorStops.map(({ type, value }) => {
    if (typeof value !== "string") {
      throw new Error("Gradient parsing in Braid currently only supports hex/literal values");
    }
    return `${type === "hex" ? "#" : ""}${value}`;
  });
};
const calculateYiq = (color) => {
  const { red, green, blue } = polished.parseToRgb(color);
  return (red * 299 + green * 587 + blue * 114) / 1e3;
};
const isLight = (inputColor, foregroundColor = "#000") => {
  const colors = /^linear-gradient/.test(inputColor) ? getLinearGradientColors(inputColor) : [inputColor];
  const foregroundYiq = calculateYiq(foregroundColor);
  return colors.some((color) => {
    const yiq = calculateYiq(color);
    const midpoint = 256 / 2;
    const foregroundOffset = foregroundYiq / 2;
    return yiq >= midpoint + foregroundOffset;
  });
};
const AA_TEXT_CONTRAST = 4.52;
function contrast(color1, color2) {
  const L1 = polished.getLuminance(color1) + 0.05;
  const L2 = polished.getLuminance(color2) + 0.05;
  return L1 < L2 ? L2 / L1 : L1 / L2;
}
function findClosestAccessibleDarkerColor(inputColor, fixedColor, contrastRatio = AA_TEXT_CONTRAST) {
  const normalisedInput = polished.toColorString(polished.parseToRgb(inputColor));
  const normalisedFixed = polished.toColorString(polished.parseToRgb(fixedColor));
  const { hue, saturation, lightness } = polished.parseToHsl(normalisedInput);
  let minLightness = 0.02;
  let maxLightness = lightness;
  let maxColor = polished.hslToColorString({ hue, saturation, lightness: minLightness });
  let minColor = polished.hslToColorString({ hue, saturation, lightness });
  if (contrast(normalisedInput, normalisedFixed) >= contrastRatio) {
    return inputColor;
  }
  const actualRatio = contrast(maxColor, normalisedFixed);
  if (actualRatio < contrastRatio) {
    throw new Error(`Desired contrast ratio cannot be achieved,
Foreground: ${inputColor}
Background:${fixedColor}
Desired Contrast:${contrastRatio}
Actual Contrast:${actualRatio}`);
  }
  let lastMinColor;
  let lastMaxColor;
  let adjustedLightness;
  let adjustedColor = normalisedInput;
  while (minColor !== lastMinColor || maxColor !== lastMaxColor) {
    lastMinColor = minColor;
    lastMaxColor = maxColor;
    adjustedLightness = (minLightness + maxLightness) / 2;
    adjustedColor = polished.setLightness(adjustedLightness, adjustedColor);
    if (contrast(adjustedColor, normalisedFixed) < contrastRatio) {
      maxLightness = adjustedLightness;
      maxColor = adjustedColor;
    } else {
      minLightness = adjustedLightness;
      minColor = adjustedColor;
    }
  }
  return minColor;
}
const smoothSaturation = (saturation, luminance) => {
  const isBright = luminance > 0.6;
  if (isBright) {
    return saturation * 0.8;
  }
  return saturation * 0.45;
};
const smoothLightness = (lightness, luminance) => {
  const isBright = luminance > 0.6;
  if (isBright) {
    return 0.95 - lightness * 0.03;
  }
  return 0.95 - lightness * 0.06;
};
function getLightVariant(color) {
  const { hue, saturation, lightness } = polished.parseToHsl(color);
  const luminance = polished.getLuminance(color);
  return polished.toColorString({
    hue,
    saturation: smoothSaturation(saturation, luminance),
    lightness: smoothLightness(lightness, luminance)
  });
}
function getAccessibleVariant(color, background) {
  return findClosestAccessibleDarkerColor(color, background != null ? background : getLightVariant(color), AA_TEXT_CONTRAST);
}
const mapToProperty = (property, breakpoint) => (value) => {
  const styleRule = { [property]: value };
  return breakpoint ? cssResponsiveStyle_cjs_js.responsiveStyle({ [breakpoint]: styleRule }) : styleRule;
};
exports.getAccessibleVariant = getAccessibleVariant;
exports.getLightVariant = getLightVariant;
exports.isLight = isLight;
exports.mapToProperty = mapToProperty;
