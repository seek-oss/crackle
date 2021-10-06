"use strict";
var polished = require("polished");
const palette = {
  grey: {
    900: "#0f131b",
    800: "#1c2230",
    700: "#2d3648",
    600: "#3d4b63",
    500: "#5b6881",
    400: "#828ea4",
    300: "#abb3c1",
    200: "#d2d7de",
    100: "#e8ecf0",
    50: "#f6f8fa"
  },
  seekPink: {
    900: "#4f0017",
    800: "#74002b",
    700: "#9e0042",
    600: "#c4005a",
    500: "#e60078",
    400: "#ee379c",
    300: "#f36fbc",
    200: "#f8b0db",
    100: "#fcdaee",
    50: "#feeef8"
  },
  seekBlue: {
    900: "#00061b",
    800: "#020f2f",
    700: "#051a49",
    600: "#062462",
    500: "#0d3880",
    400: "#4065a3",
    300: "#7595c2",
    200: "#b5c7e0",
    100: "#dae4f2",
    50: "#eff5fc"
  },
  orange: {
    900: "#6a1703",
    800: "#8a290d",
    700: "#b34119",
    600: "#dd5823",
    500: "#fd7533",
    400: "#fc9a66",
    300: "#febb96",
    200: "#fedac6",
    100: "#feede3",
    50: "#fef8f2"
  },
  amber: {
    900: "#732503",
    800: "#943e0d",
    700: "#ba5b17",
    600: "#df7922",
    500: "#fc9935",
    400: "#fdb761",
    300: "#ffce91",
    200: "#fee5c3",
    100: "#fef3e2",
    50: "#fffbf2"
  },
  yellow: {
    900: "#703c02",
    800: "#935a07",
    700: "#b97e0d",
    600: "#dfa114",
    500: "#fdc222",
    400: "#fdd650",
    300: "#fee384",
    200: "#ffefbc",
    100: "#fef8de",
    50: "#fefcef"
  },
  pear: {
    900: "#354702",
    800: "#516805",
    700: "#779109",
    600: "#99b60f",
    500: "#b8d71c",
    400: "#cfe44c",
    300: "#deed7e",
    200: "#eef5b9",
    100: "#f7fbdc",
    50: "#fbfef0"
  },
  lime: {
    900: "#194402",
    800: "#2c6407",
    700: "#448e0d",
    600: "#5cb215",
    500: "#7ad222",
    400: "#98df47",
    300: "#bdea84",
    200: "#dbf3bd",
    100: "#eefadd",
    50: "#f8fdf0"
  },
  green: {
    900: "#093309",
    800: "#125110",
    700: "#1e751d",
    600: "#299828",
    500: "#3eb73d",
    400: "#68ce67",
    300: "#98de97",
    200: "#c7edc7",
    100: "#e3f7e2",
    50: "#f3fcf4"
  },
  jade: {
    900: "#053710",
    800: "#0e541e",
    700: "#177930",
    600: "#1d9b42",
    500: "#2fbc5e",
    400: "#53ce7d",
    300: "#8fe0ab",
    200: "#c2eed3",
    100: "#e2f7ea",
    50: "#f3fdf7"
  },
  mint: {
    900: "#033720",
    800: "#0a5334",
    700: "#13774f",
    600: "#18986a",
    500: "#28b888",
    400: "#57cea9",
    300: "#88dec5",
    200: "#beeddf",
    100: "#e1f7f1",
    50: "#f3fdfa"
  },
  cyan: {
    900: "#033840",
    800: "#095660",
    700: "#117c89",
    600: "#189fae",
    500: "#28bfce",
    400: "#56d3df",
    300: "#88e2e9",
    200: "#beeff3",
    100: "#dff8fa",
    50: "#f2fdfd"
  },
  blue: {
    900: "#052253",
    800: "#103975",
    700: "#1e549b",
    600: "#296fc0",
    500: "#3e8fe0",
    400: "#68aeea",
    300: "#97c8f1",
    200: "#c8e1f7",
    100: "#e2f1fb",
    50: "#f3faff"
  },
  indigo: {
    900: "#070f5d",
    800: "#141f80",
    700: "#2332a5",
    600: "#3148c9",
    500: "#4964e9",
    400: "#728af0",
    300: "#9db0f4",
    200: "#cad4f9",
    100: "#e4e9fc",
    50: "#f4f6fe"
  },
  violet: {
    900: "#0d0962",
    800: "#1b1883",
    700: "#2f29a9",
    600: "#4239cb",
    500: "#5f53e9",
    400: "#867bf0",
    300: "#ada3f4",
    200: "#d2cef9",
    100: "#eae7fc",
    50: "#f5f4fe"
  },
  purple: {
    900: "#1d0a63",
    800: "#341b85",
    700: "#502eaa",
    600: "#6a40cc",
    500: "#8b5ceb",
    400: "#aa83f2",
    300: "#c6aaf5",
    200: "#e1d1f9",
    100: "#f1e7fc",
    50: "#f9f5fe"
  },
  plum: {
    900: "#3b0c63",
    800: "#571b85",
    700: "#7b2eaa",
    600: "#9c40cc",
    500: "#bb5cea",
    400: "#d083f2",
    300: "#dfaaf5",
    200: "#eed1f9",
    100: "#f6e8fc",
    50: "#fcf5fe"
  },
  magenta: {
    900: "#630b63",
    800: "#851b85",
    700: "#aa2eaa",
    600: "#cc3fcc",
    500: "#eb5ceb",
    400: "#f283f2",
    300: "#f5a9f5",
    200: "#f8d1f9",
    100: "#fce8fc",
    50: "#fef5fe"
  },
  rose: {
    900: "#6b073c",
    800: "#8c165a",
    700: "#b0277d",
    600: "#d3399f",
    500: "#f254be",
    400: "#f47cd3",
    300: "#f8a4e1",
    200: "#fbcfee",
    100: "#fde7f7",
    50: "#fef4fc"
  },
  crimson: {
    900: "#72061b",
    800: "#931531",
    700: "#b7244c",
    600: "#db3466",
    500: "#f94d86",
    400: "#fa76a7",
    300: "#fca0c3",
    200: "#fdccdf",
    100: "#fee6ef",
    50: "#fef3f9"
  },
  red: {
    900: "#730706",
    800: "#941110",
    700: "#b71f1f",
    600: "#db2d2d",
    500: "#f94344",
    400: "#fa6b6c",
    300: "#fb999a",
    200: "#fdc8c8",
    100: "#ffe3e2",
    50: "#fef2f2"
  }
};
const brandAccent = palette.grey["900"];
const formAccent = palette.indigo["600"];
const focus = polished.rgba("#1e90ff", 0.7);
const black = palette.grey["700"];
const white = "#fff";
const link = palette.indigo["600"];
const linkVisited = "DarkViolet";
const secondary = palette.grey["500"];
const tokens = {
  name: "docs",
  displayName: "Docs",
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    webFont: null,
    fontMetrics: {
      capHeight: 1443,
      ascent: 1950,
      descent: -494,
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
        regular: "strong"
      },
      level: {
        "1": {
          mobile: {
            fontSize: 32,
            rows: 10
          },
          tablet: {
            fontSize: 52,
            rows: 15
          }
        },
        "2": {
          mobile: {
            fontSize: 28,
            rows: 9
          },
          tablet: {
            fontSize: 38,
            rows: 13
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
            fontSize: 18,
            rows: 8
          },
          tablet: {
            fontSize: 18,
            rows: 8
          }
        }
      }
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 14,
          rows: 6
        },
        tablet: {
          fontSize: 14,
          rows: 6
        }
      },
      small: {
        mobile: {
          fontSize: 16,
          rows: 6
        },
        tablet: {
          fontSize: 16,
          rows: 6
        }
      },
      standard: {
        mobile: {
          fontSize: 18,
          rows: 8
        },
        tablet: {
          fontSize: 18,
          rows: 8
        }
      },
      large: {
        mobile: {
          fontSize: 22,
          rows: 9
        },
        tablet: {
          fontSize: 22,
          rows: 9
        }
      }
    }
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1308
  },
  grid: 4,
  touchableSize: 12,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 5,
    large: 8,
    xlarge: 11,
    xxlarge: 15
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
      standard: "6px",
      large: "8px",
      xlarge: "12px"
    },
    width: {
      standard: 1,
      large: 2
    },
    color: {
      brandAccent,
      caution: palette.yellow["600"],
      cautionLight: palette.yellow["300"],
      critical: palette.red["600"],
      criticalLight: palette.red["300"],
      field: palette.grey["400"],
      focus,
      formAccent,
      formHover: formAccent,
      info: palette.blue["600"],
      infoLight: palette.blue["300"],
      positive: palette.mint["600"],
      positiveLight: palette.mint["300"],
      promote: palette.purple["600"],
      promoteLight: palette.purple["300"],
      standard: palette.grey["200"],
      standardInverted: white
    }
  },
  focusRingSize: 3,
  shadows: {
    small: "0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)",
    medium: "0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)",
    large: "0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)"
  },
  color: {
    foreground: {
      brandAccent,
      caution: palette.yellow["900"],
      critical: palette.red["700"],
      formAccent,
      info: palette.blue["700"],
      link,
      linkHover: link,
      linkVisited,
      neutral: black,
      neutralInverted: white,
      positive: palette.mint["700"],
      promote: palette.purple["700"],
      rating: black,
      secondary,
      secondaryInverted: polished.rgba("#fff", 0.65)
    },
    background: {
      body: white,
      brand: palette.grey["900"],
      brandAccent,
      brandAccentActive: brandAccent,
      brandAccentHover: palette.grey["700"],
      brandAccentSoft: palette.grey["200"],
      brandAccentSoftActive: polished.darken(0.025, palette.grey["200"]),
      brandAccentSoftHover: polished.darken(0.05, palette.grey["200"]),
      card: white,
      caution: palette.yellow["500"],
      cautionLight: palette.yellow["100"],
      critical: palette.red["600"],
      criticalActive: polished.darken(0.075, palette.red["600"]),
      criticalHover: polished.darken(0.05, palette.red["600"]),
      criticalLight: palette.red["100"],
      criticalSoft: palette.red["100"],
      criticalSoftActive: polished.darken(0.05, palette.red["100"]),
      criticalSoftHover: polished.darken(0.025, palette.red["100"]),
      formAccent,
      formAccentActive: palette.indigo["700"],
      formAccentDisabled: palette.grey["200"],
      formAccentHover: polished.darken(0.05, palette.indigo["600"]),
      formAccentSoft: palette.indigo["100"],
      formAccentSoftActive: polished.darken(0.05, palette.indigo["100"]),
      formAccentSoftHover: polished.darken(0.025, palette.indigo["100"]),
      info: palette.blue["600"],
      infoLight: palette.blue["100"],
      input: white,
      inputDisabled: palette.grey["200"],
      neutral: palette.grey["200"],
      neutralLight: palette.grey["100"],
      positive: palette.mint["600"],
      positiveLight: palette.mint["100"],
      promote: palette.purple["600"],
      promoteLight: palette.purple["100"],
      selection: palette.grey["100"]
    }
  }
};
exports.palette = palette;
exports.tokens = tokens;
