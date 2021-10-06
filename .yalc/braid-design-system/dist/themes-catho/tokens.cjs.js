"use strict";
var polished = require("polished");
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
require("../css-responsiveStyle.cjs.js");
const linkVisited = "DarkViolet";
const brand = "#1250C4";
const brandAccent = "#de0059";
const formAccent = brand;
const focus = brand;
const critical = "#e91b0c";
const criticalLight = "#f9e6e4";
const positive = "#3b610f";
const caution = "#ffc600";
const info = brand;
const promote = "#5736ab";
const neutral = "#424242";
const secondary = "#737374";
const white = "#fff";
const link = brand;
const getActiveColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.1, x) : polished.darken(0.05, x);
const getHoverColor = (x) => utilsIndex_cjs_js.isLight(x) ? polished.darken(0.05, x) : polished.lighten(0.05, x);
const tokens = {
  name: "Catho",
  displayName: "Catho",
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    webFont: "Nunito Sans",
    fontMetrics: {
      capHeight: 705,
      ascent: 1011,
      descent: -353,
      lineGap: 0,
      unitsPerEm: 1e3
    },
    fontWeight: {
      regular: 400,
      medium: 600,
      strong: 800
    },
    heading: {
      weight: {
        weak: "regular",
        regular: "medium"
      },
      level: {
        "1": {
          mobile: {
            fontSize: 36,
            rows: 12
          },
          tablet: {
            fontSize: 36,
            rows: 12
          }
        },
        "2": {
          mobile: {
            fontSize: 28,
            rows: 10
          },
          tablet: {
            fontSize: 28,
            rows: 10
          }
        },
        "3": {
          mobile: {
            fontSize: 24,
            rows: 9
          },
          tablet: {
            fontSize: 24,
            rows: 9
          }
        },
        "4": {
          mobile: {
            fontSize: 20,
            rows: 7
          },
          tablet: {
            fontSize: 20,
            rows: 7
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
          rows: 4
        },
        tablet: {
          fontSize: 14,
          rows: 4
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
    medium: 984,
    large: 1180
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 4,
    large: 6,
    xlarge: 12,
    xxlarge: 20
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
      field: "#999999",
      focus,
      formAccent,
      formHover: formAccent,
      info,
      infoLight: polished.mix(0.3, info, utilsIndex_cjs_js.getLightVariant(info)),
      positive,
      positiveLight: polished.mix(0.3, positive, utilsIndex_cjs_js.getLightVariant(positive)),
      promote,
      promoteLight: polished.mix(0.3, promote, utilsIndex_cjs_js.getLightVariant(promote)),
      standard: "#e0e0e0",
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
      neutral,
      neutralInverted: white,
      positive: utilsIndex_cjs_js.getAccessibleVariant(positive),
      promote: utilsIndex_cjs_js.getAccessibleVariant(promote),
      rating: "#f36e23",
      secondary,
      secondaryInverted: "hsla(0, 0%, 100%, 0.65)"
    },
    background: {
      body: "#f2f2f2",
      brand: "#0037e9",
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
      inputDisabled: "#f2f2f2",
      neutral,
      neutralLight: utilsIndex_cjs_js.getLightVariant(neutral),
      positive,
      positiveLight: utilsIndex_cjs_js.getLightVariant(positive),
      promote,
      promoteLight: utilsIndex_cjs_js.getLightVariant(promote),
      selection: "#f2f2f2"
    }
  }
};
exports.tokens = tokens;
