import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { Movie, MovieApiData } from "../types/Movies"
import {
  getRestructuredApiData,
  getSingleMovieRestructuredApiData,
} from "../utils/dataFormatting"

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.kinopoisk.dev/v1.4"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      if (API_KEY) {
        headers.set("X-API-KEY", API_KEY)
        return headers
      }
    },
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<Movie[], undefined>({
      query: () => `/movie`,
      transformResponse: (data: MovieApiData): Movie[] => {
        return getRestructuredApiData(data)
      },
    }),
    getMoviesByTitle: builder.query<
      Movie[],
      { query: string | undefined; limit?: number }
    >({
      query: (args) => {
        const { query, limit } = args
        return {
          url: `/movie/search?query=${query}&limit=${limit !== undefined ? limit : 5}`,
        }
      },
      keepUnusedDataFor: 1,
      transformResponse: (data: MovieApiData): Movie[] => {
        return getRestructuredApiData(data)
      },
    }),
    getMoviesById: builder.query<Movie[], string | undefined>({
      query: (ids) => {
        return `/movie?${ids}`
      },
      transformResponse: (data: MovieApiData): Movie[] => {
        return getRestructuredApiData(data)
      },
    }),
    getSingleMovieById: builder.query<Movie, string | undefined>({
      query: (id) => {
        return `/movie?id=${id}`
      },
      transformResponse: (data: MovieApiData): Movie => {
        return getSingleMovieRestructuredApiData(data)
      },
    }),
  }),
})

export const {
  useGetAllMoviesQuery,
  useGetMoviesByTitleQuery,
  useGetMoviesByIdQuery,
  useGetSingleMovieByIdQuery,
} = moviesApi
