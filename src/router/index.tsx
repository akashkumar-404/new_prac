import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />, 
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);

export default router;

