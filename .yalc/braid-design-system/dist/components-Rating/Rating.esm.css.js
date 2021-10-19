import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Rating/Rating.css.ts?used", "braid-monorepo");
const starColor = style({
  color: vars.foregroundColor.rating
}, "starColor");
const starSpacing = style({
  paddingRight: "1px"
}, "starSpacing");
const textSpacing = style({
  paddingLeft: "0.4em"
}, "textSpacing");
__vanilla_filescope__.endFileScope();
export { starColor as a, starSpacing as s, textSpacing as t };
