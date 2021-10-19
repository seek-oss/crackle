"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var cssUtils = require("@vanilla-extract/css-utils");
var css = require("@vanilla-extract/css");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Textarea/Textarea.css.ts?used", "braid-monorepo");
const field = css.style({
  resize: "vertical",
  background: "transparent",
  minHeight: cssUtils.calc.multiply(themesVars_cjs_css_js.vars.grid, 15)
}, "field");
const highlights = css.style({
  color: "transparent !important",
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
  ":after": {
    content: '"\\A"'
  }
}, "highlights");
__vanilla_filescope____namespace.endFileScope();
exports.field = field;
exports.highlights = highlights;
