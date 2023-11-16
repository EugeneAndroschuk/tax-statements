import { createBrowserRouter, RouterProvider } from "react-router-dom";
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


const routes = [
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
                element: <PrivateRoute component={CompanyVatDeclarationList} />,
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
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
