import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useRoutes,
} from "react-router-dom";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userRefresh } from "./redux/auth/authThunks";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import MainPage from "./pages/MainPage/MainPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import CompanyData from "./components/CompanyData/CompanyData";
import CompanyVatDeclarationList from "./components/CompanyVatDeclarationList/CompanyVatDeclarationList";
import CompanyProfitDeclarationList from "./components/CompanyProfitDeclarationList/CompanyProfitDeclarationList";

import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

import RestrictedRoute from "./pages/routes/RestrictedRoute";
import PrivateRoute from "./pages/routes/PrivateRoute";

function App() {
  // const routes = [
  let element = useRoutes([
    {
      path: "/",
      // element: <PrivateRoute component={SharedLayout} />,
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <PrivateRoute component={MainPage} />,
        },
        {
          path: "/auth",
          element: <RestrictedRoute component={AuthPage} />,
          children: [
            {
              path: "/auth/register",
              element: <RestrictedRoute component={RegisterForm} />,
            },
            {
              path: "/auth/login",
              element: <RestrictedRoute component={LoginForm} />,
            },
          ],
        },
        {
          path: "/company",
          element: <PrivateRoute component={CompanyPage} />,
          children: [
            {
              path: "/company/:companyId",
              element: <PrivateRoute component={CompanyData} />,
              children: [
                {
                  path: "/company/:companyId/vat",
                  element: (
                    <PrivateRoute component={CompanyVatDeclarationList} />
                  ),
                },
                {
                  path: "/company/:companyId/profit",
                  element: (
                    <PrivateRoute component={CompanyProfitDeclarationList} />
                  ),
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  // return <RouterProvider router={createBrowserRouter(routes)} />;

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );

  // return element;
}

export default App;
