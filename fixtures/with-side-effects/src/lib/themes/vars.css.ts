import { createThemeContract } from '@vanilla-extract/css';

import { makeVanillaTheme } from './makeVanillaTheme';
import tokens from './super/deep/path/tokens';

export const vars = createThemeContract(makeVanillaTheme(tokens));
