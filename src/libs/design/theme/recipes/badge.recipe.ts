import { defineRecipe } from '@chakra-ui/react';

export const badgeRecipe = defineRecipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'sm',
    px: '3',
  },
  variants: {
    variant: {
      outline: {
        bg: 'bg.badge.outline',
        color: 'text.badge.outline',
        border: '1px solid',
        borderColor: 'border.badge.outline',
        borderRadius: 'badge.outline',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
});
