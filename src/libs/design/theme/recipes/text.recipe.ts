import { defineRecipe } from '@chakra-ui/react';

export const textRecipe = defineRecipe({
  className: 'chakra-text',

  base: {
    color: 'text.primary.blue',
    fontWeight: 'text.normal',
  },

  variants: {
    size: {
      xs: { fontSize: 'text.xs' },
      sm: { fontSize: 'text.sm' },
      md: { fontSize: 'text.md' },
      lg: { fontSize: 'text.lg' },
      xl: { fontSize: 'text.xl' },
      '2xl': { fontSize: 'text.2xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
