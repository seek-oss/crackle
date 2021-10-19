"use strict";
var utilsIndex_cjs_js = require("../utils-index.cjs.js");
require("../css-responsiveStyle.cjs.js");
var themesJobStreet_tokens_cjs_js = require("../themes-jobStreet/tokens.cjs.js");
const brand = "#1c3f94";
const info = "#142d69";
var tokens = themesJobStreet_tokens_cjs_js.makeTokens({
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
exports.tokens = tokens;
