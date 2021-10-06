"use strict";
var polished = require("polished");
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
require("../css-responsiveStyle.cjs.js");
const brand = "#083cae";
const brandAccent = "#f13465";
const formAccent = brand;
const focus = polished.lighten(0.5, brand);
const critical = "#db3737";
const criticalLight = "#f6e4e4";
const positive = "#009537";
const caution = "#ffc549";
const info = "#0946CB";
const promote = "#5736ab";
const neutral = "#666";
const black = "#222";
const secondary = "#777";
const white = "#fff";
const link = "#0946CB";
const linkVisited = "#5736ab";
const getActiveColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.1, x) : polished.darken(0.05, x);
const getHoverColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.05, x) : polished.lighten(0.05, x);
const tokens = {
  name: "OCC",
  displayName: "OCC Mundial",
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    webFont: "Open Sans",
    fontMetrics: {
      capHeight: 1462,
      ascent: 2189,
      descent: -600,
      lineGap: 0,
      unitsPerEm: 2048
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 600
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
            rows: 8
          },
          tablet: {
            fontSize: 57,
            rows: 18
          }
        },
        "2": {
          mobile: {
            fontSize: 28,
            rows: 8
          },
          tablet: {
            fontSize: 36,
            rows: 12
          }
        },
        "3": {
          mobile: {
            fontSize: 22,
            rows: 8
          },
          tablet: {
            fontSize: 22,
            rows: 8
          }
        },
        "4": {
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
    text: {
      xsmall: {
        mobile: {
          fontSize: 10,
          rows: 4
        },
        tablet: {
          fontSize: 10,
          rows: 4
        }
      },
      small: {
        mobile: {
          fontSize: 12,
          rows: 4
        },
        tablet: {
          fontSize: 12,
          rows: 4
        }
      },
      standard: {
        mobile: {
          fontSize: 14,
          rows: 6
        },
        tablet: {
          fontSize: 14,
          rows: 6
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
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 984,
    large: 1164
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 4,
    medium: 6,
    large: 8,
    xlarge: 12,
    xxlarge: 16
  },
  transforms: {
    touchable: "scale(0.97)"
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
      field: "#dddddd",
      focus,
      formAccent,
      formHover: formAccent,
      info,
      infoLight: polished.mix(0.3, info, utilsIndex_cjs_js.getLightVariant(info)),
      positive,
      positiveLight: polished.mix(0.3, positive, utilsIndex_cjs_js.getLightVariant(positive)),
      promote,
      promoteLight: polished.mix(0.3, promote, utilsIndex_cjs_js.getLightVariant(promote)),
      standard: "#dddddd",
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
      info: utilsIndex_cjs_js.getAccessibleVariant(info),
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      positive: utilsIndex_cjs_js.getAccessibleVariant(positive),
      promote: utilsIndex_cjs_js.getAccessibleVariant(promote),
      rating: "#f36e23",
      secondary,
      secondaryInverted: "hsla(0, 0%, 100%, 0.65)"
    },
    background: {
      body: "#f5f5f8",
      brand,
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
      formAccentDisabled: "#ccc",
      formAccentHover: getHoverColor(formAccent),
      formAccentSoft: polished.tint(0.925, formAccent),
      formAccentSoftActive: polished.tint(0.85, formAccent),
      formAccentSoftHover: polished.tint(0.9, formAccent),
      info,
      infoLight: utilsIndex_cjs_js.getLightVariant(info),
      input: white,
      inputDisabled: "#eee",
      neutral,
      neutralLight: utilsIndex_cjs_js.getLightVariant(neutral),
      positive,
      positiveLight: utilsIndex_cjs_js.getLightVariant(positive),
      promote,
      promoteLight: utilsIndex_cjs_js.getLightVariant(promote),
      selection: "#fafafa"
    }
  }
};
exports.tokens = tokens;
