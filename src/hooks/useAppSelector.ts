import { useSelector, TypedUseSelectorHook } from "react-redux"

import { RootState } from "../store/store"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const isAuthSelector = (state: RootState) => state.auth.isAuth
export const userIdSelector = (state: RootState) => state.auth.user?.uid
export const userSelector = (state: RootState) => state.auth.user
export const fetchedSuggestSelector = (state: RootState) => state.movies.movies
export const fetchedMoviesStatusSelector = (state: RootState) =>
  state.movies.fetchStatus
export const loginizationStatusSelector = (state: RootState) =>
  state.auth.loginizationStatus
export const loginizationErrorSelector = (state: RootState) =>
  state.auth.loginizationError
export const registrationStatusSelector = (state: RootState) =>
  state.auth.registrationStatus
export const registrationErrorSelector = (state: RootState) =>
  state.auth.registrationError
