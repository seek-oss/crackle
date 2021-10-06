import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { h as hideFocusRingsDataAttribute } from "./hideFocusRingsDataAttribute.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/private/hideFocusRings/hideFocusRings.css.ts", "braid-monorepo");
const hideFocusRingsClassName = style({
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      opacity: "0 !important"
    }
  }
}, "hideFocusRingsClassName");
__vanilla_filescope__.endFileScope();
export { hideFocusRingsClassName as h };
