import { TypedUseSelectorHook, useSelector } from "react-redux"

import { fetchStatus } from "../store/moviesSlice"
import { requestStatus } from "../store/authSlice"

import { RootState } from "../store/store"
import { User } from "../types/User"
import { Movie } from "../types/Movies"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const isAuthSelector = (state: RootState): boolean => state.auth.isAuth
export const userIdSelector = (
  state: RootState,
): string | number | null | undefined => state.auth.user?.uid
export const userSelector = (state: RootState): User | undefined | null =>
  state.auth.user
export const fetchedSuggestSelector = (state: RootState): Movie[] =>
  state.movies.movies
export const fetchedMoviesStatusSelector = (state: RootState): fetchStatus =>
  state.movies.fetchStatus
export const loginizationStatusSelector = (state: RootState): requestStatus =>
  state.auth.loginizationStatus
export const loginizationErrorSelector = (state: RootState): string | null =>
  state.auth.loginizationError
export const registrationStatusSelector = (state: RootState): requestStatus =>
  state.auth.registrationStatus
export const registrationErrorSelector = (state: RootState): requestStatus =>
  state.auth.registrationError
