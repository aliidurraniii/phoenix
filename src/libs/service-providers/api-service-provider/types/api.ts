export type ApiResponse<T = unknown> = {
  data: T;
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export type PaginatedResponse<T = unknown> = {
  items: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
  };
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export type ApiError = {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
};
