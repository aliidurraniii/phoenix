import { createContext } from 'react';

import type { Permission } from '../types';

export type PermissionsServiceContextProps = {
  hasPermission: (permission: Permission) => boolean;
};

const defaultContext: Partial<PermissionsServiceContextProps> = {};

export const PermissionsServiceContext = createContext<PermissionsServiceContextProps>(
  defaultContext as PermissionsServiceContextProps,
);
