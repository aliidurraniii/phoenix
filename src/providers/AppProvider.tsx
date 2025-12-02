import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { PermissionsServiceProvider } from '@libs/permissions-service-provider';
import type { MenuStructure } from '@shared/types';

import menuStructure from '../data/menuStructure.json';

import { AppContext, type AppContextProps } from './appContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const menuStructuresList: MenuStructure[] = menuStructure.data;

  const contextValue: AppContextProps = {
    menuStructures: menuStructuresList,
  };

  return (
    <ErrorBoundary FallbackComponent={() => null}>
      <AppContext.Provider value={contextValue}>
        <PermissionsServiceProvider userRole={'ADMIN'}>{children}</PermissionsServiceProvider>
      </AppContext.Provider>
    </ErrorBoundary>
  );
};
