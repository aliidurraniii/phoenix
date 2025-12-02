import { useContext } from 'react';

import { ApiServiceContext } from './apiServiceContext';

export const useApiServiceContext = () => {
  const context = useContext(ApiServiceContext);

  if (!context) {
    throw new Error('useApiServiceContext must be used within a ApiServiceProvider');
  }
  return context;
};
