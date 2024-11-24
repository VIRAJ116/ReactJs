import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import App from '@/App';

const Table = lazy(() => import('@/views/Table/index'));

const Router = () => {
  const dashboardRoutes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          // element: <DashboardLayout />,
          index: true
        },
        {
          path: 'table',
          element: <Table />
        }
        // {
        //   path: 'student/details',
        //   element: <StudentDetailPage />
        // },
        // {
        //   path: 'form',
        //   element: <FormPage />
        // }
      ]
    }
  ];

  //   const publicRoutes = [
  //     {
  //       path: '/login',
  //       element: <SignInPage />,
  //       index: true
  //     },
  //     {
  //       path: '/404',
  //       element: <NotFound />
  //     },
  //     {
  //       path: '*',
  //       element: <Navigate to="/404" replace />
  //     }
  //   ];
  const routes = useRoutes([...dashboardRoutes]);

  return routes;
};

export default Router;
