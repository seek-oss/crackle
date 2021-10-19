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
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
import { v as virtualTouchableRules } from "../components-private/touchable/virtualTouchableRules.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/TextDropdown/TextDropdown.css.ts?used", "braid-monorepo");
const select = style(__spreadValues({}, virtualTouchableRules), "select");
const focusOverlay = [style({
  selectors: {
    [`${select}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay"), style({
  top: calc.negate(vars.space.xxsmall),
  bottom: calc.negate(vars.space.xxsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall)
}, "focusOverlay")];
__vanilla_filescope__.endFileScope();
export { focusOverlay as f, select as s };
