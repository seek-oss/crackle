import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Divider/Divider.css.ts?used", "braid-monorepo");
const base = style({
  height: vars.borderWidth.standard
}, "base");
const weight = {
  regular: style({
    background: vars.borderColor.standard
  }, "weight_regular"),
  strong: style({
    background: vars.foregroundColor.neutral
  }, "weight_strong")
};
__vanilla_filescope__.endFileScope();
export { base as b, weight as w };
