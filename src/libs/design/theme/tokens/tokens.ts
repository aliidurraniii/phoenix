import { defineTokens } from '@chakra-ui/react';

import { colors } from './colors';
import { radii } from './radii';
import { shadows } from './shadows';
import { fontWeights } from './fontWeights';
import { lineHeights } from './lineHeights';
import { fontSizes } from './fontSizes';
import { fonts } from './fonts';

export const tokens = defineTokens({
  colors: colors,
  fontWeights: fontWeights,
  lineHeights: lineHeights,
  fontSizes: fontSizes,
  fonts: fonts,
  radii: radii,
  shadows: shadows,
});
