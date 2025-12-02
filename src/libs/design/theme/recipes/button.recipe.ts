import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'button.bold',
    borderRadius: 'button.solid',
    transition: 'all 0.2s ease-in-out',
  },

  variants: {
    variant: {
      solid: {
        bg: 'bg.button.solid',
        color: 'text.button.solid',
        fontSize: 'button.lg',
        px: 4,
        py: 2.5,

        _hover: {
          bg: 'bg.button.solidHover',
          color: 'text.button.solidHover',
          cursor: 'pointer',
        },

        _active: {
          bg: 'bg.button.solidActive',
          color: 'text.button.solidActive',
        },

        _disabled: {
          color: 'text.button.solidDisabled',
          cursor: 'not-allowed',
          opacity: 0.6,
        },
      },
      ghost: {
        bg: 'bg.button.ghost',
        color: 'text.button.ghost',
        fontSize: 'button.lg',
        fontWeight: 'button.normal',
        py: 3.5,
        pr: 5,
        pl: 3,
        justifyContent: 'start',
        _hover: {
          bg: 'bg.button.ghostHover',
          color: 'text.button.ghostHover',
          cursor: 'pointer',
        },

        _active: {
          bg: 'bg.button.ghostActive',
          color: 'text.button.ghostActive',
        },
      },
      subtle: {
        bg: 'bg.button.subtle',
        _hover: {
          bg: 'bg.button.subtle',
          color: 'text.button.subtle',
          cursor: 'pointer',
        },
        _active: {
          bg: 'bg.button.subtle',
          color: 'text.button.subtle',
        },
        color: 'text.button.subtle',
        fontSize: 'button.sm',
        fontWeight: 'button.normal',
        py: 3.5,
        pr: 5,
        pl: 3,
        justifyContent: 'start',
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
  },
});
