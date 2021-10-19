"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssResponsiveStyle_cjs_js = require("../css-responsiveStyle.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/hooks/useIcon/icon.css.ts?used", "braid-monorepo");
const size = css.style({
  width: "1em",
  height: "1em"
}, "size");
const inline = css.style({
  verticalAlign: "middle"
}, "inline");
const uppercaseNudge = -0.105;
const lowercaseNudge = uppercaseNudge + 0.04;
const verticalCorrection = 0.06;
const alignY = {
  uppercase: css.styleVariants({
    none: {
      top: `${uppercaseNudge}em`
    },
    up: {
      top: `${uppercaseNudge - verticalCorrection}em`
    },
    down: {
      top: `${uppercaseNudge + verticalCorrection}em`
    }
  }, "alignY_uppercase"),
  lowercase: css.styleVariants({
    none: {
      top: `${lowercaseNudge}em`
    },
    up: {
      top: `${lowercaseNudge - verticalCorrection}em`
    },
    down: {
      top: `${lowercaseNudge + verticalCorrection}em`
    }
  }, "alignY_lowercase")
};
const blockWidths = css.styleVariants(themesVars_cjs_css_js.vars.textSize, ({
  mobile,
  tablet
}) => cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    width: mobile.lineHeight
  },
  tablet: {
    width: tablet.lineHeight
  }
}), "blockWidths");
__vanilla_filescope____namespace.endFileScope();
exports.alignY = alignY;
exports.blockWidths = blockWidths;
exports.inline = inline;
exports.size = size;
