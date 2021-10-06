import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Accordion/AccordionItem.css.ts", "braid-monorepo");
const button = style({}, "button");
const focusRing = style({
  top: calc.negate(vars.space.xsmall),
  bottom: calc.negate(vars.space.xsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusRing");
__vanilla_filescope__.endFileScope();
export { button as b, focusRing as f };
