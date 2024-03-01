import { configureStore } from "@reduxjs/toolkit"

import movies from "./moviesSlice"
import authSlice from "./authSlice"

export const store = configureStore({
  reducer: {
    movies: movies,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
