import { fetchMoviesById } from "../api/moviesApi"

import { formatIdsQueryString } from "./dataFormatting"
import { getDataFromLS } from "./localStorage"

export const getFavouriteMovies = async () => {
  const likedMovies = getDataFromLS("likedMovies")
  const moviesStringArray = formatIdsQueryString(likedMovies)
  const data = await fetchMoviesById(moviesStringArray)
  return data
}
