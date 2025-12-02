import type { ApiError } from './api';

export type ApiResponseCallback<T> = (data: T, variables?: unknown, context?: unknown) => void;
export type ApiErrorCallback = (error?: ApiError) => void;
export type ApiHookOptions<T> = {
  onSuccess?: ApiResponseCallback<T>;
  onError?: ApiErrorCallback;
};
