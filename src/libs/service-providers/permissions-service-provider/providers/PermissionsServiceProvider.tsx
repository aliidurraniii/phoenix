import { useEffect, useState, type ReactNode } from 'react';

import type { Permission, Role } from '../types';
import { RolePermissions } from '../permissions/rolePermissions';

import {
  PermissionsServiceContext,
  type PermissionsServiceContextProps,
} from './permissionsServiceContext';

type PermissionsServiceProviderProps = {
  children: ReactNode;
  userRole: Role;
};

export const PermissionsServiceProvider = ({
  children,
  userRole,
}: PermissionsServiceProviderProps) => {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  useEffect(() => {
    setPermissions(RolePermissions[userRole] || []);
  }, [userRole]);

  const hasPermission = (permission: Permission) => permissions.includes(permission);

  const contextValue: PermissionsServiceContextProps = { hasPermission };

  return (
    <PermissionsServiceContext.Provider value={contextValue}>
      {children}
    </PermissionsServiceContext.Provider>
  );
};
