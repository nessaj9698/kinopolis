import { Movie } from "../types/Movies"
import { getRestructuredApiData } from "../utils/dataFormatting"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.kinopoisk.dev"

type Headers = {
  "X-API-KEY": string
  "Content-Type": string
}

const requestOptions = {
  method: "GET",
  headers: {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json",
  } as Headers,
}

export const fetchAllMovies = async (): Promise<Movie[]> => {
  try {
    const result = await fetch(`${BASE_URL}/v1.4/movie`, requestOptions)
    const data = await result.json()
    const restructuredData = getRestructuredApiData(data)
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
      requestOptions,
    )
    const data = await result.json()
    const restructuredData = getRestructuredApiData(data)
    return restructuredData as Movie[]
  } catch (error) {
    throw error
  }
}

export const fetchMoviesById = async (
  ids: string | string[],
): Promise<Movie[]> => {
  try {
    const result = await fetch(`${BASE_URL}/v1.4/movie?${ids}`, requestOptions)
    const data = await result.json()
    const restructuredData = getRestructuredApiData(data)
    return restructuredData as Movie[]
  } catch (error) {
    throw error
  }
}
