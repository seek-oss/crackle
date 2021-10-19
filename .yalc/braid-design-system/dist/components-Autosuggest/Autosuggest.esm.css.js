import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Autosuggest/Autosuggest.css.ts?used", "braid-monorepo");
const backdrop = style({
  width: "100vw",
  height: "100vh",
  background: "black"
}, "backdrop");
const backdropVisible = style({
  opacity: 0.4
}, "backdropVisible");
const calcMenuHeight = (numSuggestions) => calc(vars.touchableSize).multiply(numSuggestions).add(vars.space.xxsmall).toString();
const menu = style(responsiveStyle({
  mobile: {
    maxHeight: calcMenuHeight(6),
    overflowY: "auto"
  },
  tablet: {
    maxHeight: calcMenuHeight(8)
  }
}), "menu");
const groupHeading = style({
  textTransform: "uppercase"
}, "groupHeading");
__vanilla_filescope__.endFileScope();
export { backdropVisible as a, backdrop as b, groupHeading as g, menu as m };
