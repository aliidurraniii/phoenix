import { defineSlotRecipe } from '@chakra-ui/react';
export const selectRecipe = defineSlotRecipe({
  slots: [
    'root',
    'control',
    'trigger',
    'valueText',
    'item',
    'itemIndicator',
    'indicatorGroup',
    'indicator',
    'content',
    'clearTrigger',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    trigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      px: '1',
      _placeholderShown: {
        fontStyle: 'italic',
      },
    },
    indicatorGroup: {
      px: '1',
    },
    indicator: {
      w: '3.5',
      h: '3.5',
      bg: 'no-repeat center / contain',
      color: 'icon.secondary',
      transition: 'transform 0.15s ease',
      _open: {
        color: 'icon.primary',
        transform: 'rotate(180deg)',
      },
      "&[data-has-value='true']": {
        color: 'icon.primary',
      },
    },
    valueText: {
      pr: '1',
      fontWeight: 'select.normal',
    },
    item: {
      fontWeight: 'select.normal',
    },
  },

  variants: {
    variant: {
      outline: {
        trigger: {
          w: 60,
          bg: 'bg.select.outline',
          borderColor: 'border.select.outline',
          borderRadius: 'select.outline',
          _expanded: {
            borderWidth: '2px',
            borderColor: 'border.select.outlineSelected',
            _placeholderShown: {
              color: 'text.select.outline',
              fontStyle: 'italic',
            },
          },
          "&[data-has-value='true']": {
            borderWidth: '2px',
            color: 'text.select.outline',
          },
          _placeholderShown: {
            fontWeight: 'select.normal',
            color: 'text.select.placeholder',
            fontStyle: 'italic',
          },
        },
        valueText: {
          fontWeight: 'fontWeights.select.bold',
        },
        content: {
          mt: '0',
          p: '0',
          borderColor: 'border.select.content',
          borderWidth: '1px',
          zIndex: 9999,
          gap: '0',
          borderRadius: 'select.content',
        },
        item: {
          display: 'flex',
          alignItems: 'center',
          bg: 'white',
          gap: '2',
          justifyContent: 'flex-start',
          borderBottomWidth: '1px',
          borderRadius: 'none',
          borderBottomColor: 'border.select.content',
          color: 'text.select.outline',
          _last: { borderBottomWidth: '0' },
          _hover: {
            bg: 'colors.gray.50',
          },
        },
      },
      subtle: {
        trigger: {
          bg: 'bg.select.subtle',
          borderColor: 'border.select.subtle',
          borderRadius: 'select.subtle',
          _expanded: {
            borderWidth: '2px',
            borderColor: 'border.select.subtleSelected',
            _placeholderShown: {
              color: 'text.select.subtle',
              fontStyle: 'italic',
            },
          },
          "&[data-has-value='true']": {
            borderWidth: '2px',
            color: 'text.select.subtle',
          },
          _placeholderShown: {
            fontWeight: 'select.normal',
            color: 'black',
            fontStyle: 'italic',
          },
        },
        valueText: {
          fontWeight: 'fontWeights.select.bold',
        },
        content: {
          mt: '0',
          p: '0',
          borderColor: 'border.select.content',
          borderWidth: '1px',
          zIndex: 9999,
          gap: '0',
          borderRadius: 'select.content',
        },
        item: {
          display: 'flex',
          alignItems: 'center',
          bg: 'white',
          gap: '2',
          justifyContent: 'flex-start',
          borderBottomWidth: '1px',
          borderRadius: 'none',
          borderBottomColor: 'border.select.content',
          color: 'text.select.subtle',
          _last: { borderBottomWidth: '0' },
          _hover: {
            bg: 'colors.gray.50',
          },
        },
      },
    },
    size: {
      sm: {
        trigger: { minH: '8', px: '1' },
        valueText: { fontSize: 'select.sm' },
        item: { px: '1', py: '1', fontSize: 'select.sm' },
        content: { fontSize: 'select.sm' },
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
    size: 'sm',
  },
});
