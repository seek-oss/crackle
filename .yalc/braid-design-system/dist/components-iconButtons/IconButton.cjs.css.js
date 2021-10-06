"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/iconButtons/IconButton.css.ts", "braid-monorepo");
const button = css.style({
  ":hover": {
    zIndex: 1
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0
    }
  }
}, "button");
const forceActive = css.style({}, "forceActive");
const darkBackground = css.style({}, "darkBackground");
const hoverOverlay = css.style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1
    },
    [`${button}:hover &${darkBackground}, ${button}:focus &${darkBackground}`]: {
      opacity: 0.2
    },
    [`${button}:active &, ${forceActive}&`]: {
      opacity: 0.8
    },
    [`${button}:active &${darkBackground}, ${forceActive}&${darkBackground}`]: {
      opacity: 0.075
    }
  }
}, "hoverOverlay");
const focusOverlay = css.style({
  selectors: {
    [`${button}:focus &`]: {
      opacity: 1
    },
    [`${button}:focus &${darkBackground}`]: {
      opacity: 0.15
    }
  }
}, "focusOverlay");
__vanilla_filescope____namespace.endFileScope();
exports.button = button;
exports.darkBackground = darkBackground;
exports.focusOverlay = focusOverlay;
exports.forceActive = forceActive;
exports.hoverOverlay = hoverOverlay;
