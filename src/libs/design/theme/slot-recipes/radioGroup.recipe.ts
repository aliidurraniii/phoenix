import { defineSlotRecipe } from '@chakra-ui/react';
import { radioGroupAnatomy } from '@chakra-ui/react/anatomy';

export const radioGroupSlotRecipe = defineSlotRecipe({
  className: 'chakra-radio-group',
  slots: radioGroupAnatomy.keys(),
  base: {
    item: {
      display: 'flex',
      alignItems: 'center',
      color: 'text.radio.filled',
      fontWeight: 'radio.normal',
      gap: '2',
    },
    itemControl: {
      boxSize: '3', // 12px (0.75rem)
      borderWidth: '1.5px',
      borderColor: 'border.radio.filled',
      bg: 'bg.radio.filled',
      _checked: {
        bg: 'bg.radio.filledActive',
        borderColor: 'border.radio.filled',
        borderWidth: '4px',
      },
    },
    itemText: {
      fontSize: 'fontSizes.radio.md', // 16px
    },
  },
  variants: {
    variant: {
      solid: {
        item: {
          color: 'text.radio.filled',
          fontWeight: 'radio.normal',
        },
        itemControl: {
          boxSize: '4', // 12px (0.75rem)
          borderWidth: '1px',
          borderColor: 'border.radio.filled',
          bg: 'bg.radio.filled',
          _checked: {
            bg: 'bg.radio.filledActive',
            borderColor: 'border.radio.filled',
            borderWidth: '4px',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});
