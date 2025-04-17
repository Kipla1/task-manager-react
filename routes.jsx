import App from './src/App';
import ErrorPage from './src/pages/ErrorPage';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import SingleTask from './src/pages/SingleTask';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/task/:id',
        element: <SingleTask />,
      },
    ],
  },
];

export default routes
