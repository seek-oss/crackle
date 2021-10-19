"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js = require("../components-private/hideFocusRings/hideFocusRingsDataAttribute.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/css/reset/reset.css.ts?used", "braid-monorepo");
const base = css.style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
  WebkitTapHighlightColor: "transparent",
  selectors: {
    [`[${componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js.hideFocusRingsDataAttribute}] &`]: {
      outline: "none"
    }
  }
}, "base");
const block = css.style({
  display: "block"
}, "block");
const body = css.style({
  lineHeight: 1
}, "body");
const list = css.style({
  listStyle: "none"
}, "list");
const quote = css.style({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: "''"
    }
  }
}, "quote");
const table = css.style({
  borderCollapse: "collapse",
  borderSpacing: 0
}, "table");
const appearance = css.style({
  appearance: "none"
}, "appearance");
const field = css.composeStyles(block, appearance);
const mark = css.style({
  backgroundColor: "transparent",
  color: "inherit"
}, "mark");
const select = css.composeStyles(field, css.style({
  selectors: {
    "&::-ms-expand": {
      display: "none"
    }
  }
}, "select"));
const input = css.composeStyles(field, css.style({
  selectors: {
    "&::-ms-clear": {
      display: "none"
    },
    "&::-webkit-search-cancel-button": {
      WebkitAppearance: "none"
    }
  }
}, "input"));
const button = css.style({
  background: "none"
}, "button");
const a = css.style({
  textDecoration: "none",
  color: "inherit"
}, "a");
const element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input
};
__vanilla_filescope____namespace.endFileScope();
exports.base = base;
exports.element = element;
