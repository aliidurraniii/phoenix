import { ACTION, FEATURE, ROLE } from '../constants';
import type { Permission, Role } from '../types';

export const RolePermissions: Record<Role, Permission[]> = {
  [ROLE.ADMIN]: [
    `${FEATURE.DASHBOARD}.${ACTION.READ}`,
    `${FEATURE.USER}.${ACTION.READ}`,
    `${FEATURE.USER}.${ACTION.WRITE}`,
  ],
  [ROLE.USER]: [`${FEATURE.DASHBOARD}.${ACTION.READ}`, `${FEATURE.USER}.${ACTION.READ}`],
};
