import Axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

import { StorageService } from '@libs/storage-service';

import type { AxiosApiResponse, AxiosApiError } from './types';
const defaultConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Content-Security-Policy': "default-src 'self'",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },
};

export const apiClient = <T = unknown>(baseURL: string): AxiosInstance => {
  const axiosApiClient = Axios.create({
    baseURL,
    ...defaultConfig,
  });

  axiosApiClient.interceptors.request.use(
    (config) => {
      const token: string | null = StorageService.get('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axiosApiClient.interceptors.response.use(
    (response: AxiosResponse<AxiosApiResponse<T>>) => response,
    (error: AxiosApiError | unknown) => {
      if (error && typeof error === 'object' && 'response' in error) {
        const { response } = error as AxiosApiError;
        const { status } = response || {};
        if (status === 401 && window.location.pathname !== '/auth/login') {
          localStorage.clear();
          window.location.replace('/auth/login');
        }
        return Promise.reject(response);
      }
      return Promise.reject(error);
    },
  );
  return axiosApiClient;
};
