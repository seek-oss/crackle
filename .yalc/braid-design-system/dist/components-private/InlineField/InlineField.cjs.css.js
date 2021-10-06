"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var themesVars_cjs_css_js = require("../../themes-vars.cjs.css.js");
var componentsPrivate_touchable_hitArea_cjs_js = require("../touchable/hitArea.cjs.js");
var componentsPrivate_touchable_debugTouchable_cjs_js = require("../touchable/debugTouchable.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/private/InlineField/InlineField.css.ts", "braid-monorepo");
const sizes = {
  standard: "standard",
  small: "small"
};
const root = css.style({
  ":hover": {
    zIndex: 1
  }
}, "root");
const realField = css.style({
  width: componentsPrivate_touchable_hitArea_cjs_js.hitArea,
  height: componentsPrivate_touchable_hitArea_cjs_js.hitArea,
  selectors: __spreadValues({}, componentsPrivate_touchable_debugTouchable_cjs_js.debugTouchable())
}, "realField");
const realFieldPosition = css.styleVariants(sizes, (size) => {
  const offset = cssUtils.calc(componentsPrivate_touchable_hitArea_cjs_js.hitArea).subtract(themesVars_cjs_css_js.vars.inlineFieldSize[size]).divide(2).negate().toString();
  return {
    top: offset,
    left: offset
  };
}, "realFieldPosition");
const fakeField = css.style({}, "fakeField");
const fakeFieldSize = css.styleVariants(sizes, (size) => ({
  height: themesVars_cjs_css_js.vars.inlineFieldSize[size],
  width: themesVars_cjs_css_js.vars.inlineFieldSize[size]
}), "fakeFieldSize");
const badgeOffset = css.styleVariants(sizes, (size) => {
  const offset = cssUtils.calc(themesVars_cjs_css_js.vars.inlineFieldSize[size]).subtract(themesVars_cjs_css_js.vars.textSize.xsmall.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: offset,
    paddingBottom: offset
  };
}, "badgeOffset");
const labelOffset = css.styleVariants(sizes, (size) => ({
  paddingTop: cssUtils.calc(themesVars_cjs_css_js.vars.inlineFieldSize[size]).subtract(themesVars_cjs_css_js.vars.textSize[size].mobile.capHeight).divide(2).toString()
}), "labelOffset");
const isMixed = css.style({}, "isMixed");
const children = css.style({
  selectors: {
    [`${realField}:checked ~ * &,
      ${realField}${isMixed} ~ * &`]: {
      display: "block"
    }
  }
}, "children");
const selected = css.style({
  selectors: {
    [`${realField}:checked + ${fakeField} > &,
      ${realField}${isMixed} + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "selected");
const focusOverlay = css.style({
  selectors: {
    [`${realField}:focus + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = css.style({
  selectors: {
    [`${realField}:hover:not(:checked):not(${isMixed}):not(:disabled) + ${fakeField} > &,
      ${realField}:focus:not(${isMixed}) + ${fakeField} > &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
const indicator = css.style({
  selectors: {
    [`${hoverOverlay} > &`]: {
      opacity: 0.2
    }
  }
}, "indicator");
const checkboxScale = css.style({
  transform: "scale(0.85)",
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: "scale(0.75)"
    }
  }
}, "checkboxScale");
const checkboxIndicator = [indicator, checkboxScale];
const radioScale = css.style({
  transform: "scale(0.6)",
  selectors: {
    [`${realField}:active + ${fakeField} > * > &`]: {
      transform: "scale(0.5)"
    }
  }
}, "radioScale");
const radioIndicator = [indicator, radioScale];
__vanilla_filescope____namespace.endFileScope();
exports.badgeOffset = badgeOffset;
exports.checkboxIndicator = checkboxIndicator;
exports.children = children;
exports.fakeField = fakeField;
exports.fakeFieldSize = fakeFieldSize;
exports.focusOverlay = focusOverlay;
exports.hoverOverlay = hoverOverlay;
exports.isMixed = isMixed;
exports.labelOffset = labelOffset;
exports.radioIndicator = radioIndicator;
exports.realField = realField;
exports.realFieldPosition = realFieldPosition;
exports.root = root;
exports.selected = selected;
