import { QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';

import { apiClient } from '../api-client';
import { queryClient } from '../query-client';

import { ApiServiceContext, type ApiServiceContextProps } from './apiServiceContext';

export type ApiServiceProviderProps = {
  baseUrl: string;
  children: React.ReactNode;
};

export const ApiServiceProvider = (props: ApiServiceProviderProps) => {
  const { baseUrl, children } = props;

  const axiosClient = useMemo(() => apiClient(baseUrl), [baseUrl]);

  const contextValue: ApiServiceContextProps = useMemo(() => ({ axiosClient }), [axiosClient]);

  return (
    <ApiServiceContext.Provider value={contextValue}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiServiceContext.Provider>
  );
};
