var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import assert from "assert";
import dedent from "dedent";
import React, { useEffect, createContext, useState, forwardRef, useContext, createElement, Children, useMemo, useCallback, Fragment, useRef, useReducer, createRef, cloneElement, useLayoutEffect } from "react";
import { h as hideFocusRingsDataAttribute } from "./components-private/hideFocusRings/hideFocusRingsDataAttribute.esm.js";
import { b as breakpoints, a as breakpointNames } from "./css-breakpoints.esm.js";
import { B as BraidThemeContext, u as useBraidTheme, r as renderBackgroundProvider, a as useDefaultTextProps, b as useText, t as textSize, c as useTextTone, d as useBackground, e as useBackgroundLightness, f as useWeight, g as touchableText, D as DefaultTextPropsProvider, h as BackgroundProvider$1, i as useHeading, T as TextLinkRendererContext } from "./index.chunk.esm.js";
import { createPortal } from "react-dom";
import { s as sprinkles, m as mapResponsiveValue, n as normalizeResponsiveValue } from "./css-atoms/sprinkles.esm.css.js";
import clsx from "clsx";
import "./css-reset/reset.esm.css.js";
import { a as atoms } from "./css-atoms/atoms.esm.js";
import flattenChildren from "react-keyed-flatten-children";
import { b as base, w as weight } from "./components-Divider/Divider.esm.css.js";
import { h as hiddenOnPrint } from "./components-Hidden/Hidden.esm.css.js";
import { b as base$1, w as wide$1, d as desktop$1, t as tablet$1, m as mobile$1 } from "./css-negativeMargin/negativeMarginTop.esm.css.js";
import { t as truncate } from "./components-private/Truncate/Truncate.esm.css.js";
import { w as wide, d as desktop, t as tablet, m as mobile } from "./css-negativeMargin/negativeMarginLeft.esm.css.js";
import { c as column, w as width, a as columnContent } from "./components-Column/Column.esm.css.js";
import "./css-responsiveStyle.esm.js";
import { l as lineHeightContainer } from "./css-lineHeightContainer.esm.css.js";
import { b as blockWidths, s as size, i as inline, a as alignY } from "./hooks-useIcon/icon.esm.css.js";
import { r as root, u as up, l as left, a as right } from "./components-icons/IconChevron/IconChevron.esm.css.js";
import { v as virtualTouchable$1, y as yAxisOnly } from "./components-private/touchable/virtualTouchable.esm.css.js";
import { h as hideFocusRingsClassName } from "./components-private/hideFocusRings/hideFocusRings.esm.css.js";
import { b as button, f as focusRing } from "./components-Accordion/AccordionItem.esm.css.js";
import { b as button$1, h as hoverOverlay, f as forceActive, d as darkBackground, a as focusOverlay } from "./components-iconButtons/IconButton.esm.css.js";
import { t as textAlignedToIcon } from "./css-textAlignedToIcon.esm.css.js";
import parseHighlights from "autosuggest-highlight/parse";
import { r as root$2 } from "./components-HiddenVisually/HiddenVisually.esm.css.js";
import { s as secondaryIconSpace, f as field, p as placeholderColor, i as iconSpace, v as verticalDivider, a as focusOverlay$1, h as hoverOverlay$1 } from "./components-private/Field/Field.esm.css.js";
import { RemoveScroll } from "react-remove-scroll";
import { b as backdrop, a as backdropVisible, m as menu, g as groupHeading } from "./components-Autosuggest/Autosuggest.esm.css.js";
import matchHighlights from "autosuggest-highlight/match";
import { c as constants, b as bleedY } from "./components-Badge/Badge.esm.css.js";
import { c as currentColor, s as size$1, m as minCharacterWidth, t as trimGutter } from "./components-List/List.esm.css.js";
import { r as root$3, s as standard, a as small, b as bleedY$1, i as invertedBackgrounds, f as focusOverlay$2, h as hoverOverlay$2, c as activeOverlay, d as constants$1, l as loadingDot } from "./components-ButtonRenderer/ButtonRenderer.esm.css.js";
import { t as toneKeyline } from "./components-Card/Card.esm.css.js";
import { r as realField, a as realFieldPosition, i as isMixed, f as fakeField, b as fakeFieldSize, s as selected, c as focusOverlay$3, h as hoverOverlay$3, d as checkboxIndicator, e as radioIndicator, g as root$4, l as labelOffset, j as badgeOffset, k as children } from "./components-private/InlineField/InlineField.esm.css.js";
import { m as marginAuto } from "./components-ContentBlock/ContentBlock.esm.css.js";
import FocusLock from "react-focus-lock";
import { e as externalGutter } from "./components-private/Modal/ModalExternalGutter.esm.js";
import { h as headingRoot, a as headingFocus, p as pointerEventsAll, m as maxSize, n as negativeMarginRightXSmall, c as cropIconSpace, b as closeButtonRoot, d as closeButtonFocus, e as closeButtonOpacity, f as closeIcon, r as resetStackingContext, g as backdrop$1, t as transition, i as modalContainer, j as entrance, k as exit, l as fixedStackingContext } from "./components-private/Modal/Modal.esm.css.js";
import { u as underlineAlways, a as underlineOnHoverOnly, v as visited, b as button$2, f as focusOverlay$4 } from "./components-TextLinkRenderer/TextLinkRenderer.esm.css.js";
import { f as field$1 } from "./components-Dropdown/Dropdown.esm.css.js";
import { r as rootSize, d as delay, s as size$2, c as color, a as circle } from "./components-Loader/Loader.esm.css.js";
import { m as menuItem } from "./components-MenuItem/useMenuItem.esm.css.js";
import { c as checkboxBorder, a as checkboxPadding } from "./components-MenuItemCheckbox/MenuItemCheckbox.esm.css.js";
import { r as root$5, m as menuIsClosed, b as backdrop$2 } from "./components-MenuRenderer/MenuRenderer.esm.css.js";
import { t as triggerOffset } from "./components-OverflowMenu/OverflowMenu.esm.css.js";
import isMobile$1, { isMobile } from "is-mobile";
import { n as nativeInput } from "./components-MonthPicker/MonthPicker.esm.css.js";
import { h as hover, b as background, c as current, a as currentKeyline } from "./components-Pagination/Pagination.esm.css.js";
import { s as starSpacing, t as textSpacing, a as starColor } from "./components-Rating/Rating.esm.css.js";
import { t as tab, d as divider, a as tabUnderlineHover, b as tabUnderline, h as hairlineMarginLeft, c as tabUnderlineAnimation, e as tabFocusRing, s as scroll$1, n as nowrap, m as mask, f as marginAuto$1, g as tabPanel, i as tabPanelFocusRing } from "./components-Tabs/Tabs.esm.css.js";
import { r as root$6 } from "./components-Textarea/Highlight/Highlight.esm.css.js";
import { h as highlights, f as field$2 } from "./components-Textarea/Textarea.esm.css.js";
import { s as select, f as focusOverlay$5 } from "./components-TextDropdown/TextDropdown.esm.css.js";
import { c as columnsWide, a as columnsDesktop, b as columnsTablet, d as columnsMobile } from "./components-Tiles/Tiles.esm.css.js";
import { r as root$7, a as realField$1, b as realFieldPosition$1, f as fieldSize, s as slideContainer, c as slideContainerSize, d as slideTrack, e as slideTrackBackground, g as slideTrackSelected, h as slider, i as icon, j as focusOverlay$6, k as hoverOverlay$4, l as label } from "./components-Toggle/Toggle.esm.css.js";
import { t as toast } from "./components-useToast/Toast.esm.css.js";
import { usePopperTooltip } from "react-popper-tooltip";
import { v as verticalOffsetBeforeEntrance, t as translateZ0, b as background$1, m as maxWidth, p as padding, a as arrow } from "./components-TooltipRenderer/TooltipRenderer.esm.css.js";
import { r as root$1, d as down } from "./components-icons/IconThumb/IconThumb.esm.css.js";
const TreatProvider = ({ children: children2 }) => children2;
const useTheme = () => "";
const hideFocusRings = () => document.body.setAttribute(hideFocusRingsDataAttribute, "true");
const showFocusRings = () => document.body.removeAttribute(hideFocusRingsDataAttribute);
const useHideFocusRings = (enabled = true) => {
  useEffect(() => {
    if (enabled) {
      window.addEventListener("keydown", showFocusRings);
      window.addEventListener("mousemove", hideFocusRings);
      return () => {
        window.removeEventListener("keydown", showFocusRings);
        window.removeEventListener("mousemove", hideFocusRings);
      };
    }
  }, [enabled]);
};
const BraidTestProviderContext = createContext(false);
const minWidthQuery = (breakpoint) => window.matchMedia(`(min-width: ${breakpoint}px)`);
const getCurrentBreakpoint = (tabletQuery, desktopQuery, wideQuery) => {
  if (wideQuery.matches) {
    return "wide";
  }
  if (desktopQuery.matches) {
    return "desktop";
  }
  if (tabletQuery.matches) {
    return "tablet";
  }
  return "mobile";
};
const breakpointContext = createContext(null);
function BreakpointProvider({ children: children2 }) {
  const { tablet: tablet2, desktop: desktop2, wide: wide2 } = breakpoints;
  const [state, setState] = useState(null);
  useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet2);
    const desktopQuery = minWidthQuery(desktop2);
    const wideQuery = minWidthQuery(wide2);
    const onChange = () => {
      if (!mounted) {
        return;
      }
      const newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery, wideQuery);
      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };
    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);
    wideQuery.addListener(onChange);
    onChange();
    return () => {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
      wideQuery.removeListener(onChange);
    };
  }, [tablet2, desktop2, wide2, state]);
  return /* @__PURE__ */ React.createElement(breakpointContext.Provider, {
    value: state
  }, children2);
}
const makeLinkComponent = (render) => ({ __forwardRef__: forwardRef(render) });
const DefaultLinkComponent = makeLinkComponent((props, ref) => /* @__PURE__ */ React.createElement("a", __spreadValues({
  ref
}, props)));
const LinkComponentContext = createContext(DefaultLinkComponent);
const useLinkComponent = (ref) => {
  const linkComponent = useContext(LinkComponentContext);
  assert(!ref || "__forwardRef__" in linkComponent, dedent`
      You're passing a ref to a Braid link, but your app is providing a custom link component to 'BraidProvider' that doesn't appear to support refs.

      To fix this, you need to use Braid's 'makeLinkComponent' helper function when creating your custom link component. This ensures that refs are forwarded correctly, and allows us to silence this error message.

      For more information and an example implementation, check out the documentation for 'BraidProvider': https://seek-oss.github.io/braid-design-system/components/BraidProvider
    `);
  if ("__forwardRef__" in linkComponent) {
    return linkComponent.__forwardRef__;
  }
  return linkComponent;
};
const BraidProvider = ({
  theme,
  styleBody = true,
  linkComponent,
  children: children2
}) => {
  const alreadyInBraidProvider = Boolean(useContext(BraidThemeContext));
  const inTestProvider = useContext(BraidTestProviderContext);
  const linkComponentFromContext = useContext(LinkComponentContext);
  useHideFocusRings(!(alreadyInBraidProvider || inTestProvider));
  assert(typeof navigator !== "object" || navigator.userAgent.indexOf("jsdom") === -1 || inTestProvider, `Rendering 'BraidProvider' in Jest is not supported as it expects a browser environment. Please switch to 'BraidTestProvider'. See the docs for more info: https://seek-oss.github.io/braid-design-system/components/BraidTestProvider`);
  return /* @__PURE__ */ React.createElement(BraidThemeContext.Provider, {
    value: theme
  }, /* @__PURE__ */ React.createElement(TreatProvider, {
    theme: theme.treatTheme
  }, styleBody ? /* @__PURE__ */ React.createElement("style", {
    type: "text/css"
  }, `body{margin:0;padding:0;background:${theme.background}}`) : null, /* @__PURE__ */ React.createElement("div", {
    className: theme.vanillaTheme
  }, /* @__PURE__ */ React.createElement(LinkComponentContext.Provider, {
    value: linkComponent || linkComponentFromContext
  }, alreadyInBraidProvider || inTestProvider ? children2 : /* @__PURE__ */ React.createElement(BreakpointProvider, null, children2)))));
};
const TextContext = createContext(false);
const BraidPortal = ({ children: children2, container }) => {
  const { vanillaTheme } = useBraidTheme();
  return createPortal(/* @__PURE__ */ React.createElement(TextContext.Provider, {
    value: false
  }, /* @__PURE__ */ React.createElement("div", {
    className: vanillaTheme
  }, children2)), container != null ? container : document.body);
};
const useThemeName = () => useBraidTheme().name;
const ThemeNameConsumer = ({ children: children2 }) => children2(useThemeName());
const useSpace = () => useBraidTheme().space;
const useColor = () => useBraidTheme().color;
function resolveResponsiveObject(breakpointName, value) {
  let resolvedValue = null;
  for (let i = 0; i < breakpointNames.length; i++) {
    const currentBreakpointName = breakpointNames[i];
    const valueForBreakpoint = value[currentBreakpointName];
    if (valueForBreakpoint !== void 0) {
      resolvedValue = valueForBreakpoint;
    }
    if (breakpointName === currentBreakpointName) {
      return resolvedValue;
    }
  }
  return resolvedValue;
}
const useResponsiveValue = () => {
  const breakpointName = useContext(breakpointContext);
  return function responsiveValue(value) {
    return breakpointName ? resolveResponsiveObject(breakpointName, value) : null;
  };
};
const useBreakpoint = () => {
  return useResponsiveValue()({
    mobile: "mobile",
    tablet: "tablet",
    desktop: "desktop"
  });
};
var buildDataAttributes = (data = {}) => {
  const keys = Object.keys(data);
  const dataAttributes = {};
  for (const key of keys) {
    dataAttributes[`data-${key}`] = data[key];
  }
  return dataAttributes;
};
const Box = forwardRef((_a, ref) => {
  var _b = _a, { component = "div", className } = _b, props = __objRest(_b, ["component", "className"]);
  const atomProps = {};
  const nativeProps = {};
  for (const key in props) {
    if (sprinkles.properties.has(key)) {
      atomProps[key] = props[key];
    } else {
      nativeProps[key] = props[key];
    }
  }
  const userClasses = clsx(className);
  const atomicClasses = atoms(__spreadValues({
    reset: typeof component === "string" ? component : "div"
  }, atomProps));
  const element = createElement(component, __spreadProps(__spreadValues({
    className: `${atomicClasses}${userClasses ? ` ${userClasses}` : ""}`
  }, nativeProps), {
    ref
  }));
  return renderBackgroundProvider(props.background, element);
});
Box.displayName = "Box";
const defaultWeight = "regular";
const Divider = ({ weight: weight$1 = defaultWeight }) => /* @__PURE__ */ React.createElement(Box, {
  position: "relative"
}, /* @__PURE__ */ React.createElement(Box, {
  position: "absolute",
  width: "full",
  className: [
    base,
    weight[weight$1] || weight[defaultWeight]
  ]
}));
var HeadingContext = createContext(false);
const resolveResponsiveRangeProps = (props) => {
  const { above, below } = props;
  if (!above && !below) {
    return [false, false, false, false];
  }
  const startIndex = above ? breakpointNames.indexOf(above) + 1 : 0;
  const endIndex = below ? breakpointNames.indexOf(below) - 1 : breakpointNames.length - 1;
  const range = breakpointNames.slice(startIndex, endIndex + 1);
  const includeMobile = range.indexOf("mobile") >= 0;
  const includeTablet = range.indexOf("tablet") >= 0;
  const includeDesktop = range.indexOf("desktop") >= 0;
  const includeWide = range.indexOf("wide") >= 0;
  return [includeMobile, includeTablet, includeDesktop, includeWide];
};
const optimizeResponsiveArray = (value) => {
  var _a, _b, _c, _d;
  let lastValue;
  const values = value.map((v) => {
    if (v !== lastValue && v !== null) {
      lastValue = v;
      return v;
    }
    return null;
  });
  return [
    (_a = values[0]) != null ? _a : null,
    (_b = values[1]) != null ? _b : null,
    (_c = values[2]) != null ? _c : null,
    (_d = values[3]) != null ? _d : null
  ];
};
const Hidden = ({
  children: children2,
  component,
  above,
  below,
  screen,
  print,
  inline: inlineProp,
  data
}) => {
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint$1 = Boolean(print);
  const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] = resolveResponsiveRangeProps({ above, below });
  const inline2 = inlineProp != null ? inlineProp : inText || inHeading;
  const display = inline2 ? "inline" : "block";
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    display: hiddenOnScreen ? "none" : optimizeResponsiveArray([
      hiddenOnMobile ? "none" : display,
      hiddenOnTablet ? "none" : display,
      hiddenOnDesktop ? "none" : display,
      hiddenOnWide ? "none" : display
    ]),
    className: hiddenOnPrint$1 ? hiddenOnPrint : void 0,
    component: component || (inline2 ? "span" : "div")
  }, data ? buildDataAttributes(data) : void 0), children2);
};
const alignToFlexAlignLookup = {
  left: "flexStart",
  center: "center",
  right: "flexEnd"
};
const alignToFlexAlign = (align) => align ? mapResponsiveValue(align, (value) => alignToFlexAlignLookup[value]) : void 0;
const alignYToFlexAlignLookup = {
  top: "flexStart",
  center: "center",
  bottom: "flexEnd"
};
const alignYToFlexAlign = (alignY2) => alignY2 ? mapResponsiveValue(alignY2, (value) => alignYToFlexAlignLookup[value]) : void 0;
const resolveResponsiveProp = (value, mobileAtoms, tabletAtoms, desktopAtoms, wideAtoms) => {
  var _a, _b, _c, _d;
  if (typeof value === "string" || typeof value === "number") {
    return mobileAtoms[value];
  }
  const normalized = normalizeResponsiveValue(value);
  const [mobile2, tablet2, desktop2, wide2] = optimizeResponsiveArray([
    (_a = normalized.mobile) != null ? _a : null,
    (_b = normalized.tablet) != null ? _b : null,
    (_c = normalized.desktop) != null ? _c : null,
    (_d = normalized.wide) != null ? _d : null
  ]);
  const mobileAtom = mobileAtoms[mobile2];
  const tabletAtom = tabletAtoms[tablet2];
  const desktopAtom = desktopAtoms[desktop2];
  const wideAtom = wideAtoms[wide2];
  return clsx(mobileAtom, tabletAtom, desktopAtom, wideAtom);
};
const negativeMarginLeft = (space) => clsx(resolveResponsiveProp(space, mobile, tablet, desktop, wide));
const negativeMarginTop = (space) => clsx(base$1, resolveResponsiveProp(space, mobile$1, tablet$1, desktop$1, wide$1));
const alignToDisplay = {
  left: "block",
  center: "flex",
  right: "flex"
};
const useStackItem = ({ align, space }) => __spreadValues({
  paddingTop: space
}, align === "left" ? null : {
  display: mapResponsiveValue(align, (value) => alignToDisplay[value]),
  flexDirection: "column",
  alignItems: alignToFlexAlign(align)
});
const validStackComponents = ["div", "ol", "ul"];
const extractHiddenPropsFromChild = (child) => child && typeof child === "object" && "type" in child && child.type === Hidden ? child.props : null;
const resolveHiddenProps = ({ screen, above, below }) => screen ? [true, true, true, true] : resolveResponsiveRangeProps({
  above,
  below
});
const calculateHiddenStackItemProps = (stackItemProps, [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide]) => {
  const normalizedValue = normalizeResponsiveValue(stackItemProps.display !== void 0 ? stackItemProps.display : "block");
  const {
    mobile: displayMobile = "block",
    tablet: displayTablet = displayMobile,
    desktop: displayDesktop = displayTablet,
    wide: displayWide = displayDesktop
  } = normalizedValue;
  return __spreadProps(__spreadValues({}, stackItemProps), {
    display: optimizeResponsiveArray([
      hiddenOnMobile ? "none" : displayMobile,
      hiddenOnTablet ? "none" : displayTablet,
      hiddenOnDesktop ? "none" : displayDesktop,
      hiddenOnWide ? "none" : displayWide
    ])
  });
};
const Stack = ({
  component = "div",
  children: children2,
  space = "none",
  align = "left",
  dividers = false,
  data
}) => {
  assert(validStackComponents.includes(component), `Invalid Stack component: '${component}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(", ")}]`);
  const stackItemProps = useStackItem({ space, align });
  const stackItems = flattenChildren(children2);
  const isList = component === "ol" || component === "ul";
  const stackItemComponent = isList ? "li" : "div";
  let firstItemOnMobile = null;
  let firstItemOnTablet = null;
  let firstItemOnDesktop = null;
  let firstItemOnWide = null;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component,
    className: negativeMarginTop(space)
  }, data ? buildDataAttributes(data) : void 0), Children.map(stackItems, (child, index) => {
    assert(!(typeof child === "object" && child.type === Hidden && child.props.inline !== void 0), 'The "inline" prop is invalid on Hidden elements within a Stack');
    const hiddenProps = extractHiddenPropsFromChild(child);
    const hidden = hiddenProps ? resolveHiddenProps(hiddenProps) : [false, false, false, false];
    const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] = hidden;
    const responsivelyHidden = hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop || hiddenOnWide;
    if (firstItemOnMobile === null && !hiddenOnMobile) {
      firstItemOnMobile = index;
    }
    if (firstItemOnTablet === null && !hiddenOnTablet) {
      firstItemOnTablet = index;
    }
    if (firstItemOnDesktop === null && !hiddenOnDesktop) {
      firstItemOnDesktop = index;
    }
    if (firstItemOnWide === null && !hiddenOnWide) {
      firstItemOnWide = index;
    }
    return /* @__PURE__ */ React.createElement(Box, __spreadValues({
      component: stackItemComponent,
      className: [
        hiddenProps && hiddenProps.print ? hiddenOnPrint : null
      ]
    }, responsivelyHidden ? calculateHiddenStackItemProps(stackItemProps, hidden) : stackItemProps), dividers && index > 0 ? /* @__PURE__ */ React.createElement(Box, {
      width: "full",
      paddingBottom: space,
      display: optimizeResponsiveArray([
        index === firstItemOnMobile ? "none" : "block",
        index === firstItemOnTablet ? "none" : "block",
        index === firstItemOnDesktop ? "none" : "block",
        index === firstItemOnWide ? "none" : "block"
      ])
    }, typeof dividers === "string" ? /* @__PURE__ */ React.createElement(Divider, {
      weight: dividers
    }) : /* @__PURE__ */ React.createElement(Divider, null)) : null, hiddenProps ? hiddenProps.children : child);
  }));
};
const validTones$2 = ["neutral", "secondary"];
const AccordionContext = createContext(null);
const validSpaceValues = ["medium", "large", "xlarge"];
const defaultSpaceForSize = {
  divided: {
    xsmall: "medium",
    small: "medium",
    standard: "medium",
    large: "large"
  },
  undivided: {
    xsmall: "large",
    small: "large",
    standard: "large",
    large: "large"
  }
};
const Accordion = ({
  children: children2,
  size: size2 = "large",
  tone,
  space: spaceProp,
  dividers = true,
  data
}) => {
  assert(spaceProp === void 0 || Object.values(normalizeResponsiveValue(spaceProp)).every((value) => value === void 0 || validSpaceValues.includes(value)), `To ensure adequate space for touch targets, 'space' prop values must be one of the following: ${validSpaceValues.map((x) => `"${x}"`).join(", ")}`);
  assert(tone === void 0 || validTones$2.includes(tone), `The 'tone' prop should be one of the following: ${validTones$2.map((x) => `"${x}"`).join(", ")}`);
  const contextValue = useMemo(() => ({ size: size2, tone }), [size2, tone]);
  const space = spaceProp != null ? spaceProp : defaultSpaceForSize[dividers ? "divided" : "undivided"][size2];
  return /* @__PURE__ */ React.createElement(AccordionContext.Provider, {
    value: contextValue
  }, !dividers ? /* @__PURE__ */ React.createElement(Stack, {
    space,
    data
  }, children2) : /* @__PURE__ */ React.createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(Box, {
    paddingY: space
  }, /* @__PURE__ */ React.createElement(Stack, {
    space,
    dividers: true
  }, children2)), /* @__PURE__ */ React.createElement(Divider, null)));
};
const Truncate = ({ children: children2 }) => /* @__PURE__ */ React.createElement(Box, {
  component: "span",
  display: "block",
  overflow: "hidden",
  className: truncate
}, children2);
const Text = ({
  id,
  component = "span",
  size: sizeProp,
  tone: toneProp,
  align,
  weight: weightProp,
  baseline = true,
  truncate: truncate2 = false,
  data,
  children: children2
}) => {
  assert(!useContext(TextContext), "Text components should not be nested within each other");
  const { size: size2, weight: weight2, tone } = useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
    tone: toneProp
  });
  const textStyles = useText({ weight: weight2, size: size2, baseline, tone });
  const textContextValue = useMemo(() => ({
    tone,
    size: size2,
    weight: weight2,
    baseline
  }), [tone, size2, weight2, baseline]);
  return /* @__PURE__ */ React.createElement(TextContext.Provider, {
    value: textContextValue
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    id,
    display: "block",
    component,
    textAlign: align,
    className: textStyles
  }, data ? buildDataAttributes(data) : void 0), truncate2 ? /* @__PURE__ */ React.createElement(Truncate, null, children2) : children2));
};
function invertAlignment(alignment) {
  if (alignment === "flexStart") {
    return "flexEnd";
  }
  if (alignment === "flexEnd") {
    return "flexStart";
  }
  return alignment;
}
function resolveCollapsibleAlignmentProps({
  align,
  alignY: alignY2,
  collapseBelow,
  reverse
}) {
  const [collapseMobile, collapseTablet, collapseDesktop] = resolveResponsiveRangeProps({
    below: collapseBelow
  });
  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const rowReverseWide = (collapseMobile || collapseTablet || collapseDesktop) && reverse;
  const normalizedAlign = normalizeResponsiveValue(alignToFlexAlign(align) || "flexStart");
  const {
    mobile: justifyContentMobile = "flexStart",
    tablet: justifyContentTablet = justifyContentMobile,
    desktop: justifyContentDesktop = justifyContentTablet,
    wide: justifyContentWide = justifyContentDesktop
  } = normalizedAlign;
  return {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren: (children2) => {
      const childrenArray = Children.toArray(children2);
      return !collapseMobile && !collapseTablet && reverse ? childrenArray.reverse() : childrenArray;
    },
    collapsibleAlignmentProps: {
      display: optimizeResponsiveArray([
        collapseMobile ? "block" : "flex",
        collapseTablet ? "block" : "flex",
        collapseDesktop ? "block" : "flex",
        "flex"
      ]),
      flexDirection: optimizeResponsiveArray([
        collapseMobile ? "column" : "row",
        collapseTablet ? "column" : rowReverseTablet ? "rowReverse" : "row",
        collapseDesktop ? "column" : rowReverseDesktop ? "rowReverse" : "row",
        rowReverseWide ? "rowReverse" : "row"
      ]),
      justifyContent: align ? optimizeResponsiveArray([
        justifyContentMobile,
        rowReverseTablet ? invertAlignment(justifyContentTablet) : justifyContentTablet,
        rowReverseDesktop ? invertAlignment(justifyContentDesktop) : justifyContentDesktop,
        rowReverseWide ? invertAlignment(justifyContentWide) : justifyContentWide
      ]) : void 0,
      alignItems: alignY2 ? alignYToFlexAlign(alignY2) : void 0
    },
    collapsibleAlignmentChildProps: {
      display: optimizeResponsiveArray([
        collapseMobile && justifyContentMobile !== "flexStart" ? "flex" : "block",
        collapseTablet && justifyContentTablet !== "flexStart" ? "flex" : "block",
        collapseDesktop && justifyContentDesktop !== "flexStart" ? "flex" : "block",
        "block"
      ]),
      justifyContent: optimizeResponsiveArray([
        justifyContentMobile,
        justifyContentTablet,
        justifyContentDesktop,
        justifyContentWide
      ])
    }
  };
}
const ColumnsContext = createContext({
  collapseMobile: false,
  collapseTablet: false,
  collapseDesktop: false,
  mobileSpace: "none",
  tabletSpace: "none",
  desktopSpace: "none",
  wideSpace: "none",
  collapsibleAlignmentChildProps: null
});
const Columns = ({
  children: children2,
  collapseBelow,
  reverse = false,
  space = "none",
  align,
  alignY: alignY2,
  data
}) => {
  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = "none",
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace
  } = normalizedSpace;
  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY: alignY2,
    reverse
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, collapsibleAlignmentProps), {
    className: negativeMarginLeft({
      mobile: collapseMobile ? "none" : mobileSpace,
      tablet: collapseTablet ? "none" : tabletSpace,
      desktop: collapseDesktop ? "none" : desktopSpace,
      wide: wideSpace
    })
  }), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(ColumnsContext.Provider, {
    value: {
      collapseMobile,
      collapseTablet,
      collapseDesktop,
      mobileSpace,
      tabletSpace,
      desktopSpace,
      wideSpace,
      collapsibleAlignmentChildProps
    }
  }, orderChildren(children2)));
};
const Column = ({ children: children2, data, width: width$1 }) => {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
    collapsibleAlignmentChildProps
  } = useContext(ColumnsContext);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    minWidth: 0,
    width: width$1 !== "content" ? "full" : void 0,
    flexShrink: width$1 === "content" ? 0 : void 0,
    className: [
      column,
      width$1 !== "content" ? width[width$1] : null
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    paddingLeft: optimizeResponsiveArray([
      collapseMobile ? "none" : mobileSpace,
      collapseTablet ? "none" : tabletSpace,
      collapseDesktop ? "none" : desktopSpace,
      wideSpace
    ]),
    paddingTop: collapseMobile || collapseTablet || collapseDesktop ? optimizeResponsiveArray([
      collapseMobile ? mobileSpace : "none",
      collapseTablet ? tabletSpace : "none",
      collapseDesktop ? desktopSpace : "none",
      "none"
    ]) : void 0,
    height: "full"
  }, collapsibleAlignmentChildProps), {
    className: columnContent
  }), children2));
};
const iconSize = ({ size: size$12 = "standard" } = {}) => clsx(size, textSize(size$12));
const iconContainerSize = (size2 = "standard") => clsx(blockWidths[size2], lineHeightContainer[size2]);
const detaultVerticalCorrection = {
  uppercase: "none",
  lowercase: "none"
};
var useIcon = (_c, { verticalCorrection = detaultVerticalCorrection } = {}) => {
  var _d = _c, { size: size$12, tone, alignY: alignY$1, data } = _d, titleProps = __objRest(_d, ["size", "tone", "alignY", "data"]);
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone = textContext && textContext.tone ? textContext.tone : "neutral";
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
  const a11yProps = titleProps.title ? __spreadProps(__spreadValues({}, titleProps), { role: "img" }) : { "aria-hidden": true };
  assert(!(size$12 && isInline), `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${textContext ? "Text" : "Heading"}>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`);
  assert(!(alignY$1 && !isInline), `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`);
  if (size$12 === "fill") {
    return __spreadValues(__spreadValues({
      width: "full",
      height: "full",
      display: "block",
      className: resolvedTone
    }, data ? buildDataAttributes(data) : void 0), a11yProps);
  }
  return __spreadValues(__spreadValues({
    display: isInline ? "inlineBlock" : "block",
    position: isInline ? "relative" : void 0,
    className: [
      resolvedTone,
      isInline ? [
        size,
        inline,
        alignY[alignY$1 || "uppercase"][verticalCorrection[alignY$1 || "uppercase"]]
      ] : iconContainerSize(size$12)
    ]
  }, data ? buildDataAttributes(data) : void 0), a11yProps);
};
const IconAddSvg = (_e) => {
  var _f = _e, { title, titleId } = _f, props = __objRest(_f, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M18 11h-5V6c0-.6-.4-1-1-1s-1 .4-1 1v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1v-5h5c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconAdd = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconAddSvg
  }, iconProps));
};
const IconBookmarkSvg = (_g) => {
  var _h = _g, { title, titleId } = _h, props = __objRest(_h, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 5.1c.1-1.6-1.1-2.9-2.7-3.1H7.6C6.1 2.1 4.9 3.5 5 5v16c0 .4.2.7.5.9.3.2.7.2 1 0l5.4-3.6 5.4 3.6c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9l.1-16zm-2 14-4.4-3c-.3-.2-.8-.2-1.1 0l-4.4 3L7 4.9c0-.4.3-.9.7-.9h8.5c.5 0 .8.5.8 1v14.1z"
  }));
};
const IconBookmarkActiveSvg = (_i) => {
  var _j = _i, {
    title,
    titleId
  } = _j, props = __objRest(_j, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 5.1c.1-1.6-1.1-2.9-2.7-3.1H7.6C6.1 2.1 4.9 3.5 5 5v16c0 .4.2.7.5.9.3.2.7.2 1 0l5.4-3.6 5.4 3.6c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9l.1-16z"
  }));
};
const IconBookmark = (_k) => {
  var _l = _k, {
    active = false
  } = _l, props = __objRest(_l, [
    "active"
  ]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: active ? IconBookmarkActiveSvg : IconBookmarkSvg
  }, iconProps));
};
const IconCautionSvg = (_m) => {
  var _n = _m, { title, titleId } = _n, props = __objRest(_n, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M22.71 17.262 14.738 3.71A3.183 3.183 0 0 0 12 2.013 3.183 3.183 0 0 0 9.262 3.71L1.29 17.262a3.152 3.152 0 0 0-.14 3.225A3.152 3.152 0 0 0 4 22h16a3.023 3.023 0 0 0 2.71-4.738zM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0 1 12 4.013a1.232 1.232 0 0 1 1.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.978 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
  }));
};
const IconCaution = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconCautionSvg
  }, iconProps));
};
const IconChevronSvg = (_o) => {
  var _p = _o, { title, titleId } = _p, props = __objRest(_p, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.7 7.3c-.4-.4-1-.4-1.4 0L12 14.6 4.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8 8c.2.2.5.3.7.3s.5-.1.7-.3l8-8c.4-.4.4-1 0-1.4z"
  }));
};
const IconChevron = (_q) => {
  var _r = _q, {
    direction = "down"
  } = _r, props = __objRest(_r, [
    "direction"
  ]);
  const _a = useIcon(props), { className } = _a, iconProps = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconChevronSvg,
    className: [
      root,
      className,
      {
        [up]: direction === "up",
        [left]: direction === "left",
        [right]: direction === "right"
      }
    ]
  }, iconProps));
};
const IconClearSvg = (_s) => {
  var _t = _s, { title, titleId } = _t, props = __objRest(_t, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m13.4 12 5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
  }));
};
const IconClear = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconClearSvg
  }, iconProps));
};
const IconCompanySvg = (_u) => {
  var _v = _u, { title, titleId } = _v, props = __objRest(_v, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 2.2V2c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v.2C5.9 2.6 5 3.7 5 5v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5c0-1.3-.9-2.4-2-2.8zM17 20h-3v-2h-4v2H7V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v15z"
  }));
};
const IconCompany = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconCompanySvg
  }, iconProps));
};
const IconComposeSvg = (_w) => {
  var _x = _w, { title, titleId } = _x, props = __objRest(_x, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m22.3 1.9-.2-.2C20.9.5 19 .5 17.9 1.7l-7.6 7.6c-.1.1-.2.3-.3.5l-1 4c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l4-1c.2 0 .3-.1.5-.3l7.6-7.6c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1zm-8.8 10.2-2.1.5.5-2.1L17 5.4 18.6 7l-5.1 5.1zm7.4-7.4-.9.9L18.4 4l.9-.9c.4-.4 1-.4 1.4 0l.2.2c.2.2.3.4.3.7s-.1.5-.3.7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 11c-.6 0-1 .4-1 1v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.6 0 1-.4 1-1s-.4-1-1-1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-6c0-.6-.4-1-1-1z"
  }));
};
const IconCompose = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconComposeSvg
  }, iconProps));
};
const IconCopySvg = (_y) => {
  var _z = _y, { title, titleId } = _z, props = __objRest(_z, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M14 7H6c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 2h-8C9.3 2 8 3.3 8 5h2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1v2c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z"
  }));
};
const IconCopy = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconCopySvg
  }, iconProps));
};
const IconCreditCardSvg = (_A) => {
  var _B = _A, { title, titleId } = _B, props = __objRest(_B, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20 4H4C2.3 4 1 5.3 1 7v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM3 7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v1H3V7zm18 10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-7h18v7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 16h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"
  }));
};
const IconCreditCard = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconCreditCardSvg
  }, iconProps));
};
const IconCriticalSvg = (_C) => {
  var _D = _C, { title, titleId } = _D, props = __objRest(_D, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 14c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1z"
  }));
};
const IconCritical = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconCriticalSvg
  }, iconProps));
};
const IconDateSvg = (_E) => {
  var _F = _E, { title, titleId } = _F, props = __objRest(_F, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM4 7c0-.6.4-1 1-1h2v1c0 .6.4 1 1 1s1-.4 1-1V6h6v1c0 .6.4 1 1 1s1-.4 1-1V6h2c.6 0 1 .4 1 1v3H4V7zm16 12c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7h16v7z"
  }));
};
const IconDate = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDateSvg
  }, iconProps));
};
const IconDeleteSvg = (_G) => {
  var _H = _G, { title, titleId } = _H, props = __objRest(_H, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M10 17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1zm4 0c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 4h-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H4c-.6 0-1 .4-1 1s.4 1 1 1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V6c.6 0 1-.4 1-1s-.4-1-1-1zM10 3h4v1h-4V3zm8 16c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V6h12v13z"
  }));
};
const IconDelete = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDeleteSvg
  }, iconProps));
};
const IconDesktopSvg = (_I) => {
  var _J = _I, { title, titleId } = _J, props = __objRest(_J, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19.2 2H4.8A2.908 2.908 0 0 0 2 5v10a2.908 2.908 0 0 0 2.8 3H11v2.005H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3V18h6.2a2.908 2.908 0 0 0 2.8-3V5a2.908 2.908 0 0 0-2.8-3zm.8 13a.93.93 0 0 1-.8 1H4.8a.93.93 0 0 1-.8-1V5a.93.93 0 0 1 .8-1h14.4a.93.93 0 0 1 .8 1z"
  }));
};
const IconDesktop = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDesktopSvg
  }, iconProps));
};
const IconDocumentSvg = (_K) => {
  var _L = _K, { title, titleId } = _L, props = __objRest(_L, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m19.5 6.7-3.6-3.2-1.2-1.2c-.2-.2-.4-.3-.7-.3H5.8C4.8 2 4 3.1 4 4.5V20c-.1 1 .7 1.9 1.7 2H18c1 .1 1.9-.7 2-1.7V8c0-.5-.2-1-.5-1.3zM15 5.4 16.6 7H15V5.4zM7 20c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6v4c0 .6.4 1 1 1h4v10c0 .6-.4 1-1 1H7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 11H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconDocument = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDocumentSvg
  }, iconProps));
};
const IconDocumentBrokenSvg = (_M) => {
  var _N = _M, {
    title,
    titleId
  } = _N, props = __objRest(_N, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M15 5.414V7h1.586L15 5.414z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m19.707 7.293-5-5A1 1 0 0 0 14 2H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h5v-2H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6v4a1 1 0 0 0 1 1h4v5h2V8a1 1 0 0 0-.293-.707zM15 7V5.414L16.586 7z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.707 16.293a1 1 0 0 0-1.414 0L17 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L15.586 19l-1.293 1.293a1 1 0 1 0 1.414 1.414L17 20.414l1.293 1.293a1 1 0 0 0 1.414-1.414L18.414 19l1.293-1.293a1 1 0 0 0 0-1.414z"
  }));
};
const IconDocumentBroken = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDocumentBrokenSvg
  }, iconProps));
};
const IconDownloadSvg = (_O) => {
  var _P = _O, { title, titleId } = _P, props = __objRest(_P, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 16c-.6 0-1 .4-1 1v1c0 .6-.5 1-1.1 1H7.1c-.6 0-1-.5-1.1-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.7 1.4 3 3 3h9.9c1.7 0 3.1-1.3 3.1-3v-1c0-.6-.4-1-1-1zm-7.7-1.3c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 11.6V4c0-.6-.4-1-1-1s-1 .4-1 1v7.6L7.7 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5z"
  }));
};
const IconDownload = (props) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: "none",
      lowercase: "up"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconDownloadSvg
  }, iconProps));
};
const IconEditSvg = (_Q) => {
  var _R = _Q, { title, titleId } = _R, props = __objRest(_R, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.7 4.1c-1.4-1.4-4-1.4-5.4 0l-11 11c-.1.1-.2.3-.3.5l-1 5c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l5-1c.2 0 .4-.1.5-.3l11-11c1.5-1.5 1.5-3.9 0-5.4zM8.5 18.9l-3.2.6.6-3.2 8.6-8.6 2.6 2.6-8.6 8.6zM19.3 8.1l-.8.8-2.6-2.6.8-.8c.7-.7 1.9-.7 2.6 0 .7.7.7 1.9 0 2.6z"
  }));
};
const IconEdit = (props) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: "none",
      lowercase: "up"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconEditSvg
  }, iconProps));
};
const IconEducationSvg = (_S) => {
  var _T = _S, { title, titleId } = _T, props = __objRest(_T, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM7 4h11v12H7c-.4 0-.7.1-1 .2V5c0-.6.4-1 1-1zm11 16H7c-.6 0-1-.4-1-1s.4-1 1-1h11v2z"
  }));
};
const IconEducation = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconEducationSvg
  }, iconProps));
};
const IconFilterSvg = (_U) => {
  var _V = _U, { title, titleId } = _V, props = __objRest(_V, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M6 9.2V5c0-.6-.4-1-1-1s-1 .4-1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1v-4.2c1.2-.4 2-1.5 2-2.8 0-1.3-.8-2.4-2-2.8zM5 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 1.2V5c0-.6-.4-1-1-1s-1 .4-1 1v9.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.9-2.4-2-2.8zM12 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM22 7c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1V9.8c1.1-.4 2-1.5 2-2.8zm-3 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
  }));
};
const IconFilter = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconFilterSvg
  }, iconProps));
};
const IconFlagSvg = (_W) => {
  var _X = _W, { title, titleId } = _X, props = __objRest(_X, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19.41 2.967a1.031 1.031 0 0 0-1.08.148 4.778 4.778 0 0 1-2.83.599 8.47 8.47 0 0 1-3.135-.788A10.177 10.177 0 0 0 8.5 2c-2.887 0-4.005.952-4.2 1.144a1 1 0 0 0-.3.713V21a1 1 0 0 0 2 0v-6.298a6.167 6.167 0 0 1 2.5-.416 8.47 8.47 0 0 1 3.135.788A10.177 10.177 0 0 0 15.5 16c2.887 0 4.005-.952 4.2-1.144a1 1 0 0 0 .3-.713V3.857a.996.996 0 0 0-.59-.89zM18 13.584a6.174 6.174 0 0 1-2.5.416 8.47 8.47 0 0 1-3.135-.788 10.178 10.178 0 0 0-3.865-.926 9.467 9.467 0 0 0-2.5.298V4.416A6.174 6.174 0 0 1 8.5 4a8.47 8.47 0 0 1 3.135.788 10.178 10.178 0 0 0 3.865.926 9.467 9.467 0 0 0 2.5-.298z"
  }));
};
const IconFlag = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconFlagSvg
  }, iconProps));
};
const IconGridSvg = (_Y) => {
  var _Z = _Y, { title, titleId } = _Z, props = __objRest(_Z, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M8 3H6C4.3 3 3 4.3 3 6v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5H6c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm9-15h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z"
  }));
};
const IconGrid = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconGridSvg
  }, iconProps));
};
const IconHeartSvg = (__) => {
  var _$ = __, { title, titleId } = _$, props = __objRest(_$, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M15.7 4c-.1 0-.1 0 0 0-1.4 0-2.7.5-3.7 1.3C11 4.5 9.7 4 8.4 4 5.5 4 3 6.3 3 9.3c0 4 5 8.9 8.6 10.6.1.1.3.1.4.1s.3 0 .4-.1C16 18.2 21 13.3 21 9.3c0-3-2.4-5.3-5.3-5.3zM12 17.9c-3-1.6-7-5.7-7-8.6C5 7.5 6.5 6 8.4 6h.1c1.1 0 2.1.5 2.8 1.4.4.5 1.2.5 1.6 0 .6-.9 1.6-1.4 2.7-1.4C17.5 6 19 7.5 19 9.3c0 2.9-4 7-7 8.6z"
  }));
};
const IconHeartActiveSvg = (_aa) => {
  var _ba = _aa, { title, titleId } = _ba, props = __objRest(_ba, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M15.7 4c-.1 0-.1 0 0 0-1.4 0-2.7.5-3.7 1.3C11 4.5 9.7 4 8.4 4 5.5 4 3 6.3 3 9.3c0 4 5 8.9 8.6 10.6.1.1.3.1.4.1s.3 0 .4-.1C16 18.2 21 13.3 21 9.3c0-3-2.4-5.3-5.3-5.3z"
  }));
};
const IconHeart = (_ca) => {
  var _da = _ca, { active = false } = _da, props = __objRest(_da, ["active"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: active ? IconHeartActiveSvg : IconHeartSvg
  }, iconProps));
};
const IconHelpSvg = (_ea) => {
  var _fa = _ea, { title, titleId } = _fa, props = __objRest(_fa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.7 16.3c-.4-.4-1.1-.4-1.4 0-.1.1-.2.2-.2.3 0 .1-.1.2-.1.4 0 .3.1.5.3.7.2.2.4.3.7.3s.5-.1.7-.3c.1-.1.2-.2.2-.3 0-.1.1-.2.1-.4s0-.3-.1-.4c0-.1-.1-.2-.2-.3zm.6-10.1c-2-.7-4.3.4-5.1 2.5-.2.5.1 1 .6 1.2.5.2 1.1-.1 1.3-.6.4-1 1.5-1.6 2.6-1.2.8.3 1.3 1 1.3 1.9 0 .5-.3.7-1.3 1.2-.7.3-1.7.8-1.7 1.8 0 .6.4 1 1 1 .5 0 .9-.3 1-.7.1-.1.4-.2.6-.3.9-.4 2.5-1.2 2.5-3-.1-1.7-1.2-3.2-2.8-3.8z"
  }));
};
const IconHelp = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconHelpSvg
  }, iconProps));
};
const IconHistorySvg = (_ga) => {
  var _ha = _ga, { title, titleId } = _ha, props = __objRest(_ha, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 6c-.6 0-1 .4-1 1v5c0 .4.2.7.6.9l4 2c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.5 0-1.1-.4-1.3L13 11.4V7c0-.6-.4-1-1-1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.1 4.9C15.2 1 8.8 1 4.9 4.9 3.3 6.6 2.3 8.7 2 11H1c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l2 2c.2.2.4.3.7.3s.5-.1.7-.3l2-2c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-.9c.2-1.8 1-3.4 2.3-4.7 3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c1.9 2 4.4 3 7 3 2.6 0 5.1-1 7.1-2.9 3.9-3.9 3.9-10.3 0-14.2z"
  }));
};
const IconHistory = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconHistorySvg
  }, iconProps));
};
const IconHomeSvg = (_ia) => {
  var _ja = _ia, { title, titleId } = _ja, props = __objRest(_ja, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m20.7 9.2-8-7c-.4-.3-.9-.3-1.3 0l-8 7c-.3.2-.4.5-.4.8v11c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V10c0-.3-.1-.6-.3-.8zM19 20h-5v-4c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v4H5v-9.5l7-6.1 7 6.1V20z"
  }));
};
const IconHome = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconHomeSvg
  }, iconProps));
};
const IconImageSvg = (_ka) => {
  var _la = _ka, { title, titleId } = _la, props = __objRest(_la, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7.6L17.4 10c-.8-.8-2.1-.8-2.8 0l-9.9 9.9c-.4-.1-.7-.5-.7-.9V5zm15 15H7.4l8.6-8.6 4 4V19c0 .6-.4 1-1 1z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 2
  }));
};
const IconImage = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconImageSvg
  }, iconProps));
};
const IconInfoSvg = (_ma) => {
  var _na = _ma, { title, titleId } = _na, props = __objRest(_na, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"
  }));
};
const IconInfo = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconInfoSvg
  }, iconProps));
};
const IconInvoiceSvg = (_oa) => {
  var _pa = _oa, { title, titleId } = _pa, props = __objRest(_pa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20 2H4c-.6 0-1 .4-1 1v18c0 .3.2.7.5.9.3.2.7.2 1 0l1.5-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c-.2.1-.1.1.1.1s.4 0 .5-.1c.3-.2.5-.5.5-.9V3c0-.6-.4-1-1-1zm-1 17.4-.6-.3c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.1-.1-.2-.1-.4-.1s-.3 0-.4.1l-1.6.8-1.6-.8c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.3-.1-.6-.1-.9 0l-.5.3V4h14v15.4z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 12h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm0-4h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm8 6h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconInvoice = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconInvoiceSvg
  }, iconProps));
};
const IconLanguageSvg = (_qa) => {
  var _ra = _qa, { title, titleId } = _ra, props = __objRest(_ra, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.784 18.593a10.917 10.917 0 0 0 0-13.186.995.995 0 0 0-.094-.126 10.96 10.96 0 0 0-17.38 0 .99.99 0 0 0-.094.126 10.917 10.917 0 0 0 0 13.186.988.988 0 0 0 .094.126 10.96 10.96 0 0 0 17.38 0 .993.993 0 0 0 .094-.126zM4.522 7h2.922a14.936 14.936 0 0 0-.902 4H3.06a8.942 8.942 0 0 1 1.463-4zm12.936 4a14.936 14.936 0 0 0-.902-4h2.922a8.942 8.942 0 0 1 1.463 4zM4.522 17a8.942 8.942 0 0 1-1.463-4h3.483a14.936 14.936 0 0 0 .902 4zm4.028-4h6.9a13.453 13.453 0 0 1-1.058 4H9.608a13.453 13.453 0 0 1-1.058-4zm0-2a13.453 13.453 0 0 1 1.058-4h4.784a13.453 13.453 0 0 1 1.058 4zm7.12-6a20.175 20.175 0 0 0-.882-1.553A8.988 8.988 0 0 1 17.645 5zM12 3l.028.001A17.948 17.948 0 0 1 13.382 5h-2.764a17.948 17.948 0 0 1 1.354-1.999zM8.33 5H6.355a8.988 8.988 0 0 1 2.857-1.553c-.287.456-.587.977-.882 1.553zm0 14c.295.576.595 1.097.882 1.553A8.988 8.988 0 0 1 6.355 19zM12 21l-.028-.001A17.948 17.948 0 0 1 10.618 19h2.764a17.948 17.948 0 0 1-1.354 1.999zm3.67-2h1.975a8.988 8.988 0 0 1-2.857 1.553c.287-.456.587-.977.882-1.553zm.886-2a14.936 14.936 0 0 0 .902-4h3.483a8.942 8.942 0 0 1-1.463 4z"
  }));
};
const IconLanguage = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconLanguageSvg
  }, iconProps));
};
const IconLinkSvg = (_sa) => {
  var _ta = _sa, { title, titleId } = _ta, props = __objRest(_ta, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12.848 17.334a6.214 6.214 0 0 1-1.476-.2L9.44 19.066a3.188 3.188 0 1 1-4.51-4.508l2.962-2.961a3.208 3.208 0 0 1 4.509 0 1 1 0 1 0 1.414-1.414 5.205 5.205 0 0 0-6.832-.413 5.102 5.102 0 0 0-.505.413l-2.961 2.96a5.188 5.188 0 0 0 7.337 7.337l3.293-3.293a6.226 6.226 0 0 1-1.3.147z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.15 6.664a6.214 6.214 0 0 1 1.476.2l1.932-1.932a3.188 3.188 0 1 1 4.508 4.508l-2.96 2.961a3.208 3.208 0 0 1-4.51 0 1 1 0 0 0-1.413 1.414 5.205 5.205 0 0 0 6.831.413 5.101 5.101 0 0 0 .506-.413l2.96-2.96a5.188 5.188 0 0 0-7.336-7.337L9.85 6.812a6.226 6.226 0 0 1 1.298-.148z"
  }));
};
const IconLink = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconLinkSvg
  }, iconProps));
};
const IconLinkBrokenSvg = (_ua) => {
  var _va = _ua, { title, titleId } = _va, props = __objRest(_va, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12.848 17.334a6.214 6.214 0 0 1-1.476-.2L9.44 19.066a3.188 3.188 0 1 1-4.51-4.508l2.962-2.961a3.208 3.208 0 0 1 4.509 0 1 1 0 1 0 1.414-1.414 5.205 5.205 0 0 0-6.832-.413 5.102 5.102 0 0 0-.505.413l-2.961 2.96a5.188 5.188 0 0 0 7.337 7.337l3.293-3.293a6.226 6.226 0 0 1-1.3.147z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.15 6.664a6.214 6.214 0 0 1 1.476.2l1.932-1.932a3.188 3.188 0 1 1 4.508 4.508l-2.96 2.961a3.208 3.208 0 0 1-4.51 0 1 1 0 0 0-1.413 1.414 5.205 5.205 0 0 0 6.831.413 5.101 5.101 0 0 0 .506-.413l2.96-2.96a5.188 5.188 0 0 0-7.336-7.337L9.85 6.812a6.226 6.226 0 0 1 1.298-.148zm-5.736-.25a.997.997 0 0 1-.707-.293L3.293 4.707a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1-.707 1.707zM3.736 9.321a.994.994 0 0 1-.26-.034l-1.93-.517a1 1 0 0 1 .518-1.932l1.931.517a1 1 0 0 1-.258 1.966zM8.32 4.735a.999.999 0 0 1-.965-.74l-.517-1.933a1 1 0 0 1 1.932-.517l.517 1.932a1 1 0 0 1-.967 1.258z"
  }));
};
const IconLinkBroken = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconLinkBrokenSvg
  }, iconProps));
};
const IconListSvg = (_wa) => {
  var _xa = _wa, { title, titleId } = _xa, props = __objRest(_xa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M9 8h10c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm10 3H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zm0 5H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 5,
    cy: 7,
    r: 1
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 5,
    cy: 12,
    r: 1
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 5,
    cy: 17,
    r: 1
  }));
};
const IconList = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconListSvg
  }, iconProps));
};
const IconLocationSvg = (_ya) => {
  var _za = _ya, { title, titleId } = _za, props = __objRest(_za, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C7.6 1 4 4.6 4 9c0 4.1 6.5 12.6 7.2 13.6.2.2.5.4.8.4s.6-.1.8-.4c.7-1 7.2-9.5 7.2-13.6 0-4.4-3.6-8-8-8zm0 19.3c-2.2-3-6-8.8-6-11.3 0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-3.8 8.3-6 11.3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
  }));
};
const IconLocation = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconLocationSvg
  }, iconProps));
};
const IconMailSvg = (_Aa) => {
  var _Ba = _Aa, { title, titleId } = _Ba, props = __objRest(_Ba, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 6.8C21.9 5.2 20.6 4 19 4H5C3.4 4 2.1 5.2 2 6.8V17c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6.8zM5 6h14c.4 0 .7.2.9.5L12 11.8 4.1 6.5c.2-.3.5-.5.9-.5zm14 12H5c-.6 0-1-.4-1-1V8.9l7.4 5c.2.1.4.2.6.2s.4-.1.6-.2l7.4-5V17c0 .6-.4 1-1 1z"
  }));
};
const IconMail = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconMailSvg
  }, iconProps));
};
const IconMinusSvg = (_Ca) => {
  var _Da = _Ca, { title, titleId } = _Da, props = __objRest(_Da, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M18 11H6c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconMinus = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconMinusSvg
  }, iconProps));
};
const IconMobileSvg = (_Ea) => {
  var _Fa = _Ea, { title, titleId } = _Fa, props = __objRest(_Fa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12.71 16.29a1.047 1.047 0 0 0-1.42 0 1.029 1.029 0 0 0-.21.33.832.832 0 0 0-.08.38.951.951 0 0 0 .29.7.96.96 0 0 0 .71.3 1 1 0 0 0 .38-.08 1.012 1.012 0 0 0 .33-.22.955.955 0 0 0 .29-.7 1 1 0 0 0-.08-.38 1.029 1.029 0 0 0-.21-.33z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.286 2H7.714A2.761 2.761 0 0 0 5 4.8v14.4A2.761 2.761 0 0 0 7.714 22h8.572A2.761 2.761 0 0 0 19 19.2V4.8A2.761 2.761 0 0 0 16.286 2zM17 19.2a.761.761 0 0 1-.714.8H7.714A.761.761 0 0 1 7 19.2V4.8a.761.761 0 0 1 .714-.8h8.572a.761.761 0 0 1 .714.8z"
  }));
};
const IconMobile = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconMobileSvg
  }, iconProps));
};
const IconMoneySvg = (_Ga) => {
  var _Ha = _Ga, { title, titleId } = _Ha, props = __objRest(_Ha, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 15.5c0-1.6-1.3-4.3-4.9-4.5-3-.2-3.1-2.5-3.1-2.5 0-.7.3-1.3.8-1.7.6-.5 1.4-.8 2.2-.8.8 0 1.6.3 2.2.8.4.4 1.1.3 1.4-.1.4-.4.3-1.1-.1-1.4-.7-.6-1.6-1-2.5-1.2V3c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-.9.2-1.7.5-2.5 1.2C7.6 6.1 7 7.2 7 8.5c0 1.6 1.3 4.3 4.9 4.5 3 .2 3.1 2.5 3.1 2.5 0 .7-.3 1.3-.8 1.7-.6.5-1.4.8-2.2.8-.8 0-1.6-.3-2.2-.8-.4-.4-1.1-.3-1.4.1-.4.4-.3 1.1.1 1.4.7.6 1.6 1 2.5 1.2V21c0 .6.4 1 1 1s1-.4 1-1v-1.1c.9-.2 1.7-.5 2.5-1.2.9-.8 1.5-1.9 1.5-3.2z"
  }));
};
const IconMoney = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconMoneySvg
  }, iconProps));
};
const IconNewWindowSvg = (_Ia) => {
  var _Ja = _Ia, { title, titleId } = _Ja, props = __objRest(_Ja, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 11c-.6 0-1 .4-1 1v5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c.6 0 1-.4 1-1s-.4-1-1-1H7C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-5c0-.6-.4-1-1-1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M21 3v-.4l-.1-.1c0-.1-.1-.1-.1-.2 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1h-4.3c-.6 0-1 .4-1 1s.4 1 1 1H18l-6.5 7.3c-.4.4-.3 1 .1 1.4.2.2.4.3.7.3.3 0 .6-.1.7-.3l6.3-7V7c0 .6.4 1 1 1s1-.4 1-1L21 3z"
  }));
};
const IconNewWindow = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconNewWindowSvg
  }, iconProps));
};
const IconNoteSvg = (_Ka) => {
  var _La = _Ka, { title, titleId } = _La, props = __objRest(_La, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M13 11H8c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H8c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20.9 8.6c-.1-.1-.1-.2-.2-.3l-5-5c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM16 6.4 17.6 8H16V6.4zM18 19H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h8v4c0 .6.4 1 1 1h4v8c0 .6-.4 1-1 1z"
  }));
};
const IconNote = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconNoteSvg
  }, iconProps));
};
const IconNotificationSvg = (_Ma) => {
  var _Na = _Ma, { title, titleId } = _Na, props = __objRest(_Na, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20 16v-6a8.018 8.018 0 0 0-5.45-7.577 2.996 2.996 0 0 0-5.1 0A8.018 8.018 0 0 0 4 10v6a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM6 16v-6a6.008 6.008 0 0 1 4.411-5.78 1.001 1.001 0 0 0 .663-.591.996.996 0 0 1 1.852 0 1.001 1.001 0 0 0 .663.592A6.008 6.008 0 0 1 18 10v6zm6 6a2.991 2.991 0 0 0 2.816-2H9.184A2.991 2.991 0 0 0 12 22z"
  }));
};
const IconNotification = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconNotificationSvg
  }, iconProps));
};
const IconOverflowSvg = (_Oa) => {
  var _Pa = _Oa, { title, titleId } = _Pa, props = __objRest(_Pa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 4,
    r: 2
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 20,
    r: 2
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2
  }));
};
const IconOverflow = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconOverflowSvg
  }, iconProps));
};
const IconPeopleSvg = (_Qa) => {
  var _Ra = _Qa, { title, titleId } = _Ra, props = __objRest(_Ra, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M14.772 4.023c.076-.006.15-.023.228-.023a3 3 0 0 1 0 6c-.078 0-.152-.017-.228-.023a6.529 6.529 0 0 1-1.325 1.751A4.934 4.934 0 0 0 15 12a5 5 0 0 0 0-10 4.934 4.934 0 0 0-1.553.272 6.529 6.529 0 0 1 1.325 1.751zM17 14h-1.853a6.54 6.54 0 0 1 1.613 2H17a3.003 3.003 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1z"
  }));
};
const IconPeople = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPeopleSvg
  }, iconProps));
};
const IconPersonAddSvg = (_Sa) => {
  var _Ta = _Sa, { title, titleId } = _Ta, props = __objRest(_Ta, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M9 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3zm12 7h-2V9a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zm-10 3H7a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5z"
  }));
};
const IconPersonAdd = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPersonAddSvg
  }, iconProps));
};
const IconPersonVerifiedSvg = (_Ua) => {
  var _Va = _Ua, {
    title,
    titleId
  } = _Va, props = __objRest(_Va, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m20.4 4.1-8-3c-.2-.1-.5-.1-.7 0l-8 3c-.4.1-.7.5-.7.9v7c0 6.5 8.2 10.7 8.6 10.9.1.1.2.1.4.1s.3 0 .4-.1c.4-.2 8.6-4.4 8.6-10.9V5c0-.4-.3-.8-.6-.9zM19 12c0 4.5-5.4 7.9-7 8.9-1.6-.9-7-4.3-7-8.9V5.7l7-2.6 7 2.6V12z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L11 12.6l-1.3-1.3z"
  }));
};
const IconPersonVerified = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPersonVerifiedSvg
  }, iconProps));
};
const IconPhoneSvg = (_Wa) => {
  var _Xa = _Wa, { title, titleId } = _Xa, props = __objRest(_Xa, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M18.338 20.999a2.45 2.45 0 0 1-.292-.017A17.205 17.205 0 0 1 3.018 5.954a2.63 2.63 0 0 1 .655-2.047A2.723 2.723 0 0 1 5.699 3h3.29a1 1 0 0 1 .894.553l1.694 3.387a1 1 0 0 1-.062 1.002l-1.33 1.995a14.439 14.439 0 0 0 3.754 3.792l1.119-1.119a1.003 1.003 0 0 1 1.078-.221l4.235 1.694a1 1 0 0 1 .629.929V18.3a2.723 2.723 0 0 1-.907 2.026 2.641 2.641 0 0 1-1.755.672zM5.699 5a.717.717 0 0 0-.534.24.63.63 0 0 0-.161.488 15.191 15.191 0 0 0 13.268 13.268.65.65 0 0 0 .489-.161.717.717 0 0 0 .239-.534v-2.613l-2.994-1.197-1.229 1.228a.998.998 0 0 1-1.236.141 16.495 16.495 0 0 1-5.402-5.403.998.998 0 0 1 .017-1.082l1.372-2.059L8.37 5z"
  }));
};
const IconPhone = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPhoneSvg
  }, iconProps));
};
const IconPositiveSvg = (_Ya) => {
  var _Za = _Ya, { title, titleId } = _Za, props = __objRest(_Za, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.3 9.3 11 13.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"
  }));
};
const IconPositive = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPositiveSvg
  }, iconProps));
};
const IconPrintSvg = (__a) => {
  var _$a = __a, { title, titleId } = _$a, props = __objRest(_$a, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 8h-1V3c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5H5c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3zM8 4h8v4H8V4zm9 16H7v-4h10v4zm3-5c0 .6-.4 1-1 1v-1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v4z"
  }));
};
const IconPrint = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPrintSvg
  }, iconProps));
};
const IconProfileSvg = (_ab) => {
  var _bb = _ab, { title, titleId } = _bb, props = __objRest(_bb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1z"
  }));
};
const IconProfile = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconProfileSvg
  }, iconProps));
};
const IconPromoteSvg = (_cb) => {
  var _db = _cb, { title, titleId } = _db, props = __objRest(_db, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M6 10h1c.6 0 1-.4 1-1s-.4-1-1-1H6V7c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1zm5 8h-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1H7c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1zm10-7c-2.2 0-4-3.2-4-7 0-.6-.4-1-1-1s-1 .4-1 1c0 3.8-1.8 7-4 7-.6 0-1 .4-1 1s.4 1 1 1c2.2 0 4 3.2 4 7 0 .6.4 1 1 1s1-.4 1-1c0-3.8 1.8-7 4-7 .6 0 1-.4 1-1s-.4-1-1-1zm-5 4c-.6-1.3-1.3-2.3-2.2-3 .9-.7 1.7-1.7 2.2-3 .6 1.3 1.3 2.3 2.2 3-.9.7-1.6 1.7-2.2 3z"
  }));
};
const IconPromote = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconPromoteSvg
  }, iconProps));
};
const IconRecommendedSvg = (_eb) => {
  var _fb = _eb, { title, titleId } = _fb, props = __objRest(_fb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19 8c0-3.9-3.1-7-7-7S5 4.1 5 8c0 2 .8 3.8 2.2 5.1L6 21.9c-.1.4.1.8.4 1 .3.2.7.2 1.1 0l4.5-2.7 4.5 2.7c.1.1.3.1.5.1s.4-.1.5-.2c.3-.2.5-.6.4-1L16.7 13c1.5-1.2 2.3-3 2.3-5zM7 8c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm8.7 12.1-3.2-1.9c-.3-.2-.7-.2-1 0l-3.2 1.9.7-5.8c.9.4 1.9.7 3 .7s2.1-.2 3-.7l.7 5.8z"
  }));
};
const IconRecommended = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconRecommendedSvg
  }, iconProps));
};
const IconRefreshSvg = (_gb) => {
  var _hb = _gb, { title, titleId } = _hb, props = __objRest(_hb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M23.607 10.29a1 1 0 0 0-1.414 0l-.304.304A9.995 9.995 0 1 0 12 22a1 1 0 0 0 0-2 8 8 0 1 1 7.86-9.457l-.253-.253a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414z"
  }));
};
const IconRefresh = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconRefreshSvg
  }, iconProps));
};
const IconResumeSvg = (_ib) => {
  var _jb = _ib, { title, titleId } = _jb, props = __objRest(_jb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v14z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 10,
    cy: 8,
    r: 2
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 12H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconResume = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconResumeSvg
  }, iconProps));
};
const IconSearchSvg = (_kb) => {
  var _lb = _kb, { title, titleId } = _lb, props = __objRest(_lb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.7 20.3 18 16.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.1 0 4.1-.7 5.6-2l3.7 3.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.8 3.7-2 4.9-1.3 1.3-3 2-4.9 2-4 .1-7.1-3-7.1-6.9z"
  }));
};
const IconSearch = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSearchSvg
  }, iconProps));
};
const IconSecuritySvg = (_mb) => {
  var _nb = _mb, { title, titleId } = _nb, props = __objRest(_nb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M17 10V7c0-2.8-2.2-5-5-5S7 4.2 7 7v3c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v3H9V7zm9 12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6z"
  }));
};
const IconSecurity = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSecuritySvg
  }, iconProps));
};
const IconSendSvg = (_ob) => {
  var _pb = _ob, { title, titleId } = _pb, props = __objRest(_pb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M22 3c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.3-.1-.1-.2-.1-.3-.2h-.1c-.1-.1-.2-.1-.3-.1h-.3l-19 6c-.4.2-.6.5-.7.9 0 .4.1.8.5 1l7.8 4.9 4.9 7.8c.2.3.5.5.8.5h.1c.4 0 .7-.3.8-.7l6-19c.1-.2.1-.3.1-.4zm-4.6 2.2-7.5 7.5-5.5-3.4 13-4.1zm-2.7 14.4-3.4-5.5 7.5-7.5-4.1 13z"
  }));
};
const IconSend = (props) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: "none",
      lowercase: "up"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSendSvg
  }, iconProps));
};
const IconSentSvg = (_qb) => {
  var _rb = _qb, { title, titleId } = _rb, props = __objRest(_rb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M13 8.2V6.4c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6l-6.3 6.3c-.4.4-.4 1 0 1.4L9.6 19c.8.8 2 .8 2.8 0 .4-.4.6-.9.6-1.4v-1.7c2.5 0 4.9 1.3 6.1 3.6.2.3.5.5.9.5h.2c.4-.1.8-.5.8-1 0-3.3-1.7-9.5-8-10.8zM11.9 14c-.5.1-.9.5-.9 1v2.6L5.4 12 11 6.4V9c0 .5.4.9.9 1 4.1.5 5.8 3.4 6.6 5.7-1.9-1.4-4.3-2-6.6-1.7z"
  }));
};
const IconSent = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSentSvg
  }, iconProps));
};
const IconSettingsSvg = (_sb) => {
  var _tb = _sb, { title, titleId } = _tb, props = __objRest(_tb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m21.3 13.3-.2-.2c-.5-.7-.5-1.5 0-2.2l.2-.2c.6-.8.9-1.7.8-2.7-.2-2.1-2.1-3.6-4.2-3.4h-.3c-.8.1-1.6-.3-1.9-1.1l-.1-.3c-.4-.9-1.1-1.6-2-2-.9-.4-2-.4-2.9-.1-1 .4-1.7 1.1-2.1 2l-.2.4c-.3.8-1.1 1.2-1.9 1.1h-.3c-1-.1-1.9.2-2.7.7-1.6 1.3-2 3.7-.8 5.4l.2.2c.5.6.5 1.5 0 2.2l-.2.2c-.5.8-.8 1.7-.7 2.7.1 1 .6 1.9 1.4 2.6.8.6 1.8.9 2.8.8h.3c.8-.1 1.6.3 1.9 1.1l.1.3c.4.9 1.1 1.6 2 2 .5.2 1 .3 1.5.3s.9-.1 1.4-.3c1-.4 1.7-1.1 2.1-2l.1-.3c.3-.7 1.1-1.2 1.9-1.1h.3c.9.1 1.9-.2 2.7-.7.8-.6 1.4-1.5 1.5-2.5.2-1 0-2.1-.7-2.9zm-1.2 2.6c-.1.5-.3.9-.7 1.2-.4.3-.8.4-1.3.3h-.3c-1.7-.2-3.2.7-3.9 2.3l-.1.3c-.2.5-.6.8-1 1-.5.2-1 .2-1.4 0-.4-.2-.8-.5-.9-.9l-.1-.3c-.6-1.4-2-2.3-3.5-2.3h-.7c-.5.1-1-.1-1.4-.4-.4-.3-.6-.7-.7-1.2 0-.5.1-.9.3-1.3l.2-.2c1-1.4 1-3.2 0-4.5l-.2-.4c-.3-.4-.4-.9-.4-1.4.1-.5.3-.9.7-1.2.4-.2.9-.4 1.3-.3h.3c1.7.2 3.3-.7 4-2.2l.1-.3c.2-.4.6-.8 1-1 .5-.2 1-.2 1.4 0 .4.2.8.5.9.9l.1.3c.7 1.5 2.3 2.4 3.9 2.3h.3c1-.1 1.9.6 2 1.6 0 .5-.1.9-.3 1.3l-.2.2c-1 1.4-1 3.2 0 4.5l.2.2c.3.5.4 1 .4 1.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.7-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.8 2-2 2z"
  }));
};
const IconSettings = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSettingsSvg
  }, iconProps));
};
const IconShareSvg = (_ub) => {
  var _vb = _ub, { title, titleId } = _vb, props = __objRest(_vb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20.7 11.3 14.4 5c-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2v1.7C4.7 9.5 3 15.7 3 19c0 .5.3.9.8 1H4c.4 0 .7-.2.9-.5 1.2-2.2 3.6-3.6 6.1-3.6v1.7c0 .5.2 1 .6 1.4.8.8 2 .8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4zM13 17.6V15c0-.5-.4-.9-.9-1-.4-.1-.8-.1-1.2-.1-1.9 0-3.8.6-5.4 1.8.7-2.4 2.5-5.2 6.6-5.7.5-.1.9-.5.9-1V6.4l5.6 5.6-5.6 5.6z"
  }));
};
const IconShare = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconShareSvg
  }, iconProps));
};
const IconSocialFacebookSvg = (_wb) => {
  var _xb = _wb, {
    title,
    titleId
  } = _xb, props = __objRest(_xb, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M13.227 20v-7.288h2.46l.367-2.853h-2.827V8.042c0-.825.23-1.384 1.413-1.384h1.511V4.111A20.858 20.858 0 0 0 13.958 4a3.424 3.424 0 0 0-3.656 3.759v2.099H7.85v2.853h2.453V20z"
  }));
};
const IconSocialFacebook = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialFacebookSvg
  }, iconProps));
};
const IconSocialGitHubSvg = (_yb) => {
  var _zb = _yb, { title, titleId } = _zb, props = __objRest(_zb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12.006 2a10 10 0 0 0-3.16 19.489c.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341a2.648 2.648 0 0 0-1.11-1.463c-.908-.62.068-.608.068-.608a2.1 2.1 0 0 1 1.532 1.03 2.13 2.13 0 0 0 2.91.831 2.137 2.137 0 0 1 .635-1.336c-2.22-.253-4.555-1.11-4.555-4.943a3.865 3.865 0 0 1 1.03-2.683 3.597 3.597 0 0 1 .098-2.647s.84-.269 2.75 1.026a9.478 9.478 0 0 1 5.007 0c1.909-1.294 2.747-1.026 2.747-1.026a3.592 3.592 0 0 1 .1 2.647 3.859 3.859 0 0 1 1.027 2.683c0 3.842-2.338 4.687-4.566 4.935a2.387 2.387 0 0 1 .68 1.852c0 1.336-.013 2.415-.013 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 12.006 2z",
    fillRule: "evenodd"
  }));
};
const IconSocialGitHub = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialGitHubSvg
  }, iconProps));
};
const IconSocialInstagramSvg = (_Ab) => {
  var _Bb = _Ab, {
    title,
    titleId
  } = _Bb, props = __objRest(_Bb, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M12 5.441c2.136 0 2.39.009 3.233.047a4.426 4.426 0 0 1 1.485.276 2.65 2.65 0 0 1 1.518 1.518 4.427 4.427 0 0 1 .276 1.485c.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233a4.427 4.427 0 0 1-.276 1.485 2.65 2.65 0 0 1-1.518 1.518 4.427 4.427 0 0 1-1.485.276c-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047a4.427 4.427 0 0 1-1.485-.276 2.65 2.65 0 0 1-1.518-1.518 4.426 4.426 0 0 1-.276-1.485c-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233a4.426 4.426 0 0 1 .276-1.485 2.65 2.65 0 0 1 1.518-1.518 4.426 4.426 0 0 1 1.485-.276c.844-.038 1.097-.047 3.233-.047M12 4c-2.173 0-2.445.01-3.298.048a5.872 5.872 0 0 0-1.942.372 4.09 4.09 0 0 0-2.34 2.34 5.872 5.872 0 0 0-.372 1.942C4.01 9.555 4 9.827 4 12s.01 2.445.048 3.298a5.872 5.872 0 0 0 .372 1.942 4.09 4.09 0 0 0 2.34 2.34 5.872 5.872 0 0 0 1.942.372C9.555 19.99 9.827 20 12 20s2.445-.01 3.298-.048a5.872 5.872 0 0 0 1.942-.372 4.09 4.09 0 0 0 2.34-2.34 5.872 5.872 0 0 0 .372-1.942C19.99 14.445 20 14.173 20 12s-.01-2.445-.048-3.298a5.872 5.872 0 0 0-.372-1.942 4.09 4.09 0 0 0-2.34-2.34 5.872 5.872 0 0 0-1.942-.372C14.445 4.01 14.173 4 12 4z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 7.892A4.108 4.108 0 1 0 16.108 12 4.108 4.108 0 0 0 12 7.892zm0 6.775A2.667 2.667 0 1 1 14.667 12 2.667 2.667 0 0 1 12 14.667z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 16.27,
    cy: 7.73,
    r: 0.96
  }));
};
const IconSocialInstagram = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialInstagramSvg
  }, iconProps));
};
const IconSocialLinkedInSvg = (_Cb) => {
  var _Db = _Cb, {
    title,
    titleId
  } = _Db, props = __objRest(_Db, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M8.134 18.987H5.23V9.653h2.904zm-1.45-10.61a1.682 1.682 0 1 1 1.68-1.682 1.682 1.682 0 0 1-1.68 1.683zM19 18.988h-2.9v-4.54c0-1.082-.02-2.474-1.508-2.474-1.51 0-1.74 1.18-1.74 2.397v4.617H9.954V9.653h2.781v1.276h.04a3.047 3.047 0 0 1 2.745-1.508c2.937 0 3.48 1.933 3.48 4.447z"
  }));
};
const IconSocialLinkedIn = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialLinkedInSvg
  }, iconProps));
};
const IconSocialMediumSvg = (_Eb) => {
  var _Fb = _Eb, { title, titleId } = _Fb, props = __objRest(_Fb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M21 21H3V3h18zM7.295 14.365a.615.615 0 0 1-.163.53l-1.27 1.54v.204h3.601v-.203l-1.27-1.54a.638.638 0 0 1-.175-.531V9.742l3.161 6.897h.367l2.716-6.897v5.497c0 .147 0 .175-.096.271l-.977.948v.204h4.742v-.204l-.943-.925a.282.282 0 0 1-.107-.271v-6.8a.282.282 0 0 1 .107-.272l.966-.925v-.203h-3.342l-2.383 5.942-2.71-5.942H6.015v.203l1.129 1.36a.468.468 0 0 1 .152.395z"
  }));
};
const IconSocialMedium = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialMediumSvg
  }, iconProps));
};
const IconSocialTwitterSvg = (_Gb) => {
  var _Hb = _Gb, {
    title,
    titleId
  } = _Hb, props = __objRest(_Hb, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M9.403 17.689a8.117 8.117 0 0 0 8.172-8.172 7.64 7.64 0 0 0-.008-.372A5.844 5.844 0 0 0 19 7.658a5.734 5.734 0 0 1-1.65.452 2.882 2.882 0 0 0 1.263-1.589 5.756 5.756 0 0 1-1.823.698 2.875 2.875 0 0 0-4.895 2.619 8.155 8.155 0 0 1-5.92-3 2.875 2.875 0 0 0 .889 3.834 2.851 2.851 0 0 1-1.301-.36l-.001.037a2.874 2.874 0 0 0 2.304 2.816 2.868 2.868 0 0 1-1.297.05 2.876 2.876 0 0 0 2.684 1.994 5.764 5.764 0 0 1-3.568 1.23 5.847 5.847 0 0 1-.685-.04 8.132 8.132 0 0 0 4.403 1.29"
  }));
};
const IconSocialTwitter = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSocialTwitterSvg
  }, iconProps));
};
const IconStarSvg = (_Ib) => {
  var _Jb = _Ib, { title, titleId } = _Jb, props = __objRest(_Jb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.7-1.5-.7-1.8 0L8.2 7.3l-6.3 1c-.4 0-.7.3-.9.7-.1.4 0 .8.3 1l4.6 4.5-1.1 6.4c-.1.4.1.8.4 1 .2 0 .4.1.6.1.2 0 .3 0 .5-.1l5.7-3 5.7 3c.3.2.7.1 1.1-.1.3-.2.5-.6.4-1l-1.1-6.4 4.6-4.5c.3-.2.4-.6.3-.9zm-6.7 4.4c-.2.2-.3.6-.3.9l.8 4.9-4.4-2.3c-.3-.2-.6-.2-.9 0l-4.4 2.3.9-4.9c0-.3-.1-.7-.3-.9L4.1 10 9 9.3c.3 0 .6-.3.8-.5L12 4.3l2.2 4.4c.1.3.4.5.8.5l4.9.7-3.6 3.5z"
  }));
};
const IconStarActiveSvg = (_Kb) => {
  var _Lb = _Kb, { title, titleId } = _Lb, props = __objRest(_Lb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.5-.9-.7-1.4-.4-.2.1-.3.2-.4.4L8.2 7.3l-6.3 1c-.6.1-1 .6-.9 1.1 0 .2.1.4.3.6l4.6 4.5-1.1 6.4c-.1.5.3 1.1.8 1.2.2 0 .4 0 .6-.1l5.7-3 5.7 3c.5.3 1.1.1 1.3-.4.1-.2.1-.4.1-.6l-1.1-6.4 4.6-4.5c.5-.4.6-.8.5-1.1z"
  }));
};
const IconStar = (_Mb) => {
  var _Nb = _Mb, { active = false } = _Nb, props = __objRest(_Nb, ["active"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: active ? IconStarActiveSvg : IconStarSvg
  }, iconProps));
};
const IconStatisticsSvg = (_Ob) => {
  var _Pb = _Ob, { title, titleId } = _Pb, props = __objRest(_Pb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16z"
  }));
};
const IconStatistics = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconStatisticsSvg
  }, iconProps));
};
const IconSubCategorySvg = (_Qb) => {
  var _Rb = _Qb, { title, titleId } = _Rb, props = __objRest(_Rb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m18.7 14.3-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H8c-.6 0-1-.4-1-1V6c0-.6-.4-1-1-1s-1 .4-1 1v7c0 1.7 1.3 3 3 3h7.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z"
  }));
};
const IconSubCategory = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconSubCategorySvg
  }, iconProps));
};
const IconTagSvg = (_Sb) => {
  var _Tb = _Sb, { title, titleId } = _Tb, props = __objRest(_Tb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M7.4 6.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.1.1.1.2.2.3.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.1-.1-.2-.2-.3-.2z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m22.1 10.9-8.6-8.6c-.2-.2-.4-.3-.7-.3h-8c-1.7 0-3 1.3-3 3v8c0 .3.1.5.3.7l8.6 8.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l7.1-7.1.1-.1c1.2-1.2 1.2-3.1 0-4.2zm-1.3 2.7s-.1.1 0 0l-7.3 7.3c-.4.4-1 .4-1.4 0l-8.3-8.3V5c0-.6.4-1 1-1h7.6l8.3 8.3c.4.4.4.9.1 1.3z"
  }));
};
const IconTag = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconTagSvg
  }, iconProps));
};
const IconThumbSvg = (_Ub) => {
  var _Vb = _Ub, { title, titleId } = _Vb, props = __objRest(_Vb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.66 9.246A2.968 2.968 0 0 0 19.225 8H14V4.91a2.757 2.757 0 0 0-5.443-.74L7.237 9H5a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h11.559a2.996 2.996 0 0 0 2.845-2.05l2.666-8a2.967 2.967 0 0 0-.41-2.704zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13.174-8.684-2.666 8a1 1 0 0 1-.95.684H9v-9.866l1.486-5.438c.19-.704.7-.692.852-.674.155.022.662.147.663.978L12 8.999A1 1 0 0 0 13 10h6.226a1 1 0 0 1 .948 1.316z"
  }));
};
const IconThumb = (_Wb) => {
  var _Xb = _Wb, { direction = "up" } = _Xb, props = __objRest(_Xb, ["direction"]);
  const _a = useIcon(props), { className } = _a, iconProps = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconThumbSvg,
    className: [
      root$1,
      className,
      {
        [down]: direction === "down"
      }
    ]
  }, iconProps));
};
const IconTickSvg = (_Yb) => {
  var _Zb = _Yb, { title, titleId } = _Zb, props = __objRest(_Zb, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M19.7 6.3c-.4-.4-1-.4-1.4 0L9 15.6l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3l10-10c.4-.4.4-1 0-1.4z"
  }));
};
const IconTick = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconTickSvg
  }, iconProps));
};
const IconTimeSvg = (__b) => {
  var _$b = __b, { title, titleId } = _$b, props = __objRest(_$b, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M16.4 13.1 13 11.4V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .4.2.7.6.9l4 2c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.4 0-1-.5-1.3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }));
};
const IconTime = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconTimeSvg
  }, iconProps));
};
const IconUploadSvg = (_ac) => {
  var _bc = _ac, { title, titleId } = _bc, props = __objRest(_bc, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M7.7 9.7 11 6.4V14c0 .6.4 1 1 1s1-.4 1-1V6.4l3.3 3.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4s1 .4 1.4 0zM19 16c-.6 0-1 .4-1 1v1c0 .6-.5 1-1.1 1H7.1c-.6 0-1-.5-1.1-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.7 1.4 3 3 3h9.9c1.7 0 3.1-1.3 3.1-3v-1c0-.6-.4-1-1-1z"
  }));
};
const IconUpload = (props) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: "none",
      lowercase: "up"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconUploadSvg
  }, iconProps));
};
const IconVideoSvg = (_cc) => {
  var _dc = _cc, { title, titleId } = _dc, props = __objRest(_dc, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "m18.4 11.1-12-6c-.3-.1-.6-.1-.9 0-.3.2-.5.6-.5.9v12c0 .3.2.7.5.9.1.1.3.1.5.1s.3 0 .4-.1l12-6c.3-.2.6-.5.6-.9s-.2-.7-.6-.9zM7 16.4V7.6l8.8 4.4L7 16.4z"
  }));
};
const IconVideo = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconVideoSvg
  }, iconProps));
};
const IconVisibilitySvg = (_ec) => {
  var _fc = _ec, { title, titleId } = _fc, props = __objRest(_fc, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M21.912 11.59C21.791 11.32 18.867 5 12 5s-9.791 6.32-9.912 6.59a1.001 1.001 0 0 0 0 .82C2.209 12.68 5.133 19 12 19s9.791-6.32 9.912-6.59a1.001 1.001 0 0 0 0-.82zM12 17c-4.708 0-7.173-3.728-7.877-5C4.827 10.728 7.292 7 12 7c4.71 0 7.175 3.73 7.877 5-.704 1.272-3.169 5-7.877 5z"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2.5
  }));
};
const IconVisibilityHiddenSvg = (_gc) => {
  var _hc = _gc, {
    title,
    titleId
  } = _hc, props = __objRest(_hc, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M5.571 14.015A11.133 11.133 0 0 1 4.123 12C4.827 10.728 7.292 7 12 7c.192 0 .374.015.558.027l1.768-1.767A10.41 10.41 0 0 0 12 5c-6.867 0-9.791 6.32-9.912 6.59a1.001 1.001 0 0 0 0 .82 12.68 12.68 0 0 0 2.072 3.016zm16.341-2.425a12.842 12.842 0 0 0-3.64-4.448l2.435-2.435a1 1 0 0 0-1.414-1.414l-6.384 6.384-3.232 3.232-6.384 6.384a1 1 0 1 0 1.414 1.414l2.76-2.76A10.023 10.023 0 0 0 12 19c6.867 0 9.791-6.32 9.912-6.59a1.001 1.001 0 0 0 0-.82zM12 17a8.097 8.097 0 0 1-3.008-.578l2.099-2.099a2.488 2.488 0 0 0 3.232-3.232l2.515-2.515A10.792 10.792 0 0 1 19.877 12c-.704 1.272-3.169 5-7.877 5z"
  }));
};
const IconVisibility = (_ic) => {
  var _jc = _ic, { hidden } = _jc, props = __objRest(_jc, ["hidden"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg
  }, iconProps));
};
const IconWorkExperienceSvg = (_kc) => {
  var _lc = _kc, {
    title,
    titleId
  } = _lc, props = __objRest(_lc, [
    "title",
    "titleId"
  ]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M20 6h-3V5a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v1H4a3.003 3.003 0 0 0-3 3v10a3.003 3.003 0 0 0 3 3h16a3.003 3.003 0 0 0 3-3V9a3.003 3.003 0 0 0-3-3zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm6 3v12H9V8zM3 19V9a1 1 0 0 1 1-1h3v12H4a1 1 0 0 1-1-1zm18 0a1 1 0 0 1-1 1h-3V8h3a1 1 0 0 1 1 1z"
  }));
};
const IconWorkExperience = (props) => {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: "up",
      lowercase: "up"
    }
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: IconWorkExperienceSvg
  }, iconProps));
};
const useDisclosure = ({
  id,
  expanded: expandedProp,
  onToggle
}) => {
  const [expandedFallback, setExpandedFallback] = useState(false);
  const expanded = expandedProp != null ? expandedProp : expandedFallback;
  return {
    buttonProps: {
      "aria-controls": id,
      "aria-expanded": expanded,
      onClick: () => {
        const newValue = !expanded;
        if (expandedProp === void 0) {
          setExpandedFallback(newValue);
        }
        if (typeof onToggle === "function") {
          onToggle(newValue);
        }
      }
    },
    contentProps: {
      id
    },
    expanded
  };
};
function virtualTouchable({ xAxis } = { xAxis: true }) {
  return !xAxis ? [virtualTouchable$1, yAxisOnly] : virtualTouchable$1;
}
const Overlay = ({
  component,
  zIndex,
  background: background2,
  borderRadius: borderRadius2,
  boxShadow,
  transition: transition2,
  visible = false,
  onlyVisibleForKeyboardNavigation = false,
  className,
  children: children2
}) => /* @__PURE__ */ React.createElement(Box, {
  component,
  position: "absolute",
  zIndex,
  pointerEvents: "none",
  background: background2,
  borderRadius: borderRadius2,
  boxShadow,
  transition: transition2,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: !visible ? 0 : void 0,
  className: [
    onlyVisibleForKeyboardNavigation ? hideFocusRingsClassName : null,
    className
  ]
}, children2);
const itemSpaceForSize = {
  xsmall: "small",
  small: "medium",
  standard: "medium",
  large: "large"
};
const AccordionItem = (_mc) => {
  var _nc = _mc, {
    id,
    label: label2,
    children: children2,
    size: sizeProp,
    tone: toneProp,
    data
  } = _nc, restProps = __objRest(_nc, [
    "id",
    "label",
    "children",
    "size",
    "tone",
    "data"
  ]);
  var _a, _b, _c, _d, _e;
  const accordionContext = useContext(AccordionContext);
  assert(!(accordionContext && sizeProp), "Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.");
  assert(!(accordionContext && toneProp), "Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.");
  assert(toneProp === void 0 || validTones$2.includes(toneProp), `The 'tone' prop should be one of the following: ${validTones$2.map((x) => `"${x}"`).join(", ")}`);
  const size2 = (_b = (_a = accordionContext == null ? void 0 : accordionContext.size) != null ? _a : sizeProp) != null ? _b : "large";
  const tone = (_d = (_c = accordionContext == null ? void 0 : accordionContext.tone) != null ? _c : toneProp) != null ? _d : "neutral";
  const weight2 = "medium";
  const itemSpace = (_e = itemSpaceForSize[size2]) != null ? _e : "none";
  assert(typeof label2 === "undefined" || typeof label2 === "string", "Label must be a string");
  const { expanded, buttonProps, contentProps } = useDisclosure(__spreadValues({
    id
  }, restProps.expanded !== void 0 ? {
    onToggle: restProps.onToggle,
    expanded: restProps.expanded
  } : {
    onToggle: restProps.onToggle
  }));
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    display: "flex"
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "button",
    cursor: "pointer",
    className: [button, virtualTouchable()],
    outline: "none",
    width: "full",
    textAlign: "left"
  }, buttonProps), /* @__PURE__ */ React.createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React.createElement(Columns, {
    space: itemSpace
  }, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Text, {
    size: size2,
    weight: weight2,
    tone,
    component: "div"
  }, label2)), /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Text, {
    size: size2,
    weight: weight2,
    tone: tone === "neutral" ? "secondary" : tone,
    component: "div"
  }, /* @__PURE__ */ React.createElement(IconChevron, {
    direction: expanded ? "up" : "down"
  })))))), /* @__PURE__ */ React.createElement(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    className: [focusRing, hideFocusRingsClassName]
  })), /* @__PURE__ */ React.createElement(Box, __spreadValues({
    paddingTop: itemSpace,
    display: expanded ? "block" : "none"
  }, contentProps), children2));
};
var ActionsContext = createContext(null);
const validInlineComponents = ["div", "ol", "ul"];
const Inline = ({
  space = "none",
  align,
  alignY: alignY2,
  collapseBelow,
  reverse,
  component = "div",
  data,
  children: children2
}) => {
  assert(validInlineComponents.includes(component), `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents.map((c) => `'${c}'`).join(", ")}]`);
  const isList = component === "ol" || component === "ul";
  const inlineItemComponent = isList ? "li" : "div";
  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    orderChildren
  } = resolveCollapsibleAlignmentProps({
    align,
    alignY: alignY2,
    collapseBelow,
    reverse
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: negativeMarginTop(space)
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component,
    className: negativeMarginLeft(space),
    flexWrap: "wrap"
  }, collapsibleAlignmentProps), Children.map(orderChildren(flattenChildren(children2)), (child) => child !== null && child !== void 0 ? /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: inlineItemComponent,
    minWidth: 0,
    marginLeft: space,
    marginTop: space
  }, collapsibleAlignmentChildProps), child) : null)));
};
const Actions = ({ size: size2, data, children: children2 }) => {
  const contextValue = useMemo(() => ({ size: size2 }), [size2]);
  return /* @__PURE__ */ React.createElement(ActionsContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React.createElement(Inline, {
    collapseBelow: "tablet",
    space: "xsmall",
    data
  }, children2));
};
const IconButton = forwardRef(({
  label: label2,
  onClick,
  onMouseDown,
  onKeyUp,
  onKeyDown,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded,
  keyboardAccessible = true,
  active = false,
  tone = "secondary",
  data,
  children: children2
}, forwardedRef) => {
  const background2 = useBackground();
  const backgroundLightness = useBackgroundLightness();
  const handleMouseDown = useCallback((event) => {
    if (typeof onMouseDown !== "function") {
      return;
    }
    if (!onClick) {
      event.preventDefault();
    }
    onMouseDown(event);
  }, [onClick, onMouseDown]);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "button",
    type: "button",
    ref: forwardedRef,
    cursor: "pointer",
    outline: "none",
    className: [button$1, virtualTouchable()],
    zIndex: 0,
    "aria-label": label2,
    "aria-haspopup": ariaHasPopUp,
    "aria-expanded": ariaExpanded,
    title: label2,
    onClick,
    onKeyUp,
    onKeyDown,
    onMouseDown: handleMouseDown,
    transform: { active: "touchable" },
    transition: "touchable",
    tabIndex: !keyboardAccessible ? -1 : void 0
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    display: "flex",
    className: iconContainerSize(),
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none"
  }, /* @__PURE__ */ React.createElement(Overlay, {
    background: background2 === "body" || background2 === "card" || background2 === "input" ? "neutralLight" : "card",
    transition: "fast",
    borderRadius: "full",
    className: [
      hoverOverlay,
      active && forceActive,
      backgroundLightness === "dark" && darkBackground
    ]
  }), keyboardAccessible ? /* @__PURE__ */ React.createElement(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    borderRadius: "full",
    className: focusOverlay,
    onlyVisibleForKeyboardNavigation: true
  }) : null, /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    className: iconSize()
  }, children2({ size: "fill", tone }))));
});
const ClearButton = forwardRef(({
  label: label2,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded,
  tone,
  data
}, forwardedRef) => /* @__PURE__ */ React.createElement(IconButton, {
  label: label2,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded,
  tone,
  ref: forwardedRef,
  data
}, (iconProps) => /* @__PURE__ */ React.createElement(IconClear, __spreadValues({}, iconProps))));
const borderRadius$6 = "large";
const backgroundForTone$1 = {
  promote: "promoteLight",
  info: "infoLight",
  positive: "positiveLight",
  caution: "cautionLight",
  critical: "criticalLight"
};
const borderForTone = {
  promote: "borderPromoteLight",
  info: "borderInfoLight",
  positive: "borderPositiveLight",
  caution: "borderCautionLight",
  critical: "borderCriticalLight"
};
const icons$1 = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  caution: IconCaution,
  critical: IconCritical
};
const highlightBarSize = "xxsmall";
const Alert = ({
  tone = "info",
  children: children2,
  id,
  closeLabel = "Close",
  data,
  onClose
}) => {
  const parentBackground = useBackground();
  const Icon2 = icons$1[tone];
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    id,
    background: backgroundForTone$1[tone],
    padding: "medium",
    borderRadius: borderRadius$6,
    position: "relative",
    overflow: "hidden",
    role: "alert",
    "aria-live": "polite"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    paddingLeft: highlightBarSize
  }, /* @__PURE__ */ React.createElement(Columns, {
    space: "small"
  }, /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Icon2, {
    tone
  })), /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Box, {
    className: textAlignedToIcon.standard
  }, children2)), onClose ? /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(ClearButton, {
    tone: "neutral",
    label: closeLabel,
    onClick: onClose
  })) : null)), parentBackground !== "card" && /* @__PURE__ */ React.createElement(Overlay, {
    borderRadius: borderRadius$6,
    boxShadow: borderForTone[tone],
    visible: true
  }), /* @__PURE__ */ React.createElement(Box, {
    background: tone,
    paddingLeft: highlightBarSize,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0
  }));
};
const Strong = ({ children: children2, data, id }) => /* @__PURE__ */ React.createElement("strong", __spreadValues({
  className: useWeight("strong"),
  id
}, data ? buildDataAttributes(data) : void 0), children2);
const HiddenVisually = ({ id, data, children: children2 }) => {
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));
  const component = inText || inHeading ? "span" : "div";
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component,
    id,
    position: "absolute",
    overflow: "hidden",
    className: root$2
  }, data ? buildDataAttributes(data) : void 0), children2);
};
let announcementCounter = 0;
const Announcement = ({ children: children2 }) => {
  const [announcementElement, setElement] = useState(null);
  const className = [
    atoms({
      reset: "div",
      position: "absolute",
      overflow: "hidden"
    }),
    root$2
  ].join(" ");
  useEffect(() => {
    const announcementContainerId = `braid-announcement-container-${announcementCounter++}`;
    const element = document.createElement("div");
    element.setAttribute("id", announcementContainerId);
    element.setAttribute("class", className);
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    document.body.appendChild(element);
    setElement(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [className]);
  if (!announcementElement) {
    return null;
  }
  return createPortal(children2, announcementElement);
};
const Secondary = ({ children: children2, data, id }) => /* @__PURE__ */ React.createElement("span", __spreadValues({
  className: useTextTone({ tone: "secondary" }),
  id
}, data ? buildDataAttributes(data) : void 0), children2);
const FieldLabel = ({
  id,
  htmlFor,
  label: label2,
  secondaryLabel,
  tertiaryLabel,
  description,
  descriptionId,
  data
}) => {
  if (!label2) {
    return null;
  }
  const labelEl = /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(Strong, null, label2), secondaryLabel ? /* @__PURE__ */ React.createElement(Secondary, null, "\xA0(", secondaryLabel, ")") : null);
  return /* @__PURE__ */ React.createElement(Stack, {
    space: "xsmall",
    data
  }, /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    display: "flex",
    justifyContent: "spaceBetween"
  }, htmlFor === false ? labelEl : /* @__PURE__ */ React.createElement("label", {
    id,
    htmlFor
  }, labelEl), tertiaryLabel ? /* @__PURE__ */ React.createElement(Text, null, "\xA0", tertiaryLabel) : null), description ? /* @__PURE__ */ React.createElement(Box, {
    paddingY: "xxsmall"
  }, /* @__PURE__ */ React.createElement(Text, {
    tone: "secondary",
    id: descriptionId
  }, description)) : null);
};
const tones$1 = ["neutral", "critical", "positive"];
const Icon = {
  critical: /* @__PURE__ */ React.createElement(IconCritical, {
    tone: "critical"
  }),
  positive: /* @__PURE__ */ React.createElement(IconPositive, {
    tone: "positive"
  })
};
const FieldMessage = ({
  id,
  tone = "neutral",
  message,
  secondaryMessage,
  reserveMessageSpace = true,
  disabled,
  data
}) => {
  if (tones$1.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }
  if (!message && !secondaryMessage && !reserveMessageSpace) {
    return null;
  }
  const showMessage = !disabled && message;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    id,
    display: "flex",
    justifyContent: "flexEnd"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    flexGrow: 1
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: tone === "neutral" ? "secondary" : tone
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    userSelect: showMessage ? void 0 : "none"
  }, showMessage && tone !== "neutral" ? /* @__PURE__ */ React.createElement(Box, {
    paddingRight: "xxsmall",
    flexShrink: 0,
    flexGrow: 0
  }, Icon[tone]) : null, showMessage ? message : "\xA0"))), secondaryMessage && !disabled ? /* @__PURE__ */ React.createElement(Box, {
    paddingLeft: "xsmall",
    flexGrow: 0
  }, secondaryMessage) : null);
};
const boxShadowForVariant = {
  default: "borderField",
  disabled: "borderStandard",
  focus: "outlineFocus",
  hover: "borderFormHover",
  critical: "borderCritical"
};
const FieldOverlay = (_oc) => {
  var _pc = _oc, { variant } = _pc, restProps = __objRest(_pc, ["variant"]);
  return /* @__PURE__ */ React.createElement(Overlay, __spreadValues({
    borderRadius: "standard",
    boxShadow: boxShadowForVariant[variant],
    transition: "fast"
  }, restProps));
};
const mergeIds = (...ids) => {
  const validIds = ids.filter(Boolean);
  if (validIds.length === 0) {
    return void 0;
  }
  return validIds.join(" ");
};
const Field = (_qc) => {
  var _rc = _qc, {
    id,
    value,
    labelId,
    name,
    disabled,
    autoComplete,
    children: children2,
    message,
    secondaryMessage,
    reserveMessageSpace = false,
    tone,
    "aria-describedby": ariaDescribedBy,
    data,
    secondaryIcon,
    autoFocus,
    icon: icon2,
    prefix,
    required
  } = _rc, restProps = __objRest(_rc, [
    "id",
    "value",
    "labelId",
    "name",
    "disabled",
    "autoComplete",
    "children",
    "message",
    "secondaryMessage",
    "reserveMessageSpace",
    "tone",
    "aria-describedby",
    "data",
    "secondaryIcon",
    "autoFocus",
    "icon",
    "prefix",
    "required"
  ]);
  assert(prefix === void 0 || typeof prefix === "string", "Prefix must be a string");
  const messageId = `${id}-message`;
  const descriptionId = "description" in restProps && restProps.description ? `${id}-description` : void 0;
  const fieldBackground = disabled ? "inputDisabled" : "input";
  const showFieldBorder = useBackgroundLightness() === "light" && (tone !== "critical" || disabled);
  const hasValue = typeof value === "string" ? value.length > 0 : value != null;
  const hasVisualLabel = "label" in restProps;
  const overlays = /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: disabled ? "disabled" : "default",
    visible: showFieldBorder
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "critical",
    visible: tone === "critical" && !disabled
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "focus",
    className: focusOverlay$1
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "hover",
    className: hoverOverlay$1
  }));
  const fieldPadding = "small";
  return /* @__PURE__ */ React.createElement(Stack, {
    space: "xsmall"
  }, hasVisualLabel ? /* @__PURE__ */ React.createElement(FieldLabel, {
    id: labelId,
    htmlFor: id,
    label: "label" in restProps ? restProps.label : void 0,
    secondaryLabel: "secondaryLabel" in restProps ? restProps.secondaryLabel : void 0,
    tertiaryLabel: "tertiaryLabel" in restProps ? restProps.tertiaryLabel : void 0,
    description: "description" in restProps ? restProps.description : void 0,
    descriptionId
  }) : null, /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    background: fieldBackground,
    borderRadius: "standard",
    display: "flex",
    className: secondaryIcon ? secondaryIconSpace : void 0
  }, children2(overlays, __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({
    id,
    name,
    background: fieldBackground,
    width: "full",
    paddingLeft: fieldPadding,
    paddingRight: secondaryIcon ? void 0 : fieldPadding,
    borderRadius: "standard",
    outline: "none",
    "aria-describedby": mergeIds(ariaDescribedBy, message || secondaryMessage ? messageId : void 0, descriptionId),
    "aria-required": required
  }, "aria-label" in restProps ? { "aria-label": restProps["aria-label"] } : {}), "aria-labelledby" in restProps ? { "aria-labelledby": restProps["aria-labelledby"] } : {}), {
    disabled,
    autoComplete,
    autoFocus
  }), buildDataAttributes(data)), {
    className: clsx(field, placeholderColor, useText({
      backgroundContext: fieldBackground,
      tone: hasValue ? "neutral" : "secondary",
      size: "standard",
      baseline: false
    }), touchableText.standard, icon2 && !prefix ? iconSpace : null)
  }), icon2 ? /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "touchable",
    width: "touchable",
    pointerEvents: "none",
    top: 0,
    left: 0
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    tone: prefix ? "secondary" : void 0
  }, icon2)) : null, secondaryIcon ? /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    width: "touchable",
    height: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0
  }, secondaryIcon) : null, prefix ? /* @__PURE__ */ React.createElement(Box, {
    component: "label",
    htmlFor: id,
    display: "flex",
    alignItems: "center",
    paddingLeft: icon2 ? void 0 : fieldPadding,
    height: "touchable",
    flexShrink: 0,
    className: icon2 ? iconSpace : null
  }, /* @__PURE__ */ React.createElement(Text, {
    tone: "secondary",
    baseline: false
  }, prefix), /* @__PURE__ */ React.createElement(Box, {
    padding: fieldPadding,
    paddingRight: "none",
    height: "full"
  }, /* @__PURE__ */ React.createElement(Box, {
    height: "full",
    className: verticalDivider
  }))) : null)), message || secondaryMessage || reserveMessageSpace ? /* @__PURE__ */ React.createElement(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    secondaryMessage,
    reserveMessageSpace
  }) : null);
};
function getNextIndex(moveAmount, current2, total) {
  const maxIndex = total - 1;
  if (current2 === null) {
    return moveAmount > 0 ? 0 : maxIndex;
  }
  const nextIndex = moveAmount + current2;
  if (nextIndex > maxIndex) {
    return 0;
  }
  if (nextIndex < 0) {
    return maxIndex;
  }
  return nextIndex;
}
function normalizeKey({ key, keyCode }) {
  if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) {
    return `Arrow${key}`;
  }
  if (keyCode === 27) {
    return "Escape";
  }
  return key;
}
const ClearField = ({ hide = false, onClear, inputRef }) => {
  const clearHandler = useCallback((event) => {
    if (typeof onClear !== "function" || event.button !== 0) {
      return;
    }
    onClear();
    if (inputRef && typeof inputRef === "object" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onClear, inputRef]);
  return /* @__PURE__ */ React.createElement(Box, {
    height: "touchable",
    width: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "fast",
    pointerEvents: hide ? "none" : void 0,
    opacity: hide ? 0 : void 0
  }, /* @__PURE__ */ React.createElement(ClearButton, {
    label: "Clear",
    onMouseDown: clearHandler,
    keyboardAccessible: false
  }));
};
const easeModifier = (t) => t > 0.5 ? 4 * Math.pow(t - 1, 3) + 1 : 4 * Math.pow(t, 3);
const getExpectedTime = (distance, duration, speed, minDuration) => {
  const calculatedDuration = distance / speed;
  const normalizedDuration = minDuration > calculatedDuration ? minDuration : calculatedDuration;
  return duration !== null ? duration : normalizedDuration;
};
const getScrollPosition = (scrollContainer, direction) => scrollContainer[direction === "horizontal" ? "scrollLeft" : "scrollTop"];
const getScrollOffset = (scrollContainer, targetElement, direction) => {
  if (scrollContainer === window.document.documentElement) {
    const scrollPosition = getScrollPosition(scrollContainer, direction);
    const positionOnScreen = targetElement.getBoundingClientRect()[direction === "horizontal" ? "left" : "top"];
    return positionOnScreen + scrollPosition;
  }
  let totalOffset = 0;
  let currentElement = targetElement;
  const offsetKey = direction === "horizontal" ? "offsetLeft" : "offsetTop";
  while (scrollContainer.contains(currentElement) || currentElement === scrollContainer) {
    totalOffset += currentElement[offsetKey];
    const { offsetParent } = currentElement;
    if (!(offsetParent instanceof HTMLElement)) {
      break;
    }
    currentElement = offsetParent;
  }
  return totalOffset;
};
const scrollTo = (scrollContainer, direction, to) => {
  scrollContainer[direction === "horizontal" ? "scrollLeft" : "scrollTop"] = to;
};
const getPossibleScroll = (scrollContainer, direction) => scrollContainer[direction === "horizontal" ? "scrollWidth" : "scrollHeight"] - (scrollContainer === window.document.documentElement ? 0 : scrollContainer[direction === "horizontal" ? "offsetWidth" : "offsetHeight"]);
const limitNumberToRange = (number, min, max) => {
  if (number < min) {
    return min;
  }
  if (number > max) {
    return max;
  }
  return number;
};
const scroll = (scrollContainer, direction, to, { duration = null, speed = 2, minDuration = 0 }, callback) => {
  const startTime = Date.now();
  const initial = getScrollPosition(scrollContainer, direction);
  const possibleScroll = getPossibleScroll(scrollContainer, direction);
  const targetScrollPosition = limitNumberToRange(to, 0, possibleScroll);
  const total = Math.abs(targetScrollPosition - initial);
  const expectedTime = getExpectedTime(total, duration, speed, minDuration);
  const scrollForwards = targetScrollPosition > initial;
  const step = () => {
    requestAnimationFrame(() => {
      const timePassed = Date.now() - startTime;
      const progress = timePassed / expectedTime;
      const distance = easeModifier(progress) * total;
      const newPosition = Math.floor(scrollForwards ? initial + distance : initial - distance);
      const isComplete = scrollForwards ? newPosition >= targetScrollPosition : newPosition <= targetScrollPosition;
      if (isComplete) {
        scrollTo(scrollContainer, direction, targetScrollPosition);
        if (callback) {
          callback();
        }
      } else {
        scrollTo(scrollContainer, direction, newPosition);
        step();
      }
    });
  };
  if (targetScrollPosition !== initial) {
    step();
  } else if (callback) {
    callback();
  }
};
const smoothScroll = (element, _sc = {}) => {
  var _tc = _sc, {
    scrollContainer = window.document.documentElement,
    direction = "vertical",
    offset = 0,
    position = "start"
  } = _tc, scrollOptions = __objRest(_tc, [
    "scrollContainer",
    "direction",
    "offset",
    "position"
  ]);
  return new Promise((resolve) => {
    const scrollOffset = getScrollOffset(scrollContainer, element, direction);
    const scrollPosition = position === "end" ? scrollOffset - scrollContainer.offsetWidth + element.offsetWidth + offset : scrollOffset - offset;
    scroll(scrollContainer, direction, scrollPosition, scrollOptions, resolve);
  });
};
const smoothScrollIntoView = (element, options) => {
  const {
    scrollContainer = window.document.documentElement,
    direction = "vertical",
    offset = 0
  } = options;
  const containerWidth = scrollContainer.offsetWidth;
  const scrollOffset = getScrollOffset(scrollContainer, element, direction);
  const positionOnScreen = scrollOffset - getScrollPosition(scrollContainer, direction);
  if (positionOnScreen < offset) {
    smoothScroll(element, __spreadProps(__spreadValues({}, options), { position: "start" }));
  } else if (positionOnScreen > containerWidth - element.offsetWidth - offset) {
    smoothScroll(element, __spreadProps(__spreadValues({}, options), { position: "end" }));
  }
};
function useScrollIntoView(element, scrollContainer) {
  useEffect(() => {
    if (scrollContainer && element) {
      const itemOffsetRelativeToContainer = element.offsetParent === scrollContainer ? element.offsetTop : element.offsetTop - scrollContainer.offsetTop;
      let { scrollTop } = scrollContainer;
      if (itemOffsetRelativeToContainer < scrollTop) {
        scrollTop = itemOffsetRelativeToContainer;
      } else if (itemOffsetRelativeToContainer + element.offsetHeight > scrollTop + scrollContainer.offsetHeight) {
        scrollTop = itemOffsetRelativeToContainer + element.offsetHeight - scrollContainer.offsetHeight;
      }
      if (scrollTop !== scrollContainer.scrollTop) {
        scrollContainer.scrollTop = scrollTop;
      }
    }
  }, [scrollContainer, element]);
}
const getItemId = (id, index) => `${id}-item-${index}`;
const createAccessbilityProps = ({
  id,
  highlightedIndex,
  isOpen
}) => {
  const menuId = `${id}-menu`;
  const labelId = `${id}-label`;
  const assistiveDescriptionId = `${id}-aria-description`;
  return {
    labelProps: {
      id: labelId
    },
    inputProps: {
      id,
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-owns": isOpen ? menuId : void 0,
      "aria-controls": menuId,
      "aria-expanded": isOpen,
      "aria-labelledby": labelId,
      "aria-autocomplete": "list",
      "aria-activedescendant": typeof highlightedIndex === "number" ? getItemId(id, highlightedIndex) : void 0,
      "aria-describedby": assistiveDescriptionId,
      autoComplete: "off",
      spellCheck: false
    },
    assistiveDescriptionProps: {
      id: assistiveDescriptionId
    },
    menuProps: {
      id: menuId,
      role: "listbox"
    },
    getItemProps: ({
      index,
      label: label2,
      description,
      groupHeading: groupHeading2
    }) => ({
      id: getItemId(id, index),
      role: "option",
      "aria-selected": index === highlightedIndex,
      "aria-label": `${label2}${description ? ` - ${description}` : ""}${groupHeading2 ? ` (${groupHeading2})` : ""}`
    })
  };
};
const autosuggest = {
  assistiveDescription: "Suggestions will appear below the field as you type",
  suggestionInstructions: "Use up and down arrow keys to navigate. Press enter to select",
  suggestionsAvailableAnnouncement: (suggestionCount) => `${suggestionCount} suggestion${suggestionCount === 1 ? "" : "s"} available`,
  noSuggestionsAvailableAnnouncement: "No suggestions available",
  suggestionAutoSelectedAnnouncement: (suggestion) => `Suggestion ${suggestion} is automatically selected`
};
const INPUT_FOCUS = 0;
const INPUT_BLUR = 1;
const INPUT_CHANGE = 2;
const INPUT_ARROW_UP = 3;
const INPUT_ARROW_DOWN = 4;
const INPUT_ESCAPE = 5;
const INPUT_ENTER = 6;
const SUGGESTION_MOUSE_CLICK = 7;
const SUGGESTION_MOUSE_ENTER = 8;
const HAS_SUGGESTIONS_CHANGED = 9;
function SuggestionItem(_uc) {
  var _vc = _uc, {
    suggestion,
    highlighted,
    selected: selected2,
    onHover
  } = _vc, restProps = __objRest(_vc, [
    "suggestion",
    "highlighted",
    "selected",
    "onHover"
  ]);
  var _a;
  const { highlights: highlights2 = [], onClear, clearLabel } = suggestion;
  const label2 = (_a = suggestion.label) != null ? _a : suggestion.text;
  const suggestionParts = parseHighlights(label2, highlights2.map(({ start, end }) => [start, end]));
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "li",
    cursor: "pointer",
    onMouseDown: (event) => {
      event.preventDefault();
    },
    onMouseMove: onHover,
    onTouchStart: onHover
  }, restProps), /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    display: "flex",
    justifyContent: "spaceBetween",
    background: highlighted ? "selection" : void 0,
    paddingX: "small",
    paddingRight: onClear ? "none" : void 0
  }, /* @__PURE__ */ React.createElement(Box, {
    className: touchableText.standard
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false
  }, suggestionParts.map(({ highlight, text }, index) => selected2 || highlight ? /* @__PURE__ */ React.createElement(Strong, {
    key: index
  }, text) : /* @__PURE__ */ React.createElement(Fragment, {
    key: index
  }, text))), suggestion.description ? /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: "secondary",
    baseline: false
  }, suggestion.description) : null), typeof onClear === "function" ? /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "touchable",
    height: "touchable"
  }, /* @__PURE__ */ React.createElement(ClearButton, {
    label: clearLabel || "Clear suggestion",
    onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
      onClear(valueFromSuggestion(suggestion));
    }
  })) : null));
}
function GroupHeading({ children: children2 }) {
  return /* @__PURE__ */ React.createElement(Box, {
    paddingX: "small",
    borderRadius: "standard",
    className: [
      groupHeading,
      touchableText.xsmall,
      useText({
        size: "xsmall",
        baseline: false,
        weight: "strong",
        tone: "formAccent"
      })
    ],
    "data-testid": void 0
  }, children2);
}
function normaliseSuggestions(suggestions) {
  let index = 0;
  const normalisedSuggestions = [];
  const groupHeadingIndexes = new Map();
  const groupHeadingForSuggestion = new Map();
  for (const item of suggestions) {
    if ("suggestions" in item) {
      groupHeadingIndexes.set(index, item.label);
      item.suggestions.forEach((suggestion) => {
        groupHeadingForSuggestion.set(suggestion, item.label);
      });
      index = normalisedSuggestions.push(...item.suggestions);
    } else {
      index = normalisedSuggestions.push(item);
    }
  }
  return {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion
  };
}
function valueFromSuggestion(suggestion) {
  return "value" in suggestion ? {
    text: suggestion.text,
    value: suggestion.value
  } : { text: suggestion.text };
}
const noop$1 = () => {
};
const fallbackValue = { text: "" };
const fallbackSuggestions = [];
const Autosuggest = forwardRef(function(_wc, forwardedRef) {
  var _xc = _wc, {
    id,
    value = fallbackValue,
    suggestions: suggestionsProp = fallbackSuggestions,
    onChange = noop$1,
    automaticSelection = false,
    showMobileBackdrop = false,
    scrollToTopOnMobile = true,
    hideSuggestionsOnSelection = true,
    onFocus = noop$1,
    onBlur = noop$1,
    placeholder,
    type = "text",
    onClear,
    translations = autosuggest
  } = _xc, restProps = __objRest(_xc, [
    "id",
    "value",
    "suggestions",
    "onChange",
    "automaticSelection",
    "showMobileBackdrop",
    "scrollToTopOnMobile",
    "hideSuggestionsOnSelection",
    "onFocus",
    "onBlur",
    "placeholder",
    "type",
    "onClear",
    "translations"
  ]);
  const suggestionsPropValue = typeof suggestionsProp === "function" ? suggestionsProp(value) : suggestionsProp;
  const suggestions = Array.isArray(suggestionsPropValue) ? suggestionsPropValue : [];
  const message = "message" in suggestionsPropValue ? suggestionsPropValue.message : void 0;
  const hasItems = suggestions.length > 0 || Boolean(message);
  const defaultRef = useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const fireChange = useCallback((suggestion) => onChange(valueFromSuggestion(suggestion)), [onChange]);
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const justPressedArrowRef = useRef(false);
  const {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion
  } = normaliseSuggestions(suggestions);
  const suggestionCount = normalisedSuggestions.length;
  const hasSuggestions = suggestionCount > 0;
  const reducer2 = (state, action) => {
    switch (action.type) {
      case INPUT_ARROW_DOWN: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(1, state.highlightedIndex, suggestionCount);
          return __spreadProps(__spreadValues({}, state), {
            showSuggestionsIfAvailable: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex
          });
        }
      }
      case INPUT_ARROW_UP: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(-1, state.highlightedIndex, suggestionCount);
          return __spreadProps(__spreadValues({}, state), {
            showSuggestionsIfAvailable: true,
            previewValue: normalisedSuggestions[nextIndex],
            highlightedIndex: nextIndex
          });
        }
      }
      case INPUT_CHANGE: {
        return __spreadProps(__spreadValues({}, state), {
          showSuggestionsIfAvailable: true,
          inputChangedSinceFocus: true,
          previewValue: null,
          highlightedIndex: hasSuggestions && automaticSelection && value.text.length > 0 ? 0 : null
        });
      }
      case INPUT_FOCUS: {
        return __spreadProps(__spreadValues({}, state), {
          showSuggestionsIfAvailable: true,
          inputChangedSinceFocus: false,
          isFocused: true
        });
      }
      case INPUT_BLUR: {
        return __spreadProps(__spreadValues({}, state), {
          showSuggestionsIfAvailable: false,
          previewValue: null,
          highlightedIndex: null,
          isFocused: false
        });
      }
      case INPUT_ESCAPE: {
        if (value.text) {
          return __spreadProps(__spreadValues({}, state), {
            showSuggestionsIfAvailable: false,
            previewValue: null,
            highlightedIndex: null
          });
        } else if (hasItems) {
          return __spreadProps(__spreadValues({}, state), {
            showSuggestionsIfAvailable: !state.showSuggestionsIfAvailable,
            previewValue: null
          });
        }
        return state;
      }
      case INPUT_ENTER:
      case SUGGESTION_MOUSE_CLICK: {
        return __spreadProps(__spreadValues({}, state), {
          showSuggestionsIfAvailable: !hideSuggestionsOnSelection,
          previewValue: null,
          highlightedIndex: null
        });
      }
      case SUGGESTION_MOUSE_ENTER: {
        return __spreadProps(__spreadValues({}, state), {
          highlightedIndex: action.value
        });
      }
      case HAS_SUGGESTIONS_CHANGED: {
        return automaticSelection ? __spreadProps(__spreadValues({}, state), {
          highlightedIndex: hasSuggestions && value.text.length > 0 ? 0 : null
        }) : state;
      }
      default: {
        console.error(new Error(`Invalid Autosuggest action: ${action}`));
        return state;
      }
    }
  };
  const [
    {
      showSuggestionsIfAvailable,
      inputChangedSinceFocus,
      previewValue,
      highlightedIndex,
      isFocused
    },
    dispatch
  ] = useReducer(reducer2, {
    showSuggestionsIfAvailable: false,
    inputChangedSinceFocus: false,
    previewValue: null,
    highlightedIndex: null,
    isFocused: false
  });
  const isOpen = showSuggestionsIfAvailable && hasItems;
  const highlightedItem = typeof highlightedIndex === "number" ? document.getElementById(getItemId(id, highlightedIndex)) : null;
  useScrollIntoView(highlightedItem, menuRef.current);
  useEffect(() => {
    dispatch({
      type: HAS_SUGGESTIONS_CHANGED
    });
  }, [hasSuggestions]);
  const isMobile2 = useResponsiveValue()({
    mobile: true,
    tablet: false
  });
  const inputProps = {
    value: previewValue ? previewValue.text : value.text,
    type: type === "search" ? type : "text",
    placeholder,
    onChange: (e) => {
      const inputValue = e.target.value;
      dispatch({ type: INPUT_CHANGE });
      fireChange({ text: inputValue });
    },
    onFocus: () => {
      if (rootRef.current && scrollToTopOnMobile && isMobile2) {
        smoothScroll(rootRef.current);
      }
      dispatch({ type: INPUT_FOCUS });
      onFocus();
    },
    onBlur: () => {
      if (justPressedArrowRef.current === true) {
        return;
      }
      if (previewValue) {
        fireChange(previewValue);
      } else if (isOpen && automaticSelection && inputChangedSinceFocus && value.text.length > 0 && suggestionCount > 0) {
        fireChange(normalisedSuggestions[0]);
      }
      dispatch({ type: INPUT_BLUR });
      onBlur();
    },
    onKeyDown: (event) => {
      const targetKey = normalizeKey(event);
      if (/^Arrow(Up|Down$)/.test(targetKey)) {
        justPressedArrowRef.current = true;
        setTimeout(() => {
          justPressedArrowRef.current = false;
        }, 150);
      }
      switch (targetKey) {
        case "ArrowDown": {
          event.preventDefault();
          dispatch({ type: INPUT_ARROW_DOWN });
          return;
        }
        case "ArrowUp": {
          event.preventDefault();
          dispatch({ type: INPUT_ARROW_UP });
          return;
        }
        case "Escape": {
          event.preventDefault();
          if (previewValue === null && value.text) {
            fireChange({ text: "" });
          }
          dispatch({ type: INPUT_ESCAPE });
          return;
        }
        case "Enter": {
          if (typeof highlightedIndex === "number") {
            event.preventDefault();
            fireChange(normalisedSuggestions[highlightedIndex]);
          }
          dispatch({ type: INPUT_ENTER });
          return;
        }
        default: {
          return;
        }
      }
    }
  };
  const a11y = createAccessbilityProps({
    id,
    isOpen,
    highlightedIndex
  });
  const clearable = Boolean(typeof onClear !== "undefined" && typeof value !== "undefined" && value.text.length > 0);
  const announcements = [];
  const hasAutomaticSelection = automaticSelection && previewValue === null && highlightedIndex === 0;
  if (isFocused && isOpen && (highlightedIndex === null || hasAutomaticSelection)) {
    if (message) {
      announcements.push(message);
    }
    if (hasSuggestions) {
      announcements.push(translations.suggestionsAvailableAnnouncement(suggestionCount));
      if (hasAutomaticSelection) {
        announcements.push(translations.suggestionAutoSelectedAnnouncement(normalisedSuggestions[0].text));
      }
      announcements.push(translations.suggestionInstructions);
    } else {
      announcements.push(translations.noSuggestionsAvailableAnnouncement);
    }
  }
  return /* @__PURE__ */ React.createElement(Fragment, null, showMobileBackdrop ? /* @__PURE__ */ React.createElement(Box, {
    position: "fixed",
    zIndex: "dropdownBackdrop",
    transition: "fast",
    display: ["block", "none"],
    pointerEvents: isOpen ? void 0 : "none",
    top: 0,
    left: 0,
    opacity: !isOpen ? 0 : void 0,
    className: [
      backdrop,
      isOpen ? backdropVisible : void 0
    ]
  }) : null, /* @__PURE__ */ React.createElement(Box, __spreadValues({}, showMobileBackdrop && isOpen ? {
    position: "relative",
    zIndex: "dropdown"
  } : null), /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    ref: rootRef
  }, /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    id,
    labelId: a11y.labelProps.id,
    value: value.text,
    prefix: void 0,
    secondaryIcon: onClear ? /* @__PURE__ */ React.createElement(ClearField, {
      hide: !clearable,
      onClear,
      inputRef
    }) : null
  }), (overlays, fieldProps, icon2, secondaryIcon) => /* @__PURE__ */ React.createElement(Box, {
    width: "full"
  }, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues(__spreadValues(__spreadValues({
    component: "input"
  }, fieldProps), a11y.inputProps), inputProps), {
    position: "relative",
    ref: inputRef
  })), icon2, /* @__PURE__ */ React.createElement(RemoveScroll, {
    ref: menuRef,
    enabled: isOpen,
    forwardProps: true
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "ul",
    display: isOpen ? "block" : "none",
    position: "absolute",
    zIndex: "dropdown",
    background: "card",
    borderRadius: "standard",
    boxShadow: "medium",
    width: "full",
    marginTop: "xxsmall",
    paddingY: "xxsmall",
    className: menu
  }, a11y.menuProps), isOpen && message ? /* @__PURE__ */ React.createElement(Box, {
    component: "li",
    paddingX: "small",
    className: touchableText.standard
  }, /* @__PURE__ */ React.createElement(Text, {
    tone: "secondary",
    baseline: false
  }, message)) : null, isOpen && hasSuggestions ? normalisedSuggestions.map((suggestion, index) => {
    var _a;
    const { text } = suggestion;
    const groupHeading2 = groupHeadingIndexes.get(index);
    return /* @__PURE__ */ React.createElement(Fragment, {
      key: index + text
    }, groupHeading2 ? /* @__PURE__ */ React.createElement(GroupHeading, null, groupHeading2) : null, /* @__PURE__ */ React.createElement(SuggestionItem, __spreadValues({
      suggestion,
      highlighted: highlightedIndex === index,
      selected: value === suggestion,
      onClick: () => {
        fireChange(suggestion);
        dispatch({ type: SUGGESTION_MOUSE_CLICK });
      },
      onHover: () => {
        dispatch({
          type: SUGGESTION_MOUSE_ENTER,
          value: index
        });
      }
    }, a11y.getItemProps({
      index,
      label: (_a = suggestion.label) != null ? _a : suggestion.text,
      description: suggestion.description,
      groupHeading: groupHeadingForSuggestion.get(suggestion)
    }))));
  }) : null)), overlays, secondaryIcon))), /* @__PURE__ */ React.createElement(HiddenVisually, __spreadValues({}, a11y.assistiveDescriptionProps), translations.assistiveDescription), /* @__PURE__ */ React.createElement(Announcement, null, announcements.join(". "))));
});
Autosuggest.displayName = "Autosuggest";
function matchSuggestion(suggestion, query) {
  var _a;
  const groupMatches = matchHighlights((_a = suggestion.label) != null ? _a : suggestion.text, query);
  return !groupMatches.length ? null : __spreadProps(__spreadValues({}, suggestion), {
    highlights: groupMatches.map(([start, end]) => ({ start, end }))
  });
}
function filterSuggestions(...args) {
  assert([1, 2].includes(args.length), `Invalid number of arguments passed to "filterSuggestions". Expected 1 or 2, got ${args.length}`);
  if (args.length === 1) {
    return (inputValue) => filter(args[0], inputValue);
  } else if (args.length === 2) {
    return filter(args[0], args[1]);
  }
  function filter(suggestions, inputValue) {
    assert(typeof inputValue === "string" || typeof inputValue === "object" && inputValue !== null && "text" in inputValue, 'The second argument to "filterSuggestions" must be a string or an Autosuggest value object, e.g. { text: "Hello world" }');
    const query = (typeof inputValue === "string" ? inputValue : inputValue.text).trim();
    if (query === "") {
      return suggestions;
    }
    const filteredSuggestions = [];
    suggestions.forEach((suggestion) => {
      if ("suggestions" in suggestion) {
        const filteredGroupSuggestions = [];
        suggestion.suggestions.forEach((groupSuggestion) => {
          const filteredSuggestion = matchSuggestion(groupSuggestion, query);
          if (filteredSuggestion) {
            filteredGroupSuggestions.push(filteredSuggestion);
          }
        });
        if (filteredGroupSuggestions.length) {
          filteredSuggestions.push(__spreadProps(__spreadValues({}, suggestion), {
            suggestions: filteredGroupSuggestions
          }));
        }
      } else {
        const filteredSuggestion = matchSuggestion(suggestion, query);
        if (filteredSuggestion) {
          filteredSuggestions.push(filteredSuggestion);
        }
      }
    });
    return filteredSuggestions;
  }
}
const BackgroundProvider = ({
  type,
  children: children2
}) => renderBackgroundProvider(type === "dark" ? "UNKNOWN_DARK" : "UNKNOWN_LIGHT", children2);
BackgroundProvider.displayName = "BackgroundProvider";
const validTones$1 = [
  "promote",
  "info",
  "neutral",
  "positive",
  "caution",
  "critical"
];
const backgroundForTone = (tone, weight2) => {
  if (weight2 === "strong") {
    return tone;
  }
  if (tone === "positive") {
    return "positiveLight";
  }
  if (tone === "critical") {
    return "criticalLight";
  }
  if (tone === "info") {
    return "infoLight";
  }
  if (tone === "promote") {
    return "promoteLight";
  }
  if (tone === "neutral") {
    return "neutralLight";
  }
  if (tone === "caution") {
    return "cautionLight";
  }
};
const Badge = forwardRef(({
  tone = "info",
  weight: weight2 = "regular",
  bleedY: bleedY$12 = false,
  title,
  children: children2,
  id,
  data,
  tabIndex,
  "aria-describedby": ariaDescribedBy
}, ref) => {
  assert(validTones$1.indexOf(tone) >= 0, `Badge tone of "${tone}" is not valid.`);
  assert(Children.toArray(children2).every((child) => ["string", "number"].includes(typeof child)), "Badge may only contain strings or numbers");
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    display: "flex",
    cursor: "default",
    className: [
      lineHeightContainer[constants.textSize],
      bleedY$12 ? bleedY : null
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    id,
    ref,
    tabIndex,
    "aria-describedby": ariaDescribedBy,
    title: title != null ? title : !ariaDescribedBy ? children2 : void 0,
    background: backgroundForTone(tone, weight2),
    paddingX: "xsmall",
    borderRadius: "large",
    overflow: "hidden"
  }, /* @__PURE__ */ React.createElement(Text, {
    component: "span",
    size: constants.textSize,
    weight: "medium",
    tone: weight2 === "regular" ? tone : void 0,
    truncate: true,
    baseline: false
  }, children2)));
});
Badge.displayName = "Badge";
const BoxRenderer = (_yc) => {
  var _zc = _yc, {
    children: children2,
    component = "div",
    className
  } = _zc, props = __objRest(_zc, [
    "children",
    "component",
    "className"
  ]);
  const atomicClasses = atoms(__spreadValues({ reset: component }, props));
  const element = children2(clsx(className, atomicClasses));
  return renderBackgroundProvider(props.background, element);
};
function numberToAlpha(inputNumber) {
  let returnValue = "";
  let counter = inputNumber;
  while (counter > 0) {
    const t = (counter - 1) % 26;
    returnValue = String.fromCharCode(97 + t) + returnValue;
    counter = (counter - t) / 26 | 0;
  }
  return returnValue;
}
const romanNumerals = {
  m: 1e3,
  cm: 900,
  d: 500,
  cd: 400,
  c: 100,
  xc: 90,
  l: 50,
  xl: 40,
  x: 10,
  ix: 9,
  v: 5,
  iv: 4,
  i: 1
};
function numberToRomanNumerals(inputNumber) {
  let returnValue = "";
  let counter = inputNumber;
  Object.keys(romanNumerals).forEach((romanNumeral) => {
    const value = romanNumerals[romanNumeral];
    while (counter >= value) {
      returnValue += romanNumeral;
      counter -= value;
    }
  });
  return returnValue;
}
const CharacterBullet = ({ length = 1, children: children2 }) => {
  var _a;
  return /* @__PURE__ */ React.createElement(Box, {
    display: "inlineBlock",
    className: [
      (_a = minCharacterWidth[length - 1]) != null ? _a : minCharacterWidth[minCharacterWidth.length - 1],
      trimGutter
    ]
  }, children2, ".");
};
const List = (_Ac) => {
  var _Bc = _Ac, {
    children: children2,
    size: sizeProp,
    tone: toneProp,
    space = "medium",
    type = "bullet",
    start = 1,
    data
  } = _Bc, restProps = __objRest(_Bc, [
    "children",
    "size",
    "tone",
    "space",
    "type",
    "start",
    "data"
  ]);
  const { size: size2, tone } = useDefaultTextProps({
    size: sizeProp,
    tone: toneProp
  });
  const listItems = flattenChildren(children2);
  const lastNumberLength = type === "number" ? (listItems.length + (start - 1)).toString().length : -1;
  return /* @__PURE__ */ React.createElement(DefaultTextPropsProvider, {
    size: size2,
    tone
  }, /* @__PURE__ */ React.createElement(Stack, {
    component: /^(bullet|icon)$/.test(type) ? "ul" : "ol",
    space,
    data
  }, Children.map(listItems, (listItem, index) => {
    const resolvedIndex = index + (start - 1);
    return /* @__PURE__ */ React.createElement(Box, {
      display: "flex"
    }, /* @__PURE__ */ React.createElement(Text, {
      component: "div",
      size: size2,
      tone
    }, /* @__PURE__ */ React.createElement(Box, {
      display: "flex",
      alignItems: /^(bullet|icon)$/.test(type) ? "center" : void 0,
      className: lineHeightContainer[size2],
      userSelect: "none",
      "aria-hidden": true
    }, (() => {
      if (type === "number") {
        return /* @__PURE__ */ React.createElement(CharacterBullet, {
          length: lastNumberLength
        }, resolvedIndex + 1);
      }
      if (type === "alpha") {
        return /* @__PURE__ */ React.createElement(CharacterBullet, null, numberToAlpha(resolvedIndex + 1));
      }
      if (type === "roman") {
        return /* @__PURE__ */ React.createElement(CharacterBullet, {
          length: 2
        }, numberToRomanNumerals(resolvedIndex + 1));
      }
      if (type === "icon" && "icon" in restProps) {
        return restProps.icon;
      }
      return /* @__PURE__ */ React.createElement(Box, {
        borderRadius: "full",
        className: [currentColor, size$1[size2]]
      });
    })())), /* @__PURE__ */ React.createElement(Box, {
      minWidth: 0,
      width: "full",
      paddingLeft: size2 === "xsmall" ? "xsmall" : "small"
    }, listItem));
  })));
};
const BulletListContext = createContext(false);
const validTones = ["neutral", "secondary"];
const BulletList = ({
  space,
  size: size2,
  tone,
  children: children2
}) => {
  assert(!tone || validTones.includes(tone), `Invalid tone: ${tone}`);
  return /* @__PURE__ */ React.createElement(BulletListContext.Provider, {
    value: true
  }, /* @__PURE__ */ React.createElement(List, {
    space,
    size: size2,
    tone
  }, children2));
};
const Bullet = ({ children: children2 }) => {
  return /* @__PURE__ */ React.createElement(Text, null, children2);
};
const borderRadius$5 = "large";
const buttonVariantStyles = {
  solid: {
    default: {
      textTone: void 0,
      backgroundContext: "formAccent",
      backgroundClassName: atoms({ background: "formAccent" }),
      backgroundHoverClassName: atoms({ background: "formAccentHover" }),
      backgroundActiveClassName: atoms({ background: "formAccentActive" }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: void 0,
      backgroundContext: "brandAccent",
      backgroundClassName: atoms({ background: "brandAccent" }),
      backgroundHoverClassName: atoms({ background: "brandAccentHover" }),
      backgroundActiveClassName: atoms({ background: "brandAccentActive" }),
      boxShadow: void 0
    },
    critical: {
      textTone: void 0,
      backgroundContext: "critical",
      backgroundClassName: atoms({ background: "critical" }),
      backgroundHoverClassName: atoms({ background: "criticalHover" }),
      backgroundActiveClassName: atoms({ background: "criticalActive" }),
      boxShadow: void 0
    }
  },
  ghost: {
    default: {
      textTone: "formAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "formAccentSoft" }),
      backgroundActiveClassName: atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: "borderFormAccentLarge"
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "brandAccentSoft" }),
      backgroundActiveClassName: atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: "borderBrandAccentLarge"
    },
    critical: {
      textTone: "critical",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "criticalSoft" }),
      backgroundActiveClassName: atoms({ background: "criticalSoftActive" }),
      boxShadow: "borderCriticalLarge"
    }
  },
  soft: {
    default: {
      textTone: "formAccent",
      backgroundContext: "formAccentSoft",
      backgroundClassName: atoms({ background: "formAccentSoft" }),
      backgroundHoverClassName: atoms({ background: "formAccentSoftHover" }),
      backgroundActiveClassName: atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: "brandAccentSoft",
      backgroundClassName: atoms({ background: "brandAccentSoft" }),
      backgroundHoverClassName: atoms({
        background: "brandAccentSoftHover"
      }),
      backgroundActiveClassName: atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: void 0
    },
    critical: {
      textTone: "critical",
      backgroundContext: "criticalSoft",
      backgroundClassName: atoms({ background: "criticalSoft" }),
      backgroundHoverClassName: atoms({ background: "criticalSoftHover" }),
      backgroundActiveClassName: atoms({ background: "criticalSoftActive" }),
      boxShadow: void 0
    }
  },
  transparent: {
    default: {
      textTone: "formAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "formAccentSoft" }),
      backgroundActiveClassName: atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "brandAccentSoft" }),
      backgroundActiveClassName: atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: void 0
    },
    critical: {
      textTone: "critical",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: atoms({ background: "criticalSoft" }),
      backgroundActiveClassName: atoms({ background: "criticalSoftActive" }),
      boxShadow: void 0
    }
  }
};
const useButtonVariant = (variant, tone) => {
  var _a;
  if (useBackgroundLightness() === "dark" && !tone && variant !== "solid") {
    return {
      textTone: void 0,
      backgroundClassName: variant === "soft" ? invertedBackgrounds.soft : void 0,
      backgroundHoverClassName: invertedBackgrounds.hover,
      backgroundActiveClassName: invertedBackgrounds.active,
      boxShadow: variant === "ghost" ? "borderStandardInvertedLarge" : void 0
    };
  }
  return (_a = buttonVariantStyles[variant][tone != null ? tone : "default"]) != null ? _a : buttonVariantStyles[variant].default;
};
const ButtonChildrenContext = createContext({
  size: "standard",
  variant: "solid",
  tone: void 0,
  loading: false
});
const ButtonChildren = ({ children: children2 }) => {
  const { size: size2, variant, tone, loading } = useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(variant, tone);
  return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: buttonVariant.backgroundClassName,
    visible: Boolean(buttonVariant.backgroundClassName)
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    variant: "focus",
    onlyVisibleForKeyboardNavigation: true,
    className: focusOverlay$2
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: [
      buttonVariant.backgroundHoverClassName,
      hoverOverlay$2
    ]
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: [
      buttonVariant.backgroundActiveClassName,
      activeOverlay
    ]
  }), buttonVariant.boxShadow ? /* @__PURE__ */ React.createElement(Box, {
    boxShadow: buttonVariant.boxShadow,
    borderRadius: borderRadius$5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }) : null, /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    paddingX: size2 === "small" || variant === "transparent" ? "small" : "medium",
    paddingY: size2 === "small" ? constants$1.smallButtonPaddingSize : void 0,
    pointerEvents: "none",
    textAlign: "center",
    overflow: "hidden",
    userSelect: "none",
    className: size2 === "standard" ? touchableText.standard : void 0
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    weight: "medium",
    tone: buttonVariant.textTone,
    size: size2 === "small" ? "small" : void 0
  }, children2, loading ? /* @__PURE__ */ React.createElement(Box, {
    "aria-hidden": true,
    component: "span",
    display: "inlineBlock"
  }, /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    className: loadingDot
  }, "."), /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    className: loadingDot
  }, "."), /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    className: loadingDot
  }, ".")) : null)));
};
const resolveToneAndVariant = ({
  weight: weight2,
  tone,
  variant = "solid"
}) => {
  if (weight2 === "strong") {
    return {
      tone: tone || "brandAccent",
      variant: "solid"
    };
  }
  if (weight2 === "regular") {
    return {
      tone,
      variant: "solid"
    };
  }
  if (weight2 === "weak") {
    return {
      tone,
      variant: "ghost"
    };
  }
  return {
    tone,
    variant
  };
};
const PrivateButtonRenderer = ({
  size: sizeProp,
  tone: toneProp,
  variant: variantProp,
  bleedY: bleedY2,
  weight: weight2,
  loading = false,
  children: children2
}) => {
  var _a;
  const actionsContext = useContext(ActionsContext);
  assert(!(actionsContext && sizeProp), `You shouldn't set a "size" prop on Button elements nested inside Actions. Instead, set the size on the Actions element, e.g. <Actions size="small"><Button>...</Button></Actions>`);
  assert(!(weight2 && variantProp), `You shouldn't set a "weight" and "variant" prop together. Please migrate from "weight" to "variant".`);
  const { tone, variant } = resolveToneAndVariant({
    weight: weight2,
    tone: toneProp,
    variant: variantProp
  });
  const size2 = (_a = sizeProp != null ? sizeProp : actionsContext == null ? void 0 : actionsContext.size) != null ? _a : "standard";
  const { backgroundContext } = useButtonVariant(variant, tone);
  const buttonStyles = clsx(atoms({
    reset: "button",
    cursor: !loading ? "pointer" : void 0,
    width: "full",
    position: "relative",
    display: "block",
    borderRadius: borderRadius$5,
    transform: { active: "touchable" },
    transition: "touchable",
    outline: "none"
  }), root$3, size2 === "small" ? virtualTouchable({ xAxis: false }) : null, size2 === "standard" ? standard : small, bleedY2 ? bleedY$1 : null);
  const buttonChildrenContextValue = useMemo(() => ({ size: size2, tone, variant, loading }), [size2, tone, variant, loading]);
  const buttonProps = {
    style: {},
    className: buttonStyles
  };
  const button2 = /* @__PURE__ */ React.createElement(ButtonChildrenContext.Provider, {
    value: buttonChildrenContextValue
  }, children2(ButtonChildren, buttonProps));
  return backgroundContext ? /* @__PURE__ */ React.createElement(BackgroundProvider$1, {
    value: backgroundContext
  }, button2) : button2;
};
const ButtonRenderer = PrivateButtonRenderer;
const Button = forwardRef(({
  onClick,
  children: children2,
  size: size2,
  tone,
  weight: weight2,
  bleedY: bleedY2,
  variant,
  loading,
  type = "button",
  id,
  tabIndex,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy,
  data
}, ref) => /* @__PURE__ */ React.createElement(PrivateButtonRenderer, {
  size: size2,
  tone,
  weight: weight2,
  loading,
  variant,
  bleedY: bleedY2
}, (ButtonChildren2, buttonProps) => /* @__PURE__ */ React.createElement("button", __spreadValues(__spreadValues({
  ref,
  id,
  type,
  tabIndex,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy,
  onClick,
  disabled: loading
}, buttonProps), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(ButtonChildren2, null, children2))));
Button.displayName = "Button";
const ButtonLink$1 = forwardRef((_Cc, ref) => {
  var _Dc = _Cc, {
    children: children2,
    size: size2,
    tone,
    weight: weight2,
    variant,
    bleedY: bleedY2,
    loading,
    data
  } = _Dc, restProps = __objRest(_Dc, [
    "children",
    "size",
    "tone",
    "weight",
    "variant",
    "bleedY",
    "loading",
    "data"
  ]);
  const LinkComponent = useLinkComponent(ref);
  return /* @__PURE__ */ React.createElement(PrivateButtonRenderer, {
    size: size2,
    tone,
    weight: weight2,
    variant,
    loading,
    bleedY: bleedY2
  }, (ButtonChildren2, buttonProps) => /* @__PURE__ */ React.createElement(LinkComponent, __spreadValues(__spreadValues(__spreadValues({
    ref
  }, restProps), buttonProps), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(ButtonChildren2, null, children2)));
});
ButtonLink$1.displayName = "ButtonLink";
const validCardComponents = [
  "div",
  "article",
  "aside",
  "details",
  "main",
  "section"
];
const borderRadius$4 = "xlarge";
const Card = (_Ec) => {
  var _Fc = _Ec, {
    children: children2,
    component = "div",
    tone,
    data
  } = _Fc, restProps = __objRest(_Fc, [
    "children",
    "component",
    "tone",
    "data"
  ]);
  assert(validCardComponents.includes(component), `Invalid Card component: '${component}'. Should be one of [${validCardComponents.map((c) => `'${c}'`).join(", ")}]`);
  let resolvedRounding;
  if ("rounded" in restProps) {
    resolvedRounding = borderRadius$4;
  } else if ("roundedAbove" in restProps) {
    const [roundedOnMobile, roundedOnTablet, roundedOnDesktop, roundedOnWide] = resolveResponsiveRangeProps({ above: restProps.roundedAbove });
    resolvedRounding = optimizeResponsiveArray([
      roundedOnMobile ? borderRadius$4 : "none",
      roundedOnTablet ? borderRadius$4 : "none",
      roundedOnDesktop ? borderRadius$4 : "none",
      roundedOnWide ? borderRadius$4 : "none"
    ]);
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component,
    position: "relative",
    background: "card",
    padding: "gutter",
    borderRadius: resolvedRounding
  }, data ? buildDataAttributes(data) : void 0), tone ? /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    paddingLeft: "xxsmall",
    borderRadius: resolvedRounding,
    background: tone,
    className: toneKeyline
  }) : null, children2);
};
const tones = ["neutral", "critical"];
const Indicator = ({
  type,
  checked,
  hover: hover2 = false,
  disabled = false
}) => {
  const isCheckbox = type === "checkbox";
  const iconTone = (() => {
    if (disabled) {
      return "secondary";
    }
    if (hover2) {
      return "formAccent";
    }
  })();
  return isCheckbox ? /* @__PURE__ */ React.createElement(Box, {
    height: "full",
    transition: "fast",
    position: "relative",
    className: checkboxIndicator
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== "mixed" ? 0 : void 0
  }, /* @__PURE__ */ React.createElement(IconMinus, {
    size: "fill",
    tone: iconTone
  })), /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== true ? 0 : void 0
  }, /* @__PURE__ */ React.createElement(IconTick, {
    size: "fill",
    tone: iconTone
  }))) : /* @__PURE__ */ React.createElement(Box, {
    background: disabled ? "formAccentDisabled" : "formAccent",
    transition: "fast",
    width: "full",
    height: "full",
    borderRadius: "full",
    className: radioIndicator
  });
};
const StyledInput = forwardRef(({
  id,
  name,
  value,
  checked,
  data,
  onChange,
  type,
  tone = "neutral",
  disabled = false,
  required,
  tabIndex,
  size: size2 = "standard",
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel
}, forwardedRef) => {
  const defaultRef = useRef(null);
  const ref = forwardedRef || defaultRef;
  const indeterminateRef = useRef(false);
  if (tones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }
  const isCheckbox = type === "checkbox";
  const fieldBorderRadius = isCheckbox ? "standard" : "full";
  const accentBackground = disabled ? "formAccentDisabled" : "formAccent";
  const showFieldBorder = useBackgroundLightness() === "light" && (tone !== "critical" || disabled);
  const isMixed$1 = isCheckbox && checked === "mixed";
  useEffect(() => {
    if (ref && typeof ref === "object" && ref.current && isCheckbox) {
      ref.current.indeterminate = isMixed$1;
      indeterminateRef.current = isMixed$1;
    }
  }, [ref, isMixed$1, isCheckbox]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "input",
    type,
    id,
    name,
    value,
    onChange: isMixed$1 ? (e) => {
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.indeterminate = indeterminateRef.current;
      }
      if (typeof onChange === "function") {
        onChange(e);
      }
    } : onChange,
    checked: checked === "mixed" ? false : checked,
    position: "absolute",
    zIndex: 1,
    className: [
      realField,
      realFieldPosition[size2],
      isMixed$1 ? isMixed : void 0
    ],
    cursor: !disabled ? "pointer" : void 0,
    opacity: 0,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-checked": isMixed$1 ? "mixed" : checked,
    "aria-required": required,
    disabled,
    ref,
    tabIndex
  }, data ? buildDataAttributes(data) : void 0)), /* @__PURE__ */ React.createElement(Box, {
    flexShrink: 0,
    position: "relative",
    className: [fakeField, fakeFieldSize[size2]],
    background: disabled ? "inputDisabled" : "input",
    borderRadius: fieldBorderRadius
  }, /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: disabled ? "disabled" : "default",
    borderRadius: fieldBorderRadius,
    visible: showFieldBorder
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "critical",
    borderRadius: fieldBorderRadius,
    visible: tone === "critical" && !disabled
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: tone === "critical" && isCheckbox ? tone : void 0,
    background: isCheckbox ? accentBackground : void 0,
    borderRadius: fieldBorderRadius,
    className: selected
  }, /* @__PURE__ */ React.createElement(Indicator, {
    type,
    disabled,
    checked
  })), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "focus",
    borderRadius: fieldBorderRadius,
    className: focusOverlay$3
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "hover",
    borderRadius: fieldBorderRadius,
    className: hoverOverlay$3
  }, /* @__PURE__ */ React.createElement(Indicator, {
    type,
    hover: true,
    checked: true
  }))));
});
const InlineField = forwardRef(({
  id,
  name,
  value,
  checked,
  data,
  onChange,
  label: label2,
  type,
  children: children$1,
  description,
  badge,
  message,
  reserveMessageSpace = false,
  tone = "neutral",
  disabled = false,
  required,
  inList = false,
  tabIndex,
  size: size2 = "standard",
  "aria-describedby": ariaDescribedBy
}, forwardedRef) => {
  const messageId = `${id}-message`;
  const descriptionId = `${id}-description`;
  const hasMessage = message || reserveMessageSpace;
  return /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    zIndex: 0,
    className: root$4
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "flex"
  }, /* @__PURE__ */ React.createElement(StyledInput, {
    type,
    id,
    checked,
    name,
    value,
    data,
    onChange,
    disabled,
    tone,
    tabIndex,
    required,
    "aria-describedby": mergeIds(ariaDescribedBy, message ? messageId : void 0, description ? descriptionId : void 0),
    size: size2,
    ref: forwardedRef
  }), /* @__PURE__ */ React.createElement(Box, {
    paddingLeft: "small",
    flexGrow: 1
  }, /* @__PURE__ */ React.createElement(Inline, {
    space: "small"
  }, /* @__PURE__ */ React.createElement(Box, {
    component: "label",
    htmlFor: id,
    userSelect: "none",
    display: "block",
    cursor: !disabled ? "pointer" : void 0,
    className: [labelOffset[size2], virtualTouchable()]
  }, /* @__PURE__ */ React.createElement(Text, {
    weight: checked && !inList ? "strong" : void 0,
    tone: disabled ? "secondary" : void 0,
    size: size2
  }, label2)), badge ? /* @__PURE__ */ React.createElement(Box, {
    className: badgeOffset[size2]
  }, badge) : null), description ? /* @__PURE__ */ React.createElement(Box, {
    paddingTop: "small"
  }, /* @__PURE__ */ React.createElement(Text, {
    tone: "secondary",
    size: size2,
    id: descriptionId
  }, description)) : null, children$1 ? /* @__PURE__ */ React.createElement(Box, {
    display: "none",
    paddingTop: "small",
    className: children
  }, children$1) : null)), hasMessage ? /* @__PURE__ */ React.createElement(Box, {
    paddingTop: description ? "small" : "xsmall"
  }, /* @__PURE__ */ React.createElement(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    reserveMessageSpace
  })) : null);
});
const resolveCheckedGroup = (values) => {
  var _a;
  return values.some((value) => value !== values[0]) ? "mixed" : (_a = values[0]) != null ? _a : false;
};
const Checkbox = forwardRef((_Gc, ref) => {
  var _Hc = _Gc, { checked } = _Hc, restProps = __objRest(_Hc, ["checked"]);
  const calculatedChecked = Array.isArray(checked) ? resolveCheckedGroup(checked) : checked;
  return /* @__PURE__ */ React.createElement(InlineField, __spreadProps(__spreadValues({}, restProps), {
    checked: calculatedChecked,
    type: "checkbox",
    ref
  }));
});
Checkbox.displayName = "Checkbox";
const CheckboxStandalone = forwardRef((_Ic, ref) => {
  var _Jc = _Ic, { checked } = _Jc, restProps = __objRest(_Jc, ["checked"]);
  const calculatedChecked = Array.isArray(checked) ? resolveCheckedGroup(checked) : checked;
  return /* @__PURE__ */ React.createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React.createElement(StyledInput, __spreadProps(__spreadValues({}, restProps), {
    checked: calculatedChecked,
    type: "checkbox",
    ref
  })));
});
const ContentBlock = ({
  width: width2 = "medium",
  data,
  children: children2
}) => /* @__PURE__ */ React.createElement(Box, __spreadValues({
  width: "full",
  maxWidth: width2,
  className: marginAuto
}, data ? buildDataAttributes(data) : void 0), children2);
const defaultParent = typeof document !== "undefined" ? document.body : null;
let counterMap = new WeakMap();
let uncontrolledNodes = new WeakMap();
let markerMap = {};
let lockCount = 0;
const ariaHideOthers = (originalTarget, {
  parentNode = defaultParent,
  markerName = "data-aria-hidden",
  delay: delay2 = 0
} = {}) => {
  const targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
  if (!markerMap[markerName]) {
    markerMap[markerName] = new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  const hiddenNodes = [];
  const walk = (parent) => {
    if (!parent || targets.indexOf(parent) >= 0) {
      return;
    }
    Array.prototype.forEach.call(parent.children, (node) => {
      if (targets.some((target) => node.contains(target))) {
        walk(node);
      } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
        const attr = node.getAttribute("aria-hidden");
        const alreadyHidden = attr !== null && attr !== "false";
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenNodes.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledNodes.set(node, true);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "true");
        }
        if (!alreadyHidden) {
          node.setAttribute("aria-hidden", "true");
        }
      }
    });
  };
  const timeout = delay2 ? setTimeout(() => walk(parentNode), delay2) : (walk(parentNode), null);
  lockCount++;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    hiddenNodes.forEach((node) => {
      var _a, _b;
      const counterValue = ((_a = counterMap.get(node)) != null ? _a : 1) - 1;
      const markerValue = ((_b = markerCounter.get(node)) != null ? _b : 1) - 1;
      counterMap.set(node, counterValue);
      markerCounter.set(node, markerValue);
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute("aria-hidden");
        }
        uncontrolledNodes.delete(node);
      }
      if (!markerValue) {
        node.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = new WeakMap();
      counterMap = new WeakMap();
      uncontrolledNodes = new WeakMap();
      markerMap = {};
    }
  };
};
const resolveDefaultComponent = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4"
};
const Heading = ({
  level,
  weight: weight2,
  component,
  children: children2,
  align,
  id,
  truncate: truncate2 = false,
  data
}) => /* @__PURE__ */ React.createElement(HeadingContext.Provider, {
  value: true
}, /* @__PURE__ */ React.createElement(Box, __spreadValues({
  id,
  component: component || resolveDefaultComponent[level],
  textAlign: align,
  className: useHeading({ weight: weight2, level, baseline: true })
}, data ? buildDataAttributes(data) : void 0), truncate2 ? /* @__PURE__ */ React.createElement(Truncate, null, children2) : children2));
const modalPadding = ["gutter", "large"];
const ModalContentHeader = forwardRef(({ title, headingLevel, description, descriptionId, center }, ref) => /* @__PURE__ */ React.createElement(Stack, {
  space: "medium"
}, /* @__PURE__ */ React.createElement(Heading, {
  level: headingLevel,
  align: center ? "center" : void 0
}, /* @__PURE__ */ React.createElement(Box, {
  ref,
  component: "span",
  tabIndex: -1,
  outline: "none",
  position: "relative",
  className: headingRoot
}, title, /* @__PURE__ */ React.createElement(Overlay, {
  boxShadow: "outlineFocus",
  borderRadius: "standard",
  transition: "fast",
  className: headingFocus,
  onlyVisibleForKeyboardNavigation: true
}))), description ? /* @__PURE__ */ React.createElement(Box, {
  id: descriptionId
}, description) : null));
const ModalContent = ({
  id,
  children: children2,
  description,
  onClose,
  width: width2,
  closeLabel = "Close",
  illustration,
  title,
  headingRef: headingRefProp,
  modalRef: modalRefProp,
  scrollLock = true,
  position,
  headingLevel,
  data
}) => {
  const defaultModalRef = useRef(null);
  const modalRef = modalRefProp || defaultModalRef;
  const defaultHeadingRef = useRef(null);
  const headingRef = headingRefProp || defaultHeadingRef;
  const descriptionId = `${id}_desc`;
  const handleEscape = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === "Escape") {
      event.stopPropagation();
      onClose();
    }
  };
  const justifyContent = { center: "center", right: "flexEnd" }[position];
  return /* @__PURE__ */ React.createElement(Box, {
    role: "dialog",
    "aria-label": title,
    "aria-describedby": description ? descriptionId : void 0,
    "aria-modal": "true",
    id,
    onKeyDown: handleEscape,
    position: "relative",
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    justifyContent
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent,
    height: position === "right" ? "full" : void 0,
    width: width2 !== "content" ? "full" : void 0,
    maxWidth: width2 !== "content" ? width2 : void 0
  }, /* @__PURE__ */ React.createElement(RemoveScroll, {
    ref: modalRef,
    forwardProps: true,
    enabled: scrollLock
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    background: "card",
    borderRadius: position === "center" ? "xlarge" : void 0,
    overflow: "auto",
    position: "relative",
    boxShadow: "large",
    width: width2 !== "content" ? "full" : void 0,
    height: position === "right" ? "full" : void 0,
    padding: modalPadding,
    className: [
      pointerEventsAll,
      position === "center" && maxSize[position]
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Stack, {
    space: "large"
  }, illustration ? /* @__PURE__ */ React.createElement(Stack, {
    space: "medium",
    align: "center"
  }, /* @__PURE__ */ React.createElement(Box, {
    paddingX: "gutter"
  }, illustration), /* @__PURE__ */ React.createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })) : /* @__PURE__ */ React.createElement(Columns, {
    space: "none"
  }, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })), /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Box, {
    width: "touchable"
  }))), /* @__PURE__ */ React.createElement(Fragment, null, children2)))), /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    zIndex: "sticky",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none"
  }, /* @__PURE__ */ React.createElement(Box, {
    width: "full",
    display: "flex",
    justifyContent: "flexEnd",
    paddingTop: modalPadding,
    paddingRight: modalPadding,
    className: position === "center" && maxSize[position]
  }, /* @__PURE__ */ React.createElement(Box, {
    className: [
      negativeMarginTop("xsmall"),
      negativeMarginRightXSmall
    ]
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    className: cropIconSpace[headingLevel]
  }, /* @__PURE__ */ React.createElement(Box, {
    component: "button",
    "aria-label": closeLabel,
    borderRadius: "full",
    background: "card",
    padding: "xsmall",
    cursor: "pointer",
    position: "relative",
    onClick: onClose,
    outline: "none",
    transition: "touchable",
    className: [
      closeButtonRoot,
      pointerEventsAll,
      virtualTouchable()
    ]
  }, /* @__PURE__ */ React.createElement(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    borderRadius: "full",
    className: closeButtonFocus
  }), /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    transition: "fast",
    className: [
      closeButtonOpacity,
      closeIcon[headingLevel]
    ]
  }, /* @__PURE__ */ React.createElement(IconClear, {
    size: "fill"
  })))))))));
};
const AllowCloseContext = createContext(true);
const ModalPortal = ({ children: children2 }) => {
  const [modalElement, setElement] = useState(null);
  useEffect(() => {
    const modalContainerId = "braid-modal-container";
    let element = document.getElementById(modalContainerId);
    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", modalContainerId);
      element.setAttribute("class", fixedStackingContext);
      document.body.appendChild(element);
    }
    setElement(element);
  }, []);
  if (!modalElement) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(BraidPortal, {
    container: modalElement
  }, children2);
};
const OPEN_MODAL = 1;
const CLOSE_MODAL = 2;
const ANIMATION_COMPLETE = 3;
const INITIAL = 1;
const OPEN = 2;
const OPENING = 3;
const CLOSED = 4;
const CLOSING = 5;
const reducer$1 = (prevState, action) => {
  switch (action) {
    case OPEN_MODAL: {
      switch (prevState) {
        case INITIAL:
        case CLOSING:
        case CLOSED: {
          return OPENING;
        }
      }
    }
    case CLOSE_MODAL: {
      switch (prevState) {
        case OPEN:
        case OPENING: {
          return CLOSING;
        }
      }
    }
    case ANIMATION_COMPLETE: {
      switch (prevState) {
        case CLOSING: {
          return CLOSED;
        }
        case OPENING: {
          return OPEN;
        }
      }
    }
  }
  return prevState;
};
const ANIMATION_DURATION = 300;
const Modal = ({
  id,
  open,
  children: children2,
  description,
  onClose,
  width: width2,
  closeLabel,
  illustration,
  title,
  headingLevel,
  position,
  data
}) => {
  const [trapActive, setTrapActive] = useState(true);
  const [state, dispatch] = useReducer(reducer$1, INITIAL);
  const allowClose = useContext(AllowCloseContext);
  const shouldFocus = typeof document !== "undefined" && typeof document.hasFocus === "function" && document.hasFocus();
  const openRef = useRef(open);
  const modalRef = useRef(null);
  const headingRef = useRef(null);
  const closeHandlerRef = useRef(onClose);
  const initiateClose = () => {
    if (allowClose) {
      dispatch(CLOSE_MODAL);
    }
  };
  useEffect(() => {
    openRef.current = open;
    dispatch(open ? OPEN_MODAL : CLOSE_MODAL);
  }, [open]);
  useEffect(() => {
    if (state === CLOSING) {
      const timer = setTimeout(() => {
        dispatch(ANIMATION_COMPLETE);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
    if (state === CLOSED && openRef.current) {
      closeHandlerRef.current(false);
    }
  }, [state]);
  const shouldAriaHideOthers = state === OPEN || state === CLOSING;
  useEffect(() => {
    if (shouldAriaHideOthers && modalRef.current) {
      return ariaHideOthers(modalRef.current, { delay: ANIMATION_DURATION });
    }
  }, [shouldAriaHideOthers]);
  useEffect(() => {
    if (typeof onClose === "function") {
      closeHandlerRef.current = onClose;
    }
  }, [onClose]);
  useEffect(() => {
    const event = trapActive ? "blur" : "focus";
    const handleEvent = () => setTrapActive(!trapActive);
    window.addEventListener(event, handleEvent);
    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, [trapActive]);
  return state === OPENING || state === OPEN || state === CLOSING ? /* @__PURE__ */ React.createElement(ModalPortal, null, /* @__PURE__ */ React.createElement(FocusLock, {
    className: resetStackingContext,
    disabled: !trapActive,
    autoFocus: false,
    onActivation: () => {
      if (state === OPEN) {
        return;
      }
      if (headingRef.current && shouldFocus) {
        headingRef.current.focus();
      }
      dispatch(ANIMATION_COMPLETE);
    },
    returnFocus: true
  }, /* @__PURE__ */ React.createElement(Box, {
    onClick: state === OPEN ? initiateClose : void 0,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "modalBackdrop",
    transition: position === "center" ? "fast" : void 0,
    opacity: state !== OPEN ? 0 : void 0,
    pointerEvents: state === CLOSING ? "none" : void 0,
    className: [
      backdrop$1,
      position in transition && transition[position]
    ]
  }), /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "modal",
    pointerEvents: "none",
    transition: "fast",
    opacity: state !== OPEN ? 0 : void 0
  }, position === "right" ? { paddingLeft: ["none", "xlarge"] } : { padding: externalGutter }), {
    className: [
      modalContainer,
      position in transition && transition[position],
      state === OPENING && entrance[position],
      state === CLOSING && position in exit && exit[position]
    ]
  }), /* @__PURE__ */ React.createElement(ModalContent, {
    id,
    description,
    onClose: initiateClose,
    width: width2,
    closeLabel,
    illustration,
    title,
    headingLevel,
    headingRef,
    modalRef,
    position,
    scrollLock: !(state === CLOSING),
    data
  }, children2)))) : null;
};
const defaultWidth$1 = "small";
const modalStyle$1 = {
  position: "center",
  headingLevel: "3"
};
const Dialog = (_Kc) => {
  var _Lc = _Kc, { width: width2 = defaultWidth$1 } = _Lc, restProps = __objRest(_Lc, ["width"]);
  return /* @__PURE__ */ React.createElement(Modal, __spreadValues(__spreadValues({
    width: width2
  }, restProps), modalStyle$1));
};
const PrivateTextLinkRenderer = (props) => {
  const actionsContext = useContext(ActionsContext);
  assert((() => {
    const inText = useContext(TextContext);
    const inHeading = useContext(HeadingContext);
    const inActions = actionsContext !== null;
    return inText || inHeading || inActions;
  })(), "TextLink components must be rendered within a Text or Heading component.");
  if (actionsContext !== null) {
    return /* @__PURE__ */ React.createElement(ButtonLink, __spreadValues({
      size: actionsContext.size
    }, props));
  }
  return /* @__PURE__ */ React.createElement(InlineLink, __spreadValues({}, props));
};
const TextLinkRenderer = PrivateTextLinkRenderer;
function useDefaultLinkWeight() {
  const backgroundContext = useBackground();
  const inHeading = useContext(HeadingContext);
  const textContext = useContext(TextContext);
  const hasPlainBackground = backgroundContext === "body" || backgroundContext === "card" || backgroundContext === "neutralLight";
  const inPlainText = !textContext || textContext.tone === void 0 || textContext.tone === "neutral" || textContext.tone === "secondary";
  return hasPlainBackground && (inHeading || inPlainText) ? "regular" : "weak";
}
function useLinkStyles(weight2, showVisited) {
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useWeight("medium");
  const linkTone = useTextTone({ tone: "link" });
  return [
    weight2 === "weak" ? underlineAlways : [linkTone, underlineOnHoverOnly],
    !inHeading && weight2 !== "weak" ? mediumWeight : null,
    showVisited ? visited : null
  ];
}
function InlineLink({
  reset = "a",
  weight: weightProp,
  showVisited = false,
  hitArea = "standard",
  children: children2
}) {
  const defaultWeight2 = useDefaultLinkWeight();
  const weight2 = weightProp != null ? weightProp : defaultWeight2;
  return /* @__PURE__ */ React.createElement(TextLinkRendererContext.Provider, {
    value: weight2
  }, children2({
    style: {},
    className: clsx(useLinkStyles(weight2, showVisited), reset !== false ? atoms({
      reset: typeof reset === "string" ? reset : "a"
    }) : null, atoms({
      cursor: "pointer"
    }), hitArea === "large" && virtualTouchable())
  }));
}
function ButtonLink({
  reset = "a",
  size: size2 = "standard",
  weight: weight2,
  showVisited = false,
  hitArea,
  children: children2
}) {
  const textLinkWeight = useDefaultLinkWeight();
  const tone = textLinkWeight === "weak" ? "neutral" : "link";
  const buttonLinkTextProps = {
    size: size2,
    tone,
    baseline: false
  };
  assert(!weight2, 'TextLink components should not set "weight" within Actions');
  assert(!hitArea, 'TextLink components should not set "hitArea" within Actions');
  return /* @__PURE__ */ React.createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React.createElement(TextLinkRendererContext.Provider, {
    value: textLinkWeight
  }, /* @__PURE__ */ React.createElement(TextContext.Provider, {
    value: buttonLinkTextProps
  }, children2({
    style: {},
    className: clsx(button$2, useLinkStyles(textLinkWeight, showVisited), useText(buttonLinkTextProps), size2 === "standard" ? touchableText.standard : null, reset !== false ? atoms({
      reset: typeof reset === "string" ? reset : "a"
    }) : null, atoms({
      cursor: "pointer",
      outline: "none",
      display: "block",
      width: "full",
      paddingX: size2 === "small" ? "xsmall" : "small",
      paddingY: size2 === "small" ? "xsmall" : void 0,
      borderRadius: "standard",
      textAlign: "center",
      userSelect: "none"
    }))
  }))), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "focus",
    className: focusOverlay$4
  }));
}
const noop = () => {
};
const TextLinkButton = ({
  weight: weight2,
  hitArea,
  id,
  onClick = noop,
  data,
  children: children2,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy
}) => {
  const buttonRef = useRef(null);
  const handleKeyboard = useCallback((event) => {
    var _a;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      (_a = buttonRef.current) == null ? void 0 : _a.click();
    }
  }, [buttonRef]);
  return /* @__PURE__ */ React.createElement(PrivateTextLinkRenderer, {
    reset: false,
    weight: weight2,
    hitArea
  }, (styleProps) => /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadValues({
    ref: buttonRef,
    role: "button",
    tabIndex: 0,
    component: "span",
    onClick,
    onKeyDown: handleKeyboard,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-describedby": ariaDescribedBy,
    id
  }, styleProps), data ? buildDataAttributes(data) : void 0), children2));
};
const Disclosure = (_Mc) => {
  var _Nc = _Mc, {
    id,
    expandLabel,
    collapseLabel = expandLabel,
    space = "medium",
    children: children2,
    data
  } = _Nc, restProps = __objRest(_Nc, [
    "id",
    "expandLabel",
    "collapseLabel",
    "space",
    "children",
    "data"
  ]);
  assert(typeof expandLabel === "undefined" || typeof expandLabel === "string", "'expandLabel' must be a string");
  assert(typeof collapseLabel === "undefined" || typeof collapseLabel === "string", "'collapseLabel' must be a string");
  const { expanded, buttonProps, contentProps } = useDisclosure(__spreadValues({
    id
  }, restProps.expanded !== void 0 ? {
    onToggle: restProps.onToggle,
    expanded: restProps.expanded
  } : {
    onToggle: restProps.onToggle
  }));
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    userSelect: "none"
  }, /* @__PURE__ */ React.createElement(Text, null, /* @__PURE__ */ React.createElement(TextLinkButton, __spreadValues({
    hitArea: "large"
  }, buttonProps), expanded ? collapseLabel : expandLabel, /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    paddingLeft: "xxsmall"
  }, /* @__PURE__ */ React.createElement(IconChevron, {
    direction: expanded ? "up" : "down",
    alignY: "lowercase"
  }))))), /* @__PURE__ */ React.createElement(Box, __spreadValues({
    paddingTop: space,
    display: expanded ? "block" : "none"
  }, contentProps), children2));
};
const validWidths = ["small", "medium", "large"];
const defaultWidth = "medium";
const modalStyle = {
  position: "right",
  headingLevel: "2",
  illustration: void 0
};
const Drawer = (_Oc) => {
  var _Pc = _Oc, { width: width2 = defaultWidth } = _Pc, restProps = __objRest(_Pc, ["width"]);
  assert(validWidths.indexOf(width2) >= 0, `Invalid width: ${width2}`);
  return /* @__PURE__ */ React.createElement(Modal, __spreadValues(__spreadValues({
    width: width2
  }, restProps), modalStyle));
};
const Dropdown = forwardRef((props, ref) => {
  const _a = props, {
    children: children2,
    value,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    disabled
  } = _a, restProps = __objRest(_a, [
    "children",
    "value",
    "onChange",
    "onBlur",
    "onFocus",
    "placeholder",
    "disabled"
  ]);
  return /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    disabled,
    labelId: void 0,
    prefix: void 0,
    secondaryMessage: null,
    value
  }), (overlays, _b, icon2) => {
    var _c = _b, { className, paddingRight } = _c, fieldProps = __objRest(_c, ["className", "paddingRight"]);
    return /* @__PURE__ */ React.createElement(Fragment, null, icon2, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
      component: "select",
      value,
      defaultValue: typeof value === "undefined" ? "" : void 0,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      className: [field$1, className]
    }, fieldProps), {
      ref
    }), !value || placeholder ? /* @__PURE__ */ React.createElement("option", {
      value: "",
      disabled: true
    }, placeholder) : null, children2), overlays, /* @__PURE__ */ React.createElement(Box, {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      height: "touchable",
      width: "touchable",
      top: 0,
      right: 0
    }, /* @__PURE__ */ React.createElement(Text, {
      baseline: false
    }, /* @__PURE__ */ React.createElement(IconChevron, {
      tone: disabled ? "secondary" : void 0
    }))));
  });
});
Dropdown.displayName = "Dropdown";
const Link = forwardRef((_Qc, ref) => {
  var _Rc = _Qc, { href, className } = _Rc, restProps = __objRest(_Rc, ["href", "className"]);
  const LinkComponent = useLinkComponent(ref);
  return /* @__PURE__ */ React.createElement(LinkComponent, __spreadValues({
    ref,
    href,
    className: clsx(atoms({ reset: "a" }), className)
  }, restProps));
});
Link.displayName = "Link";
const Loader = ({
  size: size2 = "standard",
  "aria-label": ariaLabel = "Loading",
  delayVisibility = false,
  data
}) => {
  const parentBackgroundColor = useBackgroundLightness();
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    display: "flex",
    alignItems: "center",
    className: [
      rootSize[size2],
      delayVisibility ? delay : void 0
    ],
    "aria-label": ariaLabel
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: [
      atoms({ reset: "svg" }),
      size$2[size2],
      color[parentBackgroundColor]
    ].join(" "),
    viewBox: "0 0 300 134",
    "aria-hidden": true
  }, /* @__PURE__ */ React.createElement("circle", {
    className: circle,
    cy: "67",
    cx: "40",
    r: "40"
  }), /* @__PURE__ */ React.createElement("circle", {
    className: circle,
    cy: "67",
    cx: "150",
    r: "40"
  }), /* @__PURE__ */ React.createElement("circle", {
    className: circle,
    cy: "67",
    cx: "260",
    r: "40"
  })));
};
const MenuRendererItemContext = createContext(null);
const actionTypes = {
  MENU_TRIGGER_UP: 0,
  MENU_ITEM_UP: 1,
  MENU_TRIGGER_DOWN: 2,
  MENU_ITEM_DOWN: 3,
  MENU_ITEM_ESCAPE: 4,
  MENU_ITEM_TAB: 5,
  MENU_ITEM_ENTER: 6,
  MENU_ITEM_SPACE: 7,
  MENU_ITEM_CLICK: 8,
  MENU_ITEM_HOVER: 9,
  MENU_TRIGGER_ENTER: 10,
  MENU_TRIGGER_SPACE: 11,
  MENU_TRIGGER_CLICK: 12,
  MENU_TRIGGER_TAB: 13,
  MENU_TRIGGER_ESCAPE: 14,
  BACKDROP_CLICK: 15,
  MENU_MOUSE_LEAVE: 16
};
const {
  MENU_ITEM_UP: MENU_ITEM_UP$1,
  MENU_ITEM_DOWN: MENU_ITEM_DOWN$1,
  MENU_ITEM_ESCAPE: MENU_ITEM_ESCAPE$1,
  MENU_ITEM_TAB: MENU_ITEM_TAB$1,
  MENU_ITEM_ENTER: MENU_ITEM_ENTER$1,
  MENU_ITEM_SPACE: MENU_ITEM_SPACE$1,
  MENU_ITEM_CLICK: MENU_ITEM_CLICK$1,
  MENU_ITEM_HOVER: MENU_ITEM_HOVER$1
} = actionTypes;
const menuItemChildrenSize = "standard";
function useMenuItem({
  displayName = "MenuItem",
  formElement = false,
  tone,
  onClick,
  data
}) {
  const menuRendererItemContext = useContext(MenuRendererItemContext);
  assert(menuRendererItemContext !== null, `${displayName} must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`);
  if (menuRendererItemContext === null) {
    throw new Error(`${displayName} element rendered outside menu context`);
  }
  const { isHighlighted, index, dispatch, focusTrigger } = menuRendererItemContext;
  const menuItemRef = useRef(null);
  useEffect(() => {
    var _a;
    if (isHighlighted) {
      (_a = menuItemRef.current) == null ? void 0 : _a.focus();
    }
  }, [isHighlighted]);
  const onKeyDown = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === "Tab") {
      dispatch({ type: MENU_ITEM_TAB$1 });
    }
    const isArrowPress = targetKey.indexOf("Arrow") === 0;
    const isActionKeyPress = targetKey === "Enter" || targetKey === " ";
    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };
  const onKeyUp = (event) => {
    var _a;
    const targetKey = normalizeKey(event);
    const closeActionKeys = ["Enter", " ", "Escape"];
    const action = {
      ArrowDown: { type: MENU_ITEM_DOWN$1 },
      ArrowUp: { type: MENU_ITEM_UP$1 },
      Enter: { type: MENU_ITEM_ENTER$1, formElement },
      " ": { type: MENU_ITEM_SPACE$1, formElement },
      Escape: { type: MENU_ITEM_ESCAPE$1 }
    };
    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
    if (targetKey === "Enter" || targetKey === " ") {
      (_a = menuItemRef.current) == null ? void 0 : _a.click();
    }
    if (!formElement && closeActionKeys.indexOf(targetKey) > -1 || formElement && targetKey === "Escape") {
      focusTrigger();
    }
  };
  const hoverBackground = tone === "critical" ? "criticalLight" : "selection";
  return {
    MenuItemChildren,
    menuItemProps: __spreadValues({
      role: "menuitem",
      tabIndex: -1,
      ref: menuItemRef,
      onKeyUp,
      onKeyDown,
      onMouseEnter: () => dispatch({ type: MENU_ITEM_HOVER$1, value: index }),
      onClick: (event) => {
        event.stopPropagation();
        dispatch({ type: MENU_ITEM_CLICK$1, formElement });
        if (typeof onClick === "function") {
          onClick();
        }
      },
      className: [
        menuItem,
        touchableText[menuItemChildrenSize],
        atoms({
          display: "flex",
          alignItems: "center",
          width: "full",
          paddingX: "small",
          background: isHighlighted ? hoverBackground : void 0,
          cursor: "pointer",
          textAlign: "left",
          outline: "none"
        })
      ]
    }, buildDataAttributes(data))
  };
}
function MenuItemChildren({ tone, children: children2 }) {
  return /* @__PURE__ */ React.createElement(Box, {
    userSelect: "none"
  }, /* @__PURE__ */ React.createElement(Text, {
    size: menuItemChildrenSize,
    baseline: false,
    tone: tone === "critical" ? tone : void 0
  }, children2));
}
const MenuItem = ({ children: children2, onClick, data, tone }) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    tone,
    onClick,
    data
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, menuItemProps), {
    component: "button",
    type: "button"
  }), /* @__PURE__ */ React.createElement(MenuItemChildren2, {
    tone
  }, children2));
};
const MenuItemCheckbox = ({
  children: children2,
  onChange,
  checked,
  data
}) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    onClick: () => onChange(!checked),
    formElement: true,
    data
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, menuItemProps), {
    "aria-checked": checked,
    role: "menuitemcheckbox",
    component: "button",
    type: "button",
    display: "flex"
  }), /* @__PURE__ */ React.createElement(Box, {
    borderRadius: "standard",
    boxShadow: "borderField",
    position: "relative",
    background: "card",
    marginRight: "xsmall",
    className: checkboxBorder
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    borderRadius: "standard",
    transition: "fast",
    opacity: checked ? void 0 : 0,
    className: checkboxPadding
  }, /* @__PURE__ */ React.createElement(IconTick, {
    size: "fill"
  }))), /* @__PURE__ */ React.createElement(MenuItemChildren2, {
    tone: void 0
  }, children2));
};
const MenuItemLink = ({
  href,
  target,
  rel,
  onClick,
  tone,
  data,
  children: children2
}) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    displayName: "MenuItemLink",
    onClick,
    tone,
    data
  });
  return /* @__PURE__ */ React.createElement(Link, __spreadProps(__spreadValues({}, menuItemProps), {
    href,
    target,
    rel
  }), /* @__PURE__ */ React.createElement(MenuItemChildren2, {
    tone
  }, children2));
};
const MenuRendererContext = createContext(false);
const MenuItemDivider = () => {
  assert(useContext(MenuRendererContext), "MenuItemDivider must be rendered within a menu component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItemDivider");
  return /* @__PURE__ */ React.createElement(Box, {
    paddingY: "xxsmall"
  }, /* @__PURE__ */ React.createElement(Divider, null));
};
const {
  MENU_TRIGGER_UP,
  MENU_ITEM_UP,
  MENU_TRIGGER_DOWN,
  MENU_ITEM_DOWN,
  MENU_ITEM_ESCAPE,
  MENU_ITEM_TAB,
  MENU_ITEM_ENTER,
  MENU_ITEM_SPACE,
  MENU_ITEM_CLICK,
  MENU_ITEM_HOVER,
  MENU_TRIGGER_ENTER,
  MENU_TRIGGER_SPACE,
  MENU_TRIGGER_CLICK,
  MENU_TRIGGER_TAB,
  MENU_TRIGGER_ESCAPE,
  BACKDROP_CLICK,
  MENU_MOUSE_LEAVE
} = actionTypes;
const CLOSED_INDEX = -1;
const initialState = {
  open: false,
  highlightIndex: CLOSED_INDEX
};
const isDivider = (node) => typeof node === "object" && node !== null && "type" in node && node.type === MenuItemDivider;
const borderRadius$3 = "large";
const MenuRenderer = ({
  onOpen,
  onClose,
  trigger,
  align = "left",
  offsetSpace = "none",
  children: children2,
  data
}) => {
  const buttonRef = useRef(null);
  const hasOpened = useRef(false);
  const items = flattenChildren(children2);
  const itemCount = items.filter((item) => !isDivider(item)).length;
  assert(items.every((item) => typeof item === "object" && "type" in item && (item.type === MenuItem || item.type === MenuItemCheckbox || item.type === MenuItemLink || item.type === MenuItemDivider)), "All child nodes within a menu component must be a MenuItem, MenuItemLink, MenuItemCheckbox or MenuItemDivider: https://seek-oss.github.io/braid-design-system/components/MenuRenderer");
  const [{ open, highlightIndex }, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case MENU_TRIGGER_UP:
      case MENU_ITEM_UP: {
        return __spreadProps(__spreadValues({}, state), {
          open: true,
          highlightIndex: getNextIndex(-1, state.highlightIndex, itemCount)
        });
      }
      case MENU_TRIGGER_DOWN:
      case MENU_ITEM_DOWN: {
        return __spreadProps(__spreadValues({}, state), {
          open: true,
          highlightIndex: getNextIndex(1, state.highlightIndex, itemCount)
        });
      }
      case BACKDROP_CLICK:
      case MENU_TRIGGER_ESCAPE:
      case MENU_TRIGGER_TAB:
      case MENU_ITEM_ESCAPE:
      case MENU_ITEM_TAB:
      case MENU_ITEM_ENTER:
      case MENU_ITEM_SPACE:
      case MENU_ITEM_CLICK: {
        if ("formElement" in action && action.formElement) {
          return state;
        }
        return __spreadProps(__spreadValues({}, state), {
          open: false,
          highlightIndex: CLOSED_INDEX
        });
      }
      case MENU_ITEM_HOVER: {
        return __spreadProps(__spreadValues({}, state), { highlightIndex: action.value });
      }
      case MENU_TRIGGER_ENTER:
      case MENU_TRIGGER_SPACE: {
        return __spreadProps(__spreadValues({}, state), {
          open: !state.open,
          highlightIndex: state.open ? CLOSED_INDEX : 0
        });
      }
      case MENU_MOUSE_LEAVE: {
        return __spreadProps(__spreadValues({}, state), {
          highlightIndex: CLOSED_INDEX
        });
      }
      case MENU_TRIGGER_CLICK: {
        return __spreadProps(__spreadValues({}, state), { open: !state.open });
      }
      default:
        return state;
    }
  }, initialState);
  useEffect(() => {
    if (open) {
      hasOpened.current = true;
      if (typeof onOpen === "function") {
        onOpen();
      }
    } else if (typeof onClose === "function" && hasOpened.current) {
      onClose();
    }
  }, [onClose, onOpen, open]);
  const focusTrigger = () => {
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  const onTriggerKeyUp = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === " " && /firefox|iceweasel|fxios/i.test(navigator.userAgent)) {
      return;
    }
    const action = {
      ArrowDown: { type: MENU_TRIGGER_DOWN },
      ArrowUp: { type: MENU_TRIGGER_UP },
      Enter: { type: MENU_TRIGGER_ENTER },
      " ": { type: MENU_TRIGGER_SPACE },
      Escape: { type: MENU_TRIGGER_ESCAPE }
    };
    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };
  const onTriggerKeyDown = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === "Tab") {
      dispatch({ type: MENU_ITEM_TAB });
    }
    const isArrowPress = targetKey.indexOf("Arrow") === 0;
    const isActionKeyPress = targetKey === "Enter" || targetKey === " ";
    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };
  const triggerProps = {
    "aria-haspopup": true,
    "aria-expanded": open,
    role: "button",
    tabIndex: 0,
    ref: buttonRef,
    onKeyUp: onTriggerKeyUp,
    onKeyDown: onTriggerKeyDown,
    onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch({ type: MENU_TRIGGER_CLICK });
    }
  };
  let dividerCount = 0;
  return /* @__PURE__ */ React.createElement(MenuRendererContext.Provider, {
    value: true
  }, /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: root$5
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    display: "inlineBlock",
    position: "relative"
  }, trigger(triggerProps, { open }), /* @__PURE__ */ React.createElement(Box, {
    role: "menu",
    position: "absolute",
    zIndex: "dropdown",
    onMouseLeave: () => {
      dispatch({ type: MENU_MOUSE_LEAVE });
      focusTrigger();
    },
    boxShadow: "medium",
    borderRadius: borderRadius$3,
    background: "card",
    marginTop: offsetSpace,
    transition: "fast",
    right: align === "right" ? 0 : void 0,
    opacity: !open ? 0 : void 0,
    className: !open && menuIsClosed
  }, /* @__PURE__ */ React.createElement(Box, {
    paddingY: "xxsmall"
  }, items.map((item, i) => {
    if (isDivider(item)) {
      dividerCount++;
      return item;
    }
    const menuItemIndex = i - dividerCount;
    return /* @__PURE__ */ React.createElement(MenuRendererItemContext.Provider, {
      key: menuItemIndex,
      value: {
        isHighlighted: menuItemIndex === highlightIndex,
        index: menuItemIndex,
        dispatch,
        focusTrigger
      }
    }, item);
  })), /* @__PURE__ */ React.createElement(Overlay, {
    boxShadow: "borderStandard",
    borderRadius: borderRadius$3,
    visible: true
  }))), open ? /* @__PURE__ */ React.createElement(Box, {
    onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch({ type: BACKDROP_CLICK });
    },
    position: "fixed",
    zIndex: "dropdownBackdrop",
    top: 0,
    left: 0,
    className: backdrop$2
  }) : null));
};
const OverflowButton = forwardRef(({
  label: label2,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded
}, forwardedRef) => /* @__PURE__ */ React.createElement(IconButton, {
  label: label2,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded,
  ref: forwardedRef
}, (iconProps) => /* @__PURE__ */ React.createElement(IconOverflow, __spreadValues({}, iconProps))));
const OverflowMenu = (_Sc) => {
  var _Tc = _Sc, {
    label: label2,
    children: children2
  } = _Tc, menuProps = __objRest(_Tc, [
    "label",
    "children"
  ]);
  return /* @__PURE__ */ React.createElement(MenuRenderer, __spreadValues({
    trigger: (triggerProps, { open }) => /* @__PURE__ */ React.createElement(Box, {
      className: triggerOffset
    }, /* @__PURE__ */ React.createElement(OverflowButton, __spreadValues({
      label: label2,
      active: open
    }, triggerProps))),
    align: "right",
    offsetSpace: "small"
  }, menuProps), children2);
};
const FieldGroup = (_Uc) => {
  var _Vc = _Uc, {
    id,
    disabled,
    children: children2,
    secondaryLabel,
    tertiaryLabel,
    description,
    message,
    reserveMessageSpace = false,
    tone,
    required,
    role,
    space = "xsmall",
    data
  } = _Vc, restProps = __objRest(_Vc, [
    "id",
    "disabled",
    "children",
    "secondaryLabel",
    "tertiaryLabel",
    "description",
    "message",
    "reserveMessageSpace",
    "tone",
    "required",
    "role",
    "space",
    "data"
  ]);
  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const descriptionId = description ? `${id}-description` : void 0;
  let ariaLabelledBy;
  let ariaLabel;
  if ("label" in restProps && restProps.label) {
    ariaLabelledBy = labelId;
  } else if ("aria-labelledby" in restProps && restProps["aria-labelledby"]) {
    ariaLabelledBy = restProps["aria-labelledby"];
  } else if ("aria-label" in restProps && restProps["aria-label"]) {
    ariaLabel = restProps["aria-label"];
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "fieldset",
    disabled,
    id,
    role,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-required": required
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Stack, {
    space
  }, "label" in restProps && restProps.label ? /* @__PURE__ */ React.createElement(Box, {
    component: "legend",
    id: labelId
  }, /* @__PURE__ */ React.createElement(FieldLabel, {
    htmlFor: false,
    label: restProps.label,
    secondaryLabel,
    tertiaryLabel,
    description,
    descriptionId
  })) : null, children2({
    disabled,
    "aria-describedby": mergeIds(message ? messageId : void 0, descriptionId)
  }), message || reserveMessageSpace ? /* @__PURE__ */ React.createElement(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    reserveMessageSpace
  }) : null));
};
const defaultMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const getMonths = (monthNames) => monthNames.map((monthName, i) => /* @__PURE__ */ React.createElement("option", {
  value: i + 1,
  key: i
}, monthName));
const getYears = (min, max, ascending) => [...new Array(max - min + 1)].map((_v, i) => {
  const yearStr = String(ascending ? i + min : max - i);
  return /* @__PURE__ */ React.createElement("option", {
    value: yearStr,
    key: yearStr
  }, yearStr);
});
const currYear = new Date().getFullYear();
const renderNativeInput = isMobile({ tablet: true });
const customValueToString = ({ month, year }) => month && year ? `${year}-${month < 10 ? "0" : ""}${month}` : void 0;
const stringToCustomValue = (value) => {
  const [year, month] = value.split("-");
  return {
    month: parseInt(month, 10),
    year: parseInt(year, 10)
  };
};
const makeChangeHandler = (onChange, value, fieldType) => (event) => {
  if (typeof onChange === "function") {
    onChange({
      month: {
        year: value && value.year ? value.year : void 0,
        month: parseInt(event.target.value, 10) || void 0
      },
      year: {
        month: value && value.month ? value.month : void 0,
        year: parseInt(event.target.value, 10) || void 0
      },
      native: stringToCustomValue(event.target.value)
    }[fieldType]);
  }
};
const MonthPicker = (_Wc) => {
  var _Xc = _Wc, {
    id,
    value,
    onChange,
    onBlur,
    onFocus,
    tone,
    disabled,
    minYear = currYear - 100,
    maxYear = currYear,
    ascendingYears = false,
    monthLabel = "Month",
    yearLabel = "Year",
    monthNames = defaultMonthNames
  } = _Xc, restProps = __objRest(_Xc, [
    "id",
    "value",
    "onChange",
    "onBlur",
    "onFocus",
    "tone",
    "disabled",
    "minYear",
    "maxYear",
    "ascendingYears",
    "monthLabel",
    "yearLabel",
    "monthNames"
  ]);
  assert(monthNames.length === 12, "monthNames array must contain 12 items");
  const currentValue = {
    month: value && value.month ? value.month : void 0,
    year: value && value.year ? value.year : void 0
  };
  const monthRef = createRef();
  const yearRef = createRef();
  const monthId = `${id}-month`;
  const yearId = `${id}-year`;
  const blurHandler = onBlur ? (event) => {
    const fireIfExternal = (element) => {
      if (element !== monthRef.current && element !== yearRef.current) {
        onBlur();
      }
    };
    if (event.relatedTarget !== null) {
      fireIfExternal(event.relatedTarget);
    } else {
      setTimeout(() => {
        fireIfExternal(document.activeElement);
      });
    }
  } : void 0;
  const focusHandler = onFocus ? (event) => {
    if (event.relatedTarget !== monthRef.current && event.relatedTarget !== yearRef.current) {
      onFocus();
    }
  } : void 0;
  const nativeField = /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({
    id,
    tone,
    disabled,
    value: customValueToString(currentValue)
  }, restProps), {
    icon: void 0,
    prefix: void 0,
    labelId: void 0,
    name: void 0,
    autoComplete: void 0,
    secondaryMessage: null
  }), (overlays, _a) => {
    var _b = _a, { className } = _b, fieldProps = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
      component: "input",
      type: "month",
      value: customValueToString(currentValue),
      onChange: onChange && makeChangeHandler(onChange, value, "native"),
      onBlur,
      onFocus
    }, fieldProps), {
      height: "touchable",
      className: [className, nativeInput]
    })), overlays);
  });
  const customFieldGroup = /* @__PURE__ */ React.createElement(FieldGroup, __spreadValues({
    id,
    tone,
    disabled
  }, restProps), (fieldGroupProps) => /* @__PURE__ */ React.createElement(Columns, {
    space: "medium"
  }, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Dropdown, __spreadProps(__spreadValues({
    id: monthId,
    value: currentValue.month || "",
    onChange: makeChangeHandler(onChange, value, "month"),
    onBlur: blurHandler,
    onFocus: focusHandler,
    tone,
    placeholder: monthLabel,
    "aria-label": monthLabel
  }, fieldGroupProps), {
    ref: monthRef
  }), getMonths(monthNames))), /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Dropdown, __spreadProps(__spreadValues({
    id: yearId,
    value: currentValue.year || "",
    onChange: makeChangeHandler(onChange, value, "year"),
    onBlur: blurHandler,
    onFocus: focusHandler,
    tone,
    placeholder: yearLabel,
    "aria-label": yearLabel
  }, fieldGroupProps), {
    ref: yearRef
  }), getYears(minYear, maxYear, ascendingYears)))));
  return renderNativeInput ? nativeField : customFieldGroup;
};
MonthPicker.displayName = "MonthPicker";
const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical
};
const Notice = ({ tone = "info", data, children: children2 }) => {
  const Icon2 = icons[tone];
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    role: "alert",
    "aria-live": "polite"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Columns, {
    space: "xsmall"
  }, /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Icon2, {
    tone
  })), /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Box, {
    className: textAlignedToIcon.standard
  }, /* @__PURE__ */ React.createElement(DefaultTextPropsProvider, {
    tone
  }, children2)))));
};
const maxPages = 7;
const paginate = ({ page, total }) => {
  const half = (maxPages - 1) / 2;
  const smallerHalf = Math.floor(half);
  const largerHalf = Math.ceil(half);
  const pageCount = Math.min(maxPages, total);
  let minPage = page - smallerHalf;
  if (page - smallerHalf <= 1) {
    minPage = 1;
  } else if (page + largerHalf >= total) {
    minPage = Math.max(1, total - maxPages + 1);
  }
  return Array.from(Array(pageCount).keys()).map((p) => p + minPage);
};
const borderRadius$2 = "large";
const PageNav = ({
  label: label2,
  direction
}) => {
  const isPrevious = direction === "prev";
  return /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    className: hover,
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "touchable",
    paddingX: "xsmall"
  }, /* @__PURE__ */ React.createElement(Overlay, {
    component: "span",
    background: "selection",
    borderRadius: borderRadius$2,
    transition: "fast",
    className: background
  }), /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, /* @__PURE__ */ React.createElement(Text, null, isPrevious ? /* @__PURE__ */ React.createElement(IconChevron, {
    direction: "left"
  }) : null, /* @__PURE__ */ React.createElement(Box, {
    display: isPrevious ? ["none", "inline"] : void 0,
    component: "span",
    marginLeft: isPrevious ? "xxsmall" : void 0,
    marginRight: direction === "next" ? "xxsmall" : void 0
  }, label2), direction === "next" ? /* @__PURE__ */ React.createElement(IconChevron, {
    direction: "right"
  }) : null)));
};
const tabletButtonSpacing = "xxsmall";
const Page = ({ number, current: current$1 }) => {
  const parentBackground = useBackground();
  return /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "touchable",
    width: "touchable",
    position: "relative",
    className: hover
  }, /* @__PURE__ */ React.createElement(Overlay, {
    component: "span",
    background: current$1 ? "formAccent" : "selection",
    transition: current$1 ? void 0 : "fast",
    borderRadius: borderRadius$2,
    className: [background, current$1 ? current : void 0]
  }), /* @__PURE__ */ React.createElement(Overlay, {
    component: "span",
    borderRadius: borderRadius$2,
    boxShadow: "borderFormAccent",
    className: parentBackground !== "card" && current$1 ? currentKeyline : void 0
  }), /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    align: "center",
    weight: current$1 ? "medium" : void 0,
    tone: current$1 ? "formAccent" : void 0
  }, number)));
};
const Pagination = ({
  page,
  total,
  linkProps,
  label: label2,
  pageLabel = (p) => `Go to page ${p}`,
  nextLabel = "Next",
  previousLabel = "Previous",
  data
}) => {
  assert(total >= 1, `\`total\` must be at least 1`);
  assert(page >= 1 && page <= total, `\`page\` must be between 1 and ${total}`);
  const pages = paginate({ page, total });
  const showPrevious = page > 1;
  const showNext = page < total;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    component: "nav",
    "aria-label": label2
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    component: "ul",
    display: "flex",
    justifyContent: "center"
  }, showPrevious ? /* @__PURE__ */ React.createElement(Box, {
    component: "li",
    paddingRight: ["medium", tabletButtonSpacing]
  }, /* @__PURE__ */ React.createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: page - 1, type: "previous" })), {
    rel: "prev",
    "aria-label": previousLabel,
    title: previousLabel
  }), /* @__PURE__ */ React.createElement(PageNav, {
    label: previousLabel,
    direction: "prev"
  }))) : null, pages.map((pageNumber, index) => {
    const current2 = page === pageNumber;
    return /* @__PURE__ */ React.createElement(Box, {
      component: "li",
      display: !current2 ? ["none", "block"] : void 0,
      paddingRight: [
        "none",
        pages.length - 1 === index ? "none" : tabletButtonSpacing
      ],
      key: pageNumber
    }, /* @__PURE__ */ React.createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: pageNumber, type: "pageNumber" })), {
      "aria-label": pageLabel(pageNumber),
      "aria-current": current2 ? "page" : void 0,
      title: pageLabel(pageNumber)
    }), /* @__PURE__ */ React.createElement(Page, {
      number: pageNumber,
      current: current2
    })));
  }), showNext ? /* @__PURE__ */ React.createElement(Box, {
    component: "li",
    paddingLeft: ["medium", tabletButtonSpacing]
  }, /* @__PURE__ */ React.createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: page + 1, type: "next" })), {
    rel: "next",
    "aria-label": nextLabel,
    title: nextLabel
  }), /* @__PURE__ */ React.createElement(PageNav, {
    label: nextLabel,
    direction: "next"
  }))) : null));
};
const PasswordField = forwardRef((_Yc, forwardedRef) => {
  var _Zc = _Yc, {
    value,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    disabled,
    onVisibilityToggle,
    visibilityToggleLabel = "Toggle password visibility"
  } = _Zc, restProps = __objRest(_Zc, [
    "value",
    "onChange",
    "onBlur",
    "onFocus",
    "placeholder",
    "disabled",
    "onVisibilityToggle",
    "visibilityToggleLabel"
  ]);
  const defaultRef = useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const [visible, setVisibile] = useState(false);
  const visibilityHandler = useCallback((event) => {
    if (event.button !== 0) {
      return;
    }
    const newState = !visible;
    setVisibile(newState);
    if (typeof onVisibilityToggle === "function") {
      onVisibilityToggle(newState);
    }
    if (inputRef && typeof inputRef === "object" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible, onVisibilityToggle, inputRef]);
  return /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    icon: void 0,
    prefix: void 0,
    labelId: void 0,
    disabled,
    secondaryMessage: null,
    secondaryIcon: disabled ? null : /* @__PURE__ */ React.createElement(IconButton, {
      label: visibilityToggleLabel,
      onMouseDown: visibilityHandler,
      keyboardAccessible: false
    }, (iconProps) => /* @__PURE__ */ React.createElement(IconVisibility, __spreadProps(__spreadValues({}, iconProps), {
      hidden: visible
    })))
  }), (overlays, fieldProps, _, secondaryIcon) => /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    component: "input",
    type: visible ? "text" : "password",
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder
  }, fieldProps), {
    ref: inputRef
  })), overlays, secondaryIcon));
});
PasswordField.displayName = "PasswordField";
const RadioGroupContext = createContext(null);
const RadioItemContext = createContext(null);
const Radio = forwardRef((props, ref) => {
  const radioGroupContext = useContext(RadioGroupContext);
  assert(radioGroupContext === null, 'The "Radio" component has been deprecated. Use a "RadioItem" instead.');
  return /* @__PURE__ */ React.createElement(InlineField, __spreadProps(__spreadValues({}, props), {
    inList: false,
    type: "radio",
    message: null,
    reserveMessageSpace: false,
    required: void 0,
    size: void 0,
    ref
  }));
});
Radio.displayName = "Radio";
const RadioItem = forwardRef((props, ref) => {
  const radioGroupContext = useContext(RadioGroupContext);
  const radioItemContext = useContext(RadioItemContext);
  assert(radioGroupContext !== null && radioItemContext !== null, "All `RadioItem` buttons must be within a `RadioGroup`.");
  assert(typeof props.value !== "undefined" && props.value !== "", "All `RadioItem` buttons must have an associated `value`");
  const checked = radioGroupContext.value === props.value;
  const isFirstRadioWithNoCheckedValueInGroup = radioItemContext === 0 && !Boolean(radioGroupContext.value);
  const tababble = checked || isFirstRadioWithNoCheckedValueInGroup;
  return /* @__PURE__ */ React.createElement(InlineField, __spreadProps(__spreadValues({}, props), {
    id: `${radioGroupContext.id}_${radioItemContext}`,
    name: radioGroupContext.name,
    checked,
    onChange: radioGroupContext.onChange,
    tone: radioGroupContext.tone === "critical" || radioGroupContext.tone === "neutral" ? radioGroupContext.tone : void 0,
    size: radioGroupContext.size,
    disabled: radioGroupContext.disabled,
    "aria-describedby": radioGroupContext["aria-describedby"],
    tabIndex: tababble ? 0 : -1,
    inList: true,
    type: "radio",
    message: null,
    reserveMessageSpace: false,
    required: void 0,
    ref
  }));
});
RadioItem.displayName = "RadioItem";
const stackSpaceForSize = {
  small: "small",
  standard: "medium"
};
const RadioGroup = (__c) => {
  var _$c = __c, {
    children: children2,
    id,
    value,
    name,
    onChange,
    disabled,
    tone,
    size: size2
  } = _$c, props = __objRest(_$c, [
    "children",
    "id",
    "value",
    "name",
    "onChange",
    "disabled",
    "tone",
    "size"
  ]);
  const items = flattenChildren(children2);
  assert(items.every((item) => typeof item === "object" && "type" in item && item.type === RadioItem), "All child nodes within a RadioGroup must be a RadioItem: https://seek-oss.github.io/braid-design-system/components/RadioGroup");
  return /* @__PURE__ */ React.createElement(FieldGroup, __spreadProps(__spreadValues({
    id
  }, props), {
    disabled,
    tone,
    space: "small",
    role: "radiogroup"
  }), (fieldGroupProps) => /* @__PURE__ */ React.createElement(RadioGroupContext.Provider, {
    value: __spreadValues({
      id,
      value,
      name: name || id,
      onChange,
      disabled,
      tone,
      size: size2
    }, fieldGroupProps)
  }, /* @__PURE__ */ React.createElement(Box, {
    paddingTop: props.description ? "xxsmall" : "xsmall",
    paddingBottom: props.message ? "xsmall" : void 0
  }, /* @__PURE__ */ React.createElement(Stack, {
    space: stackSpaceForSize[size2 || "standard"]
  }, items.map((item, i) => /* @__PURE__ */ React.createElement(RadioItemContext.Provider, {
    key: i,
    value: i
  }, item))))));
};
RadioGroup.displayName = "RadioGroup";
const IconStarHalfSvg = (_ad) => {
  var _bd = _ad, { title, titleId } = _bd, props = __objRest(_bd, ["title", "titleId"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    d: "M22.951 8.954a1 1 0 0 0-.806-.68l-6.391-.935-2.858-5.782a1.042 1.042 0 0 0-1.793 0L8.246 7.339l-6.39.934a1 1 0 0 0-.553 1.706l4.623 4.498-1.091 6.354a1 1 0 0 0 1.45 1.054L12 18.883l5.715 3.002a1 1 0 0 0 1.45-1.054l-1.09-6.354 4.622-4.497a1.002 1.002 0 0 0 .254-1.026zm-6.648 4.456a1 1 0 0 0-.288.886l.837 4.877-4.387-2.305a.99.99 0 0 0-.465-.115V4.257l2.193 4.44a1 1 0 0 0 .752.545l4.905.717z"
  }));
};
const getPercent = (rating, position) => Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);
const RatingStar = (_cd) => {
  var _dd = _cd, { percent } = _dd, restProps = __objRest(_dd, ["percent"]);
  const currentBg = useBackground();
  const _a = useIcon(restProps), { className } = _a, iconProps = __objRest(_a, ["className"]);
  let component = IconStarSvg;
  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }
  if (percent > 50) {
    component = IconStarActiveSvg;
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    component
  }, iconProps), {
    className: [
      className,
      { [starColor]: currentBg === "body" || currentBg === "card" }
    ]
  }));
};
const ratingArr = [...Array(5)];
const Rating = ({
  rating,
  size: size2 = "standard",
  showTextRating = true,
  "aria-label": ariaLabel,
  data
}) => {
  assert(!rating || rating >= 0 && rating <= 5, "Rating must be between 0 and 5");
  return /* @__PURE__ */ React.createElement(Text, {
    size: size2,
    data
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "inlineBlock",
    "aria-label": ariaLabel || `${rating.toFixed(1)} out of ${ratingArr.length}`
  }, ratingArr.map((_, position) => /* @__PURE__ */ React.createElement(Box, {
    key: position,
    display: "inlineBlock",
    "aria-hidden": true,
    className: {
      [starSpacing]: position !== ratingArr.length - 1
    }
  }, /* @__PURE__ */ React.createElement(RatingStar, {
    percent: getPercent(rating, position)
  })))), showTextRating && /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    className: textSpacing,
    "aria-hidden": true
  }, rating.toFixed(1)));
};
const TAB_BUTTON_RIGHT = 0;
const TAB_BUTTON_LEFT = 1;
const TAB_BUTTON_HOME = 2;
const TAB_BUTTON_END = 3;
const TAB_BUTTON_TAB = 4;
const TAB_BUTTON_ENTER = 5;
const TAB_BUTTON_SPACE = 6;
const TAB_BUTTON_CLICK = 7;
const TAB_LIST_UPDATED = 8;
const TAB_LIST_FOCUSED = 9;
const TAB_PANELS_UPDATED = 10;
const getTabLabelId = (uniqueId, index) => `${uniqueId}_${index + 1}_label`;
const getPanelId = (uniqueId, index) => `${uniqueId}_${index + 1}_panel`;
var tabA11y = ({ uniqueId }) => ({
  tabListProps: ({ label: label2 }) => ({
    role: "tablist",
    "aria-orientation": "horizontal",
    "aria-label": label2
  }),
  tabProps: ({ tabIndex, isSelected }) => ({
    role: "tab",
    tabIndex: isSelected ? void 0 : -1,
    "aria-selected": isSelected,
    "aria-controls": getPanelId(uniqueId, tabIndex),
    id: `${uniqueId}_${tabIndex + 1}`
  }),
  tabLabelProps: ({ tabIndex }) => ({
    id: getTabLabelId(uniqueId, tabIndex)
  }),
  tabPanelProps: ({ panelIndex, isSelected }) => ({
    role: "tabpanel",
    "aria-labelledby": getTabLabelId(uniqueId, panelIndex),
    "aria-hidden": isSelected ? void 0 : true,
    id: getPanelId(uniqueId, panelIndex),
    tabIndex: isSelected ? 0 : void 0
  })
});
const TabsContext = createContext(null);
const TabsProvider = ({
  children: children2,
  onChange,
  id,
  selectedItem
}) => {
  const [tabsState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case TAB_BUTTON_LEFT: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: getNextIndex(-1, state.focusedTabIndex, state.tabItems.length)
        });
      }
      case TAB_BUTTON_RIGHT: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: getNextIndex(1, state.focusedTabIndex, state.tabItems.length)
        });
      }
      case TAB_BUTTON_HOME: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: 0
        });
      }
      case TAB_BUTTON_END: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: state.tabItems.length - 1
        });
      }
      case TAB_BUTTON_TAB: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: null
        });
      }
      case TAB_BUTTON_ENTER:
      case TAB_BUTTON_SPACE:
      case TAB_BUTTON_CLICK: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: action.value,
          selectedIndex: action.value
        });
      }
      case TAB_LIST_FOCUSED: {
        return __spreadProps(__spreadValues({}, state), {
          focusedTabIndex: action.value || 0
        });
      }
      case TAB_LIST_UPDATED: {
        return __spreadProps(__spreadValues({}, state), {
          tabItems: action.tabItems,
          selectedIndex: 0
        });
      }
      case TAB_PANELS_UPDATED: {
        return __spreadProps(__spreadValues({}, state), {
          panels: action.panels
        });
      }
      default:
        return state;
    }
  }, {
    selectedIndex: 0,
    focusedTabIndex: null,
    tabItems: [],
    panels: []
  });
  return /* @__PURE__ */ React.createElement(TabsContext.Provider, {
    value: __spreadProps(__spreadValues({}, tabsState), {
      selectedIndex: selectedItem ? tabsState.tabItems.indexOf(selectedItem) : tabsState.selectedIndex,
      selectedItem,
      dispatch,
      a11y: tabA11y({ uniqueId: id }),
      onChange
    })
  }, children2);
};
const TabListContext = createContext(null);
const Tab = ({ children: children2, data, badge, item }) => {
  const tabsContext = useContext(TabsContext);
  const tabListContext = useContext(TabListContext);
  const tabRef = useRef(null);
  assert(tabListContext !== null, "A Tab must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab");
  assert(!badge || badge.type === Badge, `Tab badge prop can only be an instance of Badge. e.g. <Tab badge={<Badge>New</Badge>}>`);
  assert(!badge || badge.props.bleedY === void 0, "Badge elements cannot set the 'bleedY' prop when passed to a Tab component");
  if (!tabListContext) {
    throw new Error("Tab rendered outside Tabs context");
  }
  if (!tabsContext) {
    throw new Error("Tab rendered outside TabsProvider");
  }
  const {
    focusedTabIndex,
    selectedIndex,
    selectedItem,
    dispatch,
    a11y,
    onChange
  } = tabsContext;
  const { tabListItemIndex, scrollContainer, divider: divider$1 } = tabListContext;
  const isSelected = selectedIndex > -1 ? selectedIndex === tabListItemIndex : selectedItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;
  const paddingX = "small";
  const { grid, space } = useSpace();
  useEffect(() => {
    if (tabRef.current && isFocused) {
      tabRef.current.focus();
    }
  }, [isFocused]);
  const firstRenderRef = useRef(true);
  const isMobile2 = useResponsiveValue()({
    mobile: true,
    tablet: false
  });
  useEffect(() => {
    if (!tabRef.current || !scrollContainer) {
      return;
    }
    if (isSelected || isFocused) {
      if (isMobile2) {
        smoothScroll(tabRef.current, __spreadValues({
          scrollContainer,
          direction: "horizontal",
          offset: space[paddingX] * grid * 3
        }, firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }));
      } else {
        smoothScrollIntoView(tabRef.current, __spreadValues({
          scrollContainer,
          direction: "horizontal",
          offset: space[paddingX] * grid * 6
        }, firstRenderRef.current ? { duration: 0 } : { speed: 0.7 }));
      }
    }
    firstRenderRef.current = false;
  }, [isSelected, isFocused, scrollContainer, space, paddingX, grid, isMobile2]);
  const onKeyUp = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === "Tab") {
      return;
    }
    if (onChange && (targetKey === "Enter" || targetKey === " ")) {
      onChange(tabListItemIndex, item);
    }
    const action = {
      ArrowRight: { type: TAB_BUTTON_RIGHT },
      ArrowLeft: { type: TAB_BUTTON_LEFT },
      Home: { type: TAB_BUTTON_HOME },
      End: { type: TAB_BUTTON_END },
      Enter: { type: TAB_BUTTON_ENTER, value: tabListItemIndex },
      " ": { type: TAB_BUTTON_SPACE, value: tabListItemIndex }
    };
    if (action[targetKey]) {
      dispatch(action[targetKey]);
    }
  };
  const onKeyDown = (event) => {
    const targetKey = normalizeKey(event);
    if (targetKey === "Tab" && focusedTabIndex !== null) {
      dispatch({ type: TAB_BUTTON_TAB });
      return;
    }
    const isArrowPress = targetKey.indexOf("Arrow") === 0;
    const isActionKeyPress = targetKey === "Enter" || targetKey === " ";
    if (isArrowPress || isActionKeyPress) {
      event.preventDefault();
    }
  };
  const tabTextSize = "standard";
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({
    component: "button"
  }, a11y.tabProps({ tabIndex: tabListItemIndex, isSelected })), {
    ref: tabRef,
    onKeyUp,
    onKeyDown,
    onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (onChange) {
        onChange(tabListItemIndex, item);
      }
      dispatch({ type: TAB_BUTTON_CLICK, value: tabListItemIndex });
    },
    onFocus: isSelected ? () => dispatch({
      type: TAB_LIST_FOCUSED,
      value: tabListItemIndex
    }) : void 0,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    borderRadius: "standard",
    cursor: "pointer",
    outline: "none",
    position: "relative",
    zIndex: 1,
    paddingX,
    paddingY: "medium",
    className: tab
  }), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Text, __spreadProps(__spreadValues({}, a11y.tabLabelProps({ tabIndex: tabListItemIndex })), {
    size: tabTextSize,
    weight: "medium",
    align: "center",
    tone: isSelected ? "formAccent" : "secondary"
  }), children2), badge ? /* @__PURE__ */ React.createElement(Box, {
    paddingLeft: "xsmall"
  }, cloneElement(badge, { bleedY: true })) : null, /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none"
  }, divider$1 === "minimal" ? /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    className: divider
  }) : null, /* @__PURE__ */ React.createElement(Box, {
    background: "neutral",
    position: "absolute",
    zIndex: 2,
    transition: "fast",
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    className: [
      tabUnderlineHover,
      tabUnderline,
      tabListItemIndex > 0 ? hairlineMarginLeft : null
    ]
  }), /* @__PURE__ */ React.createElement(Box, {
    background: "formAccent",
    position: "absolute",
    zIndex: 2,
    transition: "fast",
    left: 0,
    right: 0,
    bottom: 0,
    className: [
      tabUnderline,
      !isSelected ? tabUnderlineAnimation : void 0,
      tabListItemIndex > 0 ? hairlineMarginLeft : null
    ]
  })), /* @__PURE__ */ React.createElement(Overlay, {
    zIndex: 1,
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    className: tabFocusRing,
    visible: false,
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true
  }));
};
const Tabs = (props) => {
  const tabsContext = useContext(TabsContext);
  const tabsRef = useRef(null);
  const {
    children: children2,
    label: label2,
    data,
    align = "left",
    gutter,
    reserveHitArea = false,
    divider: divider$1 = "minimal"
  } = props;
  assert(tabsContext !== null, "Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs");
  if (!tabsContext) {
    throw new Error("Tabs rendered outside TabsProvider");
  }
  const { dispatch, a11y } = tabsContext;
  const tabItems = [];
  const tabs = Children.map(flattenChildren(children2), (tab2, index) => {
    var _a;
    assert(typeof tab2 === "object" && tab2.type === Tab, "Only Tab elements can be direct children of a Tabs");
    tabItems.push((_a = tab2.props.item) != null ? _a : index);
    return /* @__PURE__ */ React.createElement(TabListContext.Provider, {
      key: index,
      value: {
        tabListItemIndex: index,
        scrollContainer: tabsRef.current,
        divider: divider$1
      }
    }, tab2);
  });
  useEffect(() => {
    dispatch({ type: TAB_LIST_UPDATED, tabItems });
  }, [tabItems.join(), dispatch]);
  const {
    space: { grid, space }
  } = useBraidTheme();
  const [showMask, setShowMask] = useState(true);
  const updateMask = useCallback(() => {
    if (!tabsRef.current) {
      return;
    }
    setShowMask(tabsRef.current.scrollWidth - tabsRef.current.offsetWidth - tabsRef.current.scrollLeft > grid * space.small);
  }, [tabsRef, setShowMask, grid, space]);
  useEffect(() => {
    updateMask();
    window.addEventListener("resize", updateMask);
    return () => window.removeEventListener("resize", updateMask);
  }, [updateMask]);
  return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Box, {
    className: reserveHitArea ? void 0 : negativeMarginTop("medium")
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React.createElement(Box, {
    ref: tabsRef,
    className: [
      scroll$1,
      nowrap,
      showMask ? mask : null
    ],
    display: "flex",
    onScroll: updateMask,
    flexWrap: "nowrap"
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    className: align === "center" ? marginAuto$1 : void 0,
    paddingX: gutter,
    flexWrap: "nowrap"
  }, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, a11y.tabListProps({ label: label2 })), {
    display: "flex"
  }), data ? buildDataAttributes(data) : void 0), {
    flexWrap: "nowrap"
  }), tabs)), divider$1 === "full" ? /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    className: divider
  }) : null))));
};
const TabPanelsContext = createContext(null);
const TabPanel = ({ children: children2, data, item }) => {
  const tabsContext = useContext(TabsContext);
  const tabPanelsContext = useContext(TabPanelsContext);
  assert(tabsContext !== null, "A TabPanel must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs");
  if (!tabPanelsContext) {
    throw new Error("TabPanel rendered outside TabPanels");
  }
  if (!tabsContext) {
    throw new Error("TabPanel rendered outside TabsProvider");
  }
  const { a11y, selectedIndex, selectedItem } = tabsContext;
  const { panelIndex, renderInactive } = tabPanelsContext;
  const isSelected = selectedIndex > -1 ? panelIndex === selectedIndex : selectedItem === item;
  return /* @__PURE__ */ React.createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, a11y.tabPanelProps({ panelIndex, isSelected })), {
    display: isSelected ? void 0 : "none",
    position: "relative",
    outline: "none",
    className: tabPanel
  }), data ? buildDataAttributes(data) : void 0), isSelected || renderInactive ? children2 : void 0, /* @__PURE__ */ React.createElement(Overlay, {
    zIndex: 1,
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    className: tabPanelFocusRing,
    onlyVisibleForKeyboardNavigation: true
  }));
};
const TabPanels = ({
  renderInactivePanels = false,
  children: children2
}) => {
  const tabsContext = useContext(TabsContext);
  if (!tabsContext) {
    throw new Error("TabPanels rendered outside TabsProvider context");
  }
  const { dispatch } = tabsContext;
  const panelItems = [];
  const panels = Children.map(flattenChildren(children2), (panel, index) => {
    assert(typeof panel === "object" && panel.type === TabPanel, "Only TabPanel elements can be direct children of a TabPanels");
    panelItems.push(index);
    return /* @__PURE__ */ React.createElement(TabPanelsContext.Provider, {
      key: index,
      value: {
        renderInactive: renderInactivePanels,
        panelIndex: index
      }
    }, panel);
  });
  useEffect(() => {
    dispatch({ type: TAB_PANELS_UPDATED, panels: panelItems });
  }, [panelItems.join(), dispatch]);
  return /* @__PURE__ */ React.createElement(Fragment, null, panels);
};
const Tag = ({
  onClear,
  clearLabel = "Clear",
  data,
  children: children2
}) => {
  assert(typeof children2 === "undefined" || typeof children2 === "string", "Tag may only contain a string");
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    display: "flex"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    minWidth: 0,
    alignItems: "center",
    background: "neutralLight",
    paddingY: "xxsmall",
    paddingLeft: "small",
    paddingRight: onClear ? "xxsmall" : "small",
    borderRadius: "full"
  }, /* @__PURE__ */ React.createElement(Box, {
    minWidth: 0,
    title: children2
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    truncate: true
  }, children2)), onClear ? /* @__PURE__ */ React.createElement(Box, {
    flexShrink: 0,
    display: "flex",
    paddingLeft: "xxsmall"
  }, /* @__PURE__ */ React.createElement(ClearButton, {
    label: clearLabel,
    onClick: onClear
  })) : null));
};
const Highlight = ({ children: children2 }) => /* @__PURE__ */ React.createElement(Box, {
  component: "mark",
  borderRadius: "standard",
  background: "criticalLight",
  className: root$6
}, children2);
const formatRanges = (value, highlightRanges) => {
  if (highlightRanges && value) {
    let lastEnd = 0;
    const validatedAndSortedRanges = highlightRanges.sort((a, b) => a.start > b.start ? 1 : -1).reduce((acc, { end, start }) => {
      const resolvedEnd = end || value.length;
      if (resolvedEnd <= start) {
        return acc;
      }
      const adjustedRange = [];
      if (resolvedEnd > lastEnd) {
        adjustedRange.push({
          start: start < lastEnd ? lastEnd : start,
          end
        });
        lastEnd = resolvedEnd;
      }
      return [...acc, ...adjustedRange];
    }, []);
    return parseHighlights(value, validatedAndSortedRanges.map(({ start, end }) => [
      start,
      end || value.length
    ])).reduce((acc, { text, highlight }, i) => {
      if (text) {
        acc.push(highlight ? /* @__PURE__ */ React.createElement(Highlight, {
          key: i
        }, text) : text);
      }
      return acc;
    }, []);
  }
  return [value];
};
const getCharacterLimitStatus = ({
  characterLimit,
  value
}) => {
  const inputLength = String(value).length;
  if (inputLength < Math.ceil(characterLimit * 0.7 / 10) * 10) {
    return null;
  }
  const diff = characterLimit - inputLength;
  const valid = diff >= 0;
  return /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: valid ? "secondary" : "critical"
  }, diff);
};
const pxToInt = (str) => typeof str === "string" ? parseInt(str.replace("px", ""), 10) : 0;
const calculateLines = (target, lines, lineLimit) => {
  const { paddingBottom, paddingTop, lineHeight } = window.getComputedStyle(target);
  if (!lineHeight.endsWith("px")) {
    return lines;
  }
  const padding2 = pxToInt(paddingTop) + pxToInt(paddingBottom);
  const currentRows = Math.floor((target.scrollHeight - padding2) / pxToInt(lineHeight));
  if (target && target.value === "") {
    return lines;
  }
  return typeof lineLimit === "number" && currentRows > lineLimit ? lineLimit : currentRows;
};
const Textarea = forwardRef((_ed, ref) => {
  var _fd = _ed, {
    value,
    onChange,
    onBlur,
    onFocus,
    onPaste,
    placeholder,
    characterLimit,
    highlightRanges: highlightRangesProp = [],
    lines = 3,
    lineLimit,
    grow = true
  } = _fd, restProps = __objRest(_fd, [
    "value",
    "onChange",
    "onBlur",
    "onFocus",
    "onPaste",
    "placeholder",
    "characterLimit",
    "highlightRanges",
    "lines",
    "lineLimit",
    "grow"
  ]);
  const [rows, setRows] = useState(lines);
  const highlightsRef = useRef(null);
  const updateScroll = useCallback((scrollTop) => {
    if (highlightsRef.current) {
      highlightsRef.current.scrollTop = scrollTop;
    }
  }, [highlightsRef]);
  const inputLength = String(value).length;
  const excessCharactersRange = characterLimit && inputLength > characterLimit ? [{ start: characterLimit }] : [];
  const highlightRanges = [...excessCharactersRange, ...highlightRangesProp];
  const hasHighlights = highlightRanges.length > 0;
  return /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    icon: void 0,
    prefix: void 0,
    labelId: void 0,
    secondaryMessage: characterLimit ? getCharacterLimitStatus({
      value,
      characterLimit
    }) : null
  }), (overlays, _a) => {
    var _b = _a, { className, borderRadius: borderRadius2, background: background2 } = _b, fieldProps = __objRest(_b, ["className", "borderRadius", "background"]);
    return /* @__PURE__ */ React.createElement(Box, {
      position: "relative",
      width: "full",
      zIndex: 0,
      background: background2,
      borderRadius: borderRadius2
    }, hasHighlights ? /* @__PURE__ */ React.createElement(Box, __spreadValues({
      ref: highlightsRef,
      position: "absolute",
      overflow: "hidden",
      pointerEvents: "none",
      height: "full",
      "aria-hidden": "true",
      top: 0,
      left: 0,
      className: [highlights, className]
    }, fieldProps), formatRanges(String(value), highlightRanges)) : null, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
      component: "textarea",
      position: "relative",
      zIndex: 1,
      rows,
      value,
      onChange: (e) => {
        if (grow) {
          setRows(calculateLines(e.currentTarget, lines, lineLimit));
        }
        if (typeof onChange === "function") {
          onChange(e);
        }
        if (hasHighlights) {
          updateScroll(e.currentTarget.scrollTop);
        }
      },
      onBlur,
      onFocus,
      onPaste,
      onScroll: hasHighlights ? (event) => updateScroll(event.currentTarget.scrollTop) : void 0,
      placeholder,
      className: [field$2, className]
    }, fieldProps), {
      ref
    })), overlays);
  });
});
Textarea.displayName = "Textarea";
function parseSimpleToComplexOption(option) {
  return typeof option !== "string" && typeof option !== "number" && "text" in option && "value" in option ? option : { value: option, text: String(option) };
}
function TextDropdown({
  id,
  value,
  onChange,
  onBlur,
  options,
  label: label2,
  data
}) {
  assert((() => {
    const inText = useContext(TextContext);
    const inHeading = useContext(HeadingContext);
    return inText || inHeading;
  })(), "TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown");
  const parsedOptions = options.map(parseSimpleToComplexOption);
  const [currentText] = parsedOptions.filter((o) => value === o.value);
  if (!currentText || !currentText.text) {
    throw new Error(`The provided value of "${value}" does not exist in the provided \`options\` list.`);
  }
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    display: "inlineBlock",
    position: "relative"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    pointerEvents: "none",
    userSelect: "none"
  }, currentText.text, " ", /* @__PURE__ */ React.createElement(IconChevron, {
    alignY: "lowercase"
  })), /* @__PURE__ */ React.createElement(Box, {
    component: "select",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "full",
    opacity: 0,
    className: select,
    "aria-label": label2,
    title: label2,
    id,
    value: String(value),
    onChange: (ev) => {
      if (typeof onChange === "function") {
        const newValue = parsedOptions[ev.currentTarget.selectedIndex].value;
        onChange(newValue);
      }
    },
    onBlur
  }, /* @__PURE__ */ React.createElement("optgroup", {
    label: label2
  }, parsedOptions.map((option) => /* @__PURE__ */ React.createElement("option", {
    value: String(option.value),
    key: String(option.value)
  }, option.text)))), /* @__PURE__ */ React.createElement(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    className: focusOverlay$5
  }));
}
const validTypes = {
  text: "text",
  password: "password",
  email: "email",
  search: "search",
  number: "number",
  tel: "tel",
  url: "url"
};
const TextField = forwardRef((_gd, forwardedRef) => {
  var _hd = _gd, {
    value,
    type = "text",
    onChange,
    onBlur,
    onFocus,
    onClear,
    placeholder,
    characterLimit
  } = _hd, restProps = __objRest(_hd, [
    "value",
    "type",
    "onChange",
    "onBlur",
    "onFocus",
    "onClear",
    "placeholder",
    "characterLimit"
  ]);
  const defaultRef = useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const clearable = Boolean(typeof onClear !== "undefined" && typeof value === "string" && value.length > 0);
  return /* @__PURE__ */ React.createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    labelId: void 0,
    secondaryMessage: characterLimit ? getCharacterLimitStatus({
      value,
      characterLimit
    }) : null,
    secondaryIcon: onClear ? /* @__PURE__ */ React.createElement(ClearField, {
      hide: !clearable,
      onClear,
      inputRef
    }) : null
  }), (overlays, fieldProps, icon2, secondaryIcon, prefix) => /* @__PURE__ */ React.createElement(Fragment, null, icon2, prefix, /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({
    component: "input",
    type: validTypes[type],
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder
  }, fieldProps), {
    ref: inputRef
  })), overlays, secondaryIcon));
});
TextField.displayName = "TextField";
const TextLink = forwardRef((_id, ref) => {
  var _jd = _id, { weight: weight2, showVisited, hitArea, data } = _jd, props = __objRest(_jd, ["weight", "showVisited", "hitArea", "data"]);
  const LinkComponent = useLinkComponent(ref);
  return /* @__PURE__ */ React.createElement(PrivateTextLinkRenderer, {
    weight: weight2,
    showVisited,
    hitArea
  }, (styleProps) => /* @__PURE__ */ React.createElement(LinkComponent, __spreadValues(__spreadValues(__spreadValues({
    ref
  }, props), styleProps), data ? buildDataAttributes(data) : void 0)));
});
TextLink.displayName = "TextLink";
const Tiles = ({
  children: children2,
  space = "none",
  columns = 1,
  dividers = false,
  data
}) => /* @__PURE__ */ React.createElement(Box, __spreadValues({
  className: negativeMarginTop(space)
}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
  display: "flex",
  flexWrap: "wrap",
  className: negativeMarginLeft(space)
}, Children.map(flattenChildren(children2), (child, i) => /* @__PURE__ */ React.createElement(Box, {
  minWidth: 0,
  className: resolveResponsiveProp(columns, columnsMobile, columnsTablet, columnsDesktop, columnsWide)
}, /* @__PURE__ */ React.createElement(Box, {
  height: "full",
  paddingTop: space,
  paddingLeft: space
}, dividers && i > 0 ? /* @__PURE__ */ React.createElement(Box, {
  paddingBottom: space,
  display: mapResponsiveValue(columns, (column2) => column2 === 1 ? "block" : "none")
}, typeof dividers === "string" ? /* @__PURE__ */ React.createElement(Divider, {
  weight: dividers
}) : /* @__PURE__ */ React.createElement(Divider, null)) : null, child)))));
const handleChange = (onChange) => (event) => {
  if (typeof onChange === "function") {
    onChange(event.target.checked);
  }
};
const Toggle = ({
  id,
  on,
  onChange,
  label: label$1,
  align = "left",
  size: size2 = "standard",
  data
}) => {
  const showBorder = useBackgroundLightness() === "light";
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    position: "relative",
    zIndex: 0,
    display: "flex",
    flexDirection: align === "left" ? void 0 : "rowReverse",
    className: root$7
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React.createElement(Box, {
    component: "input",
    type: "checkbox",
    id,
    checked: on,
    onChange: handleChange(onChange),
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",
    opacity: 0,
    className: [
      realField$1,
      realFieldPosition$1[size2],
      fieldSize[size2]
    ]
  }), /* @__PURE__ */ React.createElement(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    className: [
      slideContainer,
      slideContainerSize[size2],
      fieldSize[size2]
    ]
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    width: "full",
    overflow: "hidden",
    borderRadius: "full",
    className: [slideTrack[size2], slideTrackBackground]
  }, /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    transition: "fast",
    className: slideTrackSelected
  })), /* @__PURE__ */ React.createElement(Box, {
    position: "absolute",
    background: "input",
    boxShadow: showBorder ? "borderField" : void 0,
    transition: "fast",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    className: slider[size2]
  }, /* @__PURE__ */ React.createElement(FieldOverlay, {
    className: icon
  }, /* @__PURE__ */ React.createElement(IconTick, {
    tone: "formAccent",
    size: "fill"
  })), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "focus",
    borderRadius: "full",
    className: focusOverlay$6
  }), /* @__PURE__ */ React.createElement(FieldOverlay, {
    variant: "hover",
    borderRadius: "full",
    className: hoverOverlay$4
  }))), /* @__PURE__ */ React.createElement(Box, {
    component: "label",
    htmlFor: id,
    paddingLeft: align === "left" ? "xsmall" : void 0,
    paddingRight: align === "right" || align === "justify" ? "xsmall" : void 0,
    flexGrow: align === "justify" ? 1 : void 0,
    userSelect: "none",
    cursor: "pointer",
    className: [label[size2], virtualTouchable()]
  }, /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    weight: on ? "strong" : void 0,
    size: size2
  }, label$1)));
};
const useTimeout = ({ onTimeout, duration }) => {
  const [activated, setActivated] = useState(true);
  const timeoutRef = useRef();
  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);
  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);
      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);
  const startTimeout = useCallback(() => {
    setActivated(true);
  }, []);
  return {
    stopTimeout,
    startTimeout
  };
};
const toneToIcon = {
  critical: IconCritical,
  positive: IconPositive
};
const borderRadius$1 = "xlarge";
const Action = ({ label: label2, onClick, removeToast }) => {
  const handleClick = useCallback(() => {
    removeToast();
    onClick();
  }, [removeToast, onClick]);
  return /* @__PURE__ */ React.createElement(Text, {
    baseline: false
  }, /* @__PURE__ */ React.createElement(Box, {
    component: "span",
    paddingRight: "xsmall",
    "aria-hidden": true
  }, /* @__PURE__ */ React.createElement(TextLinkButton, {
    onClick: handleClick,
    hitArea: "large"
  }, label2)));
};
const Toast = React.forwardRef(({
  id,
  treatTheme,
  vanillaTheme,
  dedupeKey,
  message,
  description,
  tone,
  onClear,
  action,
  shouldRemove
}, ref) => {
  const remove = useCallback(() => onClear(dedupeKey, id), [onClear, dedupeKey, id]);
  const { stopTimeout, startTimeout } = useTimeout({
    duration: 1e4,
    onTimeout: remove
  });
  useEffect(() => {
    if (shouldRemove) {
      stopTimeout();
      remove();
    }
  }, [shouldRemove, remove, stopTimeout]);
  const Icon2 = toneToIcon[tone];
  const content = description ? /* @__PURE__ */ React.createElement(Stack, {
    space: "xxsmall"
  }, /* @__PURE__ */ React.createElement(Text, {
    weight: "strong",
    baseline: false
  }, message), description ? /* @__PURE__ */ React.createElement(Text, {
    baseline: false,
    tone: "secondary"
  }, description) : null, action ? /* @__PURE__ */ React.createElement(Action, __spreadValues({
    key: action.label,
    removeToast: remove
  }, action)) : null) : /* @__PURE__ */ React.createElement(Inline, {
    space: "xxsmall"
  }, /* @__PURE__ */ React.createElement(Box, {
    paddingRight: "medium"
  }, /* @__PURE__ */ React.createElement(Text, {
    weight: "strong",
    baseline: false
  }, message)), action ? /* @__PURE__ */ React.createElement(Action, __spreadValues({
    key: action.label,
    removeToast: remove
  }, action)) : null);
  return /* @__PURE__ */ React.createElement(TreatProvider, {
    theme: treatTheme
  }, /* @__PURE__ */ React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    role: "alert",
    ref,
    onMouseEnter: stopTimeout,
    onMouseLeave: startTimeout,
    className: vanillaTheme
  }, /* @__PURE__ */ React.createElement(Box, {
    boxShadow: "large",
    borderRadius: borderRadius$1
  }, /* @__PURE__ */ React.createElement(ContentBlock, {
    width: "xsmall"
  }, /* @__PURE__ */ React.createElement(Box, {
    background: "card",
    position: "relative",
    boxShadow: "borderStandard",
    borderRadius: borderRadius$1,
    paddingY: "medium",
    paddingLeft: "medium",
    overflow: "hidden",
    className: toast
  }, /* @__PURE__ */ React.createElement(Columns, {
    space: "none"
  }, /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Box, {
    paddingRight: "small"
  }, /* @__PURE__ */ React.createElement(Icon2, {
    tone
  }))), /* @__PURE__ */ React.createElement(Column, null, content), /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(Box, {
    width: "touchable",
    display: "flex",
    justifyContent: "center",
    "aria-hidden": true
  }, /* @__PURE__ */ React.createElement(ClearButton, {
    onClick: remove,
    label: "Clear",
    data: {}
  })))), /* @__PURE__ */ React.createElement(Box, {
    background: tone,
    paddingLeft: "xxsmall",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0
  }))))));
});
const animationTimeout = 300;
const entranceTransition = "transform 0.2s ease, opacity 0.2s ease";
const exitTransition = "opacity 0.1s ease";
const animate = (element, transforms, transition2, done) => {
  const fallbackTimeout = setTimeout(() => {
    if (done) {
      done();
    }
  }, animationTimeout);
  transforms.forEach(({ property, from = "" }) => {
    element.style.setProperty(property, from);
  });
  element.style.setProperty("transition", "");
  const transitionEndHandler = (ev) => {
    if (ev.target !== element) {
      return;
    }
    element.style.setProperty("transition", "");
    if (done) {
      done();
    }
    element.removeEventListener("transitionend", transitionEndHandler);
    clearTimeout(fallbackTimeout);
  };
  element.addEventListener("transitionend", transitionEndHandler);
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      element.style.setProperty("transition", transition2);
      transforms.forEach(({ property, to = "" }) => {
        element.style.setProperty(property, to);
      });
    });
  });
};
const useFlipList = () => {
  const refs = useMemo(() => new Map(), []);
  const positions = useMemo(() => new Map(), []);
  useLayoutEffect(() => {
    const animations = [];
    Array.from(refs.entries()).forEach(([id, element]) => {
      if (element) {
        const prevTop = positions.get(id);
        const { top, height } = element.getBoundingClientRect();
        if (typeof prevTop === "number" && prevTop !== top) {
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: "transform",
                from: `translateY(${prevTop - top}px)`
              }
            ]
          });
        } else if (typeof prevTop !== "number") {
          animations.push({
            element,
            transition: entranceTransition,
            transforms: [
              {
                property: "transform",
                from: `translateY(${height}px)`
              },
              {
                property: "opacity",
                from: "0"
              }
            ]
          });
        }
        positions.set(id, element.getBoundingClientRect().top);
      } else {
        refs.delete(id);
      }
    });
    animations.forEach(({ element, transforms, transition: transition2 }) => {
      animate(element, transforms, transition2);
    });
  });
  const remove = useCallback((id, cb) => {
    const element = refs.get(id);
    if (element) {
      animate(element, [
        {
          property: "opacity",
          to: "0"
        }
      ], exitTransition, cb);
    }
  }, [refs]);
  const itemRef = useCallback((id) => (ref) => {
    refs.set(id, ref);
  }, [refs]);
  return {
    itemRef,
    remove
  };
};
const Toaster = ({ toasts, removeToast }) => {
  const { itemRef, remove } = useFlipList();
  const onClear = useCallback((dedupeKey, id) => {
    remove(id, () => {
      removeToast(dedupeKey);
    });
  }, [remove, removeToast]);
  return /* @__PURE__ */ React.createElement(Box, {
    position: "fixed",
    zIndex: "notification",
    width: "full",
    pointerEvents: "none",
    paddingX: "gutter",
    bottom: 0
  }, toasts.map((_a) => {
    var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
    return /* @__PURE__ */ React.createElement(Box, {
      key: id,
      paddingBottom: "small"
    }, /* @__PURE__ */ React.createElement(Toast, __spreadValues({
      ref: itemRef(id),
      id,
      onClear
    }, rest)));
  }));
};
let toastCounter = 0;
const ToastControllerContext = createContext(null);
const QUEUE_TOAST = 0;
const REMOVE_TOAST = 1;
function reducer(state, action) {
  switch (action.type) {
    case QUEUE_TOAST: {
      const { toast: toast2 } = action;
      const hasExistingToast = state.toasts.some((t) => t.dedupeKey === toast2.dedupeKey);
      if (hasExistingToast) {
        return {
          toasts: state.toasts.map((t) => {
            if (t.dedupeKey === toast2.dedupeKey) {
              return __spreadProps(__spreadValues({}, t), {
                shouldRemove: true
              });
            }
            return t;
          }),
          queuedToasts: __spreadProps(__spreadValues({}, state.queuedToasts), {
            [toast2.dedupeKey]: toast2
          })
        };
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts: [...state.toasts, action.toast]
      });
    }
    case REMOVE_TOAST: {
      const toasts = state.toasts.filter(({ dedupeKey }) => dedupeKey !== action.dedupeKey);
      const queuedToast = state.queuedToasts[action.dedupeKey];
      if (queuedToast) {
        return {
          queuedToasts: __spreadProps(__spreadValues({}, state.queuedToasts), {
            [action.dedupeKey]: void 0
          }),
          toasts: [...toasts, queuedToast]
        };
      }
      return __spreadProps(__spreadValues({}, state), {
        toasts
      });
    }
  }
}
const InternalToastProvider = ({ children: children2 }) => {
  const [{ toasts }, dispatch] = useReducer(reducer, {
    toasts: [],
    queuedToasts: {}
  });
  const addToast = useCallback((toast2) => dispatch({ type: QUEUE_TOAST, toast: toast2 }), []);
  const removeToast = useCallback((dedupeKey) => dispatch({ type: REMOVE_TOAST, dedupeKey }), []);
  return /* @__PURE__ */ React.createElement(ToastControllerContext.Provider, {
    value: addToast
  }, children2, /* @__PURE__ */ React.createElement(ToastPortal, null, /* @__PURE__ */ React.createElement(Toaster, {
    toasts,
    removeToast
  })));
};
const ToastProvider = ({ children: children2 }) => {
  const currentContext = useContext(ToastControllerContext);
  if (currentContext !== null) {
    return /* @__PURE__ */ React.createElement(Fragment, null, children2);
  }
  return /* @__PURE__ */ React.createElement(InternalToastProvider, null, children2);
};
const ToastPortal = ({ children: children2 }) => {
  const [toastElement, setElement] = useState(null);
  useEffect(() => {
    const toastContainerId = "braid-toast-container";
    let element = document.getElementById(toastContainerId);
    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", toastContainerId);
      element.setAttribute("class", "");
      document.body.appendChild(element);
    }
    setElement(element);
  }, []);
  if (!toastElement) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(BraidPortal, {
    container: toastElement
  }, children2);
};
const useToast = () => {
  const treatTheme = useTheme();
  const { vanillaTheme } = useBraidTheme();
  const addToast = useContext(ToastControllerContext);
  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }
  return useCallback((toast2) => {
    var _a;
    const id = `${toastCounter++}`;
    const dedupeKey = (_a = toast2.key) != null ? _a : id;
    addToast(__spreadProps(__spreadValues({}, toast2), {
      treatTheme,
      vanillaTheme,
      id,
      dedupeKey,
      shouldRemove: false
    }));
  }, [treatTheme, vanillaTheme, addToast]);
};
const StaticTooltipContext = createContext(false);
const TooltipTextDefaultsProvider = ({
  children: children2
}) => {
  const themeName = useThemeName();
  return /* @__PURE__ */ React.createElement(DefaultTextPropsProvider, {
    size: themeName === "docs" ? "small" : void 0,
    weight: "medium"
  }, children2);
};
const borderRadius = "xlarge";
const TooltipContent = ({
  children: children2,
  opacity,
  arrowProps
}) => /* @__PURE__ */ React.createElement(Box, {
  display: "flex",
  position: "relative",
  transition: "fast",
  opacity: opacity === 0 ? 0 : void 0,
  className: opacity === 0 ? verticalOffsetBeforeEntrance : translateZ0
}, /* @__PURE__ */ React.createElement(Box, {
  boxShadow: "large",
  borderRadius,
  className: [
    background$1,
    maxWidth,
    translateZ0,
    padding
  ]
}, /* @__PURE__ */ React.createElement(BackgroundProvider$1, {
  value: "UNKNOWN_DARK"
}, /* @__PURE__ */ React.createElement(TooltipTextDefaultsProvider, null, /* @__PURE__ */ React.createElement(Box, {
  position: "relative",
  zIndex: 1
}, children2), /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, arrowProps), {
  borderRadius,
  className: [arrow, background$1]
}))))));
const validPlacements = ["top", "bottom"];
const TooltipRenderer = ({
  id,
  tooltip,
  placement = "top",
  children: children2
}) => {
  assert(validPlacements.includes(placement), `The 'placement' prop must be one of the following: ${validPlacements.join(", ")}`);
  const isStatic = useContext(StaticTooltipContext);
  const [controlledVisible, setControlledVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const { grid, space } = useSpace();
  const {
    visible,
    getTooltipProps,
    setTooltipRef,
    tooltipRef,
    setTriggerRef,
    triggerRef,
    getArrowProps
  } = usePopperTooltip({
    placement,
    trigger: [isMobile$1() ? "click" : "hover", "focus"],
    visible: isStatic || controlledVisible,
    onVisibleChange: setControlledVisible
  }, {
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          padding: space.xsmall * grid
        }
      },
      {
        name: "offset",
        options: {
          offset: [0, space.small * grid]
        }
      },
      ...isStatic ? [
        {
          name: "flip",
          options: {
            fallbackPlacements: []
          }
        }
      ] : []
    ]
  });
  useEffect(() => {
    if (visible) {
      const handleKeyDown = ({ key }) => {
        if (key === "Escape") {
          setControlledVisible(false);
        }
      };
      const handleScroll = () => {
        setControlledVisible(false);
      };
      const scrollHandlerOptions = {
        capture: true,
        passive: true
      };
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("scroll", handleScroll, scrollHandlerOptions);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("scroll", handleScroll, scrollHandlerOptions);
      };
    }
  }, [visible]);
  useEffect(() => {
    if (!triggerRef) {
      return;
    }
    if (visible) {
      const handleFocusIn = (event) => {
        if (event.currentTarget !== triggerRef) {
          setControlledVisible(false);
        }
      };
      document.addEventListener("focusin", handleFocusIn);
      return () => {
        document.removeEventListener("focusin", handleFocusIn);
      };
    }
  }, [triggerRef, visible]);
  assert(useEffect(() => {
    if (tooltipRef) {
      assert(tooltipRef.querySelectorAll("button, input, select, textarea, a").length === 0, "For accessibility reasons, tooltips must not contain interactive elements");
    }
  }, [tooltipRef]) === void 0);
  useEffect(() => {
    if (!tooltipRef || !visible) {
      return setOpacity(0);
    }
    const timeout = setTimeout(() => setOpacity(100), isMobile$1() ? 0 : 250);
    return () => clearTimeout(timeout);
  }, [tooltipRef, visible]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children2({
    triggerProps: {
      tabIndex: 0,
      ref: setTriggerRef,
      "aria-describedby": id
    }
  }), triggerRef && /* @__PURE__ */ React.createElement(BraidPortal, null, /* @__PURE__ */ React.createElement("div", __spreadValues({
    id,
    role: "tooltip",
    hidden: !visible ? true : void 0,
    className: atoms({
      reset: "div",
      zIndex: "notification",
      display: triggerRef && visible ? void 0 : "none"
    })
  }, visible ? getTooltipProps({
    ref: setTooltipRef
  }) : null), /* @__PURE__ */ React.createElement(TooltipContent, {
    opacity,
    arrowProps: getArrowProps()
  }, tooltip))));
};
export { Accordion, AccordionItem, Actions, Alert, Autosuggest, BackgroundProvider, Badge, Box, BoxRenderer, BraidPortal, BraidProvider, Bullet, BulletList, Button, ButtonLink$1 as ButtonLink, ButtonRenderer, Card, Checkbox, CheckboxStandalone, Column, Columns, ContentBlock, Dialog, Disclosure, Divider, Drawer, Dropdown, FieldLabel, FieldMessage, Heading, Hidden, HiddenVisually, IconAdd, IconBookmark, IconCaution, IconChevron, IconClear, IconCompany, IconCompose, IconCopy, IconCreditCard, IconCritical, IconDate, IconDelete, IconDesktop, IconDocument, IconDocumentBroken, IconDownload, IconEdit, IconEducation, IconFilter, IconFlag, IconGrid, IconHeart, IconHelp, IconHistory, IconHome, IconImage, IconInfo, IconInvoice, IconLanguage, IconLink, IconLinkBroken, IconList, IconLocation, IconMail, IconMinus, IconMobile, IconMoney, IconNewWindow, IconNote, IconNotification, IconOverflow, IconPeople, IconPersonAdd, IconPersonVerified, IconPhone, IconPositive, IconPrint, IconProfile, IconPromote, IconRecommended, IconRefresh, IconResume, IconSearch, IconSecurity, IconSend, IconSent, IconSettings, IconShare, IconSocialFacebook, IconSocialGitHub, IconSocialInstagram, IconSocialLinkedIn, IconSocialMedium, IconSocialTwitter, IconStar, IconStatistics, IconSubCategory, IconTag, IconThumb, IconTick, IconTime, IconUpload, IconVideo, IconVisibility, IconWorkExperience, Inline, Link, List, Loader, MenuItem, MenuItemCheckbox, MenuItemDivider, MenuItemLink, MenuRenderer, MonthPicker, Notice, OverflowMenu, Pagination, PasswordField, Radio, RadioGroup, RadioItem, Rating, Secondary, Stack, Strong, Tab, TabPanel, TabPanels, Tabs, TabsProvider, Tag, Text, TextDropdown, TextField, TextLink, TextLinkButton, TextLinkRenderer, Textarea, ThemeNameConsumer, Tiles, ToastProvider, Toggle, TooltipRenderer, filterSuggestions, makeLinkComponent, useBreakpoint, useColor, useResponsiveValue, useSpace, useThemeName, useToast };
