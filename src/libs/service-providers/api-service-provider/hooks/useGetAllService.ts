import type { AxiosRequestConfig } from 'axios';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import type { ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UseGetAllServiceOptions<TData> = {
  route: string;
  config?: AxiosRequestConfig;
} & UseQueryOptions<TData, ApiError> &
  ApiHookOptions<TData>;

export const useGetAllService = <TData extends object>(options: UseGetAllServiceOptions<TData>) => {
  const { route, config, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const queryFn = async () => {
    const response = await axiosClient.get(route, { ...config });
    return response.data;
  };

  return useQuery<TData, ApiError>({
    queryFn,
    ...rest,
  });
};
