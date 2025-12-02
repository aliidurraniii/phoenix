import type { AxiosRequestConfig } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import type { ApiResponse, ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UsePostServiceOptions<TData, TVariables> = {
  route: string;
  config?: AxiosRequestConfig;
} & Omit<UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>, 'mutationFn'> &
  ApiHookOptions<ApiResponse<TData>>;

export const usePostService = <TData extends object, TVariables = unknown>(
  options: UsePostServiceOptions<TData, TVariables>,
) => {
  const { route, config, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const mutationFn = async (payload: TVariables) => {
    const response = await axiosClient.post<ApiResponse<TData>>(route, payload, {
      ...config,
    });
    return response.data;
  };

  return useMutation({
    mutationFn,
    ...rest,
  });
};
