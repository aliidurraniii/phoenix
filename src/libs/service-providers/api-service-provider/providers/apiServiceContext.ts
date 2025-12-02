import type { AxiosInstance } from 'axios';
import { createContext } from 'react';

export type ApiServiceContextProps = {
  axiosClient: AxiosInstance;
};

const defaultContext: Partial<ApiServiceContextProps> = {};

export const ApiServiceContext = createContext<ApiServiceContextProps>(
  defaultContext as ApiServiceContextProps,
);
