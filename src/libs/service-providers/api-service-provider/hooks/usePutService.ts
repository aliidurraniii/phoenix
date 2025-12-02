import type { AxiosRequestConfig } from 'axios';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

import type { ApiResponse, ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UsePutServiceOptions<TData, TVariables> = {
  route: string;
  config?: AxiosRequestConfig;
} & Omit<UseMutationOptions<ApiResponse<TData>, ApiError, TVariables>, 'mutationFn'> &
  ApiHookOptions<ApiResponse<TData>>;

export const usePutService = <TData extends object, TVariables = unknown>(
  options: UsePutServiceOptions<TData, TVariables>,
) => {
  const { route, config, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const mutationFn = async (payload: TVariables) => {
    const response = await axiosClient.put<ApiResponse<TData>>(route, payload, {
      ...config,
    });
    return response.data;
  };

  return useMutation({
    mutationFn,
    ...rest,
  });
};
