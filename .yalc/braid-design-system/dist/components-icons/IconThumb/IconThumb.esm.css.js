import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/icons/IconThumb/IconThumb.css.ts", "braid-monorepo");
const root = style({
  transition: "transform 0.3s ease",
  transformOrigin: "50% 50%"
}, "root");
const down = style({
  transform: "rotate(180deg)"
}, "down");
__vanilla_filescope__.endFileScope();
export { down as d, root as r };
