import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { e as externalGutter } from "./ModalExternalGutter.esm.js";
import { r as responsiveStyle } from "../../css-responsiveStyle.esm.js";
import { v as vars } from "../../themes-vars.esm.css.js";
import { a as atoms } from "../../css-atoms/atoms.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/private/Modal/Modal.css.ts", "braid-monorepo");
const fixedStackingContext = atoms({
  position: "fixed",
  zIndex: "modal"
});
const resetStackingContext = atoms({
  position: "relative",
  zIndex: 0
});
const backdrop = style({
  background: "rgba(0, 0, 0, .4)"
}, "backdrop");
const reducedMotion = style({
  "@media": {
    "screen and (prefers-reduced-motion)": {
      transform: "none !important"
    }
  }
}, "reducedMotion");
const entrance = {
  center: [reducedMotion, style({
    transform: "scale(.8)"
  }, "entrance_center")],
  right: [reducedMotion, style(responsiveStyle({
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
  right: [reducedMotion, style(responsiveStyle({
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
  right: style(responsiveStyle({
    mobile: {
      transition: `transform .3s ${easeOut}, opacity .3s ${easeOut}`
    },
    tablet: {
      transition: `transform .175s ${easeOut}, opacity .175s ${easeOut}`
    }
  }), "transition_right")
};
const modalContainer = style({
  maxHeight: "100vh",
  maxWidth: "100vw"
}, "modalContainer");
const pointerEventsAll = style({
  pointerEvents: "all"
}, "pointerEventsAll");
const maxSize = {
  center: style(responsiveStyle({
    mobile: {
      maxHeight: calc.subtract("100vh", calc.multiply(vars.space[externalGutter[0]], 2)),
      maxWidth: calc.subtract("100vw", calc.multiply(vars.space[externalGutter[0]], 2))
    },
    tablet: {
      maxHeight: calc.subtract("100vh", calc.multiply(vars.space[externalGutter[1]], 2)),
      maxWidth: calc.subtract("100vw", calc.multiply(vars.space[externalGutter[1]], 2))
    },
    desktop: {
      maxHeight: calc.subtract("100vh", calc.multiply(vars.space[externalGutter[2]], 2)),
      maxWidth: calc.subtract("100vw", calc.multiply(vars.space[externalGutter[2]], 2))
    }
  }), "maxSize_center"),
  right: style({
    maxHeight: "100vh"
  }, "maxSize_right")
};
const headingRoot = style({
  overflowWrap: "break-word"
}, "headingRoot");
const headingFocus = style({
  selectors: {
    [`${headingRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "headingFocus");
const closeButtonRoot = style({
  ":active": {
    transform: "scale(0.9)"
  }
}, "closeButtonRoot");
const closeButtonFocus = style({
  selectors: {
    [`${closeButtonRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "closeButtonFocus");
const closeButtonOpacity = style({
  opacity: 0.7,
  selectors: {
    [`${closeButtonRoot}:hover &, ${closeButtonRoot}:focus &`]: {
      opacity: 1
    }
  }
}, "closeButtonOpacity");
const CLOSE_ICON_GUTTER_RATIO = 0.3;
const calculateIconCrop = (level, breakpoint) => {
  const size = calc.multiply(vars.headingLevel[level][breakpoint].capHeight, calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  const offset = calc.divide(calc.multiply(size, CLOSE_ICON_GUTTER_RATIO), 2);
  const nudge = "1px";
  return {
    top: calc.add(calc.negate(offset), nudge),
    right: calc.subtract(calc.negate(offset), nudge)
  };
};
const cropIconSpace = {
  "2": style(responsiveStyle({
    mobile: calculateIconCrop("2", "mobile"),
    tablet: calculateIconCrop("2", "tablet")
  }), "cropIconSpace"),
  "3": style(responsiveStyle({
    mobile: calculateIconCrop("3", "mobile"),
    tablet: calculateIconCrop("3", "tablet")
  }), "cropIconSpace")
};
const negativeMarginRightXSmall = style({
  marginRight: calc.negate(vars.space.xsmall)
}, "negativeMarginRightXSmall");
const calculateCloseIconSize = (level, breakpoint) => {
  const size = calc.multiply(vars.headingLevel[level][breakpoint].capHeight, calc.add(1, CLOSE_ICON_GUTTER_RATIO));
  return {
    width: size,
    height: size
  };
};
const closeIcon = {
  "2": style(responsiveStyle({
    mobile: calculateCloseIconSize("2", "mobile"),
    tablet: calculateCloseIconSize("2", "tablet")
  }), "closeIcon"),
  "3": style(responsiveStyle({
    mobile: calculateCloseIconSize("3", "mobile"),
    tablet: calculateCloseIconSize("3", "tablet")
  }), "closeIcon")
};
__vanilla_filescope__.endFileScope();
export { headingFocus as a, closeButtonRoot as b, cropIconSpace as c, closeButtonFocus as d, closeButtonOpacity as e, closeIcon as f, backdrop as g, headingRoot as h, modalContainer as i, entrance as j, exit as k, fixedStackingContext as l, maxSize as m, negativeMarginRightXSmall as n, pointerEventsAll as p, resetStackingContext as r, transition as t };
