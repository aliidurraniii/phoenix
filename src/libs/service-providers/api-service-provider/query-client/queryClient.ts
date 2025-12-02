import { QueryCache, QueryClient } from '@tanstack/react-query';

type QueryCallbacks<D = unknown, E = unknown> = {
  onSuccess?: (data: D) => void;
  onError?: (error: E) => void;
};

type MetaWithCallbacks<D = unknown, E = unknown> = {
  callbacks?: QueryCallbacks<D, E>;
};
export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      const meta = (query?.options?.meta ?? {}) as MetaWithCallbacks;
      meta.callbacks?.onSuccess?.(data);
    },
    onError: (error, query) => {
      const meta = (query?.options?.meta ?? {}) as MetaWithCallbacks;
      meta.callbacks?.onError?.(error);
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
