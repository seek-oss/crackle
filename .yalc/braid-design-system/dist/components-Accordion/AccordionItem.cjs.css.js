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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Accordion/AccordionItem.css.ts", "braid-monorepo");
const button = css.style({}, "button");
const focusRing = css.style({
  top: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xsmall),
  bottom: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xsmall),
  left: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall),
  right: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusRing");
__vanilla_filescope____namespace.endFileScope();
exports.button = button;
exports.focusRing = focusRing;
