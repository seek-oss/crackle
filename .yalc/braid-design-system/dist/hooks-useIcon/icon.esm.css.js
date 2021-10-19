import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, styleVariants } from "@vanilla-extract/css";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/hooks/useIcon/icon.css.ts?used", "braid-monorepo");
const size = style({
  width: "1em",
  height: "1em"
}, "size");
const inline = style({
  verticalAlign: "middle"
}, "inline");
const uppercaseNudge = -0.105;
const lowercaseNudge = uppercaseNudge + 0.04;
const verticalCorrection = 0.06;
const alignY = {
  uppercase: styleVariants({
    none: {
      top: `${uppercaseNudge}em`
    },
    up: {
      top: `${uppercaseNudge - verticalCorrection}em`
    },
    down: {
      top: `${uppercaseNudge + verticalCorrection}em`
    }
  }, "alignY_uppercase"),
  lowercase: styleVariants({
    none: {
      top: `${lowercaseNudge}em`
    },
    up: {
      top: `${lowercaseNudge - verticalCorrection}em`
    },
    down: {
      top: `${lowercaseNudge + verticalCorrection}em`
    }
  }, "alignY_lowercase")
};
const blockWidths = styleVariants(vars.textSize, ({
  mobile,
  tablet
}) => responsiveStyle({
  mobile: {
    width: mobile.lineHeight
  },
  tablet: {
    width: tablet.lineHeight
  }
}), "blockWidths");
__vanilla_filescope__.endFileScope();
export { alignY as a, blockWidths as b, inline as i, size as s };
