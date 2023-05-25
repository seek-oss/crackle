import { style } from '@vanilla-extract/css';
import {
  type ConditionalValue,
  type RequiredConditionalValue,
  defineProperties,
  createSprinkles,
  createMapValueFn,
  createNormalizeValueFn,
} from '@vanilla-extract/sprinkles';

import { type Breakpoint, breakpoints, breakpointNames } from '../breakpoints';

import { responsiveProperties } from './atomicProperties';

export const darkMode = style({});
export const colorModeSelectors = {
  light: `html:not(${darkMode}) &`,
  dark: `html${darkMode} &`,
};

const responsiveAtomicProperties = defineProperties({
  defaultCondition: 'mobile',
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    wide: {
      '@media': `screen and (min-width: ${breakpoints.wide}px)`,
    },
  },
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    padding: ['paddingBottom', 'paddingTop', 'paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
  },
});

export const sprinkles = createSprinkles(responsiveAtomicProperties);

export type OptionalResponsiveValue<Value extends string | number> =
  ConditionalValue<typeof responsiveAtomicProperties, Value>;
export type RequiredResponsiveValue<Value extends string | number> =
  RequiredConditionalValue<typeof responsiveAtomicProperties, Value>;

export type RequiredResponsiveObject<Value> = Partial<
  Record<Breakpoint, Value>
> &
  Record<(typeof breakpointNames)[0], Value>;

export const normalizeResponsiveValue = createNormalizeValueFn(
  responsiveAtomicProperties,
);
export const mapResponsiveValue = createMapValueFn(responsiveAtomicProperties);
