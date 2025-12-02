import { defineSlotRecipe } from '@chakra-ui/react';

export const tabsRecipe = defineSlotRecipe({
  slots: ['root', 'list', 'trigger'],
  base: {
    list: {
      borderBottom: 'none',
    },
  },
  variants: {
    variant: {
      enclosed: {
        list: {
          padding: '0',
          borderRadius: 'tabs.enclosed',
          bg: 'bg.tabs.enclosed',
          border: '1px solid',
          borderColor: 'border.tabs.enclosed',
        },
        trigger: {
          px: '11',
          py: '4',
          bg: 'bg.tabs.enclosed',
          justifyContent: 'center',
          borderRadius: 'tabs.enclosed',
          fontWeight: 'tabs.normal',
          fontSize: 'tabs.lg',
          color: 'text.tabs.enclosed',
          h: '12',

          _selected: {
            bg: 'bg.tabs.enclosedActive',
            color: 'text.tabs.enclosedActive',
            fontWeight: 'tabs.bold',
            border: '1px solid',
            borderColor: 'border.tabs.enclosedActive',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'enclosed',
  },
});
