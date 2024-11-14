import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './Components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [


      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      }, {
        path: "/register",
        element: <Register />
      }, {
        path: "/orders",
        element: <PrivateRoute> <Orders></Orders> </PrivateRoute>
      }, {
        path: "/profile",
        element: <PrivateRoute> <Profile/> </PrivateRoute>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
