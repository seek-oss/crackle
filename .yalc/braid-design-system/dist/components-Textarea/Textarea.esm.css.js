import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { calc } from "@vanilla-extract/css-utils";
import { style } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Textarea/Textarea.css.ts", "braid-monorepo");
const field = style({
  resize: "vertical",
  background: "transparent",
  minHeight: calc.multiply(vars.grid, 15)
}, "field");
const highlights = style({
  color: "transparent !important",
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  ":after": {
    content: '"\\A"'
  }
}, "highlights");
__vanilla_filescope__.endFileScope();
export { field as f, highlights as h };
