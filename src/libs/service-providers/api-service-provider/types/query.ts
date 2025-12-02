export type PaginationParams = {
  pageNumber: number;
  pageSize: number;
};

export type SortingParams = {
  field: string;
  order: 'ASC' | 'DESC';
};

export type FilterParams = {
  [key: string]: string | number | boolean | string[] | number[] | undefined;
};

export type QueryParams = PaginationParams & {
  sorting?: SortingParams;
  filters?: FilterParams;
};
