import { defineRecipe } from '@chakra-ui/react';

export const headingRecipe = defineRecipe({
  className: 'chakra-heading',

  base: {
    color: 'text.heading.blue',
    lineHeight: '1',
    fontWeight: 'heading.bold',
  },

  variants: {
    size: {
      sm: { fontSize: 'heading.sm' },
      md: { fontSize: 'heading.md' },
      lg: { fontSize: 'heading.lg' },
      xl: { fontSize: 'heading.xl' },
      '2xl': { fontSize: 'heading.2xl' },
      '3xl': { fontSize: 'heading.3xl' },
      '4xl': { fontSize: 'heading.4xl' },
      '5xl': { fontSize: 'heading.5xl' },
      '6xl': { fontSize: 'heading.6xl' },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
});
