"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var polished = require("polished");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/ButtonRenderer/ButtonRenderer.css.ts", "braid-monorepo");
const constants = {
  smallButtonPaddingSize: "xsmall"
};
const root = css.style({
  textDecoration: "none"
}, "root");
const activeOverlay = css.style({
  selectors: {
    [`${root}:active &`]: {
      opacity: 1
    }
  }
}, "activeOverlay");
const hoverOverlay = css.style({
  selectors: {
    [`${root}:hover:not(:disabled) &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const focusOverlay = css.style({
  selectors: {
    [`${root}:focus &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const standard = css.style({}, "standard");
const small = css.style({}, "small");
const stylesForBreakpoint = (breakpoint, size) => {
  const height = size === "small" ? cssUtils.calc.add(cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[constants.smallButtonPaddingSize], 2), themesVars_cjs_css_js.vars.textSize.small[breakpoint].lineHeight) : themesVars_cjs_css_js.vars.touchableSize;
  const value = cssUtils.calc(height).subtract(themesVars_cjs_css_js.vars.textSize[size][breakpoint].capHeight).divide(2).negate().toString();
  return {
    marginTop: value,
    marginBottom: value
  };
};
const bleedY = css.style({
  selectors: {
    [`${standard}&`]: cssResponsiveStyle_cjs_js.responsiveStyle({
      mobile: stylesForBreakpoint("mobile", "standard"),
      tablet: stylesForBreakpoint("tablet", "standard")
    }),
    [`${small}&`]: cssResponsiveStyle_cjs_js.responsiveStyle({
      mobile: stylesForBreakpoint("mobile", "small"),
      tablet: stylesForBreakpoint("tablet", "small")
    })
  }
}, "bleedY");
const dot1 = css.keyframes({
  "14%": {
    opacity: 0
  },
  "15%,100%": {
    opacity: 1
  }
}, "dot1");
const dot2 = css.keyframes({
  "29%": {
    opacity: 0
  },
  "30%,100%": {
    opacity: 1
  }
}, "dot2");
const dot3 = css.keyframes({
  "44%": {
    opacity: 0
  },
  "45%,100%": {
    opacity: 1
  }
}, "dot3");
const loadingDot = css.style({
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
const invertedBackgrounds = css.styleVariants({
  soft: {
    background: polished.rgba("#fff", 0.075)
  },
  hover: {
    background: polished.rgba("#fff", 0.15)
  },
  active: {
    background: polished.rgba("#000", 0.05)
  }
}, "invertedBackgrounds");
__vanilla_filescope____namespace.endFileScope();
exports.activeOverlay = activeOverlay;
exports.bleedY = bleedY;
exports.constants = constants;
exports.focusOverlay = focusOverlay;
exports.hoverOverlay = hoverOverlay;
exports.invertedBackgrounds = invertedBackgrounds;
exports.loadingDot = loadingDot;
exports.root = root;
exports.small = small;
exports.standard = standard;
