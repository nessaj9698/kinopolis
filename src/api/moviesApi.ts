import { Movie } from "../types/Movies"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://kinopoiskapiunofficial.tech"

type Headers = {
  "X-API-KEY": string
  "Content-Type": string
}

export const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    const result = await fetch(`${BASE_URL}/api/v2.2/films`, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      } as Headers,
    })
    const data = await result.json()
    const restructuredData = data.items.map(
      ({ kinopoiskId, nameRu, posterUrlPreview }: Movie) => {
        return { kinopoiskId, nameRu, posterUrlPreview }
      },
    )
    return restructuredData as Movie[]
  } catch (error) {
    throw error
  }
}
