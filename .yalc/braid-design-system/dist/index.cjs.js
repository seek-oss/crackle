"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var assert = require("assert");
var dedent = require("dedent");
var React = require("react");
var componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js = require("./components-private/hideFocusRings/hideFocusRingsDataAttribute.cjs.js");
var cssBreakpoints_cjs_js = require("./css-breakpoints.cjs.js");
var index = require("./index.chunk.cjs.js");
var reactDom = require("react-dom");
var cssAtoms_sprinkles_cjs_css_js = require("./css-atoms/sprinkles.cjs.css.js");
var clsx = require("clsx");
require("./css-reset/reset.cjs.css.js");
var cssAtoms_atoms_cjs_js = require("./css-atoms/atoms.cjs.js");
var flattenChildren = require("react-keyed-flatten-children");
var componentsDivider_Divider_cjs_css_js = require("./components-Divider/Divider.cjs.css.js");
var componentsHidden_Hidden_cjs_css_js = require("./components-Hidden/Hidden.cjs.css.js");
var cssNegativeMargin_negativeMarginTop_cjs_css_js = require("./css-negativeMargin/negativeMarginTop.cjs.css.js");
var componentsPrivate_Truncate_Truncate_cjs_css_js = require("./components-private/Truncate/Truncate.cjs.css.js");
var cssNegativeMargin_negativeMarginLeft_cjs_css_js = require("./css-negativeMargin/negativeMarginLeft.cjs.css.js");
var componentsColumn_Column_cjs_css_js = require("./components-Column/Column.cjs.css.js");
require("./css-responsiveStyle.cjs.js");
var cssLineHeightContainer_cjs_css_js = require("./css-lineHeightContainer.cjs.css.js");
var hooksUseIcon_icon_cjs_css_js = require("./hooks-useIcon/icon.cjs.css.js");
var componentsIcons_IconChevron_IconChevron_cjs_css_js = require("./components-icons/IconChevron/IconChevron.cjs.css.js");
var componentsPrivate_touchable_virtualTouchable_cjs_css_js = require("./components-private/touchable/virtualTouchable.cjs.css.js");
var componentsPrivate_hideFocusRings_hideFocusRings_cjs_css_js = require("./components-private/hideFocusRings/hideFocusRings.cjs.css.js");
var componentsAccordion_AccordionItem_cjs_css_js = require("./components-Accordion/AccordionItem.cjs.css.js");
var componentsIconButtons_IconButton_cjs_css_js = require("./components-iconButtons/IconButton.cjs.css.js");
var cssTextAlignedToIcon_cjs_css_js = require("./css-textAlignedToIcon.cjs.css.js");
var parseHighlights = require("autosuggest-highlight/parse");
var componentsHiddenVisually_HiddenVisually_cjs_css_js = require("./components-HiddenVisually/HiddenVisually.cjs.css.js");
var componentsPrivate_Field_Field_cjs_css_js = require("./components-private/Field/Field.cjs.css.js");
var reactRemoveScroll = require("react-remove-scroll");
var componentsAutosuggest_Autosuggest_cjs_css_js = require("./components-Autosuggest/Autosuggest.cjs.css.js");
var matchHighlights = require("autosuggest-highlight/match");
var componentsBadge_Badge_cjs_css_js = require("./components-Badge/Badge.cjs.css.js");
var componentsList_List_cjs_css_js = require("./components-List/List.cjs.css.js");
var componentsButtonRenderer_ButtonRenderer_cjs_css_js = require("./components-ButtonRenderer/ButtonRenderer.cjs.css.js");
var componentsCard_Card_cjs_css_js = require("./components-Card/Card.cjs.css.js");
var componentsPrivate_InlineField_InlineField_cjs_css_js = require("./components-private/InlineField/InlineField.cjs.css.js");
var componentsContentBlock_ContentBlock_cjs_css_js = require("./components-ContentBlock/ContentBlock.cjs.css.js");
var FocusLock = require("react-focus-lock");
var componentsPrivate_Modal_ModalExternalGutter_cjs_js = require("./components-private/Modal/ModalExternalGutter.cjs.js");
var componentsPrivate_Modal_Modal_cjs_css_js = require("./components-private/Modal/Modal.cjs.css.js");
var componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js = require("./components-TextLinkRenderer/TextLinkRenderer.cjs.css.js");
var componentsDropdown_Dropdown_cjs_css_js = require("./components-Dropdown/Dropdown.cjs.css.js");
var componentsLoader_Loader_cjs_css_js = require("./components-Loader/Loader.cjs.css.js");
var componentsMenuItem_useMenuItem_cjs_css_js = require("./components-MenuItem/useMenuItem.cjs.css.js");
var componentsMenuItemCheckbox_MenuItemCheckbox_cjs_css_js = require("./components-MenuItemCheckbox/MenuItemCheckbox.cjs.css.js");
var componentsMenuRenderer_MenuRenderer_cjs_css_js = require("./components-MenuRenderer/MenuRenderer.cjs.css.js");
var componentsOverflowMenu_OverflowMenu_cjs_css_js = require("./components-OverflowMenu/OverflowMenu.cjs.css.js");
var isMobile = require("is-mobile");
var componentsMonthPicker_MonthPicker_cjs_css_js = require("./components-MonthPicker/MonthPicker.cjs.css.js");
var componentsPagination_Pagination_cjs_css_js = require("./components-Pagination/Pagination.cjs.css.js");
var componentsRating_Rating_cjs_css_js = require("./components-Rating/Rating.cjs.css.js");
var componentsTabs_Tabs_cjs_css_js = require("./components-Tabs/Tabs.cjs.css.js");
var componentsTextarea_Highlight_Highlight_cjs_css_js = require("./components-Textarea/Highlight/Highlight.cjs.css.js");
var componentsTextarea_Textarea_cjs_css_js = require("./components-Textarea/Textarea.cjs.css.js");
var componentsTextDropdown_TextDropdown_cjs_css_js = require("./components-TextDropdown/TextDropdown.cjs.css.js");
var componentsTiles_Tiles_cjs_css_js = require("./components-Tiles/Tiles.cjs.css.js");
var componentsToggle_Toggle_cjs_css_js = require("./components-Toggle/Toggle.cjs.css.js");
var componentsUseToast_Toast_cjs_css_js = require("./components-useToast/Toast.cjs.css.js");
var reactPopperTooltip = require("react-popper-tooltip");
var componentsTooltipRenderer_TooltipRenderer_cjs_css_js = require("./components-TooltipRenderer/TooltipRenderer.cjs.css.js");
var componentsIcons_IconThumb_IconThumb_cjs_css_js = require("./components-icons/IconThumb/IconThumb.cjs.css.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var assert__default = /* @__PURE__ */ _interopDefaultLegacy(assert);
var dedent__default = /* @__PURE__ */ _interopDefaultLegacy(dedent);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var clsx__default = /* @__PURE__ */ _interopDefaultLegacy(clsx);
var flattenChildren__default = /* @__PURE__ */ _interopDefaultLegacy(flattenChildren);
var parseHighlights__default = /* @__PURE__ */ _interopDefaultLegacy(parseHighlights);
var matchHighlights__default = /* @__PURE__ */ _interopDefaultLegacy(matchHighlights);
var FocusLock__default = /* @__PURE__ */ _interopDefaultLegacy(FocusLock);
var isMobile__default = /* @__PURE__ */ _interopDefaultLegacy(isMobile);
const TreatProvider = ({ children }) => children;
const useTheme = () => "";
const hideFocusRings = () => document.body.setAttribute(componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js.hideFocusRingsDataAttribute, "true");
const showFocusRings = () => document.body.removeAttribute(componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js.hideFocusRingsDataAttribute);
const useHideFocusRings = (enabled = true) => {
  React.useEffect(() => {
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
const BraidTestProviderContext = React.createContext(false);
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
const breakpointContext = React.createContext(null);
function BreakpointProvider({ children }) {
  const { tablet, desktop, wide } = cssBreakpoints_cjs_js.breakpoints;
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);
    const wideQuery = minWidthQuery(wide);
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
  }, [tablet, desktop, wide, state]);
  return /* @__PURE__ */ React__default["default"].createElement(breakpointContext.Provider, {
    value: state
  }, children);
}
const makeLinkComponent = (render) => ({ __forwardRef__: React.forwardRef(render) });
const DefaultLinkComponent = makeLinkComponent((props, ref) => /* @__PURE__ */ React__default["default"].createElement("a", __spreadValues({
  ref
}, props)));
const LinkComponentContext = React.createContext(DefaultLinkComponent);
const useLinkComponent = (ref) => {
  const linkComponent = React.useContext(LinkComponentContext);
  assert__default["default"](!ref || "__forwardRef__" in linkComponent, dedent__default["default"]`
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
  children
}) => {
  const alreadyInBraidProvider = Boolean(React.useContext(index.BraidThemeContext));
  const inTestProvider = React.useContext(BraidTestProviderContext);
  const linkComponentFromContext = React.useContext(LinkComponentContext);
  useHideFocusRings(!(alreadyInBraidProvider || inTestProvider));
  assert__default["default"](typeof navigator !== "object" || navigator.userAgent.indexOf("jsdom") === -1 || inTestProvider, `Rendering 'BraidProvider' in Jest is not supported as it expects a browser environment. Please switch to 'BraidTestProvider'. See the docs for more info: https://seek-oss.github.io/braid-design-system/components/BraidTestProvider`);
  return /* @__PURE__ */ React__default["default"].createElement(index.BraidThemeContext.Provider, {
    value: theme
  }, /* @__PURE__ */ React__default["default"].createElement(TreatProvider, {
    theme: theme.treatTheme
  }, styleBody ? /* @__PURE__ */ React__default["default"].createElement("style", {
    type: "text/css"
  }, `body{margin:0;padding:0;background:${theme.background}}`) : null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: theme.vanillaTheme
  }, /* @__PURE__ */ React__default["default"].createElement(LinkComponentContext.Provider, {
    value: linkComponent || linkComponentFromContext
  }, alreadyInBraidProvider || inTestProvider ? children : /* @__PURE__ */ React__default["default"].createElement(BreakpointProvider, null, children)))));
};
const TextContext = React.createContext(false);
const BraidPortal = ({ children, container }) => {
  const { vanillaTheme } = index.useBraidTheme();
  return reactDom.createPortal(/* @__PURE__ */ React__default["default"].createElement(TextContext.Provider, {
    value: false
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: vanillaTheme
  }, children)), container != null ? container : document.body);
};
const useThemeName = () => index.useBraidTheme().name;
const ThemeNameConsumer = ({ children }) => children(useThemeName());
const useSpace = () => index.useBraidTheme().space;
const useColor = () => index.useBraidTheme().color;
function resolveResponsiveObject(breakpointName, value) {
  let resolvedValue = null;
  for (let i = 0; i < cssBreakpoints_cjs_js.breakpointNames.length; i++) {
    const currentBreakpointName = cssBreakpoints_cjs_js.breakpointNames[i];
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
  const breakpointName = React.useContext(breakpointContext);
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
const Box = React.forwardRef((_a, ref) => {
  var _b = _a, { component = "div", className } = _b, props = __objRest(_b, ["component", "className"]);
  const atomProps = {};
  const nativeProps = {};
  for (const key in props) {
    if (cssAtoms_sprinkles_cjs_css_js.sprinkles.properties.has(key)) {
      atomProps[key] = props[key];
    } else {
      nativeProps[key] = props[key];
    }
  }
  const userClasses = clsx__default["default"](className);
  const atomicClasses = cssAtoms_atoms_cjs_js.atoms(__spreadValues({
    reset: typeof component === "string" ? component : "div"
  }, atomProps));
  const element = React.createElement(component, __spreadProps(__spreadValues({
    className: `${atomicClasses}${userClasses ? ` ${userClasses}` : ""}`
  }, nativeProps), {
    ref
  }));
  return index.renderBackgroundProvider(props.background, element);
});
Box.displayName = "Box";
const defaultWeight = "regular";
const Divider = ({ weight = defaultWeight }) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  position: "relative"
}, /* @__PURE__ */ React__default["default"].createElement(Box, {
  position: "absolute",
  width: "full",
  className: [
    componentsDivider_Divider_cjs_css_js.base,
    componentsDivider_Divider_cjs_css_js.weight[weight] || componentsDivider_Divider_cjs_css_js.weight[defaultWeight]
  ]
}));
var HeadingContext = React.createContext(false);
const resolveResponsiveRangeProps = (props) => {
  const { above, below } = props;
  if (!above && !below) {
    return [false, false, false, false];
  }
  const startIndex = above ? cssBreakpoints_cjs_js.breakpointNames.indexOf(above) + 1 : 0;
  const endIndex = below ? cssBreakpoints_cjs_js.breakpointNames.indexOf(below) - 1 : cssBreakpoints_cjs_js.breakpointNames.length - 1;
  const range = cssBreakpoints_cjs_js.breakpointNames.slice(startIndex, endIndex + 1);
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
  children,
  component,
  above,
  below,
  screen,
  print,
  inline: inlineProp,
  data
}) => {
  const inText = Boolean(React.useContext(TextContext));
  const inHeading = Boolean(React.useContext(HeadingContext));
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);
  const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] = resolveResponsiveRangeProps({ above, below });
  const inline = inlineProp != null ? inlineProp : inText || inHeading;
  const display = inline ? "inline" : "block";
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    display: hiddenOnScreen ? "none" : optimizeResponsiveArray([
      hiddenOnMobile ? "none" : display,
      hiddenOnTablet ? "none" : display,
      hiddenOnDesktop ? "none" : display,
      hiddenOnWide ? "none" : display
    ]),
    className: hiddenOnPrint ? componentsHidden_Hidden_cjs_css_js.hiddenOnPrint : void 0,
    component: component || (inline ? "span" : "div")
  }, data ? buildDataAttributes(data) : void 0), children);
};
const alignToFlexAlignLookup = {
  left: "flexStart",
  center: "center",
  right: "flexEnd"
};
const alignToFlexAlign = (align) => align ? cssAtoms_sprinkles_cjs_css_js.mapResponsiveValue(align, (value) => alignToFlexAlignLookup[value]) : void 0;
const alignYToFlexAlignLookup = {
  top: "flexStart",
  center: "center",
  bottom: "flexEnd"
};
const alignYToFlexAlign = (alignY) => alignY ? cssAtoms_sprinkles_cjs_css_js.mapResponsiveValue(alignY, (value) => alignYToFlexAlignLookup[value]) : void 0;
const resolveResponsiveProp = (value, mobileAtoms, tabletAtoms, desktopAtoms, wideAtoms) => {
  var _a, _b, _c, _d;
  if (typeof value === "string" || typeof value === "number") {
    return mobileAtoms[value];
  }
  const normalized = cssAtoms_sprinkles_cjs_css_js.normalizeResponsiveValue(value);
  const [mobile, tablet, desktop, wide] = optimizeResponsiveArray([
    (_a = normalized.mobile) != null ? _a : null,
    (_b = normalized.tablet) != null ? _b : null,
    (_c = normalized.desktop) != null ? _c : null,
    (_d = normalized.wide) != null ? _d : null
  ]);
  const mobileAtom = mobileAtoms[mobile];
  const tabletAtom = tabletAtoms[tablet];
  const desktopAtom = desktopAtoms[desktop];
  const wideAtom = wideAtoms[wide];
  return clsx__default["default"](mobileAtom, tabletAtom, desktopAtom, wideAtom);
};
const negativeMarginLeft = (space) => clsx__default["default"](resolveResponsiveProp(space, cssNegativeMargin_negativeMarginLeft_cjs_css_js.mobile, cssNegativeMargin_negativeMarginLeft_cjs_css_js.tablet, cssNegativeMargin_negativeMarginLeft_cjs_css_js.desktop, cssNegativeMargin_negativeMarginLeft_cjs_css_js.wide));
const negativeMarginTop = (space) => clsx__default["default"](cssNegativeMargin_negativeMarginTop_cjs_css_js.base, resolveResponsiveProp(space, cssNegativeMargin_negativeMarginTop_cjs_css_js.mobile, cssNegativeMargin_negativeMarginTop_cjs_css_js.tablet, cssNegativeMargin_negativeMarginTop_cjs_css_js.desktop, cssNegativeMargin_negativeMarginTop_cjs_css_js.wide));
const alignToDisplay = {
  left: "block",
  center: "flex",
  right: "flex"
};
const useStackItem = ({ align, space }) => __spreadValues({
  paddingTop: space
}, align === "left" ? null : {
  display: cssAtoms_sprinkles_cjs_css_js.mapResponsiveValue(align, (value) => alignToDisplay[value]),
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
  const normalizedValue = cssAtoms_sprinkles_cjs_css_js.normalizeResponsiveValue(stackItemProps.display !== void 0 ? stackItemProps.display : "block");
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
  children,
  space = "none",
  align = "left",
  dividers = false,
  data
}) => {
  assert__default["default"](validStackComponents.includes(component), `Invalid Stack component: '${component}'. Should be one of [${validStackComponents.map((c) => `'${c}'`).join(", ")}]`);
  const stackItemProps = useStackItem({ space, align });
  const stackItems = flattenChildren__default["default"](children);
  const isList = component === "ol" || component === "ul";
  const stackItemComponent = isList ? "li" : "div";
  let firstItemOnMobile = null;
  let firstItemOnTablet = null;
  let firstItemOnDesktop = null;
  let firstItemOnWide = null;
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component,
    className: negativeMarginTop(space)
  }, data ? buildDataAttributes(data) : void 0), React.Children.map(stackItems, (child, index2) => {
    assert__default["default"](!(typeof child === "object" && child.type === Hidden && child.props.inline !== void 0), 'The "inline" prop is invalid on Hidden elements within a Stack');
    const hiddenProps = extractHiddenPropsFromChild(child);
    const hidden = hiddenProps ? resolveHiddenProps(hiddenProps) : [false, false, false, false];
    const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] = hidden;
    const responsivelyHidden = hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop || hiddenOnWide;
    if (firstItemOnMobile === null && !hiddenOnMobile) {
      firstItemOnMobile = index2;
    }
    if (firstItemOnTablet === null && !hiddenOnTablet) {
      firstItemOnTablet = index2;
    }
    if (firstItemOnDesktop === null && !hiddenOnDesktop) {
      firstItemOnDesktop = index2;
    }
    if (firstItemOnWide === null && !hiddenOnWide) {
      firstItemOnWide = index2;
    }
    return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
      component: stackItemComponent,
      className: [
        hiddenProps && hiddenProps.print ? componentsHidden_Hidden_cjs_css_js.hiddenOnPrint : null
      ]
    }, responsivelyHidden ? calculateHiddenStackItemProps(stackItemProps, hidden) : stackItemProps), dividers && index2 > 0 ? /* @__PURE__ */ React__default["default"].createElement(Box, {
      width: "full",
      paddingBottom: space,
      display: optimizeResponsiveArray([
        index2 === firstItemOnMobile ? "none" : "block",
        index2 === firstItemOnTablet ? "none" : "block",
        index2 === firstItemOnDesktop ? "none" : "block",
        index2 === firstItemOnWide ? "none" : "block"
      ])
    }, typeof dividers === "string" ? /* @__PURE__ */ React__default["default"].createElement(Divider, {
      weight: dividers
    }) : /* @__PURE__ */ React__default["default"].createElement(Divider, null)) : null, hiddenProps ? hiddenProps.children : child);
  }));
};
const validTones$2 = ["neutral", "secondary"];
const AccordionContext = React.createContext(null);
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
  children,
  size = "large",
  tone,
  space: spaceProp,
  dividers = true,
  data
}) => {
  assert__default["default"](spaceProp === void 0 || Object.values(cssAtoms_sprinkles_cjs_css_js.normalizeResponsiveValue(spaceProp)).every((value) => value === void 0 || validSpaceValues.includes(value)), `To ensure adequate space for touch targets, 'space' prop values must be one of the following: ${validSpaceValues.map((x) => `"${x}"`).join(", ")}`);
  assert__default["default"](tone === void 0 || validTones$2.includes(tone), `The 'tone' prop should be one of the following: ${validTones$2.map((x) => `"${x}"`).join(", ")}`);
  const contextValue = React.useMemo(() => ({ size, tone }), [size, tone]);
  const space = spaceProp != null ? spaceProp : defaultSpaceForSize[dividers ? "divided" : "undivided"][size];
  return /* @__PURE__ */ React__default["default"].createElement(AccordionContext.Provider, {
    value: contextValue
  }, !dividers ? /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space,
    data
  }, children) : /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Divider, null), /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingY: space
  }, /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space,
    dividers: true
  }, children)), /* @__PURE__ */ React__default["default"].createElement(Divider, null)));
};
const Truncate = ({ children }) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  component: "span",
  display: "block",
  overflow: "hidden",
  className: componentsPrivate_Truncate_Truncate_cjs_css_js.truncate
}, children);
const Text = ({
  id,
  component = "span",
  size: sizeProp,
  tone: toneProp,
  align,
  weight: weightProp,
  baseline = true,
  truncate = false,
  data,
  children
}) => {
  assert__default["default"](!React.useContext(TextContext), "Text components should not be nested within each other");
  const { size, weight, tone } = index.useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
    tone: toneProp
  });
  const textStyles = index.useText({ weight, size, baseline, tone });
  const textContextValue = React.useMemo(() => ({
    tone,
    size,
    weight,
    baseline
  }), [tone, size, weight, baseline]);
  return /* @__PURE__ */ React__default["default"].createElement(TextContext.Provider, {
    value: textContextValue
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    id,
    display: "block",
    component,
    textAlign: align,
    className: textStyles
  }, data ? buildDataAttributes(data) : void 0), truncate ? /* @__PURE__ */ React__default["default"].createElement(Truncate, null, children) : children));
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
  alignY,
  collapseBelow,
  reverse
}) {
  const [collapseMobile, collapseTablet, collapseDesktop] = resolveResponsiveRangeProps({
    below: collapseBelow
  });
  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const rowReverseWide = (collapseMobile || collapseTablet || collapseDesktop) && reverse;
  const normalizedAlign = cssAtoms_sprinkles_cjs_css_js.normalizeResponsiveValue(alignToFlexAlign(align) || "flexStart");
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
    orderChildren: (children) => {
      const childrenArray = React.Children.toArray(children);
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
      alignItems: alignY ? alignYToFlexAlign(alignY) : void 0
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
const ColumnsContext = React.createContext({
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
  children,
  collapseBelow,
  reverse = false,
  space = "none",
  align,
  alignY,
  data
}) => {
  const normalizedSpace = cssAtoms_sprinkles_cjs_css_js.normalizeResponsiveValue(space);
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
    alignY,
    reverse
  });
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, collapsibleAlignmentProps), {
    className: negativeMarginLeft({
      mobile: collapseMobile ? "none" : mobileSpace,
      tablet: collapseTablet ? "none" : tabletSpace,
      desktop: collapseDesktop ? "none" : desktopSpace,
      wide: wideSpace
    })
  }), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(ColumnsContext.Provider, {
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
  }, orderChildren(children)));
};
const Column = ({ children, data, width }) => {
  const {
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    mobileSpace,
    tabletSpace,
    desktopSpace,
    wideSpace,
    collapsibleAlignmentChildProps
  } = React.useContext(ColumnsContext);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    minWidth: 0,
    width: width !== "content" ? "full" : void 0,
    flexShrink: width === "content" ? 0 : void 0,
    className: [
      componentsColumn_Column_cjs_css_js.column,
      width !== "content" ? componentsColumn_Column_cjs_css_js.width[width] : null
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
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
    className: componentsColumn_Column_cjs_css_js.columnContent
  }), children));
};
const iconSize = ({ size = "standard" } = {}) => clsx__default["default"](hooksUseIcon_icon_cjs_css_js.size, index.textSize(size));
const iconContainerSize = (size = "standard") => clsx__default["default"](hooksUseIcon_icon_cjs_css_js.blockWidths[size], cssLineHeightContainer_cjs_css_js.lineHeightContainer[size]);
const detaultVerticalCorrection = {
  uppercase: "none",
  lowercase: "none"
};
var useIcon = (_c, { verticalCorrection = detaultVerticalCorrection } = {}) => {
  var _d = _c, { size, tone, alignY, data } = _d, titleProps = __objRest(_d, ["size", "tone", "alignY", "data"]);
  const textContext = React.useContext(TextContext);
  const headingContext = React.useContext(HeadingContext);
  const inheritedTone = textContext && textContext.tone ? textContext.tone : "neutral";
  const resolvedTone = index.useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
  const a11yProps = titleProps.title ? __spreadProps(__spreadValues({}, titleProps), { role: "img" }) : { "aria-hidden": true };
  assert__default["default"](!(size && isInline), `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${textContext ? "Text" : "Heading"}>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`);
  assert__default["default"](!(alignY && !isInline), `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`);
  if (size === "fill") {
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
        hooksUseIcon_icon_cjs_css_js.size,
        hooksUseIcon_icon_cjs_css_js.inline,
        hooksUseIcon_icon_cjs_css_js.alignY[alignY || "uppercase"][verticalCorrection[alignY || "uppercase"]]
      ] : iconContainerSize(size)
    ]
  }, data ? buildDataAttributes(data) : void 0), a11yProps);
};
const IconAddSvg = (_e) => {
  var _f = _e, { title, titleId } = _f, props = __objRest(_f, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M18 11h-5V6c0-.6-.4-1-1-1s-1 .4-1 1v5H6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1v-5h5c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconAdd = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconAddSvg
  }, iconProps));
};
const IconBookmarkSvg = (_g) => {
  var _h = _g, { title, titleId } = _h, props = __objRest(_h, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: active ? IconBookmarkActiveSvg : IconBookmarkSvg
  }, iconProps));
};
const IconCautionSvg = (_m) => {
  var _n = _m, { title, titleId } = _n, props = __objRest(_n, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M22.71 17.262 14.738 3.71A3.183 3.183 0 0 0 12 2.013 3.183 3.183 0 0 0 9.262 3.71L1.29 17.262a3.152 3.152 0 0 0-.14 3.225A3.152 3.152 0 0 0 4 22h16a3.023 3.023 0 0 0 2.71-4.738zM20 20H4c-1.1 0-1.544-.776-.986-1.724l7.972-13.552A1.232 1.232 0 0 1 12 4.013a1.232 1.232 0 0 1 1.014.71l7.972 13.553C21.544 19.224 21.1 20 20 20z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M11.978 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"
  }));
};
const IconCaution = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconCautionSvg
  }, iconProps));
};
const IconChevronSvg = (_o) => {
  var _p = _o, { title, titleId } = _p, props = __objRest(_p, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconChevronSvg,
    className: [
      componentsIcons_IconChevron_IconChevron_cjs_css_js.root,
      className,
      {
        [componentsIcons_IconChevron_IconChevron_cjs_css_js.up]: direction === "up",
        [componentsIcons_IconChevron_IconChevron_cjs_css_js.left]: direction === "left",
        [componentsIcons_IconChevron_IconChevron_cjs_css_js.right]: direction === "right"
      }
    ]
  }, iconProps));
};
const IconClearSvg = (_s) => {
  var _t = _s, { title, titleId } = _t, props = __objRest(_t, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m13.4 12 5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"
  }));
};
const IconClear = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconClearSvg
  }, iconProps));
};
const IconCompanySvg = (_u) => {
  var _v = _u, { title, titleId } = _v, props = __objRest(_v, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M17 2.2V2c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v.2C5.9 2.6 5 3.7 5 5v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5c0-1.3-.9-2.4-2-2.8zM17 20h-3v-2h-4v2H7V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v15z"
  }));
};
const IconCompany = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconCompanySvg
  }, iconProps));
};
const IconComposeSvg = (_w) => {
  var _x = _w, { title, titleId } = _x, props = __objRest(_x, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m22.3 1.9-.2-.2C20.9.5 19 .5 17.9 1.7l-7.6 7.6c-.1.1-.2.3-.3.5l-1 4c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l4-1c.2 0 .3-.1.5-.3l7.6-7.6c.6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1zm-8.8 10.2-2.1.5.5-2.1L17 5.4 18.6 7l-5.1 5.1zm7.4-7.4-.9.9L18.4 4l.9-.9c.4-.4 1-.4 1.4 0l.2.2c.2.2.3.4.3.7s-.1.5-.3.7z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 11c-.6 0-1 .4-1 1v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h6c.6 0 1-.4 1-1s-.4-1-1-1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-6c0-.6-.4-1-1-1z"
  }));
};
const IconCompose = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconComposeSvg
  }, iconProps));
};
const IconCopySvg = (_y) => {
  var _z = _y, { title, titleId } = _z, props = __objRest(_z, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M14 7H6c-1.7 0-3 1.3-3 3v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3v-8c0-1.7-1.3-3-3-3zm1 11c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 2h-8C9.3 2 8 3.3 8 5h2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1v2c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3z"
  }));
};
const IconCopy = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconCopySvg
  }, iconProps));
};
const IconCreditCardSvg = (_A) => {
  var _B = _A, { title, titleId } = _B, props = __objRest(_B, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 4H4C2.3 4 1 5.3 1 7v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM3 7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v1H3V7zm18 10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-7h18v7z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M6 16h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z"
  }));
};
const IconCreditCard = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconCreditCardSvg
  }, iconProps));
};
const IconCriticalSvg = (_C) => {
  var _D = _C, { title, titleId } = _D, props = __objRest(_D, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 14c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1z"
  }));
};
const IconCritical = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconCriticalSvg
  }, iconProps));
};
const IconDateSvg = (_E) => {
  var _F = _E, { title, titleId } = _F, props = __objRest(_F, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM4 7c0-.6.4-1 1-1h2v1c0 .6.4 1 1 1s1-.4 1-1V6h6v1c0 .6.4 1 1 1s1-.4 1-1V6h2c.6 0 1 .4 1 1v3H4V7zm16 12c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-7h16v7z"
  }));
};
const IconDate = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconDateSvg
  }, iconProps));
};
const IconDeleteSvg = (_G) => {
  var _H = _G, { title, titleId } = _H, props = __objRest(_H, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M10 17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1zm4 0c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 4h-4V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H4c-.6 0-1 .4-1 1s.4 1 1 1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V6c.6 0 1-.4 1-1s-.4-1-1-1zM10 3h4v1h-4V3zm8 16c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V6h12v13z"
  }));
};
const IconDelete = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconDeleteSvg
  }, iconProps));
};
const IconDesktopSvg = (_I) => {
  var _J = _I, { title, titleId } = _J, props = __objRest(_J, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19.2 2H4.8A2.908 2.908 0 0 0 2 5v10a2.908 2.908 0 0 0 2.8 3H11v2.005H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3V18h6.2a2.908 2.908 0 0 0 2.8-3V5a2.908 2.908 0 0 0-2.8-3zm.8 13a.93.93 0 0 1-.8 1H4.8a.93.93 0 0 1-.8-1V5a.93.93 0 0 1 .8-1h14.4a.93.93 0 0 1 .8 1z"
  }));
};
const IconDesktop = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconDesktopSvg
  }, iconProps));
};
const IconDocumentSvg = (_K) => {
  var _L = _K, { title, titleId } = _L, props = __objRest(_L, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m19.5 6.7-3.6-3.2-1.2-1.2c-.2-.2-.4-.3-.7-.3H5.8C4.8 2 4 3.1 4 4.5V20c-.1 1 .7 1.9 1.7 2H18c1 .1 1.9-.7 2-1.7V8c0-.5-.2-1-.5-1.3zM15 5.4 16.6 7H15V5.4zM7 20c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h6v4c0 .6.4 1 1 1h4v10c0 .6-.4 1-1 1H7z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M14 11H9c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconDocument = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    fill: "none",
    d: "M15 5.414V7h1.586L15 5.414z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m19.707 7.293-5-5A1 1 0 0 0 14 2H7a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h5v-2H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6v4a1 1 0 0 0 1 1h4v5h2V8a1 1 0 0 0-.293-.707zM15 7V5.414L16.586 7z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19.707 16.293a1 1 0 0 0-1.414 0L17 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L15.586 19l-1.293 1.293a1 1 0 1 0 1.414 1.414L17 20.414l1.293 1.293a1 1 0 0 0 1.414-1.414L18.414 19l1.293-1.293a1 1 0 0 0 0-1.414z"
  }));
};
const IconDocumentBroken = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconDocumentBrokenSvg
  }, iconProps));
};
const IconDownloadSvg = (_O) => {
  var _P = _O, { title, titleId } = _P, props = __objRest(_P, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconDownloadSvg
  }, iconProps));
};
const IconEditSvg = (_Q) => {
  var _R = _Q, { title, titleId } = _R, props = __objRest(_R, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconEditSvg
  }, iconProps));
};
const IconEducationSvg = (_S) => {
  var _T = _S, { title, titleId } = _T, props = __objRest(_T, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM7 4h11v12H7c-.4 0-.7.1-1 .2V5c0-.6.4-1 1-1zm11 16H7c-.6 0-1-.4-1-1s.4-1 1-1h11v2z"
  }));
};
const IconEducation = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconEducationSvg
  }, iconProps));
};
const IconFilterSvg = (_U) => {
  var _V = _U, { title, titleId } = _V, props = __objRest(_V, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M6 9.2V5c0-.6-.4-1-1-1s-1 .4-1 1v4.2c-1.2.4-2 1.5-2 2.8 0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1v-4.2c1.2-.4 2-1.5 2-2.8 0-1.3-.8-2.4-2-2.8zM5 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 1.2V5c0-.6-.4-1-1-1s-1 .4-1 1v9.2c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.9-2.4-2-2.8zM12 18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM22 7c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.9 2.4 2 2.8V19c0 .6.4 1 1 1s1-.4 1-1V9.8c1.1-.4 2-1.5 2-2.8zm-3 1c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
  }));
};
const IconFilter = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconFilterSvg
  }, iconProps));
};
const IconFlagSvg = (_W) => {
  var _X = _W, { title, titleId } = _X, props = __objRest(_X, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19.41 2.967a1.031 1.031 0 0 0-1.08.148 4.778 4.778 0 0 1-2.83.599 8.47 8.47 0 0 1-3.135-.788A10.177 10.177 0 0 0 8.5 2c-2.887 0-4.005.952-4.2 1.144a1 1 0 0 0-.3.713V21a1 1 0 0 0 2 0v-6.298a6.167 6.167 0 0 1 2.5-.416 8.47 8.47 0 0 1 3.135.788A10.177 10.177 0 0 0 15.5 16c2.887 0 4.005-.952 4.2-1.144a1 1 0 0 0 .3-.713V3.857a.996.996 0 0 0-.59-.89zM18 13.584a6.174 6.174 0 0 1-2.5.416 8.47 8.47 0 0 1-3.135-.788 10.178 10.178 0 0 0-3.865-.926 9.467 9.467 0 0 0-2.5.298V4.416A6.174 6.174 0 0 1 8.5 4a8.47 8.47 0 0 1 3.135.788 10.178 10.178 0 0 0 3.865.926 9.467 9.467 0 0 0 2.5-.298z"
  }));
};
const IconFlag = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconFlagSvg
  }, iconProps));
};
const IconGridSvg = (_Y) => {
  var _Z = _Y, { title, titleId } = _Z, props = __objRest(_Z, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M8 3H6C4.3 3 3 4.3 3 6v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5H6c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm9-15h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2zm-1 5h-2c-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-2c0-1.7-1.3-3-3-3zm1 5c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2z"
  }));
};
const IconGrid = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconGridSvg
  }, iconProps));
};
const IconHeartSvg = (__) => {
  var _$ = __, { title, titleId } = _$, props = __objRest(_$, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M15.7 4c-.1 0-.1 0 0 0-1.4 0-2.7.5-3.7 1.3C11 4.5 9.7 4 8.4 4 5.5 4 3 6.3 3 9.3c0 4 5 8.9 8.6 10.6.1.1.3.1.4.1s.3 0 .4-.1C16 18.2 21 13.3 21 9.3c0-3-2.4-5.3-5.3-5.3zM12 17.9c-3-1.6-7-5.7-7-8.6C5 7.5 6.5 6 8.4 6h.1c1.1 0 2.1.5 2.8 1.4.4.5 1.2.5 1.6 0 .6-.9 1.6-1.4 2.7-1.4C17.5 6 19 7.5 19 9.3c0 2.9-4 7-7 8.6z"
  }));
};
const IconHeartActiveSvg = (_aa) => {
  var _ba = _aa, { title, titleId } = _ba, props = __objRest(_ba, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M15.7 4c-.1 0-.1 0 0 0-1.4 0-2.7.5-3.7 1.3C11 4.5 9.7 4 8.4 4 5.5 4 3 6.3 3 9.3c0 4 5 8.9 8.6 10.6.1.1.3.1.4.1s.3 0 .4-.1C16 18.2 21 13.3 21 9.3c0-3-2.4-5.3-5.3-5.3z"
  }));
};
const IconHeart = (_ca) => {
  var _da = _ca, { active = false } = _da, props = __objRest(_da, ["active"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: active ? IconHeartActiveSvg : IconHeartSvg
  }, iconProps));
};
const IconHelpSvg = (_ea) => {
  var _fa = _ea, { title, titleId } = _fa, props = __objRest(_fa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12.7 16.3c-.4-.4-1.1-.4-1.4 0-.1.1-.2.2-.2.3 0 .1-.1.2-.1.4 0 .3.1.5.3.7.2.2.4.3.7.3s.5-.1.7-.3c.1-.1.2-.2.2-.3 0-.1.1-.2.1-.4s0-.3-.1-.4c0-.1-.1-.2-.2-.3zm.6-10.1c-2-.7-4.3.4-5.1 2.5-.2.5.1 1 .6 1.2.5.2 1.1-.1 1.3-.6.4-1 1.5-1.6 2.6-1.2.8.3 1.3 1 1.3 1.9 0 .5-.3.7-1.3 1.2-.7.3-1.7.8-1.7 1.8 0 .6.4 1 1 1 .5 0 .9-.3 1-.7.1-.1.4-.2.6-.3.9-.4 2.5-1.2 2.5-3-.1-1.7-1.2-3.2-2.8-3.8z"
  }));
};
const IconHelp = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconHelpSvg
  }, iconProps));
};
const IconHistorySvg = (_ga) => {
  var _ha = _ga, { title, titleId } = _ha, props = __objRest(_ha, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 6c-.6 0-1 .4-1 1v5c0 .4.2.7.6.9l4 2c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.5 0-1.1-.4-1.3L13 11.4V7c0-.6-.4-1-1-1z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19.1 4.9C15.2 1 8.8 1 4.9 4.9 3.3 6.6 2.3 8.7 2 11H1c-.4 0-.8.2-.9.6-.2.4-.1.8.2 1.1l2 2c.2.2.4.3.7.3s.5-.1.7-.3l2-2c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-.9c.2-1.8 1-3.4 2.3-4.7 3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3-3.1 3.1-8.2 3.1-11.3 0-.4-.4-1-.4-1.4 0s-.4 1 0 1.4c1.9 2 4.4 3 7 3 2.6 0 5.1-1 7.1-2.9 3.9-3.9 3.9-10.3 0-14.2z"
  }));
};
const IconHistory = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconHistorySvg
  }, iconProps));
};
const IconHomeSvg = (_ia) => {
  var _ja = _ia, { title, titleId } = _ja, props = __objRest(_ja, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m20.7 9.2-8-7c-.4-.3-.9-.3-1.3 0l-8 7c-.3.2-.4.5-.4.8v11c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V10c0-.3-.1-.6-.3-.8zM19 20h-5v-4c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v4H5v-9.5l7-6.1 7 6.1V20z"
  }));
};
const IconHome = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconHomeSvg
  }, iconProps));
};
const IconImageSvg = (_ka) => {
  var _la = _ka, { title, titleId } = _la, props = __objRest(_la, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zM4 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v7.6L17.4 10c-.8-.8-2.1-.8-2.8 0l-9.9 9.9c-.4-.1-.7-.5-.7-.9V5zm15 15H7.4l8.6-8.6 4 4V19c0 .6-.4 1-1 1z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 8,
    cy: 8,
    r: 2
  }));
};
const IconImage = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconImageSvg
  }, iconProps));
};
const IconInfoSvg = (_ma) => {
  var _na = _ma, { title, titleId } = _na, props = __objRest(_na, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zm.9-3.4c0-.1-.1-.1-.1-.2s-.1-.1-.1-.1c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2l-.1.1c0 .1-.1.1-.1.2s0 .1-.1.2V8c0 .3.1.5.3.7.1.1.2.2.3.2.1.1.3.1.4.1h.2c.1 0 .1 0 .2-.1.1 0 .1-.1.2-.1l.1-.1c.2-.2.3-.4.3-.7v-.2c0-.1-.1-.1-.1-.2z"
  }));
};
const IconInfo = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconInfoSvg
  }, iconProps));
};
const IconInvoiceSvg = (_oa) => {
  var _pa = _oa, { title, titleId } = _pa, props = __objRest(_pa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 2H4c-.6 0-1 .4-1 1v18c0 .3.2.7.5.9.3.2.7.2 1 0l1.5-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c.3.1.6.1.9 0l1.6-.8 1.6.8c-.2.1-.1.1.1.1s.4 0 .5-.1c.3-.2.5-.5.5-.9V3c0-.6-.4-1-1-1zm-1 17.4-.6-.3c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.1-.1-.2-.1-.4-.1s-.3 0-.4.1l-1.6.8-1.6-.8c-.3-.1-.6-.1-.9 0l-1.5.8-1.6-.8c-.3-.1-.6-.1-.9 0l-.5.3V4h14v15.4z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M8 12h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm0-4h8c.6 0 1-.4 1-1s-.4-1-1-1H8c-.6 0-1 .4-1 1s.4 1 1 1zm8 6h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconInvoice = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconInvoiceSvg
  }, iconProps));
};
const IconLanguageSvg = (_qa) => {
  var _ra = _qa, { title, titleId } = _ra, props = __objRest(_ra, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20.784 18.593a10.917 10.917 0 0 0 0-13.186.995.995 0 0 0-.094-.126 10.96 10.96 0 0 0-17.38 0 .99.99 0 0 0-.094.126 10.917 10.917 0 0 0 0 13.186.988.988 0 0 0 .094.126 10.96 10.96 0 0 0 17.38 0 .993.993 0 0 0 .094-.126zM4.522 7h2.922a14.936 14.936 0 0 0-.902 4H3.06a8.942 8.942 0 0 1 1.463-4zm12.936 4a14.936 14.936 0 0 0-.902-4h2.922a8.942 8.942 0 0 1 1.463 4zM4.522 17a8.942 8.942 0 0 1-1.463-4h3.483a14.936 14.936 0 0 0 .902 4zm4.028-4h6.9a13.453 13.453 0 0 1-1.058 4H9.608a13.453 13.453 0 0 1-1.058-4zm0-2a13.453 13.453 0 0 1 1.058-4h4.784a13.453 13.453 0 0 1 1.058 4zm7.12-6a20.175 20.175 0 0 0-.882-1.553A8.988 8.988 0 0 1 17.645 5zM12 3l.028.001A17.948 17.948 0 0 1 13.382 5h-2.764a17.948 17.948 0 0 1 1.354-1.999zM8.33 5H6.355a8.988 8.988 0 0 1 2.857-1.553c-.287.456-.587.977-.882 1.553zm0 14c.295.576.595 1.097.882 1.553A8.988 8.988 0 0 1 6.355 19zM12 21l-.028-.001A17.948 17.948 0 0 1 10.618 19h2.764a17.948 17.948 0 0 1-1.354 1.999zm3.67-2h1.975a8.988 8.988 0 0 1-2.857 1.553c.287-.456.587-.977.882-1.553zm.886-2a14.936 14.936 0 0 0 .902-4h3.483a8.942 8.942 0 0 1-1.463 4z"
  }));
};
const IconLanguage = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconLanguageSvg
  }, iconProps));
};
const IconLinkSvg = (_sa) => {
  var _ta = _sa, { title, titleId } = _ta, props = __objRest(_ta, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12.848 17.334a6.214 6.214 0 0 1-1.476-.2L9.44 19.066a3.188 3.188 0 1 1-4.51-4.508l2.962-2.961a3.208 3.208 0 0 1 4.509 0 1 1 0 1 0 1.414-1.414 5.205 5.205 0 0 0-6.832-.413 5.102 5.102 0 0 0-.505.413l-2.961 2.96a5.188 5.188 0 0 0 7.337 7.337l3.293-3.293a6.226 6.226 0 0 1-1.3.147z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M11.15 6.664a6.214 6.214 0 0 1 1.476.2l1.932-1.932a3.188 3.188 0 1 1 4.508 4.508l-2.96 2.961a3.208 3.208 0 0 1-4.51 0 1 1 0 0 0-1.413 1.414 5.205 5.205 0 0 0 6.831.413 5.101 5.101 0 0 0 .506-.413l2.96-2.96a5.188 5.188 0 0 0-7.336-7.337L9.85 6.812a6.226 6.226 0 0 1 1.298-.148z"
  }));
};
const IconLink = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconLinkSvg
  }, iconProps));
};
const IconLinkBrokenSvg = (_ua) => {
  var _va = _ua, { title, titleId } = _va, props = __objRest(_va, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12.848 17.334a6.214 6.214 0 0 1-1.476-.2L9.44 19.066a3.188 3.188 0 1 1-4.51-4.508l2.962-2.961a3.208 3.208 0 0 1 4.509 0 1 1 0 1 0 1.414-1.414 5.205 5.205 0 0 0-6.832-.413 5.102 5.102 0 0 0-.505.413l-2.961 2.96a5.188 5.188 0 0 0 7.337 7.337l3.293-3.293a6.226 6.226 0 0 1-1.3.147z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M11.15 6.664a6.214 6.214 0 0 1 1.476.2l1.932-1.932a3.188 3.188 0 1 1 4.508 4.508l-2.96 2.961a3.208 3.208 0 0 1-4.51 0 1 1 0 0 0-1.413 1.414 5.205 5.205 0 0 0 6.831.413 5.101 5.101 0 0 0 .506-.413l2.96-2.96a5.188 5.188 0 0 0-7.336-7.337L9.85 6.812a6.226 6.226 0 0 1 1.298-.148zm-5.736-.25a.997.997 0 0 1-.707-.293L3.293 4.707a1 1 0 0 1 1.414-1.414l1.414 1.414a1 1 0 0 1-.707 1.707zM3.736 9.321a.994.994 0 0 1-.26-.034l-1.93-.517a1 1 0 0 1 .518-1.932l1.931.517a1 1 0 0 1-.258 1.966zM8.32 4.735a.999.999 0 0 1-.965-.74l-.517-1.933a1 1 0 0 1 1.932-.517l.517 1.932a1 1 0 0 1-.967 1.258z"
  }));
};
const IconLinkBroken = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconLinkBrokenSvg
  }, iconProps));
};
const IconListSvg = (_wa) => {
  var _xa = _wa, { title, titleId } = _xa, props = __objRest(_xa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9 8h10c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1zm10 3H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zm0 5H9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 5,
    cy: 7,
    r: 1
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 5,
    cy: 12,
    r: 1
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 5,
    cy: 17,
    r: 1
  }));
};
const IconList = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconListSvg
  }, iconProps));
};
const IconLocationSvg = (_ya) => {
  var _za = _ya, { title, titleId } = _za, props = __objRest(_za, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C7.6 1 4 4.6 4 9c0 4.1 6.5 12.6 7.2 13.6.2.2.5.4.8.4s.6-.1.8-.4c.7-1 7.2-9.5 7.2-13.6 0-4.4-3.6-8-8-8zm0 19.3c-2.2-3-6-8.8-6-11.3 0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-3.8 8.3-6 11.3z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 5c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
  }));
};
const IconLocation = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconLocationSvg
  }, iconProps));
};
const IconMailSvg = (_Aa) => {
  var _Ba = _Aa, { title, titleId } = _Ba, props = __objRest(_Ba, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M22 6.8C21.9 5.2 20.6 4 19 4H5C3.4 4 2.1 5.2 2 6.8V17c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6.8zM5 6h14c.4 0 .7.2.9.5L12 11.8 4.1 6.5c.2-.3.5-.5.9-.5zm14 12H5c-.6 0-1-.4-1-1V8.9l7.4 5c.2.1.4.2.6.2s.4-.1.6-.2l7.4-5V17c0 .6-.4 1-1 1z"
  }));
};
const IconMail = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconMailSvg
  }, iconProps));
};
const IconMinusSvg = (_Ca) => {
  var _Da = _Ca, { title, titleId } = _Da, props = __objRest(_Da, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M18 11H6c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconMinus = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconMinusSvg
  }, iconProps));
};
const IconMobileSvg = (_Ea) => {
  var _Fa = _Ea, { title, titleId } = _Fa, props = __objRest(_Fa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12.71 16.29a1.047 1.047 0 0 0-1.42 0 1.029 1.029 0 0 0-.21.33.832.832 0 0 0-.08.38.951.951 0 0 0 .29.7.96.96 0 0 0 .71.3 1 1 0 0 0 .38-.08 1.012 1.012 0 0 0 .33-.22.955.955 0 0 0 .29-.7 1 1 0 0 0-.08-.38 1.029 1.029 0 0 0-.21-.33z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M16.286 2H7.714A2.761 2.761 0 0 0 5 4.8v14.4A2.761 2.761 0 0 0 7.714 22h8.572A2.761 2.761 0 0 0 19 19.2V4.8A2.761 2.761 0 0 0 16.286 2zM17 19.2a.761.761 0 0 1-.714.8H7.714A.761.761 0 0 1 7 19.2V4.8a.761.761 0 0 1 .714-.8h8.572a.761.761 0 0 1 .714.8z"
  }));
};
const IconMobile = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconMobileSvg
  }, iconProps));
};
const IconMoneySvg = (_Ga) => {
  var _Ha = _Ga, { title, titleId } = _Ha, props = __objRest(_Ha, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M17 15.5c0-1.6-1.3-4.3-4.9-4.5-3-.2-3.1-2.5-3.1-2.5 0-.7.3-1.3.8-1.7.6-.5 1.4-.8 2.2-.8.8 0 1.6.3 2.2.8.4.4 1.1.3 1.4-.1.4-.4.3-1.1-.1-1.4-.7-.6-1.6-1-2.5-1.2V3c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-.9.2-1.7.5-2.5 1.2C7.6 6.1 7 7.2 7 8.5c0 1.6 1.3 4.3 4.9 4.5 3 .2 3.1 2.5 3.1 2.5 0 .7-.3 1.3-.8 1.7-.6.5-1.4.8-2.2.8-.8 0-1.6-.3-2.2-.8-.4-.4-1.1-.3-1.4.1-.4.4-.3 1.1.1 1.4.7.6 1.6 1 2.5 1.2V21c0 .6.4 1 1 1s1-.4 1-1v-1.1c.9-.2 1.7-.5 2.5-1.2.9-.8 1.5-1.9 1.5-3.2z"
  }));
};
const IconMoney = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconMoneySvg
  }, iconProps));
};
const IconNewWindowSvg = (_Ia) => {
  var _Ja = _Ia, { title, titleId } = _Ja, props = __objRest(_Ja, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 11c-.6 0-1 .4-1 1v5c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h5c.6 0 1-.4 1-1s-.4-1-1-1H7C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-5c0-.6-.4-1-1-1z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M21 3v-.4l-.1-.1c0-.1-.1-.1-.1-.2 0 0-.1 0-.1-.1-.1 0-.1-.1-.2-.1h-4.3c-.6 0-1 .4-1 1s.4 1 1 1H18l-6.5 7.3c-.4.4-.3 1 .1 1.4.2.2.4.3.7.3.3 0 .6-.1.7-.3l6.3-7V7c0 .6.4 1 1 1s1-.4 1-1L21 3z"
  }));
};
const IconNewWindow = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconNewWindowSvg
  }, iconProps));
};
const IconNoteSvg = (_Ka) => {
  var _La = _Ka, { title, titleId } = _La, props = __objRest(_La, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M13 11H8c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H8c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20.9 8.6c-.1-.1-.1-.2-.2-.3l-5-5c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1H6C4.3 3 3 4.3 3 6v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V9c0-.1 0-.3-.1-.4zM16 6.4 17.6 8H16V6.4zM18 19H6c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h8v4c0 .6.4 1 1 1h4v8c0 .6-.4 1-1 1z"
  }));
};
const IconNote = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconNoteSvg
  }, iconProps));
};
const IconNotificationSvg = (_Ma) => {
  var _Na = _Ma, { title, titleId } = _Na, props = __objRest(_Na, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 16v-6a8.018 8.018 0 0 0-5.45-7.577 2.996 2.996 0 0 0-5.1 0A8.018 8.018 0 0 0 4 10v6a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM6 16v-6a6.008 6.008 0 0 1 4.411-5.78 1.001 1.001 0 0 0 .663-.591.996.996 0 0 1 1.852 0 1.001 1.001 0 0 0 .663.592A6.008 6.008 0 0 1 18 10v6zm6 6a2.991 2.991 0 0 0 2.816-2H9.184A2.991 2.991 0 0 0 12 22z"
  }));
};
const IconNotification = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconNotificationSvg
  }, iconProps));
};
const IconOverflowSvg = (_Oa) => {
  var _Pa = _Oa, { title, titleId } = _Pa, props = __objRest(_Pa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 12,
    cy: 4,
    r: 2
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 12,
    cy: 20,
    r: 2
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2
  }));
};
const IconOverflow = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconOverflowSvg
  }, iconProps));
};
const IconPeopleSvg = (_Qa) => {
  var _Ra = _Qa, { title, titleId } = _Ra, props = __objRest(_Ra, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M14.772 4.023c.076-.006.15-.023.228-.023a3 3 0 0 1 0 6c-.078 0-.152-.017-.228-.023a6.529 6.529 0 0 1-1.325 1.751A4.934 4.934 0 0 0 15 12a5 5 0 0 0 0-10 4.934 4.934 0 0 0-1.553.272 6.529 6.529 0 0 1 1.325 1.751zM17 14h-1.853a6.54 6.54 0 0 1 1.613 2H17a3.003 3.003 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3H7a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1z"
  }));
};
const IconPeople = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPeopleSvg
  }, iconProps));
};
const IconPersonAddSvg = (_Sa) => {
  var _Ta = _Sa, { title, titleId } = _Ta, props = __objRest(_Ta, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9 12a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3zm12 7h-2V9a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2zm-10 3H7a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5z"
  }));
};
const IconPersonAdd = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m20.4 4.1-8-3c-.2-.1-.5-.1-.7 0l-8 3c-.4.1-.7.5-.7.9v7c0 6.5 8.2 10.7 8.6 10.9.1.1.2.1.4.1s.3 0 .4-.1c.4-.2 8.6-4.4 8.6-10.9V5c0-.4-.3-.8-.6-.9zM19 12c0 4.5-5.4 7.9-7 8.9-1.6-.9-7-4.3-7-8.9V5.7l7-2.6 7 2.6V12z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9.7 11.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L11 12.6l-1.3-1.3z"
  }));
};
const IconPersonVerified = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPersonVerifiedSvg
  }, iconProps));
};
const IconPhoneSvg = (_Wa) => {
  var _Xa = _Wa, { title, titleId } = _Xa, props = __objRest(_Xa, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M18.338 20.999a2.45 2.45 0 0 1-.292-.017A17.205 17.205 0 0 1 3.018 5.954a2.63 2.63 0 0 1 .655-2.047A2.723 2.723 0 0 1 5.699 3h3.29a1 1 0 0 1 .894.553l1.694 3.387a1 1 0 0 1-.062 1.002l-1.33 1.995a14.439 14.439 0 0 0 3.754 3.792l1.119-1.119a1.003 1.003 0 0 1 1.078-.221l4.235 1.694a1 1 0 0 1 .629.929V18.3a2.723 2.723 0 0 1-.907 2.026 2.641 2.641 0 0 1-1.755.672zM5.699 5a.717.717 0 0 0-.534.24.63.63 0 0 0-.161.488 15.191 15.191 0 0 0 13.268 13.268.65.65 0 0 0 .489-.161.717.717 0 0 0 .239-.534v-2.613l-2.994-1.197-1.229 1.228a.998.998 0 0 1-1.236.141 16.495 16.495 0 0 1-5.402-5.403.998.998 0 0 1 .017-1.082l1.372-2.059L8.37 5z"
  }));
};
const IconPhone = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPhoneSvg
  }, iconProps));
};
const IconPositiveSvg = (_Ya) => {
  var _Za = _Ya, { title, titleId } = _Za, props = __objRest(_Za, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M15.3 9.3 11 13.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2c.2.2.5.3.7.3s.5-.1.7-.3l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0z"
  }));
};
const IconPositive = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPositiveSvg
  }, iconProps));
};
const IconPrintSvg = (__a) => {
  var _$a = __a, { title, titleId } = _$a, props = __objRest(_$a, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 8h-1V3c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v5H5c-1.7 0-3 1.3-3 3v4c0 1.7 1.3 3 3 3v3c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3c1.7 0 3-1.3 3-3v-4c0-1.7-1.3-3-3-3zM8 4h8v4H8V4zm9 16H7v-4h10v4zm3-5c0 .6-.4 1-1 1v-1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v4z"
  }));
};
const IconPrint = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPrintSvg
  }, iconProps));
};
const IconProfileSvg = (_ab) => {
  var _bb = _ab, { title, titleId } = _bb, props = __objRest(_bb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3zm6 18a1 1 0 0 1-1-1v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1z"
  }));
};
const IconProfile = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconProfileSvg
  }, iconProps));
};
const IconPromoteSvg = (_cb) => {
  var _db = _cb, { title, titleId } = _db, props = __objRest(_db, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M6 10h1c.6 0 1-.4 1-1s-.4-1-1-1H6V7c0-.6-.4-1-1-1s-1 .4-1 1v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1zm5 8h-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1H7c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1s1-.4 1-1v-1h1c.6 0 1-.4 1-1s-.4-1-1-1zm10-7c-2.2 0-4-3.2-4-7 0-.6-.4-1-1-1s-1 .4-1 1c0 3.8-1.8 7-4 7-.6 0-1 .4-1 1s.4 1 1 1c2.2 0 4 3.2 4 7 0 .6.4 1 1 1s1-.4 1-1c0-3.8 1.8-7 4-7 .6 0 1-.4 1-1s-.4-1-1-1zm-5 4c-.6-1.3-1.3-2.3-2.2-3 .9-.7 1.7-1.7 2.2-3 .6 1.3 1.3 2.3 2.2 3-.9.7-1.6 1.7-2.2 3z"
  }));
};
const IconPromote = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconPromoteSvg
  }, iconProps));
};
const IconRecommendedSvg = (_eb) => {
  var _fb = _eb, { title, titleId } = _fb, props = __objRest(_fb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19 8c0-3.9-3.1-7-7-7S5 4.1 5 8c0 2 .8 3.8 2.2 5.1L6 21.9c-.1.4.1.8.4 1 .3.2.7.2 1.1 0l4.5-2.7 4.5 2.7c.1.1.3.1.5.1s.4-.1.5-.2c.3-.2.5-.6.4-1L16.7 13c1.5-1.2 2.3-3 2.3-5zM7 8c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm8.7 12.1-3.2-1.9c-.3-.2-.7-.2-1 0l-3.2 1.9.7-5.8c.9.4 1.9.7 3 .7s2.1-.2 3-.7l.7 5.8z"
  }));
};
const IconRecommended = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconRecommendedSvg
  }, iconProps));
};
const IconRefreshSvg = (_gb) => {
  var _hb = _gb, { title, titleId } = _hb, props = __objRest(_hb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M23.607 10.29a1 1 0 0 0-1.414 0l-.304.304A9.995 9.995 0 1 0 12 22a1 1 0 0 0 0-2 8 8 0 1 1 7.86-9.457l-.253-.253a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414z"
  }));
};
const IconRefresh = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconRefreshSvg
  }, iconProps));
};
const IconResumeSvg = (_ib) => {
  var _jb = _ib, { title, titleId } = _jb, props = __objRest(_jb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M17 2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v14z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 10,
    cy: 8,
    r: 2
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M15 12H9c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm-2 4H9c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1z"
  }));
};
const IconResume = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconResumeSvg
  }, iconProps));
};
const IconSearchSvg = (_kb) => {
  var _lb = _kb, { title, titleId } = _lb, props = __objRest(_lb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M21.7 20.3 18 16.6c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9 4 9 9 9c2.1 0 4.1-.7 5.6-2l3.7 3.7c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-.8 3.7-2 4.9-1.3 1.3-3 2-4.9 2-4 .1-7.1-3-7.1-6.9z"
  }));
};
const IconSearch = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSearchSvg
  }, iconProps));
};
const IconSecuritySvg = (_mb) => {
  var _nb = _mb, { title, titleId } = _nb, props = __objRest(_nb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M17 10V7c0-2.8-2.2-5-5-5S7 4.2 7 7v3c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v3H9V7zm9 12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v6z"
  }));
};
const IconSecurity = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSecuritySvg
  }, iconProps));
};
const IconSendSvg = (_ob) => {
  var _pb = _ob, { title, titleId } = _pb, props = __objRest(_pb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSendSvg
  }, iconProps));
};
const IconSentSvg = (_qb) => {
  var _rb = _qb, { title, titleId } = _rb, props = __objRest(_rb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M13 8.2V6.4c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6l-6.3 6.3c-.4.4-.4 1 0 1.4L9.6 19c.8.8 2 .8 2.8 0 .4-.4.6-.9.6-1.4v-1.7c2.5 0 4.9 1.3 6.1 3.6.2.3.5.5.9.5h.2c.4-.1.8-.5.8-1 0-3.3-1.7-9.5-8-10.8zM11.9 14c-.5.1-.9.5-.9 1v2.6L5.4 12 11 6.4V9c0 .5.4.9.9 1 4.1.5 5.8 3.4 6.6 5.7-1.9-1.4-4.3-2-6.6-1.7z"
  }));
};
const IconSent = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSentSvg
  }, iconProps));
};
const IconSettingsSvg = (_sb) => {
  var _tb = _sb, { title, titleId } = _tb, props = __objRest(_tb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m21.3 13.3-.2-.2c-.5-.7-.5-1.5 0-2.2l.2-.2c.6-.8.9-1.7.8-2.7-.2-2.1-2.1-3.6-4.2-3.4h-.3c-.8.1-1.6-.3-1.9-1.1l-.1-.3c-.4-.9-1.1-1.6-2-2-.9-.4-2-.4-2.9-.1-1 .4-1.7 1.1-2.1 2l-.2.4c-.3.8-1.1 1.2-1.9 1.1h-.3c-1-.1-1.9.2-2.7.7-1.6 1.3-2 3.7-.8 5.4l.2.2c.5.6.5 1.5 0 2.2l-.2.2c-.5.8-.8 1.7-.7 2.7.1 1 .6 1.9 1.4 2.6.8.6 1.8.9 2.8.8h.3c.8-.1 1.6.3 1.9 1.1l.1.3c.4.9 1.1 1.6 2 2 .5.2 1 .3 1.5.3s.9-.1 1.4-.3c1-.4 1.7-1.1 2.1-2l.1-.3c.3-.7 1.1-1.2 1.9-1.1h.3c.9.1 1.9-.2 2.7-.7.8-.6 1.4-1.5 1.5-2.5.2-1 0-2.1-.7-2.9zm-1.2 2.6c-.1.5-.3.9-.7 1.2-.4.3-.8.4-1.3.3h-.3c-1.7-.2-3.2.7-3.9 2.3l-.1.3c-.2.5-.6.8-1 1-.5.2-1 .2-1.4 0-.4-.2-.8-.5-.9-.9l-.1-.3c-.6-1.4-2-2.3-3.5-2.3h-.7c-.5.1-1-.1-1.4-.4-.4-.3-.6-.7-.7-1.2 0-.5.1-.9.3-1.3l.2-.2c1-1.4 1-3.2 0-4.5l-.2-.4c-.3-.4-.4-.9-.4-1.4.1-.5.3-.9.7-1.2.4-.2.9-.4 1.3-.3h.3c1.7.2 3.3-.7 4-2.2l.1-.3c.2-.4.6-.8 1-1 .5-.2 1-.2 1.4 0 .4.2.8.5.9.9l.1.3c.7 1.5 2.3 2.4 3.9 2.3h.3c1-.1 1.9.6 2 1.6 0 .5-.1.9-.3 1.3l-.2.2c-1 1.4-1 3.2 0 4.5l.2.2c.3.5.4 1 .4 1.5z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.7-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.8 2-2 2z"
  }));
};
const IconSettings = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSettingsSvg
  }, iconProps));
};
const IconShareSvg = (_ub) => {
  var _vb = _ub, { title, titleId } = _vb, props = __objRest(_vb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20.7 11.3 14.4 5c-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2v1.7C4.7 9.5 3 15.7 3 19c0 .5.3.9.8 1H4c.4 0 .7-.2.9-.5 1.2-2.2 3.6-3.6 6.1-3.6v1.7c0 .5.2 1 .6 1.4.8.8 2 .8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4zM13 17.6V15c0-.5-.4-.9-.9-1-.4-.1-.8-.1-1.2-.1-1.9 0-3.8.6-5.4 1.8.7-2.4 2.5-5.2 6.6-5.7.5-.1.9-.5.9-1V6.4l5.6 5.6-5.6 5.6z"
  }));
};
const IconShare = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M13.227 20v-7.288h2.46l.367-2.853h-2.827V8.042c0-.825.23-1.384 1.413-1.384h1.511V4.111A20.858 20.858 0 0 0 13.958 4a3.424 3.424 0 0 0-3.656 3.759v2.099H7.85v2.853h2.453V20z"
  }));
};
const IconSocialFacebook = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSocialFacebookSvg
  }, iconProps));
};
const IconSocialGitHubSvg = (_yb) => {
  var _zb = _yb, { title, titleId } = _zb, props = __objRest(_zb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12.006 2a10 10 0 0 0-3.16 19.489c.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341a2.648 2.648 0 0 0-1.11-1.463c-.908-.62.068-.608.068-.608a2.1 2.1 0 0 1 1.532 1.03 2.13 2.13 0 0 0 2.91.831 2.137 2.137 0 0 1 .635-1.336c-2.22-.253-4.555-1.11-4.555-4.943a3.865 3.865 0 0 1 1.03-2.683 3.597 3.597 0 0 1 .098-2.647s.84-.269 2.75 1.026a9.478 9.478 0 0 1 5.007 0c1.909-1.294 2.747-1.026 2.747-1.026a3.592 3.592 0 0 1 .1 2.647 3.859 3.859 0 0 1 1.027 2.683c0 3.842-2.338 4.687-4.566 4.935a2.387 2.387 0 0 1 .68 1.852c0 1.336-.013 2.415-.013 2.743 0 .267.18.578.688.48A10.001 10.001 0 0 0 12.006 2z",
    fillRule: "evenodd"
  }));
};
const IconSocialGitHub = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 5.441c2.136 0 2.39.009 3.233.047a4.426 4.426 0 0 1 1.485.276 2.65 2.65 0 0 1 1.518 1.518 4.427 4.427 0 0 1 .276 1.485c.038.844.047 1.097.047 3.233s-.009 2.39-.047 3.233a4.427 4.427 0 0 1-.276 1.485 2.65 2.65 0 0 1-1.518 1.518 4.427 4.427 0 0 1-1.485.276c-.844.038-1.097.047-3.233.047s-2.39-.009-3.233-.047a4.427 4.427 0 0 1-1.485-.276 2.65 2.65 0 0 1-1.518-1.518 4.426 4.426 0 0 1-.276-1.485c-.038-.844-.047-1.097-.047-3.233s.009-2.39.047-3.233a4.426 4.426 0 0 1 .276-1.485 2.65 2.65 0 0 1 1.518-1.518 4.426 4.426 0 0 1 1.485-.276c.844-.038 1.097-.047 3.233-.047M12 4c-2.173 0-2.445.01-3.298.048a5.872 5.872 0 0 0-1.942.372 4.09 4.09 0 0 0-2.34 2.34 5.872 5.872 0 0 0-.372 1.942C4.01 9.555 4 9.827 4 12s.01 2.445.048 3.298a5.872 5.872 0 0 0 .372 1.942 4.09 4.09 0 0 0 2.34 2.34 5.872 5.872 0 0 0 1.942.372C9.555 19.99 9.827 20 12 20s2.445-.01 3.298-.048a5.872 5.872 0 0 0 1.942-.372 4.09 4.09 0 0 0 2.34-2.34 5.872 5.872 0 0 0 .372-1.942C19.99 14.445 20 14.173 20 12s-.01-2.445-.048-3.298a5.872 5.872 0 0 0-.372-1.942 4.09 4.09 0 0 0-2.34-2.34 5.872 5.872 0 0 0-1.942-.372C14.445 4.01 14.173 4 12 4z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 7.892A4.108 4.108 0 1 0 16.108 12 4.108 4.108 0 0 0 12 7.892zm0 6.775A2.667 2.667 0 1 1 14.667 12 2.667 2.667 0 0 1 12 14.667z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    cx: 16.27,
    cy: 7.73,
    r: 0.96
  }));
};
const IconSocialInstagram = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M8.134 18.987H5.23V9.653h2.904zm-1.45-10.61a1.682 1.682 0 1 1 1.68-1.682 1.682 1.682 0 0 1-1.68 1.683zM19 18.988h-2.9v-4.54c0-1.082-.02-2.474-1.508-2.474-1.51 0-1.74 1.18-1.74 2.397v4.617H9.954V9.653h2.781v1.276h.04a3.047 3.047 0 0 1 2.745-1.508c2.937 0 3.48 1.933 3.48 4.447z"
  }));
};
const IconSocialLinkedIn = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSocialLinkedInSvg
  }, iconProps));
};
const IconSocialMediumSvg = (_Eb) => {
  var _Fb = _Eb, { title, titleId } = _Fb, props = __objRest(_Fb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M21 21H3V3h18zM7.295 14.365a.615.615 0 0 1-.163.53l-1.27 1.54v.204h3.601v-.203l-1.27-1.54a.638.638 0 0 1-.175-.531V9.742l3.161 6.897h.367l2.716-6.897v5.497c0 .147 0 .175-.096.271l-.977.948v.204h4.742v-.204l-.943-.925a.282.282 0 0 1-.107-.271v-6.8a.282.282 0 0 1 .107-.272l.966-.925v-.203h-3.342l-2.383 5.942-2.71-5.942H6.015v.203l1.129 1.36a.468.468 0 0 1 .152.395z"
  }));
};
const IconSocialMedium = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M9.403 17.689a8.117 8.117 0 0 0 8.172-8.172 7.64 7.64 0 0 0-.008-.372A5.844 5.844 0 0 0 19 7.658a5.734 5.734 0 0 1-1.65.452 2.882 2.882 0 0 0 1.263-1.589 5.756 5.756 0 0 1-1.823.698 2.875 2.875 0 0 0-4.895 2.619 8.155 8.155 0 0 1-5.92-3 2.875 2.875 0 0 0 .889 3.834 2.851 2.851 0 0 1-1.301-.36l-.001.037a2.874 2.874 0 0 0 2.304 2.816 2.868 2.868 0 0 1-1.297.05 2.876 2.876 0 0 0 2.684 1.994 5.764 5.764 0 0 1-3.568 1.23 5.847 5.847 0 0 1-.685-.04 8.132 8.132 0 0 0 4.403 1.29"
  }));
};
const IconSocialTwitter = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSocialTwitterSvg
  }, iconProps));
};
const IconStarSvg = (_Ib) => {
  var _Jb = _Ib, { title, titleId } = _Jb, props = __objRest(_Jb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.7-1.5-.7-1.8 0L8.2 7.3l-6.3 1c-.4 0-.7.3-.9.7-.1.4 0 .8.3 1l4.6 4.5-1.1 6.4c-.1.4.1.8.4 1 .2 0 .4.1.6.1.2 0 .3 0 .5-.1l5.7-3 5.7 3c.3.2.7.1 1.1-.1.3-.2.5-.6.4-1l-1.1-6.4 4.6-4.5c.3-.2.4-.6.3-.9zm-6.7 4.4c-.2.2-.3.6-.3.9l.8 4.9-4.4-2.3c-.3-.2-.6-.2-.9 0l-4.4 2.3.9-4.9c0-.3-.1-.7-.3-.9L4.1 10 9 9.3c.3 0 .6-.3.8-.5L12 4.3l2.2 4.4c.1.3.4.5.8.5l4.9.7-3.6 3.5z"
  }));
};
const IconStarActiveSvg = (_Kb) => {
  var _Lb = _Kb, { title, titleId } = _Lb, props = __objRest(_Lb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M23 9c-.1-.4-.4-.6-.8-.7l-6.4-.9-2.9-5.8c-.3-.5-.9-.7-1.4-.4-.2.1-.3.2-.4.4L8.2 7.3l-6.3 1c-.6.1-1 .6-.9 1.1 0 .2.1.4.3.6l4.6 4.5-1.1 6.4c-.1.5.3 1.1.8 1.2.2 0 .4 0 .6-.1l5.7-3 5.7 3c.5.3 1.1.1 1.3-.4.1-.2.1-.4.1-.6l-1.1-6.4 4.6-4.5c.5-.4.6-.8.5-1.1z"
  }));
};
const IconStar = (_Mb) => {
  var _Nb = _Mb, { active = false } = _Nb, props = __objRest(_Nb, ["active"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: active ? IconStarActiveSvg : IconStarSvg
  }, iconProps));
};
const IconStatisticsSvg = (_Ob) => {
  var _Pb = _Ob, { title, titleId } = _Pb, props = __objRest(_Pb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M20 20H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2zM4 16a1 1 0 0 1-.707-1.707l5-5a1 1 0 0 1 1.414 0L12 11.586l7.293-7.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0L9 11.414l-4.293 4.293A.997.997 0 0 1 4 16z"
  }));
};
const IconStatistics = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconStatisticsSvg
  }, iconProps));
};
const IconSubCategorySvg = (_Qb) => {
  var _Rb = _Qb, { title, titleId } = _Rb, props = __objRest(_Rb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m18.7 14.3-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H8c-.6 0-1-.4-1-1V6c0-.6-.4-1-1-1s-1 .4-1 1v7c0 1.7 1.3 3 3 3h7.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4z"
  }));
};
const IconSubCategory = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconSubCategorySvg
  }, iconProps));
};
const IconTagSvg = (_Sb) => {
  var _Tb = _Sb, { title, titleId } = _Tb, props = __objRest(_Tb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M7.4 6.1c-.3-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.1.1-.1.3-.1.4 0 .1 0 .3.1.4.1.1.1.2.2.3.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.1-.1-.2-.2-.3-.2z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m22.1 10.9-8.6-8.6c-.2-.2-.4-.3-.7-.3h-8c-1.7 0-3 1.3-3 3v8c0 .3.1.5.3.7l8.6 8.6c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l7.1-7.1.1-.1c1.2-1.2 1.2-3.1 0-4.2zm-1.3 2.7s-.1.1 0 0l-7.3 7.3c-.4.4-1 .4-1.4 0l-8.3-8.3V5c0-.6.4-1 1-1h7.6l8.3 8.3c.4.4.4.9.1 1.3z"
  }));
};
const IconTag = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconTagSvg
  }, iconProps));
};
const IconThumbSvg = (_Ub) => {
  var _Vb = _Ub, { title, titleId } = _Vb, props = __objRest(_Vb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M21.66 9.246A2.968 2.968 0 0 0 19.225 8H14V4.91a2.757 2.757 0 0 0-5.443-.74L7.237 9H5a3.003 3.003 0 0 0-3 3v7a3.003 3.003 0 0 0 3 3h11.559a2.996 2.996 0 0 0 2.845-2.05l2.666-8a2.967 2.967 0 0 0-.41-2.704zM7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2zm13.174-8.684-2.666 8a1 1 0 0 1-.95.684H9v-9.866l1.486-5.438c.19-.704.7-.692.852-.674.155.022.662.147.663.978L12 8.999A1 1 0 0 0 13 10h6.226a1 1 0 0 1 .948 1.316z"
  }));
};
const IconThumb = (_Wb) => {
  var _Xb = _Wb, { direction = "up" } = _Xb, props = __objRest(_Xb, ["direction"]);
  const _a = useIcon(props), { className } = _a, iconProps = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconThumbSvg,
    className: [
      componentsIcons_IconThumb_IconThumb_cjs_css_js.root,
      className,
      {
        [componentsIcons_IconThumb_IconThumb_cjs_css_js.down]: direction === "down"
      }
    ]
  }, iconProps));
};
const IconTickSvg = (_Yb) => {
  var _Zb = _Yb, { title, titleId } = _Zb, props = __objRest(_Zb, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M19.7 6.3c-.4-.4-1-.4-1.4 0L9 15.6l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3l10-10c.4-.4.4-1 0-1.4z"
  }));
};
const IconTick = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconTickSvg
  }, iconProps));
};
const IconTimeSvg = (__b) => {
  var _$b = __b, { title, titleId } = _$b, props = __objRest(_$b, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M16.4 13.1 13 11.4V6c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .4.2.7.6.9l4 2c.1.1.2.1.4.1.4 0 .7-.2.9-.6.2-.4 0-1-.5-1.3z"
  }), /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
  }));
};
const IconTime = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconTimeSvg
  }, iconProps));
};
const IconUploadSvg = (_ac) => {
  var _bc = _ac, { title, titleId } = _bc, props = __objRest(_bc, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconUploadSvg
  }, iconProps));
};
const IconVideoSvg = (_cc) => {
  var _dc = _cc, { title, titleId } = _dc, props = __objRest(_dc, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    focusable: "false",
    fill: "currentColor",
    width: 16,
    height: 16,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "m18.4 11.1-12-6c-.3-.1-.6-.1-.9 0-.3.2-.5.6-.5.9v12c0 .3.2.7.5.9.1.1.3.1.5.1s.3 0 .4-.1l12-6c.3-.2.6-.5.6-.9s-.2-.7-.6-.9zM7 16.4V7.6l8.8 4.4L7 16.4z"
  }));
};
const IconVideo = (props) => {
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconVideoSvg
  }, iconProps));
};
const IconVisibilitySvg = (_ec) => {
  var _fc = _ec, { title, titleId } = _fc, props = __objRest(_fc, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M21.912 11.59C21.791 11.32 18.867 5 12 5s-9.791 6.32-9.912 6.59a1.001 1.001 0 0 0 0 .82C2.209 12.68 5.133 19 12 19s9.791-6.32 9.912-6.59a1.001 1.001 0 0 0 0-.82zM12 17c-4.708 0-7.173-3.728-7.877-5C4.827 10.728 7.292 7 12 7c4.71 0 7.175 3.73 7.877 5-.704 1.272-3.169 5-7.877 5z"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M5.571 14.015A11.133 11.133 0 0 1 4.123 12C4.827 10.728 7.292 7 12 7c.192 0 .374.015.558.027l1.768-1.767A10.41 10.41 0 0 0 12 5c-6.867 0-9.791 6.32-9.912 6.59a1.001 1.001 0 0 0 0 .82 12.68 12.68 0 0 0 2.072 3.016zm16.341-2.425a12.842 12.842 0 0 0-3.64-4.448l2.435-2.435a1 1 0 0 0-1.414-1.414l-6.384 6.384-3.232 3.232-6.384 6.384a1 1 0 1 0 1.414 1.414l2.76-2.76A10.023 10.023 0 0 0 12 19c6.867 0 9.791-6.32 9.912-6.59a1.001 1.001 0 0 0 0-.82zM12 17a8.097 8.097 0 0 1-3.008-.578l2.099-2.099a2.488 2.488 0 0 0 3.232-3.232l2.515-2.515A10.792 10.792 0 0 1 19.877 12c-.704 1.272-3.169 5-7.877 5z"
  }));
};
const IconVisibility = (_ic) => {
  var _jc = _ic, { hidden } = _jc, props = __objRest(_jc, ["hidden"]);
  const iconProps = useIcon(props);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: IconWorkExperienceSvg
  }, iconProps));
};
const useDisclosure = ({
  id,
  expanded: expandedProp,
  onToggle
}) => {
  const [expandedFallback, setExpandedFallback] = React.useState(false);
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
  return !xAxis ? [componentsPrivate_touchable_virtualTouchable_cjs_css_js.virtualTouchable, componentsPrivate_touchable_virtualTouchable_cjs_css_js.yAxisOnly] : componentsPrivate_touchable_virtualTouchable_cjs_css_js.virtualTouchable;
}
const Overlay = ({
  component,
  zIndex,
  background,
  borderRadius: borderRadius2,
  boxShadow,
  transition,
  visible = false,
  onlyVisibleForKeyboardNavigation = false,
  className,
  children
}) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  component,
  position: "absolute",
  zIndex,
  pointerEvents: "none",
  background,
  borderRadius: borderRadius2,
  boxShadow,
  transition,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: !visible ? 0 : void 0,
  className: [
    onlyVisibleForKeyboardNavigation ? componentsPrivate_hideFocusRings_hideFocusRings_cjs_css_js.hideFocusRingsClassName : null,
    className
  ]
}, children);
const itemSpaceForSize = {
  xsmall: "small",
  small: "medium",
  standard: "medium",
  large: "large"
};
const AccordionItem = (_mc) => {
  var _nc = _mc, {
    id,
    label,
    children,
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
  const accordionContext = React.useContext(AccordionContext);
  assert__default["default"](!(accordionContext && sizeProp), "Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.");
  assert__default["default"](!(accordionContext && toneProp), "Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.");
  assert__default["default"](toneProp === void 0 || validTones$2.includes(toneProp), `The 'tone' prop should be one of the following: ${validTones$2.map((x) => `"${x}"`).join(", ")}`);
  const size = (_b = (_a = accordionContext == null ? void 0 : accordionContext.size) != null ? _a : sizeProp) != null ? _b : "large";
  const tone = (_d = (_c = accordionContext == null ? void 0 : accordionContext.tone) != null ? _c : toneProp) != null ? _d : "neutral";
  const weight = "medium";
  const itemSpace = (_e = itemSpaceForSize[size]) != null ? _e : "none";
  assert__default["default"](typeof label === "undefined" || typeof label === "string", "Label must be a string");
  const { expanded, buttonProps, contentProps } = useDisclosure(__spreadValues({
    id
  }, restProps.expanded !== void 0 ? {
    onToggle: restProps.onToggle,
    expanded: restProps.expanded
  } : {
    onToggle: restProps.onToggle
  }));
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    display: "flex"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "button",
    cursor: "pointer",
    className: [componentsAccordion_AccordionItem_cjs_css_js.button, virtualTouchable()],
    outline: "none",
    width: "full",
    textAlign: "left"
  }, buttonProps), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: itemSpace
  }, /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(Text, {
    size,
    weight,
    tone,
    component: "div"
  }, label)), /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    size,
    weight,
    tone: tone === "neutral" ? "secondary" : tone,
    component: "div"
  }, /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
    direction: expanded ? "up" : "down"
  })))))), /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    className: [componentsAccordion_AccordionItem_cjs_css_js.focusRing, componentsPrivate_hideFocusRings_hideFocusRings_cjs_css_js.hideFocusRingsClassName]
  })), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    paddingTop: itemSpace,
    display: expanded ? "block" : "none"
  }, contentProps), children));
};
var ActionsContext = React.createContext(null);
const validInlineComponents = ["div", "ol", "ul"];
const Inline = ({
  space = "none",
  align,
  alignY,
  collapseBelow,
  reverse,
  component = "div",
  data,
  children
}) => {
  assert__default["default"](validInlineComponents.includes(component), `Invalid Inline component: '${component}'. Should be one of [${validInlineComponents.map((c) => `'${c}'`).join(", ")}]`);
  const isList = component === "ol" || component === "ul";
  const inlineItemComponent = isList ? "li" : "div";
  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    orderChildren
  } = resolveCollapsibleAlignmentProps({
    align,
    alignY,
    collapseBelow,
    reverse
  });
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    className: negativeMarginTop(space)
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component,
    className: negativeMarginLeft(space),
    flexWrap: "wrap"
  }, collapsibleAlignmentProps), React.Children.map(orderChildren(flattenChildren__default["default"](children)), (child) => child !== null && child !== void 0 ? /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: inlineItemComponent,
    minWidth: 0,
    marginLeft: space,
    marginTop: space
  }, collapsibleAlignmentChildProps), child) : null)));
};
const Actions = ({ size, data, children }) => {
  const contextValue = React.useMemo(() => ({ size }), [size]);
  return /* @__PURE__ */ React__default["default"].createElement(ActionsContext.Provider, {
    value: contextValue
  }, /* @__PURE__ */ React__default["default"].createElement(Inline, {
    collapseBelow: "tablet",
    space: "xsmall",
    data
  }, children));
};
const IconButton = React.forwardRef(({
  label,
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
  children
}, forwardedRef) => {
  const background = index.useBackground();
  const backgroundLightness = index.useBackgroundLightness();
  const handleMouseDown = React.useCallback((event) => {
    if (typeof onMouseDown !== "function") {
      return;
    }
    if (!onClick) {
      event.preventDefault();
    }
    onMouseDown(event);
  }, [onClick, onMouseDown]);
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "button",
    type: "button",
    ref: forwardedRef,
    cursor: "pointer",
    outline: "none",
    className: [componentsIconButtons_IconButton_cjs_css_js.button, virtualTouchable()],
    zIndex: 0,
    "aria-label": label,
    "aria-haspopup": ariaHasPopUp,
    "aria-expanded": ariaExpanded,
    title: label,
    onClick,
    onKeyUp,
    onKeyDown,
    onMouseDown: handleMouseDown,
    transform: { active: "touchable" },
    transition: "touchable",
    tabIndex: !keyboardAccessible ? -1 : void 0
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    display: "flex",
    className: iconContainerSize(),
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    background: background === "body" || background === "card" || background === "input" ? "neutralLight" : "card",
    transition: "fast",
    borderRadius: "full",
    className: [
      componentsIconButtons_IconButton_cjs_css_js.hoverOverlay,
      active && componentsIconButtons_IconButton_cjs_css_js.forceActive,
      backgroundLightness === "dark" && componentsIconButtons_IconButton_cjs_css_js.darkBackground
    ]
  }), keyboardAccessible ? /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    borderRadius: "full",
    className: componentsIconButtons_IconButton_cjs_css_js.focusOverlay,
    onlyVisibleForKeyboardNavigation: true
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    className: iconSize()
  }, children({ size: "fill", tone }))));
});
const ClearButton = React.forwardRef(({
  label,
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
}, forwardedRef) => /* @__PURE__ */ React__default["default"].createElement(IconButton, {
  label,
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
}, (iconProps) => /* @__PURE__ */ React__default["default"].createElement(IconClear, __spreadValues({}, iconProps))));
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
  children,
  id,
  closeLabel = "Close",
  data,
  onClose
}) => {
  const parentBackground = index.useBackground();
  const Icon2 = icons$1[tone];
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    id,
    background: backgroundForTone$1[tone],
    padding: "medium",
    borderRadius: borderRadius$6,
    position: "relative",
    overflow: "hidden",
    role: "alert",
    "aria-live": "polite"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingLeft: highlightBarSize
  }, /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: "small"
  }, /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Icon2, {
    tone
  })), /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: cssTextAlignedToIcon_cjs_css_js.textAlignedToIcon.standard
  }, children)), onClose ? /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(ClearButton, {
    tone: "neutral",
    label: closeLabel,
    onClick: onClose
  })) : null)), parentBackground !== "card" && /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    borderRadius: borderRadius$6,
    boxShadow: borderForTone[tone],
    visible: true
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    background: tone,
    paddingLeft: highlightBarSize,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0
  }));
};
const Strong = ({ children, data, id }) => /* @__PURE__ */ React__default["default"].createElement("strong", __spreadValues({
  className: index.useWeight("strong"),
  id
}, data ? buildDataAttributes(data) : void 0), children);
const HiddenVisually = ({ id, data, children }) => {
  const inText = Boolean(React.useContext(TextContext));
  const inHeading = Boolean(React.useContext(HeadingContext));
  const component = inText || inHeading ? "span" : "div";
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component,
    id,
    position: "absolute",
    overflow: "hidden",
    className: componentsHiddenVisually_HiddenVisually_cjs_css_js.root
  }, data ? buildDataAttributes(data) : void 0), children);
};
let announcementCounter = 0;
const Announcement = ({ children }) => {
  const [announcementElement, setElement] = React.useState(null);
  const className = [
    cssAtoms_atoms_cjs_js.atoms({
      reset: "div",
      position: "absolute",
      overflow: "hidden"
    }),
    componentsHiddenVisually_HiddenVisually_cjs_css_js.root
  ].join(" ");
  React.useEffect(() => {
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
  return reactDom.createPortal(children, announcementElement);
};
const Secondary = ({ children, data, id }) => /* @__PURE__ */ React__default["default"].createElement("span", __spreadValues({
  className: index.useTextTone({ tone: "secondary" }),
  id
}, data ? buildDataAttributes(data) : void 0), children);
const FieldLabel = ({
  id,
  htmlFor,
  label,
  secondaryLabel,
  tertiaryLabel,
  description,
  descriptionId,
  data
}) => {
  if (!label) {
    return null;
  }
  const labelEl = /* @__PURE__ */ React__default["default"].createElement(Text, null, /* @__PURE__ */ React__default["default"].createElement(Strong, null, label), secondaryLabel ? /* @__PURE__ */ React__default["default"].createElement(Secondary, null, "\xA0(", secondaryLabel, ")") : null);
  return /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: "xsmall",
    data
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    display: "flex",
    justifyContent: "spaceBetween"
  }, htmlFor === false ? labelEl : /* @__PURE__ */ React__default["default"].createElement("label", {
    id,
    htmlFor
  }, labelEl), tertiaryLabel ? /* @__PURE__ */ React__default["default"].createElement(Text, null, "\xA0", tertiaryLabel) : null), description ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingY: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    tone: "secondary",
    id: descriptionId
  }, description)) : null);
};
const tones$1 = ["neutral", "critical", "positive"];
const Icon = {
  critical: /* @__PURE__ */ React__default["default"].createElement(IconCritical, {
    tone: "critical"
  }),
  positive: /* @__PURE__ */ React__default["default"].createElement(IconPositive, {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    id,
    display: "flex",
    justifyContent: "flexEnd"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    flexGrow: 1
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    size: "small",
    tone: tone === "neutral" ? "secondary" : tone
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    userSelect: showMessage ? void 0 : "none"
  }, showMessage && tone !== "neutral" ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingRight: "xxsmall",
    flexShrink: 0,
    flexGrow: 0
  }, Icon[tone]) : null, showMessage ? message : "\xA0"))), secondaryMessage && !disabled ? /* @__PURE__ */ React__default["default"].createElement(Box, {
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
  return /* @__PURE__ */ React__default["default"].createElement(Overlay, __spreadValues({
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
    children,
    message,
    secondaryMessage,
    reserveMessageSpace = false,
    tone,
    "aria-describedby": ariaDescribedBy,
    data,
    secondaryIcon,
    autoFocus,
    icon,
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
  assert__default["default"](prefix === void 0 || typeof prefix === "string", "Prefix must be a string");
  const messageId = `${id}-message`;
  const descriptionId = "description" in restProps && restProps.description ? `${id}-description` : void 0;
  const fieldBackground = disabled ? "inputDisabled" : "input";
  const showFieldBorder = index.useBackgroundLightness() === "light" && (tone !== "critical" || disabled);
  const hasValue = typeof value === "string" ? value.length > 0 : value != null;
  const hasVisualLabel = "label" in restProps;
  const overlays = /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: disabled ? "disabled" : "default",
    visible: showFieldBorder
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "critical",
    visible: tone === "critical" && !disabled
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "focus",
    className: componentsPrivate_Field_Field_cjs_css_js.focusOverlay
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "hover",
    className: componentsPrivate_Field_Field_cjs_css_js.hoverOverlay
  }));
  const fieldPadding = "small";
  return /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: "xsmall"
  }, hasVisualLabel ? /* @__PURE__ */ React__default["default"].createElement(FieldLabel, {
    id: labelId,
    htmlFor: id,
    label: "label" in restProps ? restProps.label : void 0,
    secondaryLabel: "secondaryLabel" in restProps ? restProps.secondaryLabel : void 0,
    tertiaryLabel: "tertiaryLabel" in restProps ? restProps.tertiaryLabel : void 0,
    description: "description" in restProps ? restProps.description : void 0,
    descriptionId
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    background: fieldBackground,
    borderRadius: "standard",
    display: "flex",
    className: secondaryIcon ? componentsPrivate_Field_Field_cjs_css_js.secondaryIconSpace : void 0
  }, children(overlays, __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({
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
    className: clsx__default["default"](componentsPrivate_Field_Field_cjs_css_js.field, componentsPrivate_Field_Field_cjs_css_js.placeholderColor, index.useText({
      backgroundContext: fieldBackground,
      tone: hasValue ? "neutral" : "secondary",
      size: "standard",
      baseline: false
    }), index.touchableText.standard, icon && !prefix ? componentsPrivate_Field_Field_cjs_css_js.iconSpace : null)
  }), icon ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "touchable",
    width: "touchable",
    pointerEvents: "none",
    top: 0,
    left: 0
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    tone: prefix ? "secondary" : void 0
  }, icon)) : null, secondaryIcon ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    width: "touchable",
    height: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0
  }, secondaryIcon) : null, prefix ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "label",
    htmlFor: id,
    display: "flex",
    alignItems: "center",
    paddingLeft: icon ? void 0 : fieldPadding,
    height: "touchable",
    flexShrink: 0,
    className: icon ? componentsPrivate_Field_Field_cjs_css_js.iconSpace : null
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    tone: "secondary",
    baseline: false
  }, prefix), /* @__PURE__ */ React__default["default"].createElement(Box, {
    padding: fieldPadding,
    paddingRight: "none",
    height: "full"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    height: "full",
    className: componentsPrivate_Field_Field_cjs_css_js.verticalDivider
  }))) : null)), message || secondaryMessage || reserveMessageSpace ? /* @__PURE__ */ React__default["default"].createElement(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    secondaryMessage,
    reserveMessageSpace
  }) : null);
};
function getNextIndex(moveAmount, current, total) {
  const maxIndex = total - 1;
  if (current === null) {
    return moveAmount > 0 ? 0 : maxIndex;
  }
  const nextIndex = moveAmount + current;
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
  const clearHandler = React.useCallback((event) => {
    if (typeof onClear !== "function" || event.button !== 0) {
      return;
    }
    onClear();
    if (inputRef && typeof inputRef === "object" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onClear, inputRef]);
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    height: "touchable",
    width: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "fast",
    pointerEvents: hide ? "none" : void 0,
    opacity: hide ? 0 : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(ClearButton, {
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
  React.useEffect(() => {
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
const getItemId = (id, index2) => `${id}-item-${index2}`;
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
      index: index2,
      label,
      description,
      groupHeading
    }) => ({
      id: getItemId(id, index2),
      role: "option",
      "aria-selected": index2 === highlightedIndex,
      "aria-label": `${label}${description ? ` - ${description}` : ""}${groupHeading ? ` (${groupHeading})` : ""}`
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
    selected,
    onHover
  } = _vc, restProps = __objRest(_vc, [
    "suggestion",
    "highlighted",
    "selected",
    "onHover"
  ]);
  var _a;
  const { highlights = [], onClear, clearLabel } = suggestion;
  const label = (_a = suggestion.label) != null ? _a : suggestion.text;
  const suggestionParts = parseHighlights__default["default"](label, highlights.map(({ start, end }) => [start, end]));
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "li",
    cursor: "pointer",
    onMouseDown: (event) => {
      event.preventDefault();
    },
    onMouseMove: onHover,
    onTouchStart: onHover
  }, restProps), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    display: "flex",
    justifyContent: "spaceBetween",
    background: highlighted ? "selection" : void 0,
    paddingX: "small",
    paddingRight: onClear ? "none" : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: index.touchableText.standard
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false
  }, suggestionParts.map(({ highlight, text }, index2) => selected || highlight ? /* @__PURE__ */ React__default["default"].createElement(Strong, {
    key: index2
  }, text) : /* @__PURE__ */ React__default["default"].createElement(React.Fragment, {
    key: index2
  }, text))), suggestion.description ? /* @__PURE__ */ React__default["default"].createElement(Text, {
    size: "small",
    tone: "secondary",
    baseline: false
  }, suggestion.description) : null), typeof onClear === "function" ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "touchable",
    height: "touchable"
  }, /* @__PURE__ */ React__default["default"].createElement(ClearButton, {
    label: clearLabel || "Clear suggestion",
    onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
      onClear(valueFromSuggestion(suggestion));
    }
  })) : null));
}
function GroupHeading({ children }) {
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingX: "small",
    borderRadius: "standard",
    className: [
      componentsAutosuggest_Autosuggest_cjs_css_js.groupHeading,
      index.touchableText.xsmall,
      index.useText({
        size: "xsmall",
        baseline: false,
        weight: "strong",
        tone: "formAccent"
      })
    ],
    "data-testid": void 0
  }, children);
}
function normaliseSuggestions(suggestions) {
  let index2 = 0;
  const normalisedSuggestions = [];
  const groupHeadingIndexes = new Map();
  const groupHeadingForSuggestion = new Map();
  for (const item of suggestions) {
    if ("suggestions" in item) {
      groupHeadingIndexes.set(index2, item.label);
      item.suggestions.forEach((suggestion) => {
        groupHeadingForSuggestion.set(suggestion, item.label);
      });
      index2 = normalisedSuggestions.push(...item.suggestions);
    } else {
      index2 = normalisedSuggestions.push(item);
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
const Autosuggest = React.forwardRef(function(_wc, forwardedRef) {
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
  const defaultRef = React.useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const fireChange = React.useCallback((suggestion) => onChange(valueFromSuggestion(suggestion)), [onChange]);
  const rootRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const justPressedArrowRef = React.useRef(false);
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
  ] = React.useReducer(reducer2, {
    showSuggestionsIfAvailable: false,
    inputChangedSinceFocus: false,
    previewValue: null,
    highlightedIndex: null,
    isFocused: false
  });
  const isOpen = showSuggestionsIfAvailable && hasItems;
  const highlightedItem = typeof highlightedIndex === "number" ? document.getElementById(getItemId(id, highlightedIndex)) : null;
  useScrollIntoView(highlightedItem, menuRef.current);
  React.useEffect(() => {
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
  return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, showMobileBackdrop ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "fixed",
    zIndex: "dropdownBackdrop",
    transition: "fast",
    display: ["block", "none"],
    pointerEvents: isOpen ? void 0 : "none",
    top: 0,
    left: 0,
    opacity: !isOpen ? 0 : void 0,
    className: [
      componentsAutosuggest_Autosuggest_cjs_css_js.backdrop,
      isOpen ? componentsAutosuggest_Autosuggest_cjs_css_js.backdropVisible : void 0
    ]
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({}, showMobileBackdrop && isOpen ? {
    position: "relative",
    zIndex: "dropdown"
  } : null), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    ref: rootRef
  }, /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    id,
    labelId: a11y.labelProps.id,
    value: value.text,
    prefix: void 0,
    secondaryIcon: onClear ? /* @__PURE__ */ React__default["default"].createElement(ClearField, {
      hide: !clearable,
      onClear,
      inputRef
    }) : null
  }), (overlays, fieldProps, icon, secondaryIcon) => /* @__PURE__ */ React__default["default"].createElement(Box, {
    width: "full"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues(__spreadValues(__spreadValues({
    component: "input"
  }, fieldProps), a11y.inputProps), inputProps), {
    position: "relative",
    ref: inputRef
  })), icon, /* @__PURE__ */ React__default["default"].createElement(reactRemoveScroll.RemoveScroll, {
    ref: menuRef,
    enabled: isOpen,
    forwardProps: true
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
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
    className: componentsAutosuggest_Autosuggest_cjs_css_js.menu
  }, a11y.menuProps), isOpen && message ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "li",
    paddingX: "small",
    className: index.touchableText.standard
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    tone: "secondary",
    baseline: false
  }, message)) : null, isOpen && hasSuggestions ? normalisedSuggestions.map((suggestion, index2) => {
    var _a;
    const { text } = suggestion;
    const groupHeading = groupHeadingIndexes.get(index2);
    return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, {
      key: index2 + text
    }, groupHeading ? /* @__PURE__ */ React__default["default"].createElement(GroupHeading, null, groupHeading) : null, /* @__PURE__ */ React__default["default"].createElement(SuggestionItem, __spreadValues({
      suggestion,
      highlighted: highlightedIndex === index2,
      selected: value === suggestion,
      onClick: () => {
        fireChange(suggestion);
        dispatch({ type: SUGGESTION_MOUSE_CLICK });
      },
      onHover: () => {
        dispatch({
          type: SUGGESTION_MOUSE_ENTER,
          value: index2
        });
      }
    }, a11y.getItemProps({
      index: index2,
      label: (_a = suggestion.label) != null ? _a : suggestion.text,
      description: suggestion.description,
      groupHeading: groupHeadingForSuggestion.get(suggestion)
    }))));
  }) : null)), overlays, secondaryIcon))), /* @__PURE__ */ React__default["default"].createElement(HiddenVisually, __spreadValues({}, a11y.assistiveDescriptionProps), translations.assistiveDescription), /* @__PURE__ */ React__default["default"].createElement(Announcement, null, announcements.join(". "))));
});
Autosuggest.displayName = "Autosuggest";
function matchSuggestion(suggestion, query) {
  var _a;
  const groupMatches = matchHighlights__default["default"]((_a = suggestion.label) != null ? _a : suggestion.text, query);
  return !groupMatches.length ? null : __spreadProps(__spreadValues({}, suggestion), {
    highlights: groupMatches.map(([start, end]) => ({ start, end }))
  });
}
function filterSuggestions(...args) {
  assert__default["default"]([1, 2].includes(args.length), `Invalid number of arguments passed to "filterSuggestions". Expected 1 or 2, got ${args.length}`);
  if (args.length === 1) {
    return (inputValue) => filter(args[0], inputValue);
  } else if (args.length === 2) {
    return filter(args[0], args[1]);
  }
  function filter(suggestions, inputValue) {
    assert__default["default"](typeof inputValue === "string" || typeof inputValue === "object" && inputValue !== null && "text" in inputValue, 'The second argument to "filterSuggestions" must be a string or an Autosuggest value object, e.g. { text: "Hello world" }');
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
  children
}) => index.renderBackgroundProvider(type === "dark" ? "UNKNOWN_DARK" : "UNKNOWN_LIGHT", children);
BackgroundProvider.displayName = "BackgroundProvider";
const validTones$1 = [
  "promote",
  "info",
  "neutral",
  "positive",
  "caution",
  "critical"
];
const backgroundForTone = (tone, weight) => {
  if (weight === "strong") {
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
const Badge = React.forwardRef(({
  tone = "info",
  weight = "regular",
  bleedY = false,
  title,
  children,
  id,
  data,
  tabIndex,
  "aria-describedby": ariaDescribedBy
}, ref) => {
  assert__default["default"](validTones$1.indexOf(tone) >= 0, `Badge tone of "${tone}" is not valid.`);
  assert__default["default"](React.Children.toArray(children).every((child) => ["string", "number"].includes(typeof child)), "Badge may only contain strings or numbers");
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    display: "flex",
    cursor: "default",
    className: [
      cssLineHeightContainer_cjs_css_js.lineHeightContainer[componentsBadge_Badge_cjs_css_js.constants.textSize],
      bleedY ? componentsBadge_Badge_cjs_css_js.bleedY : null
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    id,
    ref,
    tabIndex,
    "aria-describedby": ariaDescribedBy,
    title: title != null ? title : !ariaDescribedBy ? children : void 0,
    background: backgroundForTone(tone, weight),
    paddingX: "xsmall",
    borderRadius: "large",
    overflow: "hidden"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    component: "span",
    size: componentsBadge_Badge_cjs_css_js.constants.textSize,
    weight: "medium",
    tone: weight === "regular" ? tone : void 0,
    truncate: true,
    baseline: false
  }, children)));
});
Badge.displayName = "Badge";
const BoxRenderer = (_yc) => {
  var _zc = _yc, {
    children,
    component = "div",
    className
  } = _zc, props = __objRest(_zc, [
    "children",
    "component",
    "className"
  ]);
  const atomicClasses = cssAtoms_atoms_cjs_js.atoms(__spreadValues({ reset: component }, props));
  const element = children(clsx__default["default"](className, atomicClasses));
  return index.renderBackgroundProvider(props.background, element);
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
const CharacterBullet = ({ length = 1, children }) => {
  var _a;
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "inlineBlock",
    className: [
      (_a = componentsList_List_cjs_css_js.minCharacterWidth[length - 1]) != null ? _a : componentsList_List_cjs_css_js.minCharacterWidth[componentsList_List_cjs_css_js.minCharacterWidth.length - 1],
      componentsList_List_cjs_css_js.trimGutter
    ]
  }, children, ".");
};
const List = (_Ac) => {
  var _Bc = _Ac, {
    children,
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
  const { size, tone } = index.useDefaultTextProps({
    size: sizeProp,
    tone: toneProp
  });
  const listItems = flattenChildren__default["default"](children);
  const lastNumberLength = type === "number" ? (listItems.length + (start - 1)).toString().length : -1;
  return /* @__PURE__ */ React__default["default"].createElement(index.DefaultTextPropsProvider, {
    size,
    tone
  }, /* @__PURE__ */ React__default["default"].createElement(Stack, {
    component: /^(bullet|icon)$/.test(type) ? "ul" : "ol",
    space,
    data
  }, React.Children.map(listItems, (listItem, index2) => {
    const resolvedIndex = index2 + (start - 1);
    return /* @__PURE__ */ React__default["default"].createElement(Box, {
      display: "flex"
    }, /* @__PURE__ */ React__default["default"].createElement(Text, {
      component: "div",
      size,
      tone
    }, /* @__PURE__ */ React__default["default"].createElement(Box, {
      display: "flex",
      alignItems: /^(bullet|icon)$/.test(type) ? "center" : void 0,
      className: cssLineHeightContainer_cjs_css_js.lineHeightContainer[size],
      userSelect: "none",
      "aria-hidden": true
    }, (() => {
      if (type === "number") {
        return /* @__PURE__ */ React__default["default"].createElement(CharacterBullet, {
          length: lastNumberLength
        }, resolvedIndex + 1);
      }
      if (type === "alpha") {
        return /* @__PURE__ */ React__default["default"].createElement(CharacterBullet, null, numberToAlpha(resolvedIndex + 1));
      }
      if (type === "roman") {
        return /* @__PURE__ */ React__default["default"].createElement(CharacterBullet, {
          length: 2
        }, numberToRomanNumerals(resolvedIndex + 1));
      }
      if (type === "icon" && "icon" in restProps) {
        return restProps.icon;
      }
      return /* @__PURE__ */ React__default["default"].createElement(Box, {
        borderRadius: "full",
        className: [componentsList_List_cjs_css_js.currentColor, componentsList_List_cjs_css_js.size[size]]
      });
    })())), /* @__PURE__ */ React__default["default"].createElement(Box, {
      minWidth: 0,
      width: "full",
      paddingLeft: size === "xsmall" ? "xsmall" : "small"
    }, listItem));
  })));
};
const BulletListContext = React.createContext(false);
const validTones = ["neutral", "secondary"];
const BulletList = ({
  space,
  size,
  tone,
  children
}) => {
  assert__default["default"](!tone || validTones.includes(tone), `Invalid tone: ${tone}`);
  return /* @__PURE__ */ React__default["default"].createElement(BulletListContext.Provider, {
    value: true
  }, /* @__PURE__ */ React__default["default"].createElement(List, {
    space,
    size,
    tone
  }, children));
};
const Bullet = ({ children }) => {
  return /* @__PURE__ */ React__default["default"].createElement(Text, null, children);
};
const borderRadius$5 = "large";
const buttonVariantStyles = {
  solid: {
    default: {
      textTone: void 0,
      backgroundContext: "formAccent",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccent" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentHover" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentActive" }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: void 0,
      backgroundContext: "brandAccent",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccent" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccentHover" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccentActive" }),
      boxShadow: void 0
    },
    critical: {
      textTone: void 0,
      backgroundContext: "critical",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "critical" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalHover" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalActive" }),
      boxShadow: void 0
    }
  },
  ghost: {
    default: {
      textTone: "formAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: "borderFormAccentLarge"
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccentSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: "borderBrandAccentLarge"
    },
    critical: {
      textTone: "critical",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoftActive" }),
      boxShadow: "borderCriticalLarge"
    }
  },
  soft: {
    default: {
      textTone: "formAccent",
      backgroundContext: "formAccentSoft",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentSoft" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentSoftHover" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: "brandAccentSoft",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccentSoft" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "brandAccentSoftHover"
      }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: void 0
    },
    critical: {
      textTone: "critical",
      backgroundContext: "criticalSoft",
      backgroundClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoft" }),
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoftHover" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoftActive" }),
      boxShadow: void 0
    }
  },
  transparent: {
    default: {
      textTone: "formAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "formAccentSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "formAccentSoftActive"
      }),
      boxShadow: void 0
    },
    brandAccent: {
      textTone: "brandAccent",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "brandAccentSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({
        background: "brandAccentSoftActive"
      }),
      boxShadow: void 0
    },
    critical: {
      textTone: "critical",
      backgroundContext: void 0,
      backgroundClassName: void 0,
      backgroundHoverClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoft" }),
      backgroundActiveClassName: cssAtoms_atoms_cjs_js.atoms({ background: "criticalSoftActive" }),
      boxShadow: void 0
    }
  }
};
const useButtonVariant = (variant, tone) => {
  var _a;
  if (index.useBackgroundLightness() === "dark" && !tone && variant !== "solid") {
    return {
      textTone: void 0,
      backgroundClassName: variant === "soft" ? componentsButtonRenderer_ButtonRenderer_cjs_css_js.invertedBackgrounds.soft : void 0,
      backgroundHoverClassName: componentsButtonRenderer_ButtonRenderer_cjs_css_js.invertedBackgrounds.hover,
      backgroundActiveClassName: componentsButtonRenderer_ButtonRenderer_cjs_css_js.invertedBackgrounds.active,
      boxShadow: variant === "ghost" ? "borderStandardInvertedLarge" : void 0
    };
  }
  return (_a = buttonVariantStyles[variant][tone != null ? tone : "default"]) != null ? _a : buttonVariantStyles[variant].default;
};
const ButtonChildrenContext = React.createContext({
  size: "standard",
  variant: "solid",
  tone: void 0,
  loading: false
});
const ButtonChildren = ({ children }) => {
  const { size, variant, tone, loading } = React.useContext(ButtonChildrenContext);
  const buttonVariant = useButtonVariant(variant, tone);
  return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: buttonVariant.backgroundClassName,
    visible: Boolean(buttonVariant.backgroundClassName)
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    variant: "focus",
    onlyVisibleForKeyboardNavigation: true,
    className: componentsButtonRenderer_ButtonRenderer_cjs_css_js.focusOverlay
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: [
      buttonVariant.backgroundHoverClassName,
      componentsButtonRenderer_ButtonRenderer_cjs_css_js.hoverOverlay
    ]
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    borderRadius: borderRadius$5,
    className: [
      buttonVariant.backgroundActiveClassName,
      componentsButtonRenderer_ButtonRenderer_cjs_css_js.activeOverlay
    ]
  }), buttonVariant.boxShadow ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    boxShadow: buttonVariant.boxShadow,
    borderRadius: borderRadius$5,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    paddingX: size === "small" || variant === "transparent" ? "small" : "medium",
    paddingY: size === "small" ? componentsButtonRenderer_ButtonRenderer_cjs_css_js.constants.smallButtonPaddingSize : void 0,
    pointerEvents: "none",
    textAlign: "center",
    overflow: "hidden",
    userSelect: "none",
    className: size === "standard" ? index.touchableText.standard : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    weight: "medium",
    tone: buttonVariant.textTone,
    size: size === "small" ? "small" : void 0
  }, children, loading ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    "aria-hidden": true,
    component: "span",
    display: "inlineBlock"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    className: componentsButtonRenderer_ButtonRenderer_cjs_css_js.loadingDot
  }, "."), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    className: componentsButtonRenderer_ButtonRenderer_cjs_css_js.loadingDot
  }, "."), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    className: componentsButtonRenderer_ButtonRenderer_cjs_css_js.loadingDot
  }, ".")) : null)));
};
const resolveToneAndVariant = ({
  weight,
  tone,
  variant = "solid"
}) => {
  if (weight === "strong") {
    return {
      tone: tone || "brandAccent",
      variant: "solid"
    };
  }
  if (weight === "regular") {
    return {
      tone,
      variant: "solid"
    };
  }
  if (weight === "weak") {
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
  bleedY,
  weight,
  loading = false,
  children
}) => {
  var _a;
  const actionsContext = React.useContext(ActionsContext);
  assert__default["default"](!(actionsContext && sizeProp), `You shouldn't set a "size" prop on Button elements nested inside Actions. Instead, set the size on the Actions element, e.g. <Actions size="small"><Button>...</Button></Actions>`);
  assert__default["default"](!(weight && variantProp), `You shouldn't set a "weight" and "variant" prop together. Please migrate from "weight" to "variant".`);
  const { tone, variant } = resolveToneAndVariant({
    weight,
    tone: toneProp,
    variant: variantProp
  });
  const size = (_a = sizeProp != null ? sizeProp : actionsContext == null ? void 0 : actionsContext.size) != null ? _a : "standard";
  const { backgroundContext } = useButtonVariant(variant, tone);
  const buttonStyles = clsx__default["default"](cssAtoms_atoms_cjs_js.atoms({
    reset: "button",
    cursor: !loading ? "pointer" : void 0,
    width: "full",
    position: "relative",
    display: "block",
    borderRadius: borderRadius$5,
    transform: { active: "touchable" },
    transition: "touchable",
    outline: "none"
  }), componentsButtonRenderer_ButtonRenderer_cjs_css_js.root, size === "small" ? virtualTouchable({ xAxis: false }) : null, size === "standard" ? componentsButtonRenderer_ButtonRenderer_cjs_css_js.standard : componentsButtonRenderer_ButtonRenderer_cjs_css_js.small, bleedY ? componentsButtonRenderer_ButtonRenderer_cjs_css_js.bleedY : null);
  const buttonChildrenContextValue = React.useMemo(() => ({ size, tone, variant, loading }), [size, tone, variant, loading]);
  const buttonProps = {
    style: {},
    className: buttonStyles
  };
  const button = /* @__PURE__ */ React__default["default"].createElement(ButtonChildrenContext.Provider, {
    value: buttonChildrenContextValue
  }, children(ButtonChildren, buttonProps));
  return backgroundContext ? /* @__PURE__ */ React__default["default"].createElement(index.BackgroundProvider, {
    value: backgroundContext
  }, button) : button;
};
const ButtonRenderer = PrivateButtonRenderer;
const Button = React.forwardRef(({
  onClick,
  children,
  size,
  tone,
  weight,
  bleedY,
  variant,
  loading,
  type = "button",
  id,
  tabIndex,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy,
  data
}, ref) => /* @__PURE__ */ React__default["default"].createElement(PrivateButtonRenderer, {
  size,
  tone,
  weight,
  loading,
  variant,
  bleedY
}, (ButtonChildren2, buttonProps) => /* @__PURE__ */ React__default["default"].createElement("button", __spreadValues(__spreadValues({
  ref,
  id,
  type,
  tabIndex,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy,
  onClick,
  disabled: loading
}, buttonProps), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(ButtonChildren2, null, children))));
Button.displayName = "Button";
const ButtonLink$1 = React.forwardRef((_Cc, ref) => {
  var _Dc = _Cc, {
    children,
    size,
    tone,
    weight,
    variant,
    bleedY,
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
  return /* @__PURE__ */ React__default["default"].createElement(PrivateButtonRenderer, {
    size,
    tone,
    weight,
    variant,
    loading,
    bleedY
  }, (ButtonChildren2, buttonProps) => /* @__PURE__ */ React__default["default"].createElement(LinkComponent, __spreadValues(__spreadValues(__spreadValues({
    ref
  }, restProps), buttonProps), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(ButtonChildren2, null, children)));
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
    children,
    component = "div",
    tone,
    data
  } = _Fc, restProps = __objRest(_Fc, [
    "children",
    "component",
    "tone",
    "data"
  ]);
  assert__default["default"](validCardComponents.includes(component), `Invalid Card component: '${component}'. Should be one of [${validCardComponents.map((c) => `'${c}'`).join(", ")}]`);
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component,
    position: "relative",
    background: "card",
    padding: "gutter",
    borderRadius: resolvedRounding
  }, data ? buildDataAttributes(data) : void 0), tone ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    paddingLeft: "xxsmall",
    borderRadius: resolvedRounding,
    background: tone,
    className: componentsCard_Card_cjs_css_js.toneKeyline
  }) : null, children);
};
const tones = ["neutral", "critical"];
const Indicator = ({
  type,
  checked,
  hover = false,
  disabled = false
}) => {
  const isCheckbox = type === "checkbox";
  const iconTone = (() => {
    if (disabled) {
      return "secondary";
    }
    if (hover) {
      return "formAccent";
    }
  })();
  return isCheckbox ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    height: "full",
    transition: "fast",
    position: "relative",
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.checkboxIndicator
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== "mixed" ? 0 : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(IconMinus, {
    size: "fill",
    tone: iconTone
  })), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== true ? 0 : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(IconTick, {
    size: "fill",
    tone: iconTone
  }))) : /* @__PURE__ */ React__default["default"].createElement(Box, {
    background: disabled ? "formAccentDisabled" : "formAccent",
    transition: "fast",
    width: "full",
    height: "full",
    borderRadius: "full",
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.radioIndicator
  });
};
const StyledInput = React.forwardRef(({
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
  size = "standard",
  "aria-describedby": ariaDescribedBy,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel
}, forwardedRef) => {
  const defaultRef = React.useRef(null);
  const ref = forwardedRef || defaultRef;
  const indeterminateRef = React.useRef(false);
  if (tones.indexOf(tone) === -1) {
    throw new Error(`Invalid tone: ${tone}`);
  }
  const isCheckbox = type === "checkbox";
  const fieldBorderRadius = isCheckbox ? "standard" : "full";
  const accentBackground = disabled ? "formAccentDisabled" : "formAccent";
  const showFieldBorder = index.useBackgroundLightness() === "light" && (tone !== "critical" || disabled);
  const isMixed = isCheckbox && checked === "mixed";
  React.useEffect(() => {
    if (ref && typeof ref === "object" && ref.current && isCheckbox) {
      ref.current.indeterminate = isMixed;
      indeterminateRef.current = isMixed;
    }
  }, [ref, isMixed, isCheckbox]);
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "input",
    type,
    id,
    name,
    value,
    onChange: isMixed ? (e) => {
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
      componentsPrivate_InlineField_InlineField_cjs_css_js.realField,
      componentsPrivate_InlineField_InlineField_cjs_css_js.realFieldPosition[size],
      isMixed ? componentsPrivate_InlineField_InlineField_cjs_css_js.isMixed : void 0
    ],
    cursor: !disabled ? "pointer" : void 0,
    opacity: 0,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-checked": isMixed ? "mixed" : checked,
    "aria-required": required,
    disabled,
    ref,
    tabIndex
  }, data ? buildDataAttributes(data) : void 0)), /* @__PURE__ */ React__default["default"].createElement(Box, {
    flexShrink: 0,
    position: "relative",
    className: [componentsPrivate_InlineField_InlineField_cjs_css_js.fakeField, componentsPrivate_InlineField_InlineField_cjs_css_js.fakeFieldSize[size]],
    background: disabled ? "inputDisabled" : "input",
    borderRadius: fieldBorderRadius
  }, /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: disabled ? "disabled" : "default",
    borderRadius: fieldBorderRadius,
    visible: showFieldBorder
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "critical",
    borderRadius: fieldBorderRadius,
    visible: tone === "critical" && !disabled
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: tone === "critical" && isCheckbox ? tone : void 0,
    background: isCheckbox ? accentBackground : void 0,
    borderRadius: fieldBorderRadius,
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.selected
  }, /* @__PURE__ */ React__default["default"].createElement(Indicator, {
    type,
    disabled,
    checked
  })), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "focus",
    borderRadius: fieldBorderRadius,
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.focusOverlay
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "hover",
    borderRadius: fieldBorderRadius,
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.hoverOverlay
  }, /* @__PURE__ */ React__default["default"].createElement(Indicator, {
    type,
    hover: true,
    checked: true
  }))));
});
const InlineField = React.forwardRef(({
  id,
  name,
  value,
  checked,
  data,
  onChange,
  label,
  type,
  children,
  description,
  badge,
  message,
  reserveMessageSpace = false,
  tone = "neutral",
  disabled = false,
  required,
  inList = false,
  tabIndex,
  size = "standard",
  "aria-describedby": ariaDescribedBy
}, forwardedRef) => {
  const messageId = `${id}-message`;
  const descriptionId = `${id}-description`;
  const hasMessage = message || reserveMessageSpace;
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    zIndex: 0,
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.root
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex"
  }, /* @__PURE__ */ React__default["default"].createElement(StyledInput, {
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
    size,
    ref: forwardedRef
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingLeft: "small",
    flexGrow: 1
  }, /* @__PURE__ */ React__default["default"].createElement(Inline, {
    space: "small"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "label",
    htmlFor: id,
    userSelect: "none",
    display: "block",
    cursor: !disabled ? "pointer" : void 0,
    className: [componentsPrivate_InlineField_InlineField_cjs_css_js.labelOffset[size], virtualTouchable()]
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    weight: checked && !inList ? "strong" : void 0,
    tone: disabled ? "secondary" : void 0,
    size
  }, label)), badge ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.badgeOffset[size]
  }, badge) : null), description ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingTop: "small"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    tone: "secondary",
    size,
    id: descriptionId
  }, description)) : null, children ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "none",
    paddingTop: "small",
    className: componentsPrivate_InlineField_InlineField_cjs_css_js.children
  }, children) : null)), hasMessage ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingTop: description ? "small" : "xsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(FieldMessage, {
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
const Checkbox = React.forwardRef((_Gc, ref) => {
  var _Hc = _Gc, { checked } = _Hc, restProps = __objRest(_Hc, ["checked"]);
  const calculatedChecked = Array.isArray(checked) ? resolveCheckedGroup(checked) : checked;
  return /* @__PURE__ */ React__default["default"].createElement(InlineField, __spreadProps(__spreadValues({}, restProps), {
    checked: calculatedChecked,
    type: "checkbox",
    ref
  }));
});
Checkbox.displayName = "Checkbox";
const CheckboxStandalone = React.forwardRef((_Ic, ref) => {
  var _Jc = _Ic, { checked } = _Jc, restProps = __objRest(_Jc, ["checked"]);
  const calculatedChecked = Array.isArray(checked) ? resolveCheckedGroup(checked) : checked;
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement(StyledInput, __spreadProps(__spreadValues({}, restProps), {
    checked: calculatedChecked,
    type: "checkbox",
    ref
  })));
});
const ContentBlock = ({
  width = "medium",
  data,
  children
}) => /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
  width: "full",
  maxWidth: width,
  className: componentsContentBlock_ContentBlock_cjs_css_js.marginAuto
}, data ? buildDataAttributes(data) : void 0), children);
const defaultParent = typeof document !== "undefined" ? document.body : null;
let counterMap = new WeakMap();
let uncontrolledNodes = new WeakMap();
let markerMap = {};
let lockCount = 0;
const ariaHideOthers = (originalTarget, {
  parentNode = defaultParent,
  markerName = "data-aria-hidden",
  delay = 0
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
  const timeout = delay ? setTimeout(() => walk(parentNode), delay) : (walk(parentNode), null);
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
  weight,
  component,
  children,
  align,
  id,
  truncate = false,
  data
}) => /* @__PURE__ */ React__default["default"].createElement(HeadingContext.Provider, {
  value: true
}, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
  id,
  component: component || resolveDefaultComponent[level],
  textAlign: align,
  className: index.useHeading({ weight, level, baseline: true })
}, data ? buildDataAttributes(data) : void 0), truncate ? /* @__PURE__ */ React__default["default"].createElement(Truncate, null, children) : children));
const modalPadding = ["gutter", "large"];
const ModalContentHeader = React.forwardRef(({ title, headingLevel, description, descriptionId, center }, ref) => /* @__PURE__ */ React__default["default"].createElement(Stack, {
  space: "medium"
}, /* @__PURE__ */ React__default["default"].createElement(Heading, {
  level: headingLevel,
  align: center ? "center" : void 0
}, /* @__PURE__ */ React__default["default"].createElement(Box, {
  ref,
  component: "span",
  tabIndex: -1,
  outline: "none",
  position: "relative",
  className: componentsPrivate_Modal_Modal_cjs_css_js.headingRoot
}, title, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
  boxShadow: "outlineFocus",
  borderRadius: "standard",
  transition: "fast",
  className: componentsPrivate_Modal_Modal_cjs_css_js.headingFocus,
  onlyVisibleForKeyboardNavigation: true
}))), description ? /* @__PURE__ */ React__default["default"].createElement(Box, {
  id: descriptionId
}, description) : null));
const ModalContent = ({
  id,
  children,
  description,
  onClose,
  width,
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
  const defaultModalRef = React.useRef(null);
  const modalRef = modalRefProp || defaultModalRef;
  const defaultHeadingRef = React.useRef(null);
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
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
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent,
    height: position === "right" ? "full" : void 0,
    width: width !== "content" ? "full" : void 0,
    maxWidth: width !== "content" ? width : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(reactRemoveScroll.RemoveScroll, {
    ref: modalRef,
    forwardProps: true,
    enabled: scrollLock
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    background: "card",
    borderRadius: position === "center" ? "xlarge" : void 0,
    overflow: "auto",
    position: "relative",
    boxShadow: "large",
    width: width !== "content" ? "full" : void 0,
    height: position === "right" ? "full" : void 0,
    padding: modalPadding,
    className: [
      componentsPrivate_Modal_Modal_cjs_css_js.pointerEventsAll,
      position === "center" && componentsPrivate_Modal_Modal_cjs_css_js.maxSize[position]
    ]
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: "large"
  }, illustration ? /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: "medium",
    align: "center"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingX: "gutter"
  }, illustration), /* @__PURE__ */ React__default["default"].createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })) : /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(ModalContentHeader, {
    title,
    headingLevel,
    description,
    descriptionId,
    center: Boolean(illustration),
    ref: headingRef
  })), /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    width: "touchable"
  }))), /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, children)))), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    zIndex: "sticky",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    width: "full",
    display: "flex",
    justifyContent: "flexEnd",
    paddingTop: modalPadding,
    paddingRight: modalPadding,
    className: position === "center" && componentsPrivate_Modal_Modal_cjs_css_js.maxSize[position]
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: [
      negativeMarginTop("xsmall"),
      componentsPrivate_Modal_Modal_cjs_css_js.negativeMarginRightXSmall
    ]
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    className: componentsPrivate_Modal_Modal_cjs_css_js.cropIconSpace[headingLevel]
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
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
      componentsPrivate_Modal_Modal_cjs_css_js.closeButtonRoot,
      componentsPrivate_Modal_Modal_cjs_css_js.pointerEventsAll,
      virtualTouchable()
    ]
  }, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    borderRadius: "full",
    className: componentsPrivate_Modal_Modal_cjs_css_js.closeButtonFocus
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    transition: "fast",
    className: [
      componentsPrivate_Modal_Modal_cjs_css_js.closeButtonOpacity,
      componentsPrivate_Modal_Modal_cjs_css_js.closeIcon[headingLevel]
    ]
  }, /* @__PURE__ */ React__default["default"].createElement(IconClear, {
    size: "fill"
  })))))))));
};
const AllowCloseContext = React.createContext(true);
const ModalPortal = ({ children }) => {
  const [modalElement, setElement] = React.useState(null);
  React.useEffect(() => {
    const modalContainerId = "braid-modal-container";
    let element = document.getElementById(modalContainerId);
    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", modalContainerId);
      element.setAttribute("class", componentsPrivate_Modal_Modal_cjs_css_js.fixedStackingContext);
      document.body.appendChild(element);
    }
    setElement(element);
  }, []);
  if (!modalElement) {
    return null;
  }
  return /* @__PURE__ */ React__default["default"].createElement(BraidPortal, {
    container: modalElement
  }, children);
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
  children,
  description,
  onClose,
  width,
  closeLabel,
  illustration,
  title,
  headingLevel,
  position,
  data
}) => {
  const [trapActive, setTrapActive] = React.useState(true);
  const [state, dispatch] = React.useReducer(reducer$1, INITIAL);
  const allowClose = React.useContext(AllowCloseContext);
  const shouldFocus = typeof document !== "undefined" && typeof document.hasFocus === "function" && document.hasFocus();
  const openRef = React.useRef(open);
  const modalRef = React.useRef(null);
  const headingRef = React.useRef(null);
  const closeHandlerRef = React.useRef(onClose);
  const initiateClose = () => {
    if (allowClose) {
      dispatch(CLOSE_MODAL);
    }
  };
  React.useEffect(() => {
    openRef.current = open;
    dispatch(open ? OPEN_MODAL : CLOSE_MODAL);
  }, [open]);
  React.useEffect(() => {
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
  React.useEffect(() => {
    if (shouldAriaHideOthers && modalRef.current) {
      return ariaHideOthers(modalRef.current, { delay: ANIMATION_DURATION });
    }
  }, [shouldAriaHideOthers]);
  React.useEffect(() => {
    if (typeof onClose === "function") {
      closeHandlerRef.current = onClose;
    }
  }, [onClose]);
  React.useEffect(() => {
    const event = trapActive ? "blur" : "focus";
    const handleEvent = () => setTrapActive(!trapActive);
    window.addEventListener(event, handleEvent);
    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, [trapActive]);
  return state === OPENING || state === OPEN || state === CLOSING ? /* @__PURE__ */ React__default["default"].createElement(ModalPortal, null, /* @__PURE__ */ React__default["default"].createElement(FocusLock__default["default"], {
    className: componentsPrivate_Modal_Modal_cjs_css_js.resetStackingContext,
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
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
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
      componentsPrivate_Modal_Modal_cjs_css_js.backdrop,
      position in componentsPrivate_Modal_Modal_cjs_css_js.transition && componentsPrivate_Modal_Modal_cjs_css_js.transition[position]
    ]
  }), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: "modal",
    pointerEvents: "none",
    transition: "fast",
    opacity: state !== OPEN ? 0 : void 0
  }, position === "right" ? { paddingLeft: ["none", "xlarge"] } : { padding: componentsPrivate_Modal_ModalExternalGutter_cjs_js.externalGutter }), {
    className: [
      componentsPrivate_Modal_Modal_cjs_css_js.modalContainer,
      position in componentsPrivate_Modal_Modal_cjs_css_js.transition && componentsPrivate_Modal_Modal_cjs_css_js.transition[position],
      state === OPENING && componentsPrivate_Modal_Modal_cjs_css_js.entrance[position],
      state === CLOSING && position in componentsPrivate_Modal_Modal_cjs_css_js.exit && componentsPrivate_Modal_Modal_cjs_css_js.exit[position]
    ]
  }), /* @__PURE__ */ React__default["default"].createElement(ModalContent, {
    id,
    description,
    onClose: initiateClose,
    width,
    closeLabel,
    illustration,
    title,
    headingLevel,
    headingRef,
    modalRef,
    position,
    scrollLock: !(state === CLOSING),
    data
  }, children)))) : null;
};
const defaultWidth$1 = "small";
const modalStyle$1 = {
  position: "center",
  headingLevel: "3"
};
const Dialog = (_Kc) => {
  var _Lc = _Kc, { width = defaultWidth$1 } = _Lc, restProps = __objRest(_Lc, ["width"]);
  return /* @__PURE__ */ React__default["default"].createElement(Modal, __spreadValues(__spreadValues({
    width
  }, restProps), modalStyle$1));
};
const PrivateTextLinkRenderer = (props) => {
  const actionsContext = React.useContext(ActionsContext);
  assert__default["default"]((() => {
    const inText = React.useContext(TextContext);
    const inHeading = React.useContext(HeadingContext);
    const inActions = actionsContext !== null;
    return inText || inHeading || inActions;
  })(), "TextLink components must be rendered within a Text or Heading component.");
  if (actionsContext !== null) {
    return /* @__PURE__ */ React__default["default"].createElement(ButtonLink, __spreadValues({
      size: actionsContext.size
    }, props));
  }
  return /* @__PURE__ */ React__default["default"].createElement(InlineLink, __spreadValues({}, props));
};
const TextLinkRenderer = PrivateTextLinkRenderer;
function useDefaultLinkWeight() {
  const backgroundContext = index.useBackground();
  const inHeading = React.useContext(HeadingContext);
  const textContext = React.useContext(TextContext);
  const hasPlainBackground = backgroundContext === "body" || backgroundContext === "card" || backgroundContext === "neutralLight";
  const inPlainText = !textContext || textContext.tone === void 0 || textContext.tone === "neutral" || textContext.tone === "secondary";
  return hasPlainBackground && (inHeading || inPlainText) ? "regular" : "weak";
}
function useLinkStyles(weight, showVisited) {
  const inHeading = React.useContext(HeadingContext);
  const mediumWeight = index.useWeight("medium");
  const linkTone = index.useTextTone({ tone: "link" });
  return [
    weight === "weak" ? componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js.underlineAlways : [linkTone, componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js.underlineOnHoverOnly],
    !inHeading && weight !== "weak" ? mediumWeight : null,
    showVisited ? componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js.visited : null
  ];
}
function InlineLink({
  reset = "a",
  weight: weightProp,
  showVisited = false,
  hitArea = "standard",
  children
}) {
  const defaultWeight2 = useDefaultLinkWeight();
  const weight = weightProp != null ? weightProp : defaultWeight2;
  return /* @__PURE__ */ React__default["default"].createElement(index.TextLinkRendererContext.Provider, {
    value: weight
  }, children({
    style: {},
    className: clsx__default["default"](useLinkStyles(weight, showVisited), reset !== false ? cssAtoms_atoms_cjs_js.atoms({
      reset: typeof reset === "string" ? reset : "a"
    }) : null, cssAtoms_atoms_cjs_js.atoms({
      cursor: "pointer"
    }), hitArea === "large" && virtualTouchable())
  }));
}
function ButtonLink({
  reset = "a",
  size = "standard",
  weight,
  showVisited = false,
  hitArea,
  children
}) {
  const textLinkWeight = useDefaultLinkWeight();
  const tone = textLinkWeight === "weak" ? "neutral" : "link";
  const buttonLinkTextProps = {
    size,
    tone,
    baseline: false
  };
  assert__default["default"](!weight, 'TextLink components should not set "weight" within Actions');
  assert__default["default"](!hitArea, 'TextLink components should not set "hitArea" within Actions');
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement(index.TextLinkRendererContext.Provider, {
    value: textLinkWeight
  }, /* @__PURE__ */ React__default["default"].createElement(TextContext.Provider, {
    value: buttonLinkTextProps
  }, children({
    style: {},
    className: clsx__default["default"](componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js.button, useLinkStyles(textLinkWeight, showVisited), index.useText(buttonLinkTextProps), size === "standard" ? index.touchableText.standard : null, reset !== false ? cssAtoms_atoms_cjs_js.atoms({
      reset: typeof reset === "string" ? reset : "a"
    }) : null, cssAtoms_atoms_cjs_js.atoms({
      cursor: "pointer",
      outline: "none",
      display: "block",
      width: "full",
      paddingX: size === "small" ? "xsmall" : "small",
      paddingY: size === "small" ? "xsmall" : void 0,
      borderRadius: "standard",
      textAlign: "center",
      userSelect: "none"
    }))
  }))), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "focus",
    className: componentsTextLinkRenderer_TextLinkRenderer_cjs_css_js.focusOverlay
  }));
}
const noop = () => {
};
const TextLinkButton = ({
  weight,
  hitArea,
  id,
  onClick = noop,
  data,
  children,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-describedby": ariaDescribedBy
}) => {
  const buttonRef = React.useRef(null);
  const handleKeyboard = React.useCallback((event) => {
    var _a;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      (_a = buttonRef.current) == null ? void 0 : _a.click();
    }
  }, [buttonRef]);
  return /* @__PURE__ */ React__default["default"].createElement(PrivateTextLinkRenderer, {
    reset: false,
    weight,
    hitArea
  }, (styleProps) => /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues(__spreadValues({
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
  }, styleProps), data ? buildDataAttributes(data) : void 0), children));
};
const Disclosure = (_Mc) => {
  var _Nc = _Mc, {
    id,
    expandLabel,
    collapseLabel = expandLabel,
    space = "medium",
    children,
    data
  } = _Nc, restProps = __objRest(_Nc, [
    "id",
    "expandLabel",
    "collapseLabel",
    "space",
    "children",
    "data"
  ]);
  assert__default["default"](typeof expandLabel === "undefined" || typeof expandLabel === "string", "'expandLabel' must be a string");
  assert__default["default"](typeof collapseLabel === "undefined" || typeof collapseLabel === "string", "'collapseLabel' must be a string");
  const { expanded, buttonProps, contentProps } = useDisclosure(__spreadValues({
    id
  }, restProps.expanded !== void 0 ? {
    onToggle: restProps.onToggle,
    expanded: restProps.expanded
  } : {
    onToggle: restProps.onToggle
  }));
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    userSelect: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, null, /* @__PURE__ */ React__default["default"].createElement(TextLinkButton, __spreadValues({
    hitArea: "large"
  }, buttonProps), expanded ? collapseLabel : expandLabel, /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    paddingLeft: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
    direction: expanded ? "up" : "down",
    alignY: "lowercase"
  }))))), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    paddingTop: space,
    display: expanded ? "block" : "none"
  }, contentProps), children));
};
const validWidths = ["small", "medium", "large"];
const defaultWidth = "medium";
const modalStyle = {
  position: "right",
  headingLevel: "2",
  illustration: void 0
};
const Drawer = (_Oc) => {
  var _Pc = _Oc, { width = defaultWidth } = _Pc, restProps = __objRest(_Pc, ["width"]);
  assert__default["default"](validWidths.indexOf(width) >= 0, `Invalid width: ${width}`);
  return /* @__PURE__ */ React__default["default"].createElement(Modal, __spreadValues(__spreadValues({
    width
  }, restProps), modalStyle));
};
const Dropdown = React.forwardRef((props, ref) => {
  const _a = props, {
    children,
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
  return /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    disabled,
    labelId: void 0,
    prefix: void 0,
    secondaryMessage: null,
    value
  }), (overlays, _b, icon) => {
    var _c = _b, { className, paddingRight } = _c, fieldProps = __objRest(_c, ["className", "paddingRight"]);
    return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, icon, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
      component: "select",
      value,
      defaultValue: typeof value === "undefined" ? "" : void 0,
      onChange,
      onBlur,
      onFocus,
      placeholder,
      className: [componentsDropdown_Dropdown_cjs_css_js.field, className]
    }, fieldProps), {
      ref
    }), !value || placeholder ? /* @__PURE__ */ React__default["default"].createElement("option", {
      value: "",
      disabled: true
    }, placeholder) : null, children), overlays, /* @__PURE__ */ React__default["default"].createElement(Box, {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      height: "touchable",
      width: "touchable",
      top: 0,
      right: 0
    }, /* @__PURE__ */ React__default["default"].createElement(Text, {
      baseline: false
    }, /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
      tone: disabled ? "secondary" : void 0
    }))));
  });
});
Dropdown.displayName = "Dropdown";
const Link = React.forwardRef((_Qc, ref) => {
  var _Rc = _Qc, { href, className } = _Rc, restProps = __objRest(_Rc, ["href", "className"]);
  const LinkComponent = useLinkComponent(ref);
  return /* @__PURE__ */ React__default["default"].createElement(LinkComponent, __spreadValues({
    ref,
    href,
    className: clsx__default["default"](cssAtoms_atoms_cjs_js.atoms({ reset: "a" }), className)
  }, restProps));
});
Link.displayName = "Link";
const Loader = ({
  size = "standard",
  "aria-label": ariaLabel = "Loading",
  delayVisibility = false,
  data
}) => {
  const parentBackgroundColor = index.useBackgroundLightness();
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    display: "flex",
    alignItems: "center",
    className: [
      componentsLoader_Loader_cjs_css_js.rootSize[size],
      delayVisibility ? componentsLoader_Loader_cjs_css_js.delay : void 0
    ],
    "aria-label": ariaLabel
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: [
      cssAtoms_atoms_cjs_js.atoms({ reset: "svg" }),
      componentsLoader_Loader_cjs_css_js.size[size],
      componentsLoader_Loader_cjs_css_js.color[parentBackgroundColor]
    ].join(" "),
    viewBox: "0 0 300 134",
    "aria-hidden": true
  }, /* @__PURE__ */ React__default["default"].createElement("circle", {
    className: componentsLoader_Loader_cjs_css_js.circle,
    cy: "67",
    cx: "40",
    r: "40"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    className: componentsLoader_Loader_cjs_css_js.circle,
    cy: "67",
    cx: "150",
    r: "40"
  }), /* @__PURE__ */ React__default["default"].createElement("circle", {
    className: componentsLoader_Loader_cjs_css_js.circle,
    cy: "67",
    cx: "260",
    r: "40"
  })));
};
const MenuRendererItemContext = React.createContext(null);
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
  const menuRendererItemContext = React.useContext(MenuRendererItemContext);
  assert__default["default"](menuRendererItemContext !== null, `${displayName} must be rendered as an immediate child of a menu. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItem`);
  if (menuRendererItemContext === null) {
    throw new Error(`${displayName} element rendered outside menu context`);
  }
  const { isHighlighted, index: index$1, dispatch, focusTrigger } = menuRendererItemContext;
  const menuItemRef = React.useRef(null);
  React.useEffect(() => {
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
      onMouseEnter: () => dispatch({ type: MENU_ITEM_HOVER$1, value: index$1 }),
      onClick: (event) => {
        event.stopPropagation();
        dispatch({ type: MENU_ITEM_CLICK$1, formElement });
        if (typeof onClick === "function") {
          onClick();
        }
      },
      className: [
        componentsMenuItem_useMenuItem_cjs_css_js.menuItem,
        index.touchableText[menuItemChildrenSize],
        cssAtoms_atoms_cjs_js.atoms({
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
function MenuItemChildren({ tone, children }) {
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    userSelect: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    size: menuItemChildrenSize,
    baseline: false,
    tone: tone === "critical" ? tone : void 0
  }, children));
}
const MenuItem = ({ children, onClick, data, tone }) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    tone,
    onClick,
    data
  });
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({}, menuItemProps), {
    component: "button",
    type: "button"
  }), /* @__PURE__ */ React__default["default"].createElement(MenuItemChildren2, {
    tone
  }, children));
};
const MenuItemCheckbox = ({
  children,
  onChange,
  checked,
  data
}) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    onClick: () => onChange(!checked),
    formElement: true,
    data
  });
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({}, menuItemProps), {
    "aria-checked": checked,
    role: "menuitemcheckbox",
    component: "button",
    type: "button",
    display: "flex"
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    borderRadius: "standard",
    boxShadow: "borderField",
    position: "relative",
    background: "card",
    marginRight: "xsmall",
    className: componentsMenuItemCheckbox_MenuItemCheckbox_cjs_css_js.checkboxBorder
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    borderRadius: "standard",
    transition: "fast",
    opacity: checked ? void 0 : 0,
    className: componentsMenuItemCheckbox_MenuItemCheckbox_cjs_css_js.checkboxPadding
  }, /* @__PURE__ */ React__default["default"].createElement(IconTick, {
    size: "fill"
  }))), /* @__PURE__ */ React__default["default"].createElement(MenuItemChildren2, {
    tone: void 0
  }, children));
};
const MenuItemLink = ({
  href,
  target,
  rel,
  onClick,
  tone,
  data,
  children
}) => {
  const { menuItemProps, MenuItemChildren: MenuItemChildren2 } = useMenuItem({
    displayName: "MenuItemLink",
    onClick,
    tone,
    data
  });
  return /* @__PURE__ */ React__default["default"].createElement(Link, __spreadProps(__spreadValues({}, menuItemProps), {
    href,
    target,
    rel
  }), /* @__PURE__ */ React__default["default"].createElement(MenuItemChildren2, {
    tone
  }, children));
};
const MenuRendererContext = React.createContext(false);
const MenuItemDivider = () => {
  assert__default["default"](React.useContext(MenuRendererContext), "MenuItemDivider must be rendered within a menu component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItemDivider");
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingY: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Divider, null));
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
  children,
  data
}) => {
  const buttonRef = React.useRef(null);
  const hasOpened = React.useRef(false);
  const items = flattenChildren__default["default"](children);
  const itemCount = items.filter((item) => !isDivider(item)).length;
  assert__default["default"](items.every((item) => typeof item === "object" && "type" in item && (item.type === MenuItem || item.type === MenuItemCheckbox || item.type === MenuItemLink || item.type === MenuItemDivider)), "All child nodes within a menu component must be a MenuItem, MenuItemLink, MenuItemCheckbox or MenuItemDivider: https://seek-oss.github.io/braid-design-system/components/MenuRenderer");
  const [{ open, highlightIndex }, dispatch] = React.useReducer((state, action) => {
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
  React.useEffect(() => {
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
  return /* @__PURE__ */ React__default["default"].createElement(MenuRendererContext.Provider, {
    value: true
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    className: componentsMenuRenderer_MenuRenderer_cjs_css_js.root
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "inlineBlock",
    position: "relative"
  }, trigger(triggerProps, { open }), /* @__PURE__ */ React__default["default"].createElement(Box, {
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
    className: !open && componentsMenuRenderer_MenuRenderer_cjs_css_js.menuIsClosed
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingY: "xxsmall"
  }, items.map((item, i) => {
    if (isDivider(item)) {
      dividerCount++;
      return item;
    }
    const menuItemIndex = i - dividerCount;
    return /* @__PURE__ */ React__default["default"].createElement(MenuRendererItemContext.Provider, {
      key: menuItemIndex,
      value: {
        isHighlighted: menuItemIndex === highlightIndex,
        index: menuItemIndex,
        dispatch,
        focusTrigger
      }
    }, item);
  })), /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    boxShadow: "borderStandard",
    borderRadius: borderRadius$3,
    visible: true
  }))), open ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    onClick: (event) => {
      event.stopPropagation();
      event.preventDefault();
      dispatch({ type: BACKDROP_CLICK });
    },
    position: "fixed",
    zIndex: "dropdownBackdrop",
    top: 0,
    left: 0,
    className: componentsMenuRenderer_MenuRenderer_cjs_css_js.backdrop
  }) : null));
};
const OverflowButton = React.forwardRef(({
  label,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded
}, forwardedRef) => /* @__PURE__ */ React__default["default"].createElement(IconButton, {
  label,
  onClick,
  onKeyUp,
  onKeyDown,
  onMouseDown,
  keyboardAccessible,
  active,
  "aria-haspopup": ariaHasPopUp,
  "aria-expanded": ariaExpanded,
  ref: forwardedRef
}, (iconProps) => /* @__PURE__ */ React__default["default"].createElement(IconOverflow, __spreadValues({}, iconProps))));
const OverflowMenu = (_Sc) => {
  var _Tc = _Sc, {
    label,
    children
  } = _Tc, menuProps = __objRest(_Tc, [
    "label",
    "children"
  ]);
  return /* @__PURE__ */ React__default["default"].createElement(MenuRenderer, __spreadValues({
    trigger: (triggerProps, { open }) => /* @__PURE__ */ React__default["default"].createElement(Box, {
      className: componentsOverflowMenu_OverflowMenu_cjs_css_js.triggerOffset
    }, /* @__PURE__ */ React__default["default"].createElement(OverflowButton, __spreadValues({
      label,
      active: open
    }, triggerProps))),
    align: "right",
    offsetSpace: "small"
  }, menuProps), children);
};
const FieldGroup = (_Uc) => {
  var _Vc = _Uc, {
    id,
    disabled,
    children,
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "fieldset",
    disabled,
    id,
    role,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-required": required
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space
  }, "label" in restProps && restProps.label ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "legend",
    id: labelId
  }, /* @__PURE__ */ React__default["default"].createElement(FieldLabel, {
    htmlFor: false,
    label: restProps.label,
    secondaryLabel,
    tertiaryLabel,
    description,
    descriptionId
  })) : null, children({
    disabled,
    "aria-describedby": mergeIds(message ? messageId : void 0, descriptionId)
  }), message || reserveMessageSpace ? /* @__PURE__ */ React__default["default"].createElement(FieldMessage, {
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
const getMonths = (monthNames) => monthNames.map((monthName, i) => /* @__PURE__ */ React__default["default"].createElement("option", {
  value: i + 1,
  key: i
}, monthName));
const getYears = (min, max, ascending) => [...new Array(max - min + 1)].map((_v, i) => {
  const yearStr = String(ascending ? i + min : max - i);
  return /* @__PURE__ */ React__default["default"].createElement("option", {
    value: yearStr,
    key: yearStr
  }, yearStr);
});
const currYear = new Date().getFullYear();
const renderNativeInput = isMobile.isMobile({ tablet: true });
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
  assert__default["default"](monthNames.length === 12, "monthNames array must contain 12 items");
  const currentValue = {
    month: value && value.month ? value.month : void 0,
    year: value && value.year ? value.year : void 0
  };
  const monthRef = React.createRef();
  const yearRef = React.createRef();
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
  const nativeField = /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({
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
    return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
      component: "input",
      type: "month",
      value: customValueToString(currentValue),
      onChange: onChange && makeChangeHandler(onChange, value, "native"),
      onBlur,
      onFocus
    }, fieldProps), {
      height: "touchable",
      className: [className, componentsMonthPicker_MonthPicker_cjs_css_js.nativeInput]
    })), overlays);
  });
  const customFieldGroup = /* @__PURE__ */ React__default["default"].createElement(FieldGroup, __spreadValues({
    id,
    tone,
    disabled
  }, restProps), (fieldGroupProps) => /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: "medium"
  }, /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(Dropdown, __spreadProps(__spreadValues({
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
  }), getMonths(monthNames))), /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(Dropdown, __spreadProps(__spreadValues({
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
const Notice = ({ tone = "info", data, children }) => {
  const Icon2 = icons[tone];
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    role: "alert",
    "aria-live": "polite"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: "xsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Icon2, {
    tone
  })), /* @__PURE__ */ React__default["default"].createElement(Column, null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: cssTextAlignedToIcon_cjs_css_js.textAlignedToIcon.standard
  }, /* @__PURE__ */ React__default["default"].createElement(index.DefaultTextPropsProvider, {
    tone
  }, children)))));
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
  label,
  direction
}) => {
  const isPrevious = direction === "prev";
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    className: componentsPagination_Pagination_cjs_css_js.hover,
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "touchable",
    paddingX: "xsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    component: "span",
    background: "selection",
    borderRadius: borderRadius$2,
    transition: "fast",
    className: componentsPagination_Pagination_cjs_css_js.background
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, null, isPrevious ? /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
    direction: "left"
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: isPrevious ? ["none", "inline"] : void 0,
    component: "span",
    marginLeft: isPrevious ? "xxsmall" : void 0,
    marginRight: direction === "next" ? "xxsmall" : void 0
  }, label), direction === "next" ? /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
    direction: "right"
  }) : null)));
};
const tabletButtonSpacing = "xxsmall";
const Page = ({ number, current }) => {
  const parentBackground = index.useBackground();
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "touchable",
    width: "touchable",
    position: "relative",
    className: componentsPagination_Pagination_cjs_css_js.hover
  }, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    component: "span",
    background: current ? "formAccent" : "selection",
    transition: current ? void 0 : "fast",
    borderRadius: borderRadius$2,
    className: [componentsPagination_Pagination_cjs_css_js.background, current ? componentsPagination_Pagination_cjs_css_js.current : void 0]
  }), /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    component: "span",
    borderRadius: borderRadius$2,
    boxShadow: "borderFormAccent",
    className: parentBackground !== "card" && current ? componentsPagination_Pagination_cjs_css_js.currentKeyline : void 0
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    zIndex: 1,
    userSelect: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    align: "center",
    weight: current ? "medium" : void 0,
    tone: current ? "formAccent" : void 0
  }, number)));
};
const Pagination = ({
  page,
  total,
  linkProps,
  label,
  pageLabel = (p) => `Go to page ${p}`,
  nextLabel = "Next",
  previousLabel = "Previous",
  data
}) => {
  assert__default["default"](total >= 1, `\`total\` must be at least 1`);
  assert__default["default"](page >= 1 && page <= total, `\`page\` must be between 1 and ${total}`);
  const pages = paginate({ page, total });
  const showPrevious = page > 1;
  const showNext = page < total;
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    component: "nav",
    "aria-label": label
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "ul",
    display: "flex",
    justifyContent: "center"
  }, showPrevious ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "li",
    paddingRight: ["medium", tabletButtonSpacing]
  }, /* @__PURE__ */ React__default["default"].createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: page - 1, type: "previous" })), {
    rel: "prev",
    "aria-label": previousLabel,
    title: previousLabel
  }), /* @__PURE__ */ React__default["default"].createElement(PageNav, {
    label: previousLabel,
    direction: "prev"
  }))) : null, pages.map((pageNumber, index2) => {
    const current = page === pageNumber;
    return /* @__PURE__ */ React__default["default"].createElement(Box, {
      component: "li",
      display: !current ? ["none", "block"] : void 0,
      paddingRight: [
        "none",
        pages.length - 1 === index2 ? "none" : tabletButtonSpacing
      ],
      key: pageNumber
    }, /* @__PURE__ */ React__default["default"].createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: pageNumber, type: "pageNumber" })), {
      "aria-label": pageLabel(pageNumber),
      "aria-current": current ? "page" : void 0,
      title: pageLabel(pageNumber)
    }), /* @__PURE__ */ React__default["default"].createElement(Page, {
      number: pageNumber,
      current
    })));
  }), showNext ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "li",
    paddingLeft: ["medium", tabletButtonSpacing]
  }, /* @__PURE__ */ React__default["default"].createElement(Link, __spreadProps(__spreadValues({}, linkProps({ page: page + 1, type: "next" })), {
    rel: "next",
    "aria-label": nextLabel,
    title: nextLabel
  }), /* @__PURE__ */ React__default["default"].createElement(PageNav, {
    label: nextLabel,
    direction: "next"
  }))) : null));
};
const PasswordField = React.forwardRef((_Yc, forwardedRef) => {
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
  const defaultRef = React.useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const [visible, setVisibile] = React.useState(false);
  const visibilityHandler = React.useCallback((event) => {
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
  return /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    icon: void 0,
    prefix: void 0,
    labelId: void 0,
    disabled,
    secondaryMessage: null,
    secondaryIcon: disabled ? null : /* @__PURE__ */ React__default["default"].createElement(IconButton, {
      label: visibilityToggleLabel,
      onMouseDown: visibilityHandler,
      keyboardAccessible: false
    }, (iconProps) => /* @__PURE__ */ React__default["default"].createElement(IconVisibility, __spreadProps(__spreadValues({}, iconProps), {
      hidden: visible
    })))
  }), (overlays, fieldProps, _, secondaryIcon) => /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
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
const RadioGroupContext = React.createContext(null);
const RadioItemContext = React.createContext(null);
const Radio = React.forwardRef((props, ref) => {
  const radioGroupContext = React.useContext(RadioGroupContext);
  assert__default["default"](radioGroupContext === null, 'The "Radio" component has been deprecated. Use a "RadioItem" instead.');
  return /* @__PURE__ */ React__default["default"].createElement(InlineField, __spreadProps(__spreadValues({}, props), {
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
const RadioItem = React.forwardRef((props, ref) => {
  const radioGroupContext = React.useContext(RadioGroupContext);
  const radioItemContext = React.useContext(RadioItemContext);
  assert__default["default"](radioGroupContext !== null && radioItemContext !== null, "All `RadioItem` buttons must be within a `RadioGroup`.");
  assert__default["default"](typeof props.value !== "undefined" && props.value !== "", "All `RadioItem` buttons must have an associated `value`");
  const checked = radioGroupContext.value === props.value;
  const isFirstRadioWithNoCheckedValueInGroup = radioItemContext === 0 && !Boolean(radioGroupContext.value);
  const tababble = checked || isFirstRadioWithNoCheckedValueInGroup;
  return /* @__PURE__ */ React__default["default"].createElement(InlineField, __spreadProps(__spreadValues({}, props), {
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
    children,
    id,
    value,
    name,
    onChange,
    disabled,
    tone,
    size
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
  const items = flattenChildren__default["default"](children);
  assert__default["default"](items.every((item) => typeof item === "object" && "type" in item && item.type === RadioItem), "All child nodes within a RadioGroup must be a RadioItem: https://seek-oss.github.io/braid-design-system/components/RadioGroup");
  return /* @__PURE__ */ React__default["default"].createElement(FieldGroup, __spreadProps(__spreadValues({
    id
  }, props), {
    disabled,
    tone,
    space: "small",
    role: "radiogroup"
  }), (fieldGroupProps) => /* @__PURE__ */ React__default["default"].createElement(RadioGroupContext.Provider, {
    value: __spreadValues({
      id,
      value,
      name: name || id,
      onChange,
      disabled,
      tone,
      size
    }, fieldGroupProps)
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingTop: props.description ? "xxsmall" : "xsmall",
    paddingBottom: props.message ? "xsmall" : void 0
  }, /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: stackSpaceForSize[size || "standard"]
  }, items.map((item, i) => /* @__PURE__ */ React__default["default"].createElement(RadioItemContext.Provider, {
    key: i,
    value: i
  }, item))))));
};
RadioGroup.displayName = "RadioGroup";
const IconStarHalfSvg = (_ad) => {
  var _bd = _ad, { title, titleId } = _bd, props = __objRest(_bd, ["title", "titleId"]);
  return /* @__PURE__ */ React__default["default"].createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    focusable: "false",
    fill: "currentColor",
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React__default["default"].createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M22.951 8.954a1 1 0 0 0-.806-.68l-6.391-.935-2.858-5.782a1.042 1.042 0 0 0-1.793 0L8.246 7.339l-6.39.934a1 1 0 0 0-.553 1.706l4.623 4.498-1.091 6.354a1 1 0 0 0 1.45 1.054L12 18.883l5.715 3.002a1 1 0 0 0 1.45-1.054l-1.09-6.354 4.622-4.497a1.002 1.002 0 0 0 .254-1.026zm-6.648 4.456a1 1 0 0 0-.288.886l.837 4.877-4.387-2.305a.99.99 0 0 0-.465-.115V4.257l2.193 4.44a1 1 0 0 0 .752.545l4.905.717z"
  }));
};
const getPercent = (rating, position) => Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);
const RatingStar = (_cd) => {
  var _dd = _cd, { percent } = _dd, restProps = __objRest(_dd, ["percent"]);
  const currentBg = index.useBackground();
  const _a = useIcon(restProps), { className } = _a, iconProps = __objRest(_a, ["className"]);
  let component = IconStarSvg;
  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }
  if (percent > 50) {
    component = IconStarActiveSvg;
  }
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
    component
  }, iconProps), {
    className: [
      className,
      { [componentsRating_Rating_cjs_css_js.starColor]: currentBg === "body" || currentBg === "card" }
    ]
  }));
};
const ratingArr = [...Array(5)];
const Rating = ({
  rating,
  size = "standard",
  showTextRating = true,
  "aria-label": ariaLabel,
  data
}) => {
  assert__default["default"](!rating || rating >= 0 && rating <= 5, "Rating must be between 0 and 5");
  return /* @__PURE__ */ React__default["default"].createElement(Text, {
    size,
    data
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "inlineBlock",
    "aria-label": ariaLabel || `${rating.toFixed(1)} out of ${ratingArr.length}`
  }, ratingArr.map((_, position) => /* @__PURE__ */ React__default["default"].createElement(Box, {
    key: position,
    display: "inlineBlock",
    "aria-hidden": true,
    className: {
      [componentsRating_Rating_cjs_css_js.starSpacing]: position !== ratingArr.length - 1
    }
  }, /* @__PURE__ */ React__default["default"].createElement(RatingStar, {
    percent: getPercent(rating, position)
  })))), showTextRating && /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    className: componentsRating_Rating_cjs_css_js.textSpacing,
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
const getTabLabelId = (uniqueId, index2) => `${uniqueId}_${index2 + 1}_label`;
const getPanelId = (uniqueId, index2) => `${uniqueId}_${index2 + 1}_panel`;
var tabA11y = ({ uniqueId }) => ({
  tabListProps: ({ label }) => ({
    role: "tablist",
    "aria-orientation": "horizontal",
    "aria-label": label
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
const TabsContext = React.createContext(null);
const TabsProvider = ({
  children,
  onChange,
  id,
  selectedItem
}) => {
  const [tabsState, dispatch] = React.useReducer((state, action) => {
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
  return /* @__PURE__ */ React__default["default"].createElement(TabsContext.Provider, {
    value: __spreadProps(__spreadValues({}, tabsState), {
      selectedIndex: selectedItem ? tabsState.tabItems.indexOf(selectedItem) : tabsState.selectedIndex,
      selectedItem,
      dispatch,
      a11y: tabA11y({ uniqueId: id }),
      onChange
    })
  }, children);
};
const TabListContext = React.createContext(null);
const Tab = ({ children, data, badge, item }) => {
  const tabsContext = React.useContext(TabsContext);
  const tabListContext = React.useContext(TabListContext);
  const tabRef = React.useRef(null);
  assert__default["default"](tabListContext !== null, "A Tab must be rendered as a child of Tabs. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tab");
  assert__default["default"](!badge || badge.type === Badge, `Tab badge prop can only be an instance of Badge. e.g. <Tab badge={<Badge>New</Badge>}>`);
  assert__default["default"](!badge || badge.props.bleedY === void 0, "Badge elements cannot set the 'bleedY' prop when passed to a Tab component");
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
  const { tabListItemIndex, scrollContainer, divider } = tabListContext;
  const isSelected = selectedIndex > -1 ? selectedIndex === tabListItemIndex : selectedItem === item;
  const isFocused = focusedTabIndex === tabListItemIndex;
  const paddingX = "small";
  const { grid, space } = useSpace();
  React.useEffect(() => {
    if (tabRef.current && isFocused) {
      tabRef.current.focus();
    }
  }, [isFocused]);
  const firstRenderRef = React.useRef(true);
  const isMobile2 = useResponsiveValue()({
    mobile: true,
    tablet: false
  });
  React.useEffect(() => {
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
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues(__spreadProps(__spreadValues({
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
    className: componentsTabs_Tabs_cjs_css_js.tab
  }), data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Text, __spreadProps(__spreadValues({}, a11y.tabLabelProps({ tabIndex: tabListItemIndex })), {
    size: tabTextSize,
    weight: "medium",
    align: "center",
    tone: isSelected ? "formAccent" : "secondary"
  }), children), badge ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingLeft: "xsmall"
  }, React.cloneElement(badge, { bleedY: true })) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    pointerEvents: "none"
  }, divider === "minimal" ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    className: componentsTabs_Tabs_cjs_css_js.divider
  }) : null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    background: "neutral",
    position: "absolute",
    zIndex: 2,
    transition: "fast",
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    className: [
      componentsTabs_Tabs_cjs_css_js.tabUnderlineHover,
      componentsTabs_Tabs_cjs_css_js.tabUnderline,
      tabListItemIndex > 0 ? componentsTabs_Tabs_cjs_css_js.hairlineMarginLeft : null
    ]
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    background: "formAccent",
    position: "absolute",
    zIndex: 2,
    transition: "fast",
    left: 0,
    right: 0,
    bottom: 0,
    className: [
      componentsTabs_Tabs_cjs_css_js.tabUnderline,
      !isSelected ? componentsTabs_Tabs_cjs_css_js.tabUnderlineAnimation : void 0,
      tabListItemIndex > 0 ? componentsTabs_Tabs_cjs_css_js.hairlineMarginLeft : null
    ]
  })), /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    zIndex: 1,
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    className: componentsTabs_Tabs_cjs_css_js.tabFocusRing,
    visible: false,
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true
  }));
};
const Tabs = (props) => {
  const tabsContext = React.useContext(TabsContext);
  const tabsRef = React.useRef(null);
  const {
    children,
    label,
    data,
    align = "left",
    gutter,
    reserveHitArea = false,
    divider = "minimal"
  } = props;
  assert__default["default"](tabsContext !== null, "Tabs must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs");
  if (!tabsContext) {
    throw new Error("Tabs rendered outside TabsProvider");
  }
  const { dispatch, a11y } = tabsContext;
  const tabItems = [];
  const tabs = React.Children.map(flattenChildren__default["default"](children), (tab, index2) => {
    var _a;
    assert__default["default"](typeof tab === "object" && tab.type === Tab, "Only Tab elements can be direct children of a Tabs");
    tabItems.push((_a = tab.props.item) != null ? _a : index2);
    return /* @__PURE__ */ React__default["default"].createElement(TabListContext.Provider, {
      key: index2,
      value: {
        tabListItemIndex: index2,
        scrollContainer: tabsRef.current,
        divider
      }
    }, tab);
  });
  React.useEffect(() => {
    dispatch({ type: TAB_LIST_UPDATED, tabItems });
  }, [tabItems.join(), dispatch]);
  const {
    space: { grid, space }
  } = index.useBraidTheme();
  const [showMask, setShowMask] = React.useState(true);
  const updateMask = React.useCallback(() => {
    if (!tabsRef.current) {
      return;
    }
    setShowMask(tabsRef.current.scrollWidth - tabsRef.current.offsetWidth - tabsRef.current.scrollLeft > grid * space.small);
  }, [tabsRef, setShowMask, grid, space]);
  React.useEffect(() => {
    updateMask();
    window.addEventListener("resize", updateMask);
    return () => window.removeEventListener("resize", updateMask);
  }, [updateMask]);
  return /* @__PURE__ */ React__default["default"].createElement(Box, null, /* @__PURE__ */ React__default["default"].createElement(Box, {
    className: reserveHitArea ? void 0 : negativeMarginTop("medium")
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    ref: tabsRef,
    className: [
      componentsTabs_Tabs_cjs_css_js.scroll,
      componentsTabs_Tabs_cjs_css_js.nowrap,
      showMask ? componentsTabs_Tabs_cjs_css_js.mask : null
    ],
    display: "flex",
    onScroll: updateMask,
    flexWrap: "nowrap"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    className: align === "center" ? componentsTabs_Tabs_cjs_css_js.marginAuto : void 0,
    paddingX: gutter,
    flexWrap: "nowrap"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, a11y.tabListProps({ label })), {
    display: "flex"
  }), data ? buildDataAttributes(data) : void 0), {
    flexWrap: "nowrap"
  }), tabs)), divider === "full" ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    className: componentsTabs_Tabs_cjs_css_js.divider
  }) : null))));
};
const TabPanelsContext = React.createContext(null);
const TabPanel = ({ children, data, item }) => {
  const tabsContext = React.useContext(TabsContext);
  const tabPanelsContext = React.useContext(TabPanelsContext);
  assert__default["default"](tabsContext !== null, "A TabPanel must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs");
  if (!tabPanelsContext) {
    throw new Error("TabPanel rendered outside TabPanels");
  }
  if (!tabsContext) {
    throw new Error("TabPanel rendered outside TabsProvider");
  }
  const { a11y, selectedIndex, selectedItem } = tabsContext;
  const { panelIndex, renderInactive } = tabPanelsContext;
  const isSelected = selectedIndex > -1 ? panelIndex === selectedIndex : selectedItem === item;
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues(__spreadProps(__spreadValues({}, a11y.tabPanelProps({ panelIndex, isSelected })), {
    display: isSelected ? void 0 : "none",
    position: "relative",
    outline: "none",
    className: componentsTabs_Tabs_cjs_css_js.tabPanel
  }), data ? buildDataAttributes(data) : void 0), isSelected || renderInactive ? children : void 0, /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    zIndex: 1,
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    className: componentsTabs_Tabs_cjs_css_js.tabPanelFocusRing,
    onlyVisibleForKeyboardNavigation: true
  }));
};
const TabPanels = ({
  renderInactivePanels = false,
  children
}) => {
  const tabsContext = React.useContext(TabsContext);
  if (!tabsContext) {
    throw new Error("TabPanels rendered outside TabsProvider context");
  }
  const { dispatch } = tabsContext;
  const panelItems = [];
  const panels = React.Children.map(flattenChildren__default["default"](children), (panel, index2) => {
    assert__default["default"](typeof panel === "object" && panel.type === TabPanel, "Only TabPanel elements can be direct children of a TabPanels");
    panelItems.push(index2);
    return /* @__PURE__ */ React__default["default"].createElement(TabPanelsContext.Provider, {
      key: index2,
      value: {
        renderInactive: renderInactivePanels,
        panelIndex: index2
      }
    }, panel);
  });
  React.useEffect(() => {
    dispatch({ type: TAB_PANELS_UPDATED, panels: panelItems });
  }, [panelItems.join(), dispatch]);
  return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, panels);
};
const Tag = ({
  onClear,
  clearLabel = "Clear",
  data,
  children
}) => {
  assert__default["default"](typeof children === "undefined" || typeof children === "string", "Tag may only contain a string");
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    display: "flex"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    minWidth: 0,
    alignItems: "center",
    background: "neutralLight",
    paddingY: "xxsmall",
    paddingLeft: "small",
    paddingRight: onClear ? "xxsmall" : "small",
    borderRadius: "full"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    minWidth: 0,
    title: children
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    truncate: true
  }, children)), onClear ? /* @__PURE__ */ React__default["default"].createElement(Box, {
    flexShrink: 0,
    display: "flex",
    paddingLeft: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(ClearButton, {
    label: clearLabel,
    onClick: onClear
  })) : null));
};
const Highlight = ({ children }) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  component: "mark",
  borderRadius: "standard",
  background: "criticalLight",
  className: componentsTextarea_Highlight_Highlight_cjs_css_js.root
}, children);
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
    return parseHighlights__default["default"](value, validatedAndSortedRanges.map(({ start, end }) => [
      start,
      end || value.length
    ])).reduce((acc, { text, highlight }, i) => {
      if (text) {
        acc.push(highlight ? /* @__PURE__ */ React__default["default"].createElement(Highlight, {
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
  return /* @__PURE__ */ React__default["default"].createElement(Text, {
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
  const padding = pxToInt(paddingTop) + pxToInt(paddingBottom);
  const currentRows = Math.floor((target.scrollHeight - padding) / pxToInt(lineHeight));
  if (target && target.value === "") {
    return lines;
  }
  return typeof lineLimit === "number" && currentRows > lineLimit ? lineLimit : currentRows;
};
const Textarea = React.forwardRef((_ed, ref) => {
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
  const [rows, setRows] = React.useState(lines);
  const highlightsRef = React.useRef(null);
  const updateScroll = React.useCallback((scrollTop) => {
    if (highlightsRef.current) {
      highlightsRef.current.scrollTop = scrollTop;
    }
  }, [highlightsRef]);
  const inputLength = String(value).length;
  const excessCharactersRange = characterLimit && inputLength > characterLimit ? [{ start: characterLimit }] : [];
  const highlightRanges = [...excessCharactersRange, ...highlightRangesProp];
  const hasHighlights = highlightRanges.length > 0;
  return /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    icon: void 0,
    prefix: void 0,
    labelId: void 0,
    secondaryMessage: characterLimit ? getCharacterLimitStatus({
      value,
      characterLimit
    }) : null
  }), (overlays, _a) => {
    var _b = _a, { className, borderRadius: borderRadius2, background } = _b, fieldProps = __objRest(_b, ["className", "borderRadius", "background"]);
    return /* @__PURE__ */ React__default["default"].createElement(Box, {
      position: "relative",
      width: "full",
      zIndex: 0,
      background,
      borderRadius: borderRadius2
    }, hasHighlights ? /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
      ref: highlightsRef,
      position: "absolute",
      overflow: "hidden",
      pointerEvents: "none",
      height: "full",
      "aria-hidden": "true",
      top: 0,
      left: 0,
      className: [componentsTextarea_Textarea_cjs_css_js.highlights, className]
    }, fieldProps), formatRanges(String(value), highlightRanges)) : null, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
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
      className: [componentsTextarea_Textarea_cjs_css_js.field, className]
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
  label,
  data
}) {
  assert__default["default"]((() => {
    const inText = React.useContext(TextContext);
    const inHeading = React.useContext(HeadingContext);
    return inText || inHeading;
  })(), "TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown");
  const parsedOptions = options.map(parseSimpleToComplexOption);
  const [currentText] = parsedOptions.filter((o) => value === o.value);
  if (!currentText || !currentText.text) {
    throw new Error(`The provided value of "${value}" does not exist in the provided \`options\` list.`);
  }
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    display: "inlineBlock",
    position: "relative"
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
    pointerEvents: "none",
    userSelect: "none"
  }, currentText.text, " ", /* @__PURE__ */ React__default["default"].createElement(IconChevron, {
    alignY: "lowercase"
  })), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "select",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "full",
    opacity: 0,
    className: componentsTextDropdown_TextDropdown_cjs_css_js.select,
    "aria-label": label,
    title: label,
    id,
    value: String(value),
    onChange: (ev) => {
      if (typeof onChange === "function") {
        const newValue = parsedOptions[ev.currentTarget.selectedIndex].value;
        onChange(newValue);
      }
    },
    onBlur
  }, /* @__PURE__ */ React__default["default"].createElement("optgroup", {
    label
  }, parsedOptions.map((option) => /* @__PURE__ */ React__default["default"].createElement("option", {
    value: String(option.value),
    key: String(option.value)
  }, option.text)))), /* @__PURE__ */ React__default["default"].createElement(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    className: componentsTextDropdown_TextDropdown_cjs_css_js.focusOverlay
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
const TextField = React.forwardRef((_gd, forwardedRef) => {
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
  const defaultRef = React.useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const clearable = Boolean(typeof onClear !== "undefined" && typeof value === "string" && value.length > 0);
  return /* @__PURE__ */ React__default["default"].createElement(Field, __spreadProps(__spreadValues({}, restProps), {
    value,
    labelId: void 0,
    secondaryMessage: characterLimit ? getCharacterLimitStatus({
      value,
      characterLimit
    }) : null,
    secondaryIcon: onClear ? /* @__PURE__ */ React__default["default"].createElement(ClearField, {
      hide: !clearable,
      onClear,
      inputRef
    }) : null
  }), (overlays, fieldProps, icon, secondaryIcon, prefix) => /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, icon, prefix, /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({
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
const TextLink = React.forwardRef((_id, ref) => {
  var _jd = _id, { weight, showVisited, hitArea, data } = _jd, props = __objRest(_jd, ["weight", "showVisited", "hitArea", "data"]);
  const LinkComponent = useLinkComponent(ref);
  return /* @__PURE__ */ React__default["default"].createElement(PrivateTextLinkRenderer, {
    weight,
    showVisited,
    hitArea
  }, (styleProps) => /* @__PURE__ */ React__default["default"].createElement(LinkComponent, __spreadValues(__spreadValues(__spreadValues({
    ref
  }, props), styleProps), data ? buildDataAttributes(data) : void 0)));
});
TextLink.displayName = "TextLink";
const Tiles = ({
  children,
  space = "none",
  columns = 1,
  dividers = false,
  data
}) => /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
  className: negativeMarginTop(space)
}, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
  display: "flex",
  flexWrap: "wrap",
  className: negativeMarginLeft(space)
}, React.Children.map(flattenChildren__default["default"](children), (child, i) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  minWidth: 0,
  className: resolveResponsiveProp(columns, componentsTiles_Tiles_cjs_css_js.columnsMobile, componentsTiles_Tiles_cjs_css_js.columnsTablet, componentsTiles_Tiles_cjs_css_js.columnsDesktop, componentsTiles_Tiles_cjs_css_js.columnsWide)
}, /* @__PURE__ */ React__default["default"].createElement(Box, {
  height: "full",
  paddingTop: space,
  paddingLeft: space
}, dividers && i > 0 ? /* @__PURE__ */ React__default["default"].createElement(Box, {
  paddingBottom: space,
  display: cssAtoms_sprinkles_cjs_css_js.mapResponsiveValue(columns, (column) => column === 1 ? "block" : "none")
}, typeof dividers === "string" ? /* @__PURE__ */ React__default["default"].createElement(Divider, {
  weight: dividers
}) : /* @__PURE__ */ React__default["default"].createElement(Divider, null)) : null, child)))));
const handleChange = (onChange) => (event) => {
  if (typeof onChange === "function") {
    onChange(event.target.checked);
  }
};
const Toggle = ({
  id,
  on,
  onChange,
  label,
  align = "left",
  size = "standard",
  data
}) => {
  const showBorder = index.useBackgroundLightness() === "light";
  return /* @__PURE__ */ React__default["default"].createElement(Box, __spreadValues({
    position: "relative",
    zIndex: 0,
    display: "flex",
    flexDirection: align === "left" ? void 0 : "rowReverse",
    className: componentsToggle_Toggle_cjs_css_js.root
  }, data ? buildDataAttributes(data) : void 0), /* @__PURE__ */ React__default["default"].createElement(Box, {
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
      componentsToggle_Toggle_cjs_css_js.realField,
      componentsToggle_Toggle_cjs_css_js.realFieldPosition[size],
      componentsToggle_Toggle_cjs_css_js.fieldSize[size]
    ]
  }), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    className: [
      componentsToggle_Toggle_cjs_css_js.slideContainer,
      componentsToggle_Toggle_cjs_css_js.slideContainerSize[size],
      componentsToggle_Toggle_cjs_css_js.fieldSize[size]
    ]
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    width: "full",
    overflow: "hidden",
    borderRadius: "full",
    className: [componentsToggle_Toggle_cjs_css_js.slideTrack[size], componentsToggle_Toggle_cjs_css_js.slideTrackBackground]
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    transition: "fast",
    className: componentsToggle_Toggle_cjs_css_js.slideTrackSelected
  })), /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "absolute",
    background: "input",
    boxShadow: showBorder ? "borderField" : void 0,
    transition: "fast",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    className: componentsToggle_Toggle_cjs_css_js.slider[size]
  }, /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    className: componentsToggle_Toggle_cjs_css_js.icon
  }, /* @__PURE__ */ React__default["default"].createElement(IconTick, {
    tone: "formAccent",
    size: "fill"
  })), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "focus",
    borderRadius: "full",
    className: componentsToggle_Toggle_cjs_css_js.focusOverlay
  }), /* @__PURE__ */ React__default["default"].createElement(FieldOverlay, {
    variant: "hover",
    borderRadius: "full",
    className: componentsToggle_Toggle_cjs_css_js.hoverOverlay
  }))), /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "label",
    htmlFor: id,
    paddingLeft: align === "left" ? "xsmall" : void 0,
    paddingRight: align === "right" || align === "justify" ? "xsmall" : void 0,
    flexGrow: align === "justify" ? 1 : void 0,
    userSelect: "none",
    cursor: "pointer",
    className: [componentsToggle_Toggle_cjs_css_js.label[size], virtualTouchable()]
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    weight: on ? "strong" : void 0,
    size
  }, label)));
};
const useTimeout = ({ onTimeout, duration }) => {
  const [activated, setActivated] = React.useState(true);
  const timeoutRef = React.useRef();
  const stopTimeout = React.useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);
  React.useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);
      return () => {
        stopTimeout();
      };
    }
  }, [onTimeout, activated, duration, stopTimeout]);
  const startTimeout = React.useCallback(() => {
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
const Action = ({ label, onClick, removeToast }) => {
  const handleClick = React.useCallback(() => {
    removeToast();
    onClick();
  }, [removeToast, onClick]);
  return /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    component: "span",
    paddingRight: "xsmall",
    "aria-hidden": true
  }, /* @__PURE__ */ React__default["default"].createElement(TextLinkButton, {
    onClick: handleClick,
    hitArea: "large"
  }, label)));
};
const Toast = React__default["default"].forwardRef(({
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
  const remove = React.useCallback(() => onClear(dedupeKey, id), [onClear, dedupeKey, id]);
  const { stopTimeout, startTimeout } = useTimeout({
    duration: 1e4,
    onTimeout: remove
  });
  React.useEffect(() => {
    if (shouldRemove) {
      stopTimeout();
      remove();
    }
  }, [shouldRemove, remove, stopTimeout]);
  const Icon2 = toneToIcon[tone];
  const content = description ? /* @__PURE__ */ React__default["default"].createElement(Stack, {
    space: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    weight: "strong",
    baseline: false
  }, message), description ? /* @__PURE__ */ React__default["default"].createElement(Text, {
    baseline: false,
    tone: "secondary"
  }, description) : null, action ? /* @__PURE__ */ React__default["default"].createElement(Action, __spreadValues({
    key: action.label,
    removeToast: remove
  }, action)) : null) : /* @__PURE__ */ React__default["default"].createElement(Inline, {
    space: "xxsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingRight: "medium"
  }, /* @__PURE__ */ React__default["default"].createElement(Text, {
    weight: "strong",
    baseline: false
  }, message)), action ? /* @__PURE__ */ React__default["default"].createElement(Action, __spreadValues({
    key: action.label,
    removeToast: remove
  }, action)) : null);
  return /* @__PURE__ */ React__default["default"].createElement(TreatProvider, {
    theme: treatTheme
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    display: "flex",
    justifyContent: "center",
    role: "alert",
    ref,
    onMouseEnter: stopTimeout,
    onMouseLeave: startTimeout,
    className: vanillaTheme
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    boxShadow: "large",
    borderRadius: borderRadius$1
  }, /* @__PURE__ */ React__default["default"].createElement(ContentBlock, {
    width: "xsmall"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    background: "card",
    position: "relative",
    boxShadow: "borderStandard",
    borderRadius: borderRadius$1,
    paddingY: "medium",
    paddingLeft: "medium",
    overflow: "hidden",
    className: componentsUseToast_Toast_cjs_css_js.toast
  }, /* @__PURE__ */ React__default["default"].createElement(Columns, {
    space: "none"
  }, /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    paddingRight: "small"
  }, /* @__PURE__ */ React__default["default"].createElement(Icon2, {
    tone
  }))), /* @__PURE__ */ React__default["default"].createElement(Column, null, content), /* @__PURE__ */ React__default["default"].createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React__default["default"].createElement(Box, {
    width: "touchable",
    display: "flex",
    justifyContent: "center",
    "aria-hidden": true
  }, /* @__PURE__ */ React__default["default"].createElement(ClearButton, {
    onClick: remove,
    label: "Clear",
    data: {}
  })))), /* @__PURE__ */ React__default["default"].createElement(Box, {
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
const animate = (element, transforms, transition, done) => {
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
      element.style.setProperty("transition", transition);
      transforms.forEach(({ property, to = "" }) => {
        element.style.setProperty(property, to);
      });
    });
  });
};
const useFlipList = () => {
  const refs = React.useMemo(() => new Map(), []);
  const positions = React.useMemo(() => new Map(), []);
  React.useLayoutEffect(() => {
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
    animations.forEach(({ element, transforms, transition }) => {
      animate(element, transforms, transition);
    });
  });
  const remove = React.useCallback((id, cb) => {
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
  const itemRef = React.useCallback((id) => (ref) => {
    refs.set(id, ref);
  }, [refs]);
  return {
    itemRef,
    remove
  };
};
const Toaster = ({ toasts, removeToast }) => {
  const { itemRef, remove } = useFlipList();
  const onClear = React.useCallback((dedupeKey, id) => {
    remove(id, () => {
      removeToast(dedupeKey);
    });
  }, [remove, removeToast]);
  return /* @__PURE__ */ React__default["default"].createElement(Box, {
    position: "fixed",
    zIndex: "notification",
    width: "full",
    pointerEvents: "none",
    paddingX: "gutter",
    bottom: 0
  }, toasts.map((_a) => {
    var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
    return /* @__PURE__ */ React__default["default"].createElement(Box, {
      key: id,
      paddingBottom: "small"
    }, /* @__PURE__ */ React__default["default"].createElement(Toast, __spreadValues({
      ref: itemRef(id),
      id,
      onClear
    }, rest)));
  }));
};
let toastCounter = 0;
const ToastControllerContext = React.createContext(null);
const QUEUE_TOAST = 0;
const REMOVE_TOAST = 1;
function reducer(state, action) {
  switch (action.type) {
    case QUEUE_TOAST: {
      const { toast } = action;
      const hasExistingToast = state.toasts.some((t) => t.dedupeKey === toast.dedupeKey);
      if (hasExistingToast) {
        return {
          toasts: state.toasts.map((t) => {
            if (t.dedupeKey === toast.dedupeKey) {
              return __spreadProps(__spreadValues({}, t), {
                shouldRemove: true
              });
            }
            return t;
          }),
          queuedToasts: __spreadProps(__spreadValues({}, state.queuedToasts), {
            [toast.dedupeKey]: toast
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
const InternalToastProvider = ({ children }) => {
  const [{ toasts }, dispatch] = React.useReducer(reducer, {
    toasts: [],
    queuedToasts: {}
  });
  const addToast = React.useCallback((toast) => dispatch({ type: QUEUE_TOAST, toast }), []);
  const removeToast = React.useCallback((dedupeKey) => dispatch({ type: REMOVE_TOAST, dedupeKey }), []);
  return /* @__PURE__ */ React__default["default"].createElement(ToastControllerContext.Provider, {
    value: addToast
  }, children, /* @__PURE__ */ React__default["default"].createElement(ToastPortal, null, /* @__PURE__ */ React__default["default"].createElement(Toaster, {
    toasts,
    removeToast
  })));
};
const ToastProvider = ({ children }) => {
  const currentContext = React.useContext(ToastControllerContext);
  if (currentContext !== null) {
    return /* @__PURE__ */ React__default["default"].createElement(React.Fragment, null, children);
  }
  return /* @__PURE__ */ React__default["default"].createElement(InternalToastProvider, null, children);
};
const ToastPortal = ({ children }) => {
  const [toastElement, setElement] = React.useState(null);
  React.useEffect(() => {
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
  return /* @__PURE__ */ React__default["default"].createElement(BraidPortal, {
    container: toastElement
  }, children);
};
const useToast = () => {
  const treatTheme = useTheme();
  const { vanillaTheme } = index.useBraidTheme();
  const addToast = React.useContext(ToastControllerContext);
  if (addToast === null) {
    throw new Error('No "ToastProvider" configured');
  }
  return React.useCallback((toast) => {
    var _a;
    const id = `${toastCounter++}`;
    const dedupeKey = (_a = toast.key) != null ? _a : id;
    addToast(__spreadProps(__spreadValues({}, toast), {
      treatTheme,
      vanillaTheme,
      id,
      dedupeKey,
      shouldRemove: false
    }));
  }, [treatTheme, vanillaTheme, addToast]);
};
const StaticTooltipContext = React.createContext(false);
const TooltipTextDefaultsProvider = ({
  children
}) => {
  const themeName = useThemeName();
  return /* @__PURE__ */ React__default["default"].createElement(index.DefaultTextPropsProvider, {
    size: themeName === "docs" ? "small" : void 0,
    weight: "medium"
  }, children);
};
const borderRadius = "xlarge";
const TooltipContent = ({
  children,
  opacity,
  arrowProps
}) => /* @__PURE__ */ React__default["default"].createElement(Box, {
  display: "flex",
  position: "relative",
  transition: "fast",
  opacity: opacity === 0 ? 0 : void 0,
  className: opacity === 0 ? componentsTooltipRenderer_TooltipRenderer_cjs_css_js.verticalOffsetBeforeEntrance : componentsTooltipRenderer_TooltipRenderer_cjs_css_js.translateZ0
}, /* @__PURE__ */ React__default["default"].createElement(Box, {
  boxShadow: "large",
  borderRadius,
  className: [
    componentsTooltipRenderer_TooltipRenderer_cjs_css_js.background,
    componentsTooltipRenderer_TooltipRenderer_cjs_css_js.maxWidth,
    componentsTooltipRenderer_TooltipRenderer_cjs_css_js.translateZ0,
    componentsTooltipRenderer_TooltipRenderer_cjs_css_js.padding
  ]
}, /* @__PURE__ */ React__default["default"].createElement(index.BackgroundProvider, {
  value: "UNKNOWN_DARK"
}, /* @__PURE__ */ React__default["default"].createElement(TooltipTextDefaultsProvider, null, /* @__PURE__ */ React__default["default"].createElement(Box, {
  position: "relative",
  zIndex: 1
}, children), /* @__PURE__ */ React__default["default"].createElement(Box, __spreadProps(__spreadValues({}, arrowProps), {
  borderRadius,
  className: [componentsTooltipRenderer_TooltipRenderer_cjs_css_js.arrow, componentsTooltipRenderer_TooltipRenderer_cjs_css_js.background]
}))))));
const validPlacements = ["top", "bottom"];
const TooltipRenderer = ({
  id,
  tooltip,
  placement = "top",
  children
}) => {
  assert__default["default"](validPlacements.includes(placement), `The 'placement' prop must be one of the following: ${validPlacements.join(", ")}`);
  const isStatic = React.useContext(StaticTooltipContext);
  const [controlledVisible, setControlledVisible] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0);
  const { grid, space } = useSpace();
  const {
    visible,
    getTooltipProps,
    setTooltipRef,
    tooltipRef,
    setTriggerRef,
    triggerRef,
    getArrowProps
  } = reactPopperTooltip.usePopperTooltip({
    placement,
    trigger: [isMobile__default["default"]() ? "click" : "hover", "focus"],
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
  React.useEffect(() => {
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
  React.useEffect(() => {
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
  assert__default["default"](React.useEffect(() => {
    if (tooltipRef) {
      assert__default["default"](tooltipRef.querySelectorAll("button, input, select, textarea, a").length === 0, "For accessibility reasons, tooltips must not contain interactive elements");
    }
  }, [tooltipRef]) === void 0);
  React.useEffect(() => {
    if (!tooltipRef || !visible) {
      return setOpacity(0);
    }
    const timeout = setTimeout(() => setOpacity(100), isMobile__default["default"]() ? 0 : 250);
    return () => clearTimeout(timeout);
  }, [tooltipRef, visible]);
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, children({
    triggerProps: {
      tabIndex: 0,
      ref: setTriggerRef,
      "aria-describedby": id
    }
  }), triggerRef && /* @__PURE__ */ React__default["default"].createElement(BraidPortal, null, /* @__PURE__ */ React__default["default"].createElement("div", __spreadValues({
    id,
    role: "tooltip",
    hidden: !visible ? true : void 0,
    className: cssAtoms_atoms_cjs_js.atoms({
      reset: "div",
      zIndex: "notification",
      display: triggerRef && visible ? void 0 : "none"
    })
  }, visible ? getTooltipProps({
    ref: setTooltipRef
  }) : null), /* @__PURE__ */ React__default["default"].createElement(TooltipContent, {
    opacity,
    arrowProps: getArrowProps()
  }, tooltip))));
};
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.Actions = Actions;
exports.Alert = Alert;
exports.Autosuggest = Autosuggest;
exports.BackgroundProvider = BackgroundProvider;
exports.Badge = Badge;
exports.Box = Box;
exports.BoxRenderer = BoxRenderer;
exports.BraidPortal = BraidPortal;
exports.BraidProvider = BraidProvider;
exports.Bullet = Bullet;
exports.BulletList = BulletList;
exports.Button = Button;
exports.ButtonLink = ButtonLink$1;
exports.ButtonRenderer = ButtonRenderer;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.CheckboxStandalone = CheckboxStandalone;
exports.Column = Column;
exports.Columns = Columns;
exports.ContentBlock = ContentBlock;
exports.Dialog = Dialog;
exports.Disclosure = Disclosure;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.Dropdown = Dropdown;
exports.FieldLabel = FieldLabel;
exports.FieldMessage = FieldMessage;
exports.Heading = Heading;
exports.Hidden = Hidden;
exports.HiddenVisually = HiddenVisually;
exports.IconAdd = IconAdd;
exports.IconBookmark = IconBookmark;
exports.IconCaution = IconCaution;
exports.IconChevron = IconChevron;
exports.IconClear = IconClear;
exports.IconCompany = IconCompany;
exports.IconCompose = IconCompose;
exports.IconCopy = IconCopy;
exports.IconCreditCard = IconCreditCard;
exports.IconCritical = IconCritical;
exports.IconDate = IconDate;
exports.IconDelete = IconDelete;
exports.IconDesktop = IconDesktop;
exports.IconDocument = IconDocument;
exports.IconDocumentBroken = IconDocumentBroken;
exports.IconDownload = IconDownload;
exports.IconEdit = IconEdit;
exports.IconEducation = IconEducation;
exports.IconFilter = IconFilter;
exports.IconFlag = IconFlag;
exports.IconGrid = IconGrid;
exports.IconHeart = IconHeart;
exports.IconHelp = IconHelp;
exports.IconHistory = IconHistory;
exports.IconHome = IconHome;
exports.IconImage = IconImage;
exports.IconInfo = IconInfo;
exports.IconInvoice = IconInvoice;
exports.IconLanguage = IconLanguage;
exports.IconLink = IconLink;
exports.IconLinkBroken = IconLinkBroken;
exports.IconList = IconList;
exports.IconLocation = IconLocation;
exports.IconMail = IconMail;
exports.IconMinus = IconMinus;
exports.IconMobile = IconMobile;
exports.IconMoney = IconMoney;
exports.IconNewWindow = IconNewWindow;
exports.IconNote = IconNote;
exports.IconNotification = IconNotification;
exports.IconOverflow = IconOverflow;
exports.IconPeople = IconPeople;
exports.IconPersonAdd = IconPersonAdd;
exports.IconPersonVerified = IconPersonVerified;
exports.IconPhone = IconPhone;
exports.IconPositive = IconPositive;
exports.IconPrint = IconPrint;
exports.IconProfile = IconProfile;
exports.IconPromote = IconPromote;
exports.IconRecommended = IconRecommended;
exports.IconRefresh = IconRefresh;
exports.IconResume = IconResume;
exports.IconSearch = IconSearch;
exports.IconSecurity = IconSecurity;
exports.IconSend = IconSend;
exports.IconSent = IconSent;
exports.IconSettings = IconSettings;
exports.IconShare = IconShare;
exports.IconSocialFacebook = IconSocialFacebook;
exports.IconSocialGitHub = IconSocialGitHub;
exports.IconSocialInstagram = IconSocialInstagram;
exports.IconSocialLinkedIn = IconSocialLinkedIn;
exports.IconSocialMedium = IconSocialMedium;
exports.IconSocialTwitter = IconSocialTwitter;
exports.IconStar = IconStar;
exports.IconStatistics = IconStatistics;
exports.IconSubCategory = IconSubCategory;
exports.IconTag = IconTag;
exports.IconThumb = IconThumb;
exports.IconTick = IconTick;
exports.IconTime = IconTime;
exports.IconUpload = IconUpload;
exports.IconVideo = IconVideo;
exports.IconVisibility = IconVisibility;
exports.IconWorkExperience = IconWorkExperience;
exports.Inline = Inline;
exports.Link = Link;
exports.List = List;
exports.Loader = Loader;
exports.MenuItem = MenuItem;
exports.MenuItemCheckbox = MenuItemCheckbox;
exports.MenuItemDivider = MenuItemDivider;
exports.MenuItemLink = MenuItemLink;
exports.MenuRenderer = MenuRenderer;
exports.MonthPicker = MonthPicker;
exports.Notice = Notice;
exports.OverflowMenu = OverflowMenu;
exports.Pagination = Pagination;
exports.PasswordField = PasswordField;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.RadioItem = RadioItem;
exports.Rating = Rating;
exports.Secondary = Secondary;
exports.Stack = Stack;
exports.Strong = Strong;
exports.Tab = Tab;
exports.TabPanel = TabPanel;
exports.TabPanels = TabPanels;
exports.Tabs = Tabs;
exports.TabsProvider = TabsProvider;
exports.Tag = Tag;
exports.Text = Text;
exports.TextDropdown = TextDropdown;
exports.TextField = TextField;
exports.TextLink = TextLink;
exports.TextLinkButton = TextLinkButton;
exports.TextLinkRenderer = TextLinkRenderer;
exports.Textarea = Textarea;
exports.ThemeNameConsumer = ThemeNameConsumer;
exports.Tiles = Tiles;
exports.ToastProvider = ToastProvider;
exports.Toggle = Toggle;
exports.TooltipRenderer = TooltipRenderer;
exports.filterSuggestions = filterSuggestions;
exports.makeLinkComponent = makeLinkComponent;
exports.useBreakpoint = useBreakpoint;
exports.useColor = useColor;
exports.useResponsiveValue = useResponsiveValue;
exports.useSpace = useSpace;
exports.useThemeName = useThemeName;
exports.useToast = useToast;
