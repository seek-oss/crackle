import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/private/Field/Field.css.ts", "braid-monorepo");
const field = style({}, "field");
const placeholderColor = style({
  "::placeholder": {
    color: vars.foregroundColor.secondary
  }
}, "placeholderColor");
const secondaryIconSpace = style({
  paddingRight: vars.touchableSize
}, "secondaryIconSpace");
const textLeftOffset = "2px";
const iconSpace = style({
  paddingLeft: calc.subtract(vars.touchableSize, textLeftOffset)
}, "iconSpace");
const focusOverlay = style({
  selectors: {
    [`${field}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = style({
  selectors: {
    [`${field}:hover:not(:disabled) ~ &, ${field}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const verticalDivider = style({
  width: vars.borderWidth.standard,
  background: vars.borderColor.standard
}, "verticalDivider");
__vanilla_filescope__.endFileScope();
export { focusOverlay as a, field as f, hoverOverlay as h, iconSpace as i, placeholderColor as p, secondaryIconSpace as s, verticalDivider as v };
