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
import omit from "lodash/omit";
import mapValues from "lodash/mapValues";
import { b as breakpoints } from "./css-breakpoints.esm.js";
const breakpointQuery = mapValues(omit(breakpoints, "mobile"), (bp) => `screen and (min-width: ${bp}px)`);
const makeMediaQuery = (breakpoint) => (styles) => !styles || Object.keys(styles).length === 0 ? {} : {
  [breakpointQuery[breakpoint]]: styles
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
}) => __spreadValues(__spreadValues({}, omit(mobile, "@media")), tablet || desktop || wide ? {
  "@media": __spreadValues(__spreadValues(__spreadValues({}, mediaQuery.tablet(tablet != null ? tablet : {})), mediaQuery.desktop(desktop != null ? desktop : {})), mediaQuery.wide(wide != null ? wide : {}))
} : {});
export { breakpointQuery as b, responsiveStyle as r };
