import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { r as responsiveStyle } from "./css-responsiveStyle.esm.js";
import { v as vars } from "./themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/css/textAlignedToIcon.css.ts?used", "braid-monorepo");
const calculateForBreakpoint = (breakpoint) => {
  const type = vars.textSize.standard[breakpoint];
  const padding = calc(type.lineHeight).subtract(type.capHeight).divide(2).toString();
  return {
    paddingTop: padding,
    paddingBottom: padding
  };
};
const textAlignedToIcon = {
  standard: style(responsiveStyle({
    mobile: calculateForBreakpoint("mobile"),
    tablet: calculateForBreakpoint("tablet")
  }), "textAlignedToIcon_standard")
};
__vanilla_filescope__.endFileScope();
export { textAlignedToIcon as t };
