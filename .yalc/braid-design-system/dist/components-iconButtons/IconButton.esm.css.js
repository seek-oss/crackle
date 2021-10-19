import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/iconButtons/IconButton.css.ts", "braid-monorepo");
const button = style({
  ":hover": {
    zIndex: 1
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0
    }
  }
}, "button");
const forceActive = style({}, "forceActive");
const darkBackground = style({}, "darkBackground");
const hoverOverlay = style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1
    },
    [`${button}:hover &${darkBackground}, ${button}:focus &${darkBackground}`]: {
      opacity: 0.2
    },
    [`${button}:active &, ${forceActive}&`]: {
      opacity: 0.8
    },
    [`${button}:active &${darkBackground}, ${forceActive}&${darkBackground}`]: {
      opacity: 0.075
    }
  }
}, "hoverOverlay");
const focusOverlay = style({
  selectors: {
    [`${button}:focus &`]: {
      opacity: 1
    },
    [`${button}:focus &${darkBackground}`]: {
      opacity: 0.15
    }
  }
}, "focusOverlay");
__vanilla_filescope__.endFileScope();
export { focusOverlay as a, button as b, darkBackground as d, forceActive as f, hoverOverlay as h };
