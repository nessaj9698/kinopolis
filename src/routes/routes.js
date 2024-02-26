import { createBrowserRouter } from "react-router-dom"

import { lazy } from "react"

import { fetchMoviesByQuery } from "../api/moviesApi"

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"))
const LazySearchPage = lazy(() => import("../pages/SearchPage/SearchPage"))
const LazyErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHomePage />,
    errorElement: <LazyErrorPage />,
  },
  {
    path: "/search/:query",
    element: <LazySearchPage />,
    loader: async ({ params }) => {
      const query = params.query
      const data = await fetchMoviesByQuery(query)
      return data
    },
  },
])
