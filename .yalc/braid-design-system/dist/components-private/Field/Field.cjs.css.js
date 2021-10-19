"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var themesVars_cjs_css_js = require("../../themes-vars.cjs.css.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/private/Field/Field.css.ts?used", "braid-monorepo");
const field = css.style({}, "field");
const placeholderColor = css.style({
  "::placeholder": {
    color: themesVars_cjs_css_js.vars.foregroundColor.secondary
  }
}, "placeholderColor");
const secondaryIconSpace = css.style({
  paddingRight: themesVars_cjs_css_js.vars.touchableSize
}, "secondaryIconSpace");
const textLeftOffset = "2px";
const iconSpace = css.style({
  paddingLeft: cssUtils.calc.subtract(themesVars_cjs_css_js.vars.touchableSize, textLeftOffset)
}, "iconSpace");
const focusOverlay = css.style({
  selectors: {
    [`${field}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = css.style({
  selectors: {
    [`${field}:hover:not(:disabled) ~ &, ${field}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const verticalDivider = css.style({
  width: themesVars_cjs_css_js.vars.borderWidth.standard,
  background: themesVars_cjs_css_js.vars.borderColor.standard
}, "verticalDivider");
__vanilla_filescope____namespace.endFileScope();
exports.field = field;
exports.focusOverlay = focusOverlay;
exports.hoverOverlay = hoverOverlay;
exports.iconSpace = iconSpace;
exports.placeholderColor = placeholderColor;
exports.secondaryIconSpace = secondaryIconSpace;
exports.verticalDivider = verticalDivider;
