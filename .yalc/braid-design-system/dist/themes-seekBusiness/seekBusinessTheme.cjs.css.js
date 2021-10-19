"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
var themesMakeVanillaTheme_cjs_js = require("../themes-makeVanillaTheme.cjs.js");
var themesSeekBusiness_tokens_cjs_js = require("./tokens.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/themes/seekBusiness/seekBusinessTheme.css.ts", "braid-monorepo");
const {
  resolvedTokens,
  runtimeTokens
} = themesMakeVanillaTheme_cjs_js.makeVanillaTheme(themesSeekBusiness_tokens_cjs_js.tokens);
var vanillaTheme = css.createTheme(themesVars_cjs_css_js.vars, resolvedTokens, "default");
__vanilla_filescope____namespace.endFileScope();
exports.runtimeTokens = runtimeTokens;
exports.vanillaTheme = vanillaTheme;
