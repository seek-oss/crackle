import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, keyframes, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { rgba } from "polished";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/ButtonRenderer/ButtonRenderer.css.ts?used", "braid-monorepo");
const constants = {
  smallButtonPaddingSize: "xsmall"
};
const root = style({
  textDecoration: "none"
}, "root");
const activeOverlay = style({
  selectors: {
    [`${root}:active &`]: {
      opacity: 1
    }
  }
}, "activeOverlay");
const hoverOverlay = style({
  selectors: {
    [`${root}:hover:not(:disabled) &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const focusOverlay = style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const standard = style({}, "standard");
const small = style({}, "small");
const stylesForBreakpoint = (breakpoint, size) => {
  const height = size === "small" ? calc.add(calc.multiply(vars.space[constants.smallButtonPaddingSize], 2), vars.textSize.small[breakpoint].lineHeight) : vars.touchableSize;
  const value = calc(height).subtract(vars.textSize[size][breakpoint].capHeight).divide(2).negate().toString();
  return {
    marginTop: value,
    marginBottom: value
  };
};
const bleedY = style({
  selectors: {
    [`${standard}&`]: responsiveStyle({
      mobile: stylesForBreakpoint("mobile", "standard"),
      tablet: stylesForBreakpoint("tablet", "standard")
    }),
    [`${small}&`]: responsiveStyle({
      mobile: stylesForBreakpoint("mobile", "small"),
      tablet: stylesForBreakpoint("tablet", "small")
    })
  }
}, "bleedY");
const dot1 = keyframes({
  "14%": {
    opacity: 0
  },
  "15%,100%": {
    opacity: 1
  }
}, "dot1");
const dot2 = keyframes({
  "29%": {
    opacity: 0
  },
  "30%,100%": {
    opacity: 1
  }
}, "dot2");
const dot3 = keyframes({
  "44%": {
    opacity: 0
  },
  "45%,100%": {
    opacity: 1
  }
}, "dot3");
const loadingDot = style({
  animationDuration: "1s",
  animationIterationCount: "infinite",
  opacity: 0,
  selectors: {
    [`&:nth-child(1)`]: {
      animationName: dot1
    },
    [`&:nth-child(2)`]: {
      animationName: dot2
    },
    [`&:nth-child(3)`]: {
      animationName: dot3
    }
  }
}, "loadingDot");
const invertedBackgrounds = styleVariants({
  soft: {
    background: rgba("#fff", 0.075)
  },
  hover: {
    background: rgba("#fff", 0.15)
  },
  active: {
    background: rgba("#000", 0.05)
  }
}, "invertedBackgrounds");
__vanilla_filescope__.endFileScope();
export { small as a, bleedY as b, activeOverlay as c, constants as d, focusOverlay as f, hoverOverlay as h, invertedBackgrounds as i, loadingDot as l, root as r, standard as s };
