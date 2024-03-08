import { MovieApiData, Movie } from "../types/Movies"

export const getRestructuredApiData = (data: MovieApiData): Movie[] => {
  return data.docs
    .map(({ id, name, poster, year, description }: Movie) => {
      return { id, name, poster, year, description }
    })
    .filter((movie) => movie.name !== null)
}

export const getSingleMovieRestructuredApiData = (
  data: MovieApiData,
): Movie => {
  const { id, name, poster, year, description } = data.docs[0]
  return { id, name, poster, year, description }
}

export const formatIdsQueryString = (ids: string[]): string => {
  const idStrings = ids.map((id) => `id=${id}`)
  const queryString = idStrings.join("&")
  return queryString
}
