import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/MenuItemCheckbox/MenuItemCheckbox.css.ts", "braid-monorepo");
const checkboxPadding = style({
  padding: 2
}, "checkboxPadding");
const standardText = vars.textSize.standard;
const calculateSize = (capHeight) => calc.multiply(capHeight, 1.8);
const mobileSize = calculateSize(standardText.mobile.capHeight);
const tabletSize = calculateSize(standardText.tablet.capHeight);
const checkboxBorder = style(responsiveStyle({
  mobile: {
    width: mobileSize,
    height: mobileSize
  },
  tablet: {
    width: tabletSize,
    height: tabletSize
  }
}), "checkboxBorder");
__vanilla_filescope__.endFileScope();
export { checkboxPadding as a, checkboxBorder as c };
