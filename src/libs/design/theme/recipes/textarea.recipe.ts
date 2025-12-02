import { defineRecipe } from '@chakra-ui/react';

export const textareaRecipe = defineRecipe({
  base: {
    bg: 'bg.textarea.default',
    color: 'text.textarea.default',
    fontSize: 'fontSizes.textarea.default',
    fontWeight: 'fontWeights.textarea.default',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border.textarea.default',
    boxShadow: 'shadows.textarea.default',
    padding: '2 !important', // 8px
    paddingInline: '2 !important', // 8px horizontal
    paddingBlock: '2 !important', // 8px vertical
    paddingRight: '10 !important', // Extra padding to avoid icon
    resize: 'none',
    _placeholder: {
      color: 'text.textarea.placeholder',
      fontStyle: 'italic',
    },
    _focusVisible: {
      borderColor: 'border.textarea.default',
      boxShadow: 'shadows.textarea.default',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
