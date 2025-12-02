import type { Meta, StoryFn } from "@storybook/react-vite";
import { VStack, HStack } from "@chakra-ui/react";

import { Button, type ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "subtle", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    w: { control: "text" },
  },
};

export default meta;

export const Basic: StoryFn<ButtonProps> = (props) => <Button {...props} />;
Basic.args = {
  variant: "solid",
  children: "Button",
  size: "md",
};

export const VariantsWithSizes: StoryFn<ButtonProps> = (props) => (
  <VStack spaceY={4}>
    <HStack spaceX={4} alignItems="flex-end">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Button {...props} variant="solid" size={size} key={size}>
          Solid ({size})
        </Button>
      ))}
    </HStack>
    <HStack spaceX={4} alignItems="flex-end">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Button {...props} variant="subtle" size={size} key={size}>
          Subtle ({size})
        </Button>
      ))}
    </HStack>
    <HStack spaceX={4} alignItems="flex-end">
      {(["md", "lg"] as const).map((size) => (
        <Button {...props} variant="ghost" size={size} key={size}>
          Ghost ({size})
        </Button>
      ))}
    </HStack>
  </VStack>
);
