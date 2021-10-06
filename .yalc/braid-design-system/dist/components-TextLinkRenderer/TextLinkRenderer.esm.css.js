import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/TextLinkRenderer/TextLinkRenderer.css.ts", "braid-monorepo");
const underlineAlways = style({
  textDecoration: "underline"
}, "underlineAlways");
const underlineOnHoverOnly = style({
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline"
  }
}, "underlineOnHoverOnly");
const visited = style({
  ":visited": {
    color: vars.foregroundColor.linkVisited
  }
}, "visited");
const button = style({}, "button");
const focusOverlay = style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
__vanilla_filescope__.endFileScope();
export { underlineOnHoverOnly as a, button as b, focusOverlay as f, underlineAlways as u, visited as v };
