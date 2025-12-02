import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { system } from '../theme/theme';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
