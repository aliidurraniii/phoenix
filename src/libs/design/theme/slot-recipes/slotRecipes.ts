import { cardRecipe } from './card.recipe';
import { tabsRecipe } from './tabs.recipe';
import { checkboxRecipe } from './checkbox.recipe';
import { radioGroupSlotRecipe } from './radioGroup.recipe';
import { selectRecipe } from './select.recipe';

export const slotRecipes = {
  card: cardRecipe,
  tabs: tabsRecipe,
  checkbox: checkboxRecipe,
  radioGroup: radioGroupSlotRecipe,
  select: selectRecipe,
};
