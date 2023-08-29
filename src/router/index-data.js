import { lazy } from "react";

const Home = lazy(() => import("../pages/home/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    }
]