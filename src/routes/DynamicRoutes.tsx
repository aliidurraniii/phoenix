import { lazy } from 'react';

import type { RouteObject } from '@libs/router';
import type { MenuStructure, MenuStructureWithChildren } from '@shared/types';

import { useAppContext } from '../providers';

const buildTree = (items: MenuStructure[]): MenuStructureWithChildren[] => {
  const map = new Map<string, MenuStructureWithChildren>();
  const roots: MenuStructureWithChildren[] = [];

  for (const item of items) {
    map.set(item.menuStructureId, { ...item });
  }

  for (const item of items) {
    const node = map.get(item.menuStructureId)!;
    if (item.parentId) {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(node);
      }
    } else {
      roots.push(node);
    }
  }
  return roots;
};

export const DynamicRoutes = (): RouteObject[] => {
  const { menuStructures } = useAppContext();

  const convertToRoutes = (nodes: MenuStructureWithChildren[]): RouteObject[] =>
    nodes
      .map((node) => {
        let Component: React.LazyExoticComponent<React.ComponentType> | null = null;
        if (node.componentPath) {
          const importPath = `../features${node.componentPath}.tsx`;
          const importer = import.meta.glob('../features/**/*.tsx')[importPath];

          if (!importer) {
            // console.warn(`Component not found at ${importPath}`);
            return null;
          }

          Component = lazy(importer as () => Promise<{ default: React.ComponentType }>);
        }

        const route: RouteObject = node.isIndex
          ? {
              index: true,
              ...(Component ? { element: <Component /> } : {}),
            }
          : {
              path: node.route,
              ...(Component ? { element: <Component /> } : {}),
              ...(node.children?.length ? { children: convertToRoutes(node.children) } : {}),
            };

        return route;
      })
      .filter(Boolean) as RouteObject[];

  const tree = buildTree(menuStructures);
  return convertToRoutes(tree);
};
