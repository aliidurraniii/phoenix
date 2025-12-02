import { AxiosError } from 'axios';

export type AxiosApiResponse<T = unknown> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
};
export type AxiosApiError = AxiosError & {
  response?: AxiosApiResponse<unknown>;
  status?: number;
};
