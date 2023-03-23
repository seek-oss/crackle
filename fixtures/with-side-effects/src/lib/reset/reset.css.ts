import { style } from '@vanilla-extract/css';

export const hideFocusRingsDataAttribute = 'data-braid-hidefocusrings';

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  WebkitTapHighlightColor: 'transparent',
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      outline: 'none',
    },
  },
});

const block = style({
  display: 'block',
});

export const element = {
  section: block,
};
