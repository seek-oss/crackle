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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Tabs/Tabs.css.ts?used", "braid-monorepo");
const tab = css.style({
  selectors: {
    "&::-moz-focus-inner": {
      border: 0
    }
  }
}, "tab");
const hairlineMarginLeft = css.style({
  marginLeft: 1
}, "hairlineMarginLeft");
const nowrap = css.style({
  whiteSpace: "nowrap"
}, "nowrap");
const scroll = css.style({
  WebkitOverflowScrolling: "touch",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0
    }
  }
}, "scroll");
const mask = css.style({
  maskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)"
}, "mask");
const marginAuto = css.style({
  marginLeft: "auto",
  marginRight: "auto"
}, "marginAuto");
const tabFocusRing = css.style({
  margin: themesVars_cjs_css_js.vars.borderWidth.large,
  selectors: {
    [`${tab}:focus &`]: {
      opacity: 1
    }
  }
}, "tabFocusRing");
const tabUnderline = css.style({
  height: 2
}, "tabUnderline");
const tabUnderlineHover = css.style({
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1
    }
  }
}, "tabUnderlineHover");
const tabUnderlineAnimation = css.style({
  transform: "translateY(100%)"
}, "tabUnderlineAnimation");
const tabPanel = css.style({}, "tabPanel");
const tabPanelFocusRing = css.style({
  selectors: {
    [`${tabPanel}:focus > &`]: {
      opacity: 1
    }
  }
}, "tabPanelFocusRing");
const divider = css.style({
  background: themesVars_cjs_css_js.vars.borderColor.standard,
  height: themesVars_cjs_css_js.vars.borderWidth.standard
}, "divider");
__vanilla_filescope____namespace.endFileScope();
exports.divider = divider;
exports.hairlineMarginLeft = hairlineMarginLeft;
exports.marginAuto = marginAuto;
exports.mask = mask;
exports.nowrap = nowrap;
exports.scroll = scroll;
exports.tab = tab;
exports.tabFocusRing = tabFocusRing;
exports.tabPanel = tabPanel;
exports.tabPanelFocusRing = tabPanelFocusRing;
exports.tabUnderline = tabUnderline;
exports.tabUnderlineAnimation = tabUnderlineAnimation;
exports.tabUnderlineHover = tabUnderlineHover;
