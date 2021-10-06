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
var React = require("react");
var server$1 = require("react-dom/server");
require("braid-design-system/reset");
var reactRouterDom = require("react-router-dom");
var braidDesignSystem = require("braid-design-system");
var themes = require("braid-design-system/themes");
var fileScope = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var server = require("react-router-dom/server");
var require$$0 = require("crypto");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var require$$0__default = /* @__PURE__ */ _interopDefaultLegacy(require$$0);
const Link = reactRouterDom.Link;
const crackleLink = (href) => href;
const createRouteData = (contextCallback) => contextCallback;
const CustomLink = braidDesignSystem.makeLinkComponent((_a, ref) => {
  var _b = _a, { href } = _b, restProps = __objRest(_b, ["href"]);
  return href[0] === "/" ? /* @__PURE__ */ React__default["default"].createElement(Link, __spreadValues({
    ref,
    to: href
  }, restProps)) : /* @__PURE__ */ React__default["default"].createElement("a", __spreadValues({
    ref,
    href
  }, restProps));
});
const App = ({ children, routeMetadata }) => {
  const navLinks = Object.entries(routeMetadata).map(([route, metadata]) => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
    key: route
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
    key: route,
    weight: metadata.isDeprecated ? "weak" : "regular",
    href: route
  }, metadata.componentName)));
  return /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.BraidProvider, {
    theme: themes.apac,
    linkComponent: CustomLink
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
    space: "medium"
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, {
    tone: "promote"
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.ContentBlock, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Box, {
    display: "flex",
    justifyContent: "spaceBetween"
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Header"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Inline, {
    space: "small"
  }, navLinks)))), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.ContentBlock, null, children)));
};
const TestAlert = () => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Alert, {
  tone: "positive"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Working 7!"));
const routeData$4 = createRouteData(() => ({
  route: "/details",
  globalMetadata: {
    isDeprecated: true,
    componentName: "Details"
  }
}));
const Details = () => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "medium"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Details page 2"), /* @__PURE__ */ React__default["default"].createElement(TestAlert, null), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
  href: "/"
}, "Home"))));
var __glob_0_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  routeData: routeData$4,
  "default": Details
});
const add = (a, b) => a - b;
fileScope.setFileScope("packages/single-entry-library/src/components/styles.css.ts", "crackle-fixtures-monorepo");
const redBorder = css.style({
  border: "5px solid red",
  margin: add(10, 5)
});
fileScope.endFileScope();
const JobSummary$1 = ({ title, isNew }) => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Box, {
  className: redBorder,
  id: "CUSTOM_STYLED_BOX_COMPONENT"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "gutter"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Columns, {
  space: "gutter"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Column, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "small"
}, isNew && /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Badge, {
  tone: "positive"
}, "New"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Heading, {
  level: "3"
}, title), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Inline, {
  space: "small"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  tone: "secondary"
}, "Braid Design Pty Ltd"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Rating, {
  rating: add(2, 1)
})))), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Column, {
  width: "content"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconBookmark, null))), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "small"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconLocation, null), " Melbourne"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconTag, null), " Information Technology"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconMoney, null), " 150k+")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Long description of card details providing more information."), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "xsmall",
  tone: "secondary"
}, "2d ago"))));
const routeData$3 = createRouteData(() => ({
  route: "/",
  globalMetadata: {
    isDeprecated: false,
    componentName: "Home"
  }
}));
function Home() {
  return /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
    space: "medium"
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Home page"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
    href: "/details"
  }, "Details")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
    href: crackleLink("/remote/page")
  }, "Remote page")), /* @__PURE__ */ React__default["default"].createElement(JobSummary$1, {
    isNew: true,
    title: "Red bordered job"
  })));
}
var __glob_0_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  routeData: routeData$3,
  "default": Home
});
const routeData$2 = createRouteData(() => ({
  route: "/test",
  globalMetadata: {
    isDeprecated: false,
    componentName: "Test"
  }
}));
const TestPage = () => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Alert, {
  tone: "promote"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Test page")));
var __glob_0_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  routeData: routeData$2,
  "default": TestPage
});
const routeData$1 = createRouteData(() => ({
  route: "/extra",
  globalMetadata: {
    isDeprecated: false,
    componentName: "ExtraPage"
  }
}));
function ExtraPage() {
  return /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
    space: "medium"
  }, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Extra page"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
    href: "/details"
  }, "Details")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.TextLink, {
    href: crackleLink("/")
  }, "Home"))));
}
var __glob_0_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  routeData: routeData$1,
  "default": ExtraPage
});
const JobSummary = ({ title, isNew }) => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "gutter"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Columns, {
  space: "gutter"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Column, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "small"
}, isNew && /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Badge, {
  tone: "positive"
}, "New"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Heading, {
  level: "3"
}, title), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Inline, {
  space: "small"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  tone: "secondary"
}, "Braid Design Pty Ltd"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Rating, {
  rating: 4.5
})))), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Column, {
  width: "content"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconBookmark, null))), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "small"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconLocation, null), " Melbourne"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconTag, null), " Information Technology"), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "small",
  tone: "secondary"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.IconMoney, null), " 150k+")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Long description of card details providing more information."), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, {
  size: "xsmall",
  tone: "secondary"
}, "2d ago")));
fileScope.setFileScope("site/src/components/RemotePage/components/test.css.ts", "crackle-fixtures-monorepo");
const background = css.style({
  background: "deeppink"
});
fileScope.endFileScope();
const RemotePageContent = () => /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Card, null, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Stack, {
  space: "medium"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Alert, {
  tone: "info"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "This page is outside the pages directory")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Alert, {
  tone: "positive"
}, /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Text, null, "Remote page routing works!")), /* @__PURE__ */ React__default["default"].createElement(braidDesignSystem.Box, {
  padding: "medium",
  className: background
}, "Special box"), /* @__PURE__ */ React__default["default"].createElement(JobSummary, {
  isNew: true,
  title: "Test job"
})));
const routeData = createRouteData(() => ({
  route: "/remote/page",
  globalMetadata: {
    isDeprecated: false,
    componentName: "Remote page"
  }
}));
const RemotePage = () => /* @__PURE__ */ React__default["default"].createElement(RemotePageContent, null);
var __glob_0_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  routeData,
  "default": RemotePage
});
var nodePageModules = { "/site/src/pages/details.page.tsx": __glob_0_0, "/site/src/pages/home.page.tsx": __glob_0_1, "/site/src/pages/testPage.page.tsx": __glob_0_2, "/site/src/components/RemotePage/ErrorPage.page.tsx": __glob_0_3, "/site/src/components/RemotePage/RemotePage.page.tsx": __glob_0_4 };
var randombytes = require$$0__default["default"].randomBytes;
var randomBytes = randombytes;
var UID_LENGTH = 16;
var UID = generateUID();
var PLACE_HOLDER_REGEXP = new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + UID + '-(\\d+)__@"', "g");
var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
var IS_PURE_FUNCTION = /function.*?\(/;
var IS_ARROW_FUNCTION = /.*?=>.*?/;
var UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;
var RESERVED_SYMBOLS = ["*", "async"];
var ESCAPED_CHARS = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escapeUnsafeChars(unsafeChar) {
  return ESCAPED_CHARS[unsafeChar];
}
function generateUID() {
  var bytes = randomBytes(UID_LENGTH);
  var result = "";
  for (var i = 0; i < UID_LENGTH; ++i) {
    result += bytes[i].toString(16);
  }
  return result;
}
function deleteFunctions(obj) {
  var functionKeys = [];
  for (var key in obj) {
    if (typeof obj[key] === "function") {
      functionKeys.push(key);
    }
  }
  for (var i = 0; i < functionKeys.length; i++) {
    delete obj[functionKeys[i]];
  }
}
var serializeJavascript = function serialize(obj, options) {
  options || (options = {});
  if (typeof options === "number" || typeof options === "string") {
    options = { space: options };
  }
  var functions = [];
  var regexps = [];
  var dates = [];
  var maps = [];
  var sets = [];
  var arrays = [];
  var undefs = [];
  var infinities = [];
  var bigInts = [];
  var urls = [];
  function replacer(key, value) {
    if (options.ignoreFunction) {
      deleteFunctions(value);
    }
    if (!value && value !== void 0) {
      return value;
    }
    var origValue = this[key];
    var type = typeof origValue;
    if (type === "object") {
      if (origValue instanceof RegExp) {
        return "@__R-" + UID + "-" + (regexps.push(origValue) - 1) + "__@";
      }
      if (origValue instanceof Date) {
        return "@__D-" + UID + "-" + (dates.push(origValue) - 1) + "__@";
      }
      if (origValue instanceof Map) {
        return "@__M-" + UID + "-" + (maps.push(origValue) - 1) + "__@";
      }
      if (origValue instanceof Set) {
        return "@__S-" + UID + "-" + (sets.push(origValue) - 1) + "__@";
      }
      if (origValue instanceof Array) {
        var isSparse = origValue.filter(function() {
          return true;
        }).length !== origValue.length;
        if (isSparse) {
          return "@__A-" + UID + "-" + (arrays.push(origValue) - 1) + "__@";
        }
      }
      if (origValue instanceof URL) {
        return "@__L-" + UID + "-" + (urls.push(origValue) - 1) + "__@";
      }
    }
    if (type === "function") {
      return "@__F-" + UID + "-" + (functions.push(origValue) - 1) + "__@";
    }
    if (type === "undefined") {
      return "@__U-" + UID + "-" + (undefs.push(origValue) - 1) + "__@";
    }
    if (type === "number" && !isNaN(origValue) && !isFinite(origValue)) {
      return "@__I-" + UID + "-" + (infinities.push(origValue) - 1) + "__@";
    }
    if (type === "bigint") {
      return "@__B-" + UID + "-" + (bigInts.push(origValue) - 1) + "__@";
    }
    return value;
  }
  function serializeFunc(fn) {
    var serializedFn = fn.toString();
    if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
      throw new TypeError("Serializing native function: " + fn.name);
    }
    if (IS_PURE_FUNCTION.test(serializedFn)) {
      return serializedFn;
    }
    if (IS_ARROW_FUNCTION.test(serializedFn)) {
      return serializedFn;
    }
    var argsStartsAt = serializedFn.indexOf("(");
    var def = serializedFn.substr(0, argsStartsAt).trim().split(" ").filter(function(val) {
      return val.length > 0;
    });
    var nonReservedSymbols = def.filter(function(val) {
      return RESERVED_SYMBOLS.indexOf(val) === -1;
    });
    if (nonReservedSymbols.length > 0) {
      return (def.indexOf("async") > -1 ? "async " : "") + "function" + (def.join("").indexOf("*") > -1 ? "*" : "") + serializedFn.substr(argsStartsAt);
    }
    return serializedFn;
  }
  if (options.ignoreFunction && typeof obj === "function") {
    obj = void 0;
  }
  if (obj === void 0) {
    return String(obj);
  }
  var str;
  if (options.isJSON && !options.space) {
    str = JSON.stringify(obj);
  } else {
    str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
  }
  if (typeof str !== "string") {
    return String(str);
  }
  if (options.unsafe !== true) {
    str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
  }
  if (functions.length === 0 && regexps.length === 0 && dates.length === 0 && maps.length === 0 && sets.length === 0 && arrays.length === 0 && undefs.length === 0 && infinities.length === 0 && bigInts.length === 0 && urls.length === 0) {
    return str;
  }
  return str.replace(PLACE_HOLDER_REGEXP, function(match, backSlash, type, valueIndex) {
    if (backSlash) {
      return match;
    }
    if (type === "D") {
      return 'new Date("' + dates[valueIndex].toISOString() + '")';
    }
    if (type === "R") {
      return "new RegExp(" + serialize(regexps[valueIndex].source) + ', "' + regexps[valueIndex].flags + '")';
    }
    if (type === "M") {
      return "new Map(" + serialize(Array.from(maps[valueIndex].entries()), options) + ")";
    }
    if (type === "S") {
      return "new Set(" + serialize(Array.from(sets[valueIndex].values()), options) + ")";
    }
    if (type === "A") {
      return "Array.prototype.slice.call(" + serialize(Object.assign({ length: arrays[valueIndex].length }, arrays[valueIndex]), options) + ")";
    }
    if (type === "U") {
      return "undefined";
    }
    if (type === "I") {
      return infinities[valueIndex];
    }
    if (type === "B") {
      return 'BigInt("' + bigInts[valueIndex] + '")';
    }
    if (type === "L") {
      return 'new URL("' + urls[valueIndex].toString() + '")';
    }
    var fn = functions[valueIndex];
    return serializeFunc(fn);
  });
};
const size = 60;
const animationStyles = `
.lds-facebook {
  display: inline-block;
  position: relative;
  width: ${size}px;
  height: ${size}px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: ${size * 0.1}px;
  width: ${size * 0.2}px;
  background: rgba(2,2,2,0.6);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: ${size * 0.1}px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: ${size * 0.4}px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: ${size * 0.7}px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: ${size * 0.1}px;
    height: ${size * 0.8}px;
  }
  50%, 100% {
    top: ${size * 0.3}px;
    height: ${size * 0.4}px;
  }
}
`;
const LoadingIcon = () => /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("style", {
  "data-module-loading-icon": "style",
  type: "text/css",
  dangerouslySetInnerHTML: {
    __html: animationStyles
  }
}), /* @__PURE__ */ React__default["default"].createElement("div", {
  "data-module-loading-icon": "html",
  style: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    padding: "10px",
    zIndex: 1e3,
    display: "flex",
    justifyContent: "center"
  }
}, /* @__PURE__ */ React__default["default"].createElement("div", {
  className: "lds-facebook"
}, /* @__PURE__ */ React__default["default"].createElement("div", null), /* @__PURE__ */ React__default["default"].createElement("div", null), /* @__PURE__ */ React__default["default"].createElement("div", null))));
function mapValues(input, fn) {
  const result = {};
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      result[key] = fn(input[key]);
    }
  }
  return result;
}
const extractRouteMetadata = (routeMap) => mapValues(routeMap, ({ globalMetadata }) => globalMetadata != null ? globalMetadata : {});
const Page = ({
  path,
  headTags,
  bodyTags,
  pageData,
  criticalCssPlaceholder,
  children
}) => {
  const metadata = extractRouteMetadata(pageData.routeMap);
  return /* @__PURE__ */ React__default["default"].createElement("html", null, /* @__PURE__ */ React__default["default"].createElement("head", null, headTags), /* @__PURE__ */ React__default["default"].createElement("body", null, criticalCssPlaceholder != null ? criticalCssPlaceholder : null, /* @__PURE__ */ React__default["default"].createElement(LoadingIcon, null), /* @__PURE__ */ React__default["default"].createElement("div", {
    id: "app"
  }, /* @__PURE__ */ React__default["default"].createElement(server.StaticRouter, {
    location: path
  }, /* @__PURE__ */ React__default["default"].createElement(App, {
    routeMetadata: metadata
  }, children))), /* @__PURE__ */ React__default["default"].createElement("script", {
    id: "__CRACKLE_PAGE_DATA",
    type: "application/json",
    dangerouslySetInnerHTML: {
      __html: serializeJavascript(pageData, { isJSON: true })
    }
  }), bodyTags));
};
const createRouteMap = () => {
  const routeMap = {};
  for (const [pageName, { routeData: routeData2 }] of Object.entries(nodePageModules)) {
    const { route, globalMetadata } = routeData2();
    routeMap[route.toLowerCase()] = { pageName, globalMetadata };
  }
  return routeMap;
};
const getImportsFromManifest = (manifest, pageName) => {
  const scriptImports = new Set();
  const cssImports = new Set();
  const getImportsForFilename = (fileName) => {
    var _a, _b;
    if (!fileName) {
      throw new Error("Filename undefined");
    }
    const manifestEntry = manifest[fileName];
    for (const css2 of (_a = manifestEntry.css) != null ? _a : []) {
      cssImports.add(css2);
    }
    scriptImports.add(manifestEntry.file);
    for (const staticImport of (_b = manifestEntry.imports) != null ? _b : []) {
      getImportsForFilename(staticImport);
    }
  };
  const manifestChunks = Object.values(manifest);
  const entry = manifestChunks.find((chunk) => chunk.isEntry);
  getImportsForFilename(entry.src);
  if (!entry.dynamicImports) {
    throw new Error("No dynamic imports on entry");
  }
  const pageImport = entry.dynamicImports.find((importFileName) => pageName.includes(importFileName));
  getImportsForFilename(pageImport);
  return { scriptImports, cssImports, entry: entry.file };
};
const generateScriptPreloadTags = (scriptImports, publicPath) => Array.from(scriptImports).map((scriptImport) => /* @__PURE__ */ React__default["default"].createElement("link", {
  rel: "modulepreload",
  href: publicPath.concat(scriptImport),
  key: scriptImport
}));
const generateCssTags = (cssImports, publicPath) => Array.from(cssImports).map((css2) => /* @__PURE__ */ React__default["default"].createElement("link", {
  rel: "stylesheet",
  href: publicPath.concat(css2),
  key: css2
}));
const renderAllPages = async (manifest, publicPath, dispatchEvent) => {
  dispatchEvent({
    type: "RENDER_PAGES_STARTED",
    totalPages: Object.keys(nodePageModules).length
  });
  const pageModules = [];
  for (const [pageName, pageModule] of Object.entries(nodePageModules)) {
    const { route } = pageModule.routeData();
    const { scriptImports, cssImports, entry } = getImportsFromManifest(manifest, pageName);
    const headTags = [
      ...generateCssTags(cssImports, publicPath),
      ...generateScriptPreloadTags(scriptImports, publicPath)
    ];
    const html = server$1.renderToString(/* @__PURE__ */ React__default["default"].createElement(Page, {
      path: route,
      headTags,
      bodyTags: /* @__PURE__ */ React__default["default"].createElement("script", {
        src: publicPath.concat(entry),
        type: "module"
      }),
      pageData: { routeMap: createRouteMap() }
    }, React__default["default"].createElement(pageModule.default)));
    pageModules.push({ route, html });
    dispatchEvent({ type: "RENDERED_PAGE" });
  }
  return pageModules;
};
exports.renderAllPages = renderAllPages;
