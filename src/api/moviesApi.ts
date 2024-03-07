import { Movie } from "../types/Movies"
import { getRestructuredApiData } from "../utils/dataFormatting"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.kinopoisk.dev"

type BaseHeaders = {
  "Content-Type": string
}

type HeadersWithApiKey = BaseHeaders & {
  "X-API-KEY": string
}

let headers: BaseHeaders | HeadersWithApiKey = {
  "Content-Type": "application/json",
}

if (API_KEY) {
  headers = {
    ...headers,
    "X-API-KEY": API_KEY,
  }
}

const requestOptions: RequestInit = {
  method: "GET",
  headers,
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
    return restructuredData
  } catch (error) {
    throw error
  }
}
