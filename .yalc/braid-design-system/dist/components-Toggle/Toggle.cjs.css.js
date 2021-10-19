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
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
var componentsPrivate_touchable_hitArea_cjs_js = require("../components-private/touchable/hitArea.cjs.js");
var componentsPrivate_touchable_debugTouchable_cjs_js = require("../components-private/touchable/debugTouchable.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Toggle/Toggle.css.ts?used", "braid-monorepo");
const sizes = {
  standard: "standard",
  small: "small"
};
const toggleWidthRatio = 1.6;
const root = css.style({
  ":hover": {
    zIndex: 1
  }
}, "root");
const realField = css.style({
  height: componentsPrivate_touchable_hitArea_cjs_js.hitArea,
  selectors: __spreadValues({}, componentsPrivate_touchable_debugTouchable_cjs_js.debugTouchable())
}, "realField");
const realFieldPosition = css.styleVariants(sizes, (size) => ({
  top: cssUtils.calc(componentsPrivate_touchable_hitArea_cjs_js.hitArea).subtract(themesVars_cjs_css_js.vars.inlineFieldSize[size]).divide(2).negate().toString()
}), "realFieldPosition");
const label = css.styleVariants(sizes, (size) => {
  const padding = cssUtils.calc(themesVars_cjs_css_js.vars.inlineFieldSize[size]).subtract(themesVars_cjs_css_js.vars.textSize.standard.mobile.lineHeight).divide(2).toString();
  return {
    paddingTop: padding,
    paddingBottom: padding
  };
}, "label");
const fieldSize = css.styleVariants(sizes, (size) => ({
  width: cssUtils.calc.multiply(themesVars_cjs_css_js.vars.inlineFieldSize[size], toggleWidthRatio)
}), "fieldSize");
const slideContainer = css.style({}, "slideContainer");
const slideContainerSize = css.styleVariants(sizes, (size) => ({
  height: themesVars_cjs_css_js.vars.inlineFieldSize[size]
}), "slideContainerSize");
const slideTrack = css.styleVariants(sizes, (size) => ({
  height: cssUtils.calc.subtract(themesVars_cjs_css_js.vars.inlineFieldSize[size], themesVars_cjs_css_js.vars.grid)
}), "slideTrack");
const slideTrackBackground = css.style({
  backgroundColor: themesVars_cjs_css_js.vars.borderColor.standard,
  WebkitMaskImage: "-webkit-radial-gradient(white, black)"
}, "slideTrackBackground");
const slideTrackSelected = css.style({
  selectors: {
    [`${realField}:not(:checked) + ${slideContainer} &`]: {
      transform: `translateX(${cssUtils.calc.negate(themesVars_cjs_css_js.vars.touchableSize)})`
    }
  }
}, "slideTrackSelected");
const slider = css.styleVariants(sizes, (size) => {
  const slideDistance = cssUtils.calc(themesVars_cjs_css_js.vars.inlineFieldSize[size]).multiply(toggleWidthRatio).subtract(themesVars_cjs_css_js.vars.inlineFieldSize[size]).toString();
  const anticipationRatio = 0.12;
  const anticipation = cssUtils.calc.multiply(themesVars_cjs_css_js.vars.inlineFieldSize[size], anticipationRatio);
  return {
    height: themesVars_cjs_css_js.vars.inlineFieldSize[size],
    width: themesVars_cjs_css_js.vars.inlineFieldSize[size],
    selectors: {
      [`${realField}:active + ${slideContainer} &`]: {
        transform: `translateX(${cssUtils.calc.negate(anticipation)})`
      },
      [`${realField}:checked + ${slideContainer} &`]: {
        transform: `translateX(${slideDistance})`
      },
      [`${realField}:active:checked + ${slideContainer} &`]: {
        transform: `translateX(${cssUtils.calc.add(slideDistance, anticipation)})`
      }
    }
  };
}, "slider");
const icon = css.style({
  transform: "scale(.75)",
  selectors: {
    [`${realField}:active + ${slideContainer} &`]: {
      transform: "scale(.75) rotate(-25deg)"
    },
    [`${realField}:checked + ${slideContainer} &`]: {
      opacity: 1
    },
    [`${realField}:active:checked + ${slideContainer} &`]: {
      transform: "scale(.75) rotate(6deg)"
    }
  }
}, "icon");
const focusOverlay = css.style({
  selectors: {
    [`${realField}:focus + ${slideContainer} &,
      ${realField}:active + ${slideContainer} &`]: {
      opacity: 1
    }
  }
}, "focusOverlay");
const hoverOverlay = css.style({
  selectors: {
    [`${realField}:hover:not(:disabled) + ${slideContainer} &,
      ${realField}:focus + ${slideContainer} &`]: {
      opacity: 1
    }
  }
}, "hoverOverlay");
__vanilla_filescope____namespace.endFileScope();
exports.fieldSize = fieldSize;
exports.focusOverlay = focusOverlay;
exports.hoverOverlay = hoverOverlay;
exports.icon = icon;
exports.label = label;
exports.realField = realField;
exports.realFieldPosition = realFieldPosition;
exports.root = root;
exports.slideContainer = slideContainer;
exports.slideContainerSize = slideContainerSize;
exports.slideTrack = slideTrack;
exports.slideTrackBackground = slideTrackBackground;
exports.slideTrackSelected = slideTrackSelected;
exports.slider = slider;
