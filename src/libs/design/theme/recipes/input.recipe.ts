import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  className: 'chakra-input',
  base: {
    w: '100%',
    textAlign: 'start',
    borderRadius: '{radii.2xl}',
    fontSize: 'fontSizes.md',
    borderColor: 'border.input.outline',
    bg: 'bg.input.outline',
    color: 'text.input.outline',
    _placeholder: { color: 'text.input.outline' },
    _focus: { borderColor: 'text.input.outline' },
    _hover: { borderColor: 'text.input.outline' },
  },
  variants: {
    variant: {
      outline: {
        borderWidth: '1px',
        borderColor: 'text.input.outline',
        fontSize: 'input.fontSizes.md',
        color: 'text.input.outline',
        bg: 'bg.input.outline',
        p: 3,
        _placeholder: {
          color: 'text.input.outline',
          fontSize: 'fontSizes.md',
          fontWeight: 'fontWeights.normal',
        },
        _focus: { borderColor: 'text.input.outline' },
        _hover: { borderColor: 'text.input.outline' },
        _icon: {
          _hover: {
            bg: 'bg.input.outline',
          },
        },
        '--focus-ring-color': 'text.input.outline',
      },

      search: {
        borderWidth: '1px',
        h: '1.6rem',
        borderColor: 'border.input.search',
        borderBottomColor: 'border.input.searchBottom',
        borderRadius: '{radii.3xl}',
        bg: 'bg.input.search',
        color: 'text.input.search',
        p: 3,
        _placeholder: {
          color: 'text.input.searchPlaceholder',
          fontStyle: 'italic',
          fontSize: 'fontSizes.input.sm',
        },
        _focus: {
          borderColor: 'border.input.search',
          borderBottomColor: 'border.input.searchBottom',
        },
        _hover: {
          borderColor: 'border.input.search',
          borderBottomColor: 'border.input.searchBottom',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
  },
});
