import { defineSlotRecipe } from '@chakra-ui/react';
import { cardAnatomy } from '@chakra-ui/react/anatomy';

export const cardRecipe = defineSlotRecipe({
  className: 'chakra-card',
  slots: cardAnatomy.keys(),
  variants: {
    variant: {
      solid: {
        root: {
          bg: 'bg.card.solid',
          '&[data-active=true]': {
            bg: 'bg.card.solidActive',
          },
        },
      },
      outline: {
        root: {
          bg: 'bg.card.outline',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'border.card.outline',
          borderRadius: 'card.outline',
        },
        body: {
          p: '2',
        },
      },

      subtle: {
        root: {
          bg: 'bg.card.subtle',
          border: '2px solid',
          borderColor: 'border.card.subtle',
          borderRadius: 'card.subtle',
          _hover: {
            borderColor: 'border.card.subtleHover',
          },
        },
        body: {
          px: '5',
          py: '6.5',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});
