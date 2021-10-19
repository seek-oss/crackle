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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/MenuRenderer/MenuRenderer.css.ts?used", "braid-monorepo");
const root = css.style({
  padding: "0.05px",
  lineHeight: 0
}, "root");
const backdrop = css.style({
  width: "100vw",
  height: "100vh"
}, "backdrop");
const menuIsClosed = css.style({
  transform: `translateY(${cssUtils.calc(themesVars_cjs_css_js.vars.grid).negate().multiply(2)})`,
  visibility: "hidden"
}, "menuIsClosed");
__vanilla_filescope____namespace.endFileScope();
exports.backdrop = backdrop;
exports.menuIsClosed = menuIsClosed;
exports.root = root;
