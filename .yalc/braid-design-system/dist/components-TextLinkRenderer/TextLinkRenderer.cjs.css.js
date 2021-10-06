"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/TextLinkRenderer/TextLinkRenderer.css.ts", "braid-monorepo");
const underlineAlways = css.style({
  textDecoration: "underline"
}, "underlineAlways");
const underlineOnHoverOnly = css.style({
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline"
  }
}, "underlineOnHoverOnly");
const visited = css.style({
  ":visited": {
    color: themesVars_cjs_css_js.vars.foregroundColor.linkVisited
  }
}, "visited");
const button = css.style({}, "button");
const focusOverlay = css.style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
__vanilla_filescope____namespace.endFileScope();
exports.button = button;
exports.focusOverlay = focusOverlay;
exports.underlineAlways = underlineAlways;
exports.underlineOnHoverOnly = underlineOnHoverOnly;
exports.visited = visited;
