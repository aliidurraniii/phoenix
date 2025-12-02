import { type StoryContext, type StoryFn } from '@storybook/react-vite';

import { ThemeProvider } from './ThemeProvider';

export const StoryProvider = (Story: StoryFn, context: StoryContext) => (
  <ThemeProvider>{Story(context.args, context)}</ThemeProvider>
);
