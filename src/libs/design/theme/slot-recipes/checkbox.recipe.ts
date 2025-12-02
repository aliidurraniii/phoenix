import { defineSlotRecipe } from '@chakra-ui/react';

export const checkboxRecipe = defineSlotRecipe({
  slots: ['root', 'control', 'indicator', 'label', 'hiddenInput'],

  base: {
    root: {
      cursor: 'pointer',
    },
    indicator: {
      cursor: 'pointer',
    },
    control: {
      borderColor: 'border.checkbox.outline',
      transition: 'all 0.2s ease-in-out',
    },
  },

  variants: {
    variant: {
      outline: {
        control: {
          borderColor: 'border.checkbox.outline',
          borderRadius: 'checkbox.outline',
          '&:is([data-state=checked], [data-state=indeterminate])': {
            bg: 'bg.checkbox.checked',
            borderColor: 'border.checkbox.checked',
            color: 'white',
          },
          '&:not([data-state=checked])': {
            bg: 'bg.checkbox.unchecked',
          },
        },
      },
    },
    size: {
      sm: {
        control: { boxSize: '2.5' },
      },
      md: {
        control: { boxSize: '5' },
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});
