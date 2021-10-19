"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var componentsPrivate_Modal_ModalExternalGutter_cjs_js = require("./ModalExternalGutter.cjs.js");
var cssResponsiveStyle_cjs_js = require("../../css-responsiveStyle.cjs.js");
var themesVars_cjs_css_js = require("../../themes-vars.cjs.css.js");
var cssAtoms_atoms_cjs_js = require("../../css-atoms/atoms.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/private/Modal/Modal.css.ts", "braid-monorepo");
const fixedStackingContext = cssAtoms_atoms_cjs_js.atoms({
  position: "fixed",
  zIndex: "modal"
});
const resetStackingContext = cssAtoms_atoms_cjs_js.atoms({
  position: "relative",
  zIndex: 0
});
const backdrop = css.style({
  background: "rgba(0, 0, 0, .4)"
}, "backdrop");
const reducedMotion = css.style({
  "@media": {
    "screen and (prefers-reduced-motion)": {
      transform: "none !important"
    }
  }
}, "reducedMotion");
const entrance = {
  center: [reducedMotion, css.style({
    transform: "scale(.8)"
  }, "entrance_center")],
  right: [reducedMotion, css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: {
      opacity: 1,
      transform: "translateX(140%)"
    },
    tablet: {
      opacity: 0,
      transform: "translateX(40px)"
    }
  }), "entrance_right")]
};
const exit = {
  right: [reducedMotion, css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: {
      opacity: 1,
      transform: "translateX(140%)"
    },
    tablet: {
      opacity: 0,
      transform: "translateX(10px)"
    }
  }), "exit_right")]
};
const easeOut = "cubic-bezier(0.4, 0, 0, 1)";
const transition = {
  right: css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: {
      transition: `transform .3s ${easeOut}, opacity .3s ${easeOut}`
    },
    tablet: {
      transition: `transform .175s ${easeOut}, opacity .175s ${easeOut}`
    }
  }), "transition_right")
};
const modalContainer = css.style({
  maxHeight: "100vh",
  maxWidth: "100vw"
}, "modalContainer");
const pointerEventsAll = css.style({
  pointerEvents: "all"
}, "pointerEventsAll");
const maxSize = {
  center: css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: {
      maxHeight: cssUtils.calc.subtract("100vh", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[0]], 2)),
      maxWidth: cssUtils.calc.subtract("100vw", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[0]], 2))
    },
    tablet: {
      maxHeight: cssUtils.calc.subtract("100vh", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[1]], 2)),
      maxWidth: cssUtils.calc.subtract("100vw", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[1]], 2))
    },
    desktop: {
      maxHeight: cssUtils.calc.subtract("100vh", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[2]], 2)),
      maxWidth: cssUtils.calc.subtract("100vw", cssUtils.calc.multiply(themesVars_cjs_css_js.vars.space[componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter[2]], 2))
    }
  }), "maxSize_center"),
  right: css.style({
    maxHeight: "100vh"
  }, "maxSize_right")
};
const headingRoot = css.style({
  overflowWrap: "break-word"
}, "headingRoot");
const headingFocus = css.style({
  selectors: {
    [`${headingRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "headingFocus");
const closeButtonRoot = css.style({
  ":active": {
    transform: "scale(0.9)"
  }
}, "closeButtonRoot");
const closeButtonFocus = css.style({
  selectors: {
    [`${closeButtonRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "closeButtonFocus");
const closeButtonOpacity = css.style({
  opacity: 0.7,
  selectors: {
    [`${closeButtonRoot}:hover &, ${closeButtonRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "closeButtonOpacity");
const CLOSE_ICON_GUTTER_RATIO = 0.3;
const calculateIconCrop = (level, breakpoint) => {
  const size = cssUtils.calc.multiply(themesVars_cjs_css_js.vars.headingLevel[level][breakpoint].capHeight, cssUtils.calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  const offset = cssUtils.calc.divide(cssUtils.calc.multiply(size, CLOSE_ICON_GUTTER_RATIO), 2);
  const nudge = "1px";
  return {
    top: cssUtils.calc.add(cssUtils.calc.negate(offset), nudge),
    right: cssUtils.calc.subtract(cssUtils.calc.negate(offset), nudge)
  };
};
const cropIconSpace = {
  "2": css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: calculateIconCrop("2", "mobile"),
    tablet: calculateIconCrop("2", "tablet")
  }), "cropIconSpace"),
  "3": css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: calculateIconCrop("3", "mobile"),
    tablet: calculateIconCrop("3", "tablet")
  }), "cropIconSpace")
};
const negativeMarginRightXSmall = css.style({
  marginRight: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xsmall)
}, "negativeMarginRightXSmall");
const calculateCloseIconSize = (level, breakpoint) => {
  const size = cssUtils.calc.multiply(themesVars_cjs_css_js.vars.headingLevel[level][breakpoint].capHeight, cssUtils.calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  return {
    width: size,
    height: size
  };
};
const closeIcon = {
  "2": css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: calculateCloseIconSize("2", "mobile"),
    tablet: calculateCloseIconSize("2", "tablet")
  }), "closeIcon"),
  "3": css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
    mobile: calculateCloseIconSize("3", "mobile"),
    tablet: calculateCloseIconSize("3", "tablet")
  }), "closeIcon")
};
__vanilla_filescope____namespace.endFileScope();
exports.backdrop = backdrop;
exports.closeButtonFocus = closeButtonFocus;
exports.closeButtonOpacity = closeButtonOpacity;
exports.closeButtonRoot = closeButtonRoot;
exports.closeIcon = closeIcon;
exports.cropIconSpace = cropIconSpace;
exports.entrance = entrance;
exports.exit = exit;
exports.fixedStackingContext = fixedStackingContext;
exports.headingFocus = headingFocus;
exports.headingRoot = headingRoot;
exports.maxSize = maxSize;
exports.modalContainer = modalContainer;
exports.negativeMarginRightXSmall = negativeMarginRightXSmall;
exports.pointerEventsAll = pointerEventsAll;
exports.resetStackingContext = resetStackingContext;
exports.transition = transition;
