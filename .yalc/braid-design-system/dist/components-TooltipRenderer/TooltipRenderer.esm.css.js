import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/TooltipRenderer/TooltipRenderer.css.ts?used", "braid-monorepo");
const constants = {
  maxWidth: "260px",
  arrowSize: "12px"
};
const background = style({
  background: vars.foregroundColor.neutral
}, "background");
const maxWidth = style({
  maxWidth: constants.maxWidth
}, "maxWidth");
const verticalOffsetBeforeEntrance = style({
  transform: "translateZ(0) translateY(4px)",
  selectors: {
    "[data-popper-placement^=bottom] &": {
      transform: "translateZ(0) translateY(-4px)"
    }
  }
}, "verticalOffsetBeforeEntrance");
const translateZ0 = style({
  transform: "translateZ(0)"
}, "translateZ0");
const padding = style({
  padding: calc.add(vars.space.small, vars.grid)
}, "padding");
const borderRadius = vars.borderRadius.standard;
const offset = calc(constants.arrowSize).divide(2).negate().toString();
const arrow = style({
  visibility: "hidden",
  ":before": {
    visibility: "visible",
    content: "''",
    transform: "rotate(45deg)"
  },
  selectors: {
    "&, &::before": {
      width: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
      height: calc.add(constants.arrowSize, calc.multiply(borderRadius, 2)),
      position: "absolute",
      background: "inherit",
      borderRadius
    },
    "[data-popper-placement^=top] &": {
      bottom: offset
    },
    "[data-popper-placement^=bottom] &": {
      top: offset
    },
    "[data-popper-placement^=left] &": {
      right: offset
    },
    "[data-popper-placement^=right] &": {
      left: offset
    }
  }
}, "arrow");
__vanilla_filescope__.endFileScope();
export { arrow as a, background as b, maxWidth as m, padding as p, translateZ0 as t, verticalOffsetBeforeEntrance as v };
