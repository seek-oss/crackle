"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/TooltipRenderer/TooltipRenderer.css.ts?used", "braid-monorepo");
const constants = {
  maxWidth: "260px",
  arrowSize: "12px"
};
const background = css.style({
  background: themesVars_cjs_css_js.vars.foregroundColor.neutral
}, "background");
const maxWidth = css.style({
  maxWidth: constants.maxWidth
}, "maxWidth");
const verticalOffsetBeforeEntrance = css.style({
  transform: "translateZ(0) translateY(4px)",
  selectors: {
    "[data-popper-placement^=bottom] &": {
      transform: "translateZ(0) translateY(-4px)"
    }
  }
}, "verticalOffsetBeforeEntrance");
const translateZ0 = css.style({
  transform: "translateZ(0)"
}, "translateZ0");
const padding = css.style({
  padding: cssUtils.calc.add(themesVars_cjs_css_js.vars.space.small, themesVars_cjs_css_js.vars.grid)
}, "padding");
const borderRadius = themesVars_cjs_css_js.vars.borderRadius.standard;
const offset = cssUtils.calc(constants.arrowSize).divide(2).negate().toString();
const arrow = css.style({
  visibility: "hidden",
  ":before": {
    visibility: "visible",
    content: "''",
    transform: "rotate(45deg)"
  },
  selectors: {
    "&, &::before": {
      width: cssUtils.calc.add(constants.arrowSize, cssUtils.calc.multiply(borderRadius, 2)),
      height: cssUtils.calc.add(constants.arrowSize, cssUtils.calc.multiply(borderRadius, 2)),
      position: "absolute",
      background: "inherit",
      borderRadius
    },
    "[data-popper-placement^=top] &": {
      bottom: offset
    },
    "[data-popper-placement^=bottom] &": {
      top: offset
    },
    "[data-popper-placement^=left] &": {
      right: offset
    },
    "[data-popper-placement^=right] &": {
      left: offset
    }
  }
}, "arrow");
__vanilla_filescope____namespace.endFileScope();
exports.arrow = arrow;
exports.background = background;
exports.maxWidth = maxWidth;
exports.padding = padding;
exports.translateZ0 = translateZ0;
exports.verticalOffsetBeforeEntrance = verticalOffsetBeforeEntrance;
