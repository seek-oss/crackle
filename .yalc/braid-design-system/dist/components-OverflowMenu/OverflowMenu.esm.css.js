import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/OverflowMenu/OverflowMenu.css.ts?used", "braid-monorepo");
const OVERFLOW_ICON_WIDTH = "4px";
const OVERFLOW_ICON_HEIGHT = "14px";
const circleSize = vars.textSize.standard.mobile.lineHeight;
const offsetX = calc(circleSize).subtract(OVERFLOW_ICON_WIDTH).divide(2).negate();
const offsetY = calc(circleSize).subtract(OVERFLOW_ICON_HEIGHT).divide(2).negate();
const triggerOffset = style({
  margin: `${offsetY} ${offsetX}`
}, "triggerOffset");
__vanilla_filescope__.endFileScope();
export { triggerOffset as t };
