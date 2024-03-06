import { configureStore } from "@reduxjs/toolkit"

import { moviesApi } from "./moviesQuery"
import { authMiddleware } from "./authMiddleware"

import movies from "./moviesSlice"
import authSlice from "./authSlice"

export const store = configureStore({
  reducer: {
    movies: movies,
    auth: authSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authMiddleware.middleware,
      moviesApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
