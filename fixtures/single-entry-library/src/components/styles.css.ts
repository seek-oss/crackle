import { style } from '@vanilla-extract/css';

import { add } from './add-fn';

export const redBorder = style({
  border: '5px solid red',
  margin: add(10, 5),
});
