import { createBrowserRouter } from "react-router-dom"

import { lazy } from "react"

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"))
const LazySearchPage = lazy(() => import("../pages/SearchPage/SearchPage"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHomePage />,
  },
  {
    path: "/search",
    element: <LazySearchPage />,
  },
])
