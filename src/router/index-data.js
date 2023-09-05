import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"));
const ErrorPage = lazy(() => import("../pages/Error/index"));

export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/*",
    component: <ErrorPage />,
  },
];
