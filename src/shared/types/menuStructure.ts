export type MenuStructure = {
  componentName: string;
  componentPath: string;
  menuStructureId: string;
  parentId: string;
  route: string;
  sortOrder: string;
  icon: string;
  isIndex: boolean;
};

export type MenuStructureWithChildren = MenuStructure & {
  children?: MenuStructureWithChildren[];
};
