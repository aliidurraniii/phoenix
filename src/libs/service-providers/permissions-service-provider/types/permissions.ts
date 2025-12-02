import type { ACTION, FEATURE, ROLE } from '../constants';

export type Role = (typeof ROLE)[keyof typeof ROLE];

export type Feature = (typeof FEATURE)[keyof typeof FEATURE];

export type Action = (typeof ACTION)[keyof typeof ACTION];

export type Permission = `${Feature}.${Action}`;
