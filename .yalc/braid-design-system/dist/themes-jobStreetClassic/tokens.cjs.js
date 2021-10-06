"use strict";
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
require("../css-responsiveStyle.cjs.js");
var merge = require("lodash/merge");
var polished = require("polished");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var merge__default = /* @__PURE__ */ _interopDefaultLegacy(merge);
const getActiveColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.1, x) : polished.darken(0.05, x);
const getHoverColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.05, x) : polished.lighten(0.05, x);
const makeTokens = ({
  name,
  displayName,
  bodyBackground,
  brand: brand2,
  brandAccent,
  formAccent,
  tokenOverrides = {}
}) => {
  const white = "#fff";
  const blue2 = "#298EB9";
  const blue3 = "#94C9E0";
  const blue5 = "#EEF8FC";
  const alert = "#eb0000";
  const grey1 = "#333";
  const grey2 = "#666";
  const grey4 = "#ccc";
  const grey5 = "#eee";
  const candidate = "#0c4b85";
  const info2 = candidate;
  const promote = "#923f92";
  const positive = "#498307";
  const critical = alert;
  const criticalLight = "#fae3e3";
  const caution = "#ffc600";
  const focus = blue3;
  const link = blue2;
  const linkHover = blue2;
  const linkVisited = "#3f11a3";
  const selection = blue5;
  const secondary = grey2;
  const neutral = grey2;
  const tokens2 = {
    name,
    displayName,
    typography: {
      fontFamily: 'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
      webFont: "Muli",
      fontMetrics: {
        capHeight: 712,
        ascent: 1005,
        descent: -250,
        lineGap: 0,
        unitsPerEm: 1e3
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        strong: 700
      },
      heading: {
        weight: {
          weak: "regular",
          regular: "strong"
        },
        level: {
          "1": {
            mobile: {
              fontSize: 28,
              rows: 9
            },
            tablet: {
              fontSize: 34,
              rows: 11
            }
          },
          "2": {
            mobile: {
              fontSize: 24,
              rows: 8
            },
            tablet: {
              fontSize: 28,
              rows: 9
            }
          },
          "3": {
            mobile: {
              fontSize: 20,
              rows: 7
            },
            tablet: {
              fontSize: 24,
              rows: 8
            }
          },
          "4": {
            mobile: {
              fontSize: 18,
              rows: 6
            },
            tablet: {
              fontSize: 18,
              rows: 6
            }
          }
        }
      },
      text: {
        xsmall: {
          mobile: {
            fontSize: 12,
            rows: 4
          },
          tablet: {
            fontSize: 12,
            rows: 4
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
            rows: 6
          },
          tablet: {
            fontSize: 18,
            rows: 6
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
    touchableSize: 10,
    space: {
      gutter: 5,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 6,
      xlarge: 8,
      xxlarge: 16
    },
    transforms: {
      touchable: "scale(0.98)"
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
        brandAccent,
        caution,
        cautionLight: polished.mix(0.6, caution, utilsIndex_cjs_js.getLightVariant(caution)),
        critical,
        criticalLight: polished.mix(0.3, critical, criticalLight),
        field: grey4,
        focus,
        formAccent,
        formHover: formAccent,
        info: info2,
        infoLight: polished.mix(0.3, info2, utilsIndex_cjs_js.getLightVariant(info2)),
        positive,
        positiveLight: polished.mix(0.3, positive, utilsIndex_cjs_js.getLightVariant(positive)),
        promote,
        promoteLight: polished.mix(0.3, promote, utilsIndex_cjs_js.getLightVariant(promote)),
        standard: grey4,
        standardInverted: white
      }
    },
    focusRingSize: 2,
    shadows: {
      small: "0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)",
      medium: "0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)",
      large: "0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)"
    },
    color: {
      foreground: {
        brandAccent,
        caution: utilsIndex_cjs_js.getAccessibleVariant(caution, caution),
        critical: utilsIndex_cjs_js.getAccessibleVariant(critical),
        formAccent,
        info: utilsIndex_cjs_js.getAccessibleVariant(info2),
        link,
        linkHover,
        linkVisited,
        neutral: grey1,
        neutralInverted: white,
        positive: utilsIndex_cjs_js.getAccessibleVariant(positive),
        promote: utilsIndex_cjs_js.getAccessibleVariant(promote),
        rating: "#ff9000",
        secondary,
        secondaryInverted: "hsla(0, 0%, 100%, 0.65)"
      },
      background: {
        body: bodyBackground,
        brand: brand2,
        brandAccent,
        brandAccentActive: getActiveColor(brandAccent),
        brandAccentHover: getHoverColor(brandAccent),
        brandAccentSoft: polished.tint(0.925, brandAccent),
        brandAccentSoftActive: polished.tint(0.85, brandAccent),
        brandAccentSoftHover: polished.tint(0.9, brandAccent),
        card: white,
        caution,
        cautionLight: utilsIndex_cjs_js.getLightVariant(caution),
        critical,
        criticalActive: getActiveColor(critical),
        criticalHover: getHoverColor(critical),
        criticalLight,
        criticalSoft: polished.tint(0.925, critical),
        criticalSoftActive: polished.tint(0.85, critical),
        criticalSoftHover: polished.tint(0.9, critical),
        formAccent,
        formAccentActive: getActiveColor(formAccent),
        formAccentDisabled: grey4,
        formAccentHover: getHoverColor(formAccent),
        formAccentSoft: polished.tint(0.925, formAccent),
        formAccentSoftActive: polished.tint(0.85, formAccent),
        formAccentSoftHover: polished.tint(0.9, formAccent),
        info: info2,
        infoLight: utilsIndex_cjs_js.getLightVariant(info2),
        input: white,
        inputDisabled: grey5,
        neutral,
        neutralLight: utilsIndex_cjs_js.getLightVariant(neutral),
        positive,
        positiveLight: utilsIndex_cjs_js.getLightVariant(positive),
        promote,
        promoteLight: utilsIndex_cjs_js.getLightVariant(promote),
        selection
      }
    }
  };
  return merge__default["default"](tokens2, tokenOverrides);
};
const brand = "#1c3f94";
const info = "#142d69";
var tokens = makeTokens({
  name: "jobStreetClassic",
  displayName: "JobStreet (Classic)",
  bodyBackground: "#e5e5e5",
  brand,
  brandAccent: "#fff200",
  formAccent: brand,
  tokenOverrides: {
    typography: {
      fontFamily: '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
      webFont: null,
      fontMetrics: {
        capHeight: 714,
        ascent: 952,
        descent: -213,
        lineGap: 28,
        unitsPerEm: 1e3
      },
      text: {
        xsmall: {
          mobile: {
            fontSize: 11,
            rows: 4
          },
          tablet: {
            fontSize: 11,
            rows: 4
          }
        },
        small: {
          mobile: {
            fontSize: 12,
            rows: 5
          },
          tablet: {
            fontSize: 12,
            rows: 5
          }
        },
        standard: {
          mobile: {
            fontSize: 14,
            rows: 5
          },
          tablet: {
            fontSize: 14,
            rows: 5
          }
        },
        large: {
          mobile: {
            fontSize: 16,
            rows: 6
          },
          tablet: {
            fontSize: 16,
            rows: 6
          }
        }
      }
    },
    border: {
      radius: {
        standard: "3px"
      }
    },
    color: {
      foreground: {
        info: utilsIndex_cjs_js.getAccessibleVariant(info),
        link: "#1c3f94",
        linkHover: "#142d69"
      },
      background: {
        info,
        selection: "#e8ebf4"
      }
    }
  }
});
exports.makeTokens = makeTokens;
exports.tokens = tokens;
