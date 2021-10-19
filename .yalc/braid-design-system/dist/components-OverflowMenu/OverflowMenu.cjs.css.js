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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/OverflowMenu/OverflowMenu.css.ts", "braid-monorepo");
const OVERFLOW_ICON_WIDTH = "4px";
const OVERFLOW_ICON_HEIGHT = "14px";
const circleSize = themesVars_cjs_css_js.vars.textSize.standard.mobile.lineHeight;
const offsetX = cssUtils.calc(circleSize).subtract(OVERFLOW_ICON_WIDTH).divide(2).negate();
const offsetY = cssUtils.calc(circleSize).subtract(OVERFLOW_ICON_HEIGHT).divide(2).negate();
const triggerOffset = css.style({
  margin: `${offsetY} ${offsetX}`
}, "triggerOffset");
__vanilla_filescope____namespace.endFileScope();
exports.triggerOffset = triggerOffset;
