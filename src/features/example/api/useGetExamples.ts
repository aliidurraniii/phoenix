import { useGetAllService } from '@libs/api-service-provider';

import { EXAMPLE_BASE_URL } from './apiEndpoints';
import type { Examples } from './types';

type UseGetExamplesProps = {
  onSuccess?: (response: Examples) => void;
  onError?: (error: unknown) => void;
};

export const useGetExamples = (options: UseGetExamplesProps) => {
  const { onSuccess, onError } = options;
  const { isLoading, isFetching } = useGetAllService<Examples>({
    route: EXAMPLE_BASE_URL,
    onSuccess,
    onError,
    queryKey: [],
  });

  return {
    onSuccess,
    onError,
    isLoading,
    isFetching,
  };
};
