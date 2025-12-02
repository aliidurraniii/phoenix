import type { AxiosRequestConfig } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import type { ApiResponse, ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UseDeleteServiceOptions<TData, TVariables> = {
  route: string;
  config?: AxiosRequestConfig;
} & Omit<UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>, 'mutationFn'> &
  ApiHookOptions<ApiResponse<TData>>;

export const useDeleteService = <TData extends object, TVariables = unknown>(
  options: UseDeleteServiceOptions<TData, TVariables>,
) => {
  const { route, config, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const mutationFn = async (payload?: TVariables) => {
    const response = await axiosClient.delete<ApiResponse<TData>>(route, {
      ...config,
      data: payload,
    });
    return response.data;
  };

  return useMutation({
    mutationFn,
    ...rest,
  });
};
