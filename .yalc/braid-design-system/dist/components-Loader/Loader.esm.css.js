import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { styleVariants, style, keyframes, composeStyles } from "@vanilla-extract/css";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Loader/Loader.css.ts?used", "braid-monorepo");
const rootSize = styleVariants(vars.textSize, ({
  mobile,
  tablet
}) => responsiveStyle({
  mobile: {
    height: mobile.capHeight
  },
  tablet: {
    height: tablet.capHeight
  }
}), "rootSize");
const size = styleVariants(vars.textSize, ({
  mobile,
  tablet
}) => responsiveStyle({
  mobile: {
    height: mobile.fontSize
  },
  tablet: {
    height: tablet.fontSize
  }
}), "size");
const color = {
  dark: style({
    fill: vars.backgroundColor.card
  }, "color_dark"),
  light: style({
    fill: vars.backgroundColor.neutral
  }, "color_light")
};
const bounce = keyframes({
  "33%": {
    transform: `translateY(-1.4em)`
  },
  "66%": {
    transform: `translateY(1.4em)`
  }
}, "bounce");
const bounceAnimation = style({
  animationName: bounce,
  animationFillMode: "both",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  animationDuration: "0.6s"
}, "bounceAnimation");
const animationDelayInMs = 70;
const circle = composeStyles(bounceAnimation, style({
  transform: `translateY(1.4em)`,
  selectors: {
    [`&:nth-child(1)`]: {
      animationDelay: `${animationDelayInMs * 2}ms`
    },
    [`&:nth-child(2)`]: {
      animationDelay: `${animationDelayInMs}ms`
    }
  }
}, "circle"));
const animationDelayValueInMs = 800;
const fade = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}, "fade");
const delay = style({
  opacity: 0,
  animationName: fade,
  animationIterationCount: "1",
  animationFillMode: "forwards",
  animationTimingFunction: "ease-in",
  animationDuration: "0.25s",
  animationDelay: `${animationDelayValueInMs}ms`
}, "delay");
__vanilla_filescope__.endFileScope();
export { circle as a, color as c, delay as d, rootSize as r, size as s };
