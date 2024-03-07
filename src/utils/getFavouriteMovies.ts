import { formatIdsQueryString } from "./dataFormatting"
import { getDataFromLS } from "./localStorage"

export const getFavouriteMoviesFormattedIds = () => {
  const likedMovies = getDataFromLS("likedMovies")
  const moviesStringArray = formatIdsQueryString(likedMovies)
  return moviesStringArray
}
