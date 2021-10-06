import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { createAtomicStyles, createAtomsFn, createNormalizeValueFn, createMapValueFn } from "@vanilla-extract/sprinkles";
import { b as breakpoints, a as breakpointNames } from "../css-breakpoints.esm.js";
import { u as unresponsiveProperties, p as pseudoProperties, r as responsiveProperties } from "./atomicProperties.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/css/atoms/sprinkles.css.ts", "braid-monorepo");
const unresponsiveAtomicStyles = createAtomicStyles({
  properties: unresponsiveProperties
});
const pseudoAtomicStyles = createAtomicStyles({
  defaultCondition: false,
  conditions: {
    active: {
      selector: "&:active"
    }
  },
  properties: pseudoProperties
});
const responsiveAtomicStyles = createAtomicStyles({
  defaultCondition: "mobile",
  conditions: {
    mobile: {},
    tablet: {
      "@media": `screen and (min-width: ${breakpoints.tablet}px)`
    },
    desktop: {
      "@media": `screen and (min-width: ${breakpoints.desktop}px)`
    },
    wide: {
      "@media": `screen and (min-width: ${breakpoints.wide}px)`
    }
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    margin: ["marginBottom", "marginTop", "marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    marginX: ["marginLeft", "marginRight"]
  }
});
const sprinkles = createAtomsFn(unresponsiveAtomicStyles, responsiveAtomicStyles, pseudoAtomicStyles);
const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicStyles);
const mapResponsiveValue = createMapValueFn(responsiveAtomicStyles);
__vanilla_filescope__.endFileScope();
export { mapResponsiveValue as m, normalizeResponsiveValue as n, sprinkles as s };
