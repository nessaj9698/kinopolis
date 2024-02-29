import { Movie } from "../types/Movies"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.kinopoisk.dev"

export type Headers = {
  "X-API-KEY": string
  "Content-Type": string
}

export const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    const result = await fetch(`${BASE_URL}/v1.4/movie`, {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        "Content-Type": "application/json",
      } as Headers,
    })
    const data = await result.json()
    const restructuredData = data.docs.map(({ id, name, poster }: Movie) => {
      return { id, name, poster }
    })
    return restructuredData as Movie[]
  } catch (error) {
    throw error
  }
}

export const fetchMoviesByQuery = async (
  query: string,
  limit?: number,
): Promise<Movie[]> => {
  try {
    const result = await fetch(
      `${BASE_URL}/v1.4/movie/search?query=${query}&limit=${limit !== undefined ? limit : 5}`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        } as Headers,
      },
    )
    const data = await result.json()
    const restructuredData = data.docs.map(({ id, name, poster }: Movie) => {
      return { id, name, poster }
    })
    return restructuredData as Movie[]
  } catch (error) {
    throw error
  }
}

// TODO: вижу много дублирующего кода, позднее исправлю
