"use strict";
var polished = require("polished");
var themesDocs_tokens_cjs_js = require("../themes-docs/tokens.cjs.js");
var merge = require("lodash/merge");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var merge__default = /* @__PURE__ */ _interopDefaultLegacy(merge);
const makeTokens = ({
  name,
  displayName,
  brand,
  brandAccent: brandAccent2,
  brandAccentActive,
  brandAccentHover,
  brandAccentSoft: brandAccentSoft2,
  brandAccentSoftActive,
  brandAccentSoftHover,
  tokenOverrides = {}
}) => {
  const formAccent = themesDocs_tokens_cjs_js.palette.indigo["500"];
  const critical = themesDocs_tokens_cjs_js.palette.red["700"];
  const focus = polished.rgba(themesDocs_tokens_cjs_js.palette.indigo["300"], 0.7);
  const white = "#fff";
  const tokens2 = {
    name,
    displayName,
    typography: {
      fontFamily: 'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      fontMetrics: {
        capHeight: 1456,
        ascent: 1900,
        descent: -500,
        lineGap: 0,
        unitsPerEm: 2048
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        strong: 700
      },
      heading: {
        weight: {
          weak: "regular",
          regular: "medium"
        },
        level: {
          "1": {
            mobile: {
              fontSize: 28,
              rows: 9
            },
            tablet: {
              fontSize: 42,
              rows: 11
            }
          },
          "2": {
            mobile: {
              fontSize: 21,
              rows: 8
            },
            tablet: {
              fontSize: 28,
              rows: 9
            }
          },
          "3": {
            mobile: {
              fontSize: 21,
              rows: 7
            },
            tablet: {
              fontSize: 21,
              rows: 7
            }
          },
          "4": {
            mobile: {
              fontSize: 18,
              rows: 7
            },
            tablet: {
              fontSize: 18,
              rows: 7
            }
          }
        }
      },
      text: {
        xsmall: {
          mobile: {
            fontSize: 12,
            rows: 5
          },
          tablet: {
            fontSize: 12,
            rows: 5
          }
        },
        small: {
          mobile: {
            fontSize: 14,
            rows: 5
          },
          tablet: {
            fontSize: 14,
            rows: 5
          }
        },
        standard: {
          mobile: {
            fontSize: 16,
            rows: 6
          },
          tablet: {
            fontSize: 16,
            rows: 6
          }
        },
        large: {
          mobile: {
            fontSize: 18,
            rows: 7
          },
          tablet: {
            fontSize: 18,
            rows: 7
          }
        }
      }
    },
    contentWidth: {
      xsmall: 400,
      small: 660,
      medium: 940,
      large: 1280
    },
    grid: 4,
    touchableSize: 11,
    space: {
      gutter: 6,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 5,
      large: 8,
      xlarge: 12,
      xxlarge: 24
    },
    transforms: {
      touchable: "scale(0.95)"
    },
    transitions: {
      fast: "transform .125s ease, opacity .125s ease",
      touchable: "transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)"
    },
    border: {
      radius: {
        standard: "4px",
        large: "6px",
        xlarge: "10px"
      },
      width: {
        standard: 1,
        large: 2
      },
      color: {
        brandAccent: brandAccent2,
        caution: themesDocs_tokens_cjs_js.palette.yellow["500"],
        cautionLight: themesDocs_tokens_cjs_js.palette.yellow["200"],
        critical,
        criticalLight: themesDocs_tokens_cjs_js.palette.red["200"],
        field: themesDocs_tokens_cjs_js.palette.grey["400"],
        focus,
        formAccent,
        formHover: themesDocs_tokens_cjs_js.palette.indigo["500"],
        info: themesDocs_tokens_cjs_js.palette.blue["700"],
        infoLight: themesDocs_tokens_cjs_js.palette.blue["200"],
        positive: themesDocs_tokens_cjs_js.palette.mint["700"],
        positiveLight: themesDocs_tokens_cjs_js.palette.mint["200"],
        promote: themesDocs_tokens_cjs_js.palette.purple["700"],
        promoteLight: themesDocs_tokens_cjs_js.palette.purple["200"],
        standard: themesDocs_tokens_cjs_js.palette.grey["200"],
        standardInverted: white
      }
    },
    focusRingSize: 3,
    shadows: {
      small: [
        `0 2px 4px 0px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 2px 2px -2px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 4px 4px -4px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.2)}`
      ].join(", "),
      medium: [
        `0 2px 4px 0px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 8px 8px -4px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 12px 12px -8px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.2)}`
      ].join(", "),
      large: [
        `0 2px 4px 0px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 12px 12px -4px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.1)}`,
        `0 20px 20px -12px ${polished.rgba(themesDocs_tokens_cjs_js.palette.grey["800"], 0.2)}`
      ].join(", ")
    },
    color: {
      foreground: {
        brandAccent: brandAccent2,
        caution: themesDocs_tokens_cjs_js.palette.yellow["900"],
        critical,
        formAccent,
        info: themesDocs_tokens_cjs_js.palette.blue["700"],
        link: formAccent,
        linkHover: formAccent,
        linkVisited: themesDocs_tokens_cjs_js.palette.purple["700"],
        neutral: themesDocs_tokens_cjs_js.palette.grey["700"],
        neutralInverted: white,
        positive: themesDocs_tokens_cjs_js.palette.mint["700"],
        promote: themesDocs_tokens_cjs_js.palette.purple["700"],
        rating: "#f57c00",
        secondary: themesDocs_tokens_cjs_js.palette.grey["500"],
        secondaryInverted: polished.rgba("#fff", 0.65)
      },
      background: {
        body: themesDocs_tokens_cjs_js.palette.grey["50"],
        brand,
        brandAccent: brandAccent2,
        brandAccentActive,
        brandAccentHover,
        brandAccentSoft: brandAccentSoft2,
        brandAccentSoftActive,
        brandAccentSoftHover,
        card: white,
        caution: themesDocs_tokens_cjs_js.palette.yellow["500"],
        cautionLight: themesDocs_tokens_cjs_js.palette.yellow["100"],
        critical,
        criticalActive: polished.darken(0.05, critical),
        criticalHover: polished.saturate(0.1, polished.lighten(0.05, critical)),
        criticalLight: themesDocs_tokens_cjs_js.palette.red["100"],
        criticalSoft: themesDocs_tokens_cjs_js.palette.red["50"],
        criticalSoftActive: polished.darken(0.05, themesDocs_tokens_cjs_js.palette.red["50"]),
        criticalSoftHover: polished.darken(0.025, themesDocs_tokens_cjs_js.palette.red["50"]),
        formAccent,
        formAccentActive: polished.darken(0.05, formAccent),
        formAccentDisabled: themesDocs_tokens_cjs_js.palette.grey["100"],
        formAccentHover: polished.saturate(0.5, polished.lighten(0.075, formAccent)),
        formAccentSoft: themesDocs_tokens_cjs_js.palette.indigo["50"],
        formAccentSoftActive: polished.darken(0.05, themesDocs_tokens_cjs_js.palette.indigo["50"]),
        formAccentSoftHover: polished.darken(0.025, themesDocs_tokens_cjs_js.palette.indigo["50"]),
        info: themesDocs_tokens_cjs_js.palette.blue["700"],
        infoLight: themesDocs_tokens_cjs_js.palette.blue["100"],
        input: white,
        inputDisabled: themesDocs_tokens_cjs_js.palette.grey["50"],
        neutral: themesDocs_tokens_cjs_js.palette.grey["700"],
        neutralLight: themesDocs_tokens_cjs_js.palette.grey["100"],
        positive: themesDocs_tokens_cjs_js.palette.mint["700"],
        positiveLight: themesDocs_tokens_cjs_js.palette.mint["100"],
        promote: themesDocs_tokens_cjs_js.palette.purple["700"],
        promoteLight: themesDocs_tokens_cjs_js.palette.purple["100"],
        selection: themesDocs_tokens_cjs_js.palette.indigo["50"]
      }
    }
  };
  return merge__default["default"](tokens2, tokenOverrides);
};
const brandAccent = themesDocs_tokens_cjs_js.palette.seekPink["500"];
const brandAccentSoft = themesDocs_tokens_cjs_js.palette.seekPink["50"];
var tokens = makeTokens({
  name: "apac",
  displayName: "APAC",
  brand: themesDocs_tokens_cjs_js.palette.seekBlue["500"],
  brandAccent,
  brandAccentActive: polished.darken(0.05, brandAccent),
  brandAccentHover: polished.lighten(0.05, brandAccent),
  brandAccentSoft,
  brandAccentSoftActive: polished.darken(0.05, brandAccentSoft),
  brandAccentSoftHover: polished.darken(0.025, brandAccentSoft)
});
exports.makeTokens = makeTokens;
exports.tokens = tokens;
