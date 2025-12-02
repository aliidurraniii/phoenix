import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export type ButtonProps = Omit<ChakraButtonProps, 'variant'> & {
  variant?: 'solid' | 'ghost' | 'subtle';
};

export const Button: React.FC<ButtonProps> = ({ children, variant = 'solid', ...props }) => {
  return (
    <ChakraButton variant={variant} {...props}>
      {children}
    </ChakraButton>
  );
};
