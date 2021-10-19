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
import { d as debugTouchable } from "./debugTouchable.esm.js";
import { v as virtualTouchableRules } from "./virtualTouchableRules.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/private/touchable/virtualTouchable.css.ts", "braid-monorepo");
const virtualTouchable = style({
  position: "relative",
  ":after": __spreadValues({
    content: '""',
    position: "absolute",
    left: -10,
    right: -10
  }, virtualTouchableRules),
  selectors: __spreadValues({}, debugTouchable({
    after: true
  }))
}, "virtualTouchable");
const yAxisOnly = style({
  ":after": {
    left: "0 !important",
    right: "0 !important"
  }
}, "yAxisOnly");
__vanilla_filescope__.endFileScope();
export { virtualTouchable as v, yAxisOnly as y };
