import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Badge/Badge.css.ts?used", "braid-monorepo");
const constants = {
  textSize: "xsmall"
};
const stylesForBreakpoint = (breakpoint) => {
  const {
    lineHeight,
    capHeight
  } = vars.textSize[constants.textSize][breakpoint];
  const padding = calc.subtract(lineHeight, capHeight);
  return {
    margin: `${calc(padding).divide(2).negate()} 0`
  };
};
const bleedY = style(responsiveStyle({
  mobile: stylesForBreakpoint("mobile"),
  tablet: stylesForBreakpoint("tablet")
}), "bleedY");
__vanilla_filescope__.endFileScope();
export { bleedY as b, constants as c };
