import { createContext } from 'react';

import type { MenuStructure } from '../shared/types';

export type AppContextProps = {
  menuStructures: MenuStructure[];
};

const defaultContext: Partial<AppContextProps> = {};

export const AppContext = createContext<AppContextProps>(defaultContext as AppContextProps);
