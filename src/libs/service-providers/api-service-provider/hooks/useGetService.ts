import type { AxiosRequestConfig } from 'axios';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import type { ApiResponse, ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UseGetServiceOptions<TData> = {
  route: string;
  config?: AxiosRequestConfig;
} & UseQueryOptions<ApiResponse<TData>, ApiError> &
  ApiHookOptions<ApiResponse<TData>>;

export const useGetService = <TData extends object>(options: UseGetServiceOptions<TData>) => {
  const { route, config, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const queryFn = async () => {
    const response = await axiosClient.get<ApiResponse<TData>>(route, {
      ...config,
    });
    return response.data;
  };

  return useQuery<ApiResponse<TData>, ApiError>({
    queryFn,
    ...rest,
  });
};
