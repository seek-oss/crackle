import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { styleVariants } from "@vanilla-extract/css";
import { r as responsiveStyle } from "./css-responsiveStyle.esm.js";
import { v as vars } from "./themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/css/lineHeightContainer.css.ts", "braid-monorepo");
const lineHeightContainer = styleVariants(vars.textSize, ({
  mobile,
  tablet
}) => responsiveStyle({
  mobile: {
    height: mobile.lineHeight
  },
  tablet: {
    height: tablet.lineHeight
  }
}), "lineHeightContainer");
__vanilla_filescope__.endFileScope();
export { lineHeightContainer as l };
