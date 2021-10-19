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
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/css/negativeMargin/negativeMarginTop.css.ts?used", "braid-monorepo");
const negativeMarginTop = (spaceValue) => ({
  ":before": {
    marginBottom: spaceValue ? calc.negate(spaceValue) : 0
  }
});
const base = style({
  ":before": {
    content: '""',
    display: "table"
  }
}, "base");
const mobile = styleVariants(__spreadValues({
  none: 0
}, vars.space), (value) => negativeMarginTop(value), "mobile");
const tablet = styleVariants(__spreadValues({
  none: 0
}, vars.space), (value) => responsiveStyle({
  tablet: negativeMarginTop(value)
}), "tablet");
const desktop = styleVariants(__spreadValues({
  none: 0
}, vars.space), (value) => responsiveStyle({
  desktop: negativeMarginTop(value)
}), "desktop");
const wide = styleVariants(__spreadValues({
  none: 0
}, vars.space), (value) => responsiveStyle({
  wide: negativeMarginTop(value)
}), "wide");
__vanilla_filescope__.endFileScope();
export { base as b, desktop as d, mobile as m, tablet as t, wide as w };
