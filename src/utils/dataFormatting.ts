import { MovieApiData, Movie } from "../types/Movies"

export const getRestructuredApiData = (data: MovieApiData) => {
  return data.docs.map(({ id, name, poster }: Movie) => {
    return { id, name, poster } as Movie
  })
}

export const formatIdsQueryString = (ids: string[]): string => {
  const idStrings = ids.map((id) => `id=${id}`)
  const queryString = idStrings.join("&")
  return queryString
}
