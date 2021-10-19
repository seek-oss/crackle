import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Pagination/Pagination.css.ts?used", "braid-monorepo");
const hover = style({}, "hover");
const currentKeyline = style({
  opacity: 0.3
}, "currentKeyline");
const current = style({
  opacity: 0.075
}, "current");
const background = style({
  selectors: {
    [`${hover}:hover &:not(${current})`]: {
      opacity: 0.5
    }
  }
}, "background");
__vanilla_filescope__.endFileScope();
export { currentKeyline as a, background as b, current as c, hover as h };
