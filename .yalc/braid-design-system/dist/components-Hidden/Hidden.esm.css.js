import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Hidden/Hidden.css.ts?used", "braid-monorepo");
const hiddenOnPrint = style({
  "@media": {
    print: {
      display: "none !important"
    }
  }
}, "hiddenOnPrint");
__vanilla_filescope__.endFileScope();
export { hiddenOnPrint as h };
