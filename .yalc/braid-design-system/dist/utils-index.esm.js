import { parseToRgb, toColorString, parseToHsl, hslToColorString, setLightness, getLuminance } from "polished";
import { parse } from "gradient-parser";
import { r as responsiveStyle } from "./css-responsiveStyle.esm.js";
const getLinearGradientColors = (color) => {
  const gradients = parse(color);
  return gradients[0].colorStops.map(({ type, value }) => {
    if (typeof value !== "string") {
      throw new Error("Gradient parsing in Braid currently only supports hex/literal values");
    }
    return `${type === "hex" ? "#" : ""}${value}`;
  });
};
const calculateYiq = (color) => {
  const { red, green, blue } = parseToRgb(color);
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
  const L1 = getLuminance(color1) + 0.05;
  const L2 = getLuminance(color2) + 0.05;
  return L1 < L2 ? L2 / L1 : L1 / L2;
}
function findClosestAccessibleDarkerColor(inputColor, fixedColor, contrastRatio = AA_TEXT_CONTRAST) {
  const normalisedInput = toColorString(parseToRgb(inputColor));
  const normalisedFixed = toColorString(parseToRgb(fixedColor));
  const { hue, saturation, lightness } = parseToHsl(normalisedInput);
  let minLightness = 0.02;
  let maxLightness = lightness;
  let maxColor = hslToColorString({ hue, saturation, lightness: minLightness });
  let minColor = hslToColorString({ hue, saturation, lightness });
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
    adjustedColor = setLightness(adjustedLightness, adjustedColor);
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
  const { hue, saturation, lightness } = parseToHsl(color);
  const luminance = getLuminance(color);
  return toColorString({
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
  return breakpoint ? responsiveStyle({ [breakpoint]: styleRule }) : styleRule;
};
export { getAccessibleVariant as a, getLightVariant as g, isLight as i, mapToProperty as m };
