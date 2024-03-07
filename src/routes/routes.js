import { createBrowserRouter } from "react-router-dom"

import { lazy, Suspense } from "react"

import { AppLayout } from "../components/layout/AppLayout"
import { PrivateComponent } from "../hoc/PrivateComponent"

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"))
const LazySearchPage = lazy(() => import("../pages/SearchPage/SearchPage"))
const LazyErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"))
const LazyRegistrationPage = lazy(
  () => import("../pages/RegistrationPage/RegistrationPage"),
)
const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"))
const LazyFavouritesPage = lazy(
  () => import("../pages/FavouritesPage/FavouritesPage"),
)
const LazySearchHistoryPage = lazy(
  () => import("../pages/SearchHistory/SearchHistory"),
)
const LazyMovieSinglePage = lazy(
  () => import("../pages/MovieSinglePage/MovieSinglePage"),
)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <Suspense>
        <LazyErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <LazyHomePage />,
      },
      {
        path: "/search/:query",
        element: <LazySearchPage />,
      },
      {
        path: "/signup",
        element: <LazyRegistrationPage />,
      },
      {
        path: "/signin",
        element: <LazyLoginPage />,
      },
      {
        path: "/movie/:id",
        element: <LazyMovieSinglePage />,
      },
      {
        path: "/favourites",
        element: (
          <PrivateComponent>
            <LazyFavouritesPage />
          </PrivateComponent>
        ),
      },
      {
        path: "/history",
        element: (
          <PrivateComponent>
            <LazySearchHistoryPage />
          </PrivateComponent>
        ),
      },
    ],
  },
])
