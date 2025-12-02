import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  className: 'chakra-link',

  base: {
    color: 'text.link.blue',
    fontWeight: 'link.bold',
    textDecoration: 'none !important',
    cursor: 'pointer',
    _hover: {
      textDecoration: 'none',
      color: 'text.link.hover',
    },

    _focus: {
      textDecoration: 'none',
      boxShadow: 'none',
    },

    _active: {
      textDecoration: 'none',
      color: 'text.link.hover',
    },
  },

  variants: {
    size: {
      xs: { fontSize: 'link.xs' },
      sm: { fontSize: 'link.sm' },
      md: { fontSize: 'link.md' },
      lg: { fontSize: 'link.lg' },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
});
