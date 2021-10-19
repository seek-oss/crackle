import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/MenuRenderer/MenuRenderer.css.ts?used", "braid-monorepo");
const root = style({
  padding: "0.05px",
  lineHeight: 0
}, "root");
const backdrop = style({
  width: "100vw",
  height: "100vh"
}, "backdrop");
const menuIsClosed = style({
  transform: `translateY(${calc(vars.grid).negate().multiply(2)})`,
  visibility: "hidden"
}, "menuIsClosed");
__vanilla_filescope__.endFileScope();
export { backdrop as b, menuIsClosed as m, root as r };
