import { useContext } from 'react';

import { PermissionsServiceContext } from './permissionsServiceContext';

export const usePermissionsServiceContext = () => {
  const context = useContext(PermissionsServiceContext);
  if (!context) {
    throw new Error(
      'usePermissionsServiceContext must be used within an PermissionsServiceProvider',
    );
  }
  return context;
};
