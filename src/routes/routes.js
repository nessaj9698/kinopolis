import { createBrowserRouter } from "react-router-dom"

import { lazy } from "react"

import { fetchMoviesByQuery } from "../api/moviesApi"

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"))
const LazySearchPage = lazy(() => import("../pages/SearchPage/SearchPage"))
const LazyErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"))
const LazyRegistrationPage = lazy(
  () => import("../pages/RegistrationPage/RegistrationPage"),
)
const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"))

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
      const data = await fetchMoviesByQuery(query, 20)
      return data
    },
  },
  {
    path: "/registration",
    element: <LazyRegistrationPage />,
  },
  {
    path: "/login",
    element: <LazyLoginPage />,
  },
])
