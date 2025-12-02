import type { AxiosRequestConfig } from 'axios';
import {
  useInfiniteQuery,
  type UseInfiniteQueryOptions,
  type QueryFunctionContext,
} from '@tanstack/react-query';

import type { ApiError, ApiHookOptions } from '../types';
import { useApiServiceContext } from '../providers';

export type UseInfiniteGetServiceOptions<TResponse, TPageParam = unknown> = {
  route: string;
  config?: AxiosRequestConfig;
  initialPageParam: TPageParam;
} & Omit<
  UseInfiniteQueryOptions<TResponse, ApiError, TResponse, readonly unknown[], TPageParam>,
  'queryFn' | 'initialPageParam'
> &
  ApiHookOptions<TResponse>;

export const useInfiniteGetService = <TResponse extends object, TPageParam = unknown>(
  options: UseInfiniteGetServiceOptions<TResponse, TPageParam>,
) => {
  const { route, config, initialPageParam, ...rest } = options;
  const { axiosClient } = useApiServiceContext();

  const queryFn = async (context: QueryFunctionContext<readonly unknown[], TPageParam>) => {
    const { pageParam, signal } = context;

    const response = await axiosClient.get<TResponse>(route, {
      ...config,
      params: { ...(config?.params ?? {}), page: pageParam },
      signal,
    });

    return response.data;
  };

  return useInfiniteQuery<TResponse, ApiError, TResponse, readonly unknown[], TPageParam>({
    initialPageParam,
    queryFn,
    ...rest,
  });
};
