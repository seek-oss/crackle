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
import { v as vars } from "../../themes-vars.esm.css.js";
import { h as hitArea } from "../touchable/hitArea.esm.js";
import { d as debugTouchable } from "../touchable/debugTouchable.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/private/InlineField/InlineField.css.ts", "braid-monorepo");
const sizes = {
  standard: "standard",
  small: "small"
};
const root = style({
  ":hover": {
    zIndex: 1
  }
}, "root");
const realField = style({
  width: hitArea,
  height: hitArea,
  selectors: __spreadValues({}, debugTouchable())
}, "realField");
const realFieldPosition = styleVariants(sizes, (size) => {
  const offset = calc(hitArea).subtract(vars.inlineFieldSize[size]).divide(2).negate().toString();
  return {
    top: offset,
    left: offset
  };
}, "realFieldPosition");
const fakeField = style({}, "fakeField");
const fakeFieldSize = styleVariants(sizes, (size) => ({
  height: vars.inlineFieldSize[size],
  width: vars.inlineFieldSize[size]
}), "fakeFieldSize");
const badgeOffset = styleVariants(sizes, (size) => {
  const offset = calc(vars.inlineFieldSize[size]).subtract(vars.textSize.xsmall.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: offset,
    paddingBottom: offset
  };
}, "badgeOffset");
const labelOffset = styleVariants(sizes, (size) => ({
  paddingTop: calc(vars.inlineFieldSize[size]).subtract(vars.textSize[size].mobile.capHeight).divide(2).toString()
}), "labelOffset");
const isMixed = style({}, "isMixed");
const children = style({
  selectors: {
    [`${realField}:checked ~ * &,
      ${realField}${isMixed} ~ * &`]: {
      display: "block"
    }
  }
}, "children");
const selected = style({
  selectors: {
    [`${realField}:checked + ${fakeField} > &,
      ${realField}${isMixed} + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "selected");
const focusOverlay = style({
  selectors: {
    [`${realField}:focus + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = style({
  selectors: {
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeField} > &,
      ${realField}:focus:not(${isMixed}) + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const indicator = style({
  selectors: {
    [`${hoverOverlay} > &`]: {
      opacity: 0.2
    }
  }
}, "indicator");
const checkboxScale = style({
  transform: "scale(0.85)",
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: "scale(0.75)"
    }
  }
}, "checkboxScale");
const checkboxIndicator = [indicator, checkboxScale];
const radioScale = style({
  transform: "scale(0.6)",
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: "scale(0.5)"
    }
  }
}, "radioScale");
const radioIndicator = [indicator, radioScale];
__vanilla_filescope__.endFileScope();
export { realFieldPosition as a, fakeFieldSize as b, focusOverlay as c, checkboxIndicator as d, radioIndicator as e, fakeField as f, root as g, hoverOverlay as h, isMixed as i, badgeOffset as j, children as k, labelOffset as l, realField as r, selected as s };
