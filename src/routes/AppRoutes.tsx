import { Suspense } from 'react';

import { createBrowserRouter, Navigate, RouterProvider } from '@libs/router';

import { DQDashboard } from '../features';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DQDashboard />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
