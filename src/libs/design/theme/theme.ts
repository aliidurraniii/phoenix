import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { recipes } from './recipes';
import { tokens } from './tokens';
import { semanticTokens } from './semantic-tokens';
import { slotRecipes } from './slot-recipes';

const customConfig = defineConfig({
  theme: {
    tokens: tokens,
    semanticTokens: semanticTokens,
    recipes: recipes,
    slotRecipes: slotRecipes,
  },
});

export const system = createSystem(defaultConfig, customConfig);
