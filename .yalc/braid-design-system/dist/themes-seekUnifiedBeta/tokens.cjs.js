"use strict";
var polished = require("polished");
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
require("../css-responsiveStyle.cjs.js");
const formAccent = "#2765cf";
const critical = "#d0011b";
const positive = "#138a08";
const info = "#1e468c";
const promote = "#9556b7";
const caution = "#ffc600";
const brandAccent = "#e60278";
const focus = polished.rgba("#1e90ff", 0.7);
const black = "#1c1c1c";
const white = "#fff";
const link = "#2765cf";
const linkVisited = "#733d90";
const secondary = "#1c1c1ca1";
const neutral = "#747474";
const getActiveColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.1, x) : polished.darken(0.05, x);
const getHoverColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.05, x) : polished.lighten(0.05, x);
const tokens = {
  name: "seekUnifiedBeta",
  displayName: "SEEK Unified (Beta)",
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
      standard: "2px",
      large: "4px",
      xlarge: "6px"
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
      criticalLight: polished.mix(0.3, critical, utilsIndex_cjs_js.getLightVariant(critical)),
      field: "#898989",
      focus,
      formAccent,
      formHover: formAccent,
      info,
      infoLight: polished.mix(0.3, info, utilsIndex_cjs_js.getLightVariant(info)),
      positive,
      positiveLight: polished.mix(0.3, positive, utilsIndex_cjs_js.getLightVariant(positive)),
      promote,
      promoteLight: polished.mix(0.3, promote, utilsIndex_cjs_js.getLightVariant(promote)),
      standard: "#d6d6d6",
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
      rating: "#f57c00",
      secondary,
      secondaryInverted: "hsla(0, 0%, 100%, 0.65)"
    },
    background: {
      body: "#eee",
      brand: "#0d3880",
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
      criticalLight: utilsIndex_cjs_js.getLightVariant(critical),
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
      selection: "#f1f7ff"
    }
  }
};
exports.tokens = tokens;
