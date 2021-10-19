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
import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
import { h as hitArea } from "../components-private/touchable/hitArea.esm.js";
import { d as debugTouchable } from "../components-private/touchable/debugTouchable.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Toggle/Toggle.css.ts", "braid-monorepo");
const sizes = {
  standard: "standard",
  small: "small"
};
const toggleWidthRatio = 1.6;
const root = style({
  ":hover": {
    zIndex: 1
  }
}, "root");
const realField = style({
  height: hitArea,
  selectors: __spreadValues({}, debugTouchable())
}, "realField");
const realFieldPosition = styleVariants(sizes, (size) => ({
  top: calc(hitArea).subtract(vars.inlineFieldSize[size]).divide(2).negate().toString()
}), "realFieldPosition");
const label = styleVariants(sizes, (size) => {
  const padding = calc(vars.inlineFieldSize[size]).subtract(vars.textSize.standard.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: padding,
    paddingBottom: padding
  };
}, "label");
const fieldSize = styleVariants(sizes, (size) => ({
  width: calc.multiply(vars.inlineFieldSize[size], toggleWidthRatio)
}), "fieldSize");
const slideContainer = style({}, "slideContainer");
const slideContainerSize = styleVariants(sizes, (size) => ({
  height: vars.inlineFieldSize[size]
}), "slideContainerSize");
const slideTrack = styleVariants(sizes, (size) => ({
  height: calc.subtract(vars.inlineFieldSize[size], vars.grid)
}), "slideTrack");
const slideTrackBackground = style({
  backgroundColor: vars.borderColor.standard,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)"
}, "slideTrackBackground");
const slideTrackSelected = style({
  selectors: {
    [`${realField}:not(:checked) + ${slideContainer} &`]: {
      transform: `translateX(${calc.negate(vars.touchableSize)})`
    }
  }
}, "slideTrackSelected");
const slider = styleVariants(sizes, (size) => {
  const slideDistance = calc(vars.inlineFieldSize[size]).multiply(toggleWidthRatio).subtract(vars.inlineFieldSize[size]).toString();
  const anticipationRatio = 0.12;
  const anticipation = calc.multiply(vars.inlineFieldSize[size], anticipationRatio);
  return {
    height: vars.inlineFieldSize[size],
    width: vars.inlineFieldSize[size],
    selectors: {
      [`${realField}:active + ${slideContainer} &`]: {
        transform: `translateX(${calc.negate(anticipation)})`
      },
      [`${realField}:checked + ${slideContainer} &`]: {
        transform: `translateX(${slideDistance})`
      },
      [`${realField}:active:checked + ${slideContainer} &`]: {
        transform: `translateX(${calc.add(slideDistance, anticipation)})`
      }
    }
  };
}, "slider");
const icon = style({
  transform: "scale(.75)",
  selectors: {
    [`${realField}:active + ${slideContainer} &`]: {
      transform: "scale(.75) rotate(-25deg)"
    },
    [`${realField}:checked + ${slideContainer} &`]: {
      opacity: 1
    },
    [`${realField}:active:checked + ${slideContainer} &`]: {
      transform: "scale(.75) rotate(6deg)"
    }
  }
}, "icon");
const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${slideContainer} &,
      ${realField}:active + ${slideContainer} &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainer} &,
      ${realField}:focus + ${slideContainer} &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
__vanilla_filescope__.endFileScope();
export { realField as a, realFieldPosition as b, slideContainerSize as c, slideTrack as d, slideTrackBackground as e, fieldSize as f, slideTrackSelected as g, slider as h, icon as i, focusOverlay as j, hoverOverlay as k, label as l, root as r, slideContainer as s };
