"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssResponsiveStyle_cjs_js = require("../css-responsiveStyle.cjs.js");
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var __vanilla_filescope____namespace = /* @__PURE__ */ _interopNamespace(__vanilla_filescope__);
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Loader/Loader.css.ts?used", "braid-monorepo");
const rootSize = css.styleVariants(themesVars_cjs_css_js.vars.textSize, ({
  mobile,
  tablet
}) => cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    height: mobile.capHeight
  },
  tablet: {
    height: tablet.capHeight
  }
}), "rootSize");
const size = css.styleVariants(themesVars_cjs_css_js.vars.textSize, ({
  mobile,
  tablet
}) => cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    height: mobile.fontSize
  },
  tablet: {
    height: tablet.fontSize
  }
}), "size");
const color = {
  dark: css.style({
    fill: themesVars_cjs_css_js.vars.backgroundColor.card
  }, "color_dark"),
  light: css.style({
    fill: themesVars_cjs_css_js.vars.backgroundColor.neutral
  }, "color_light")
};
const bounce = css.keyframes({
  "33%": {
    transform: `translateY(-1.4em)`
  },
  "66%": {
    transform: `translateY(1.4em)`
  }
}, "bounce");
const bounceAnimation = css.style({
  animationName: bounce,
  animationFillMode: "both",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  animationDuration: "0.6s"
}, "bounceAnimation");
const animationDelayInMs = 70;
const circle = css.composeStyles(bounceAnimation, css.style({
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
const fade = css.keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}, "fade");
const delay = css.style({
  opacity: 0,
  animationName: fade,
  animationIterationCount: "1",
  animationFillMode: "forwards",
  animationTimingFunction: "ease-in",
  animationDuration: "0.25s",
  animationDelay: `${animationDelayValueInMs}ms`
}, "delay");
__vanilla_filescope____namespace.endFileScope();
exports.circle = circle;
exports.color = color;
exports.delay = delay;
exports.rootSize = rootSize;
exports.size = size;
