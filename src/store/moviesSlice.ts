import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { Movie } from "../types/Movies"
import { fetchMoviesByQuery } from "../api/moviesApi"

export type fetchStatus = "complete" | "error" | "loading" | "refreshed" | null

export interface MoviesState {
  movies: Movie[]
  fetchStatus: fetchStatus
}

export const getMoviesByQuery = createAsyncThunk<Movie[], string>(
  "movies/getMoviesByQuery",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await fetchMoviesByQuery(query)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

const initialState: MoviesState = {
  movies: [],
  fetchStatus: null,
}

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    refreshMoviesState: (state) => {
      state.movies = []
      state.fetchStatus = "refreshed"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesByQuery.fulfilled, (state, action) => {
        state.movies = action.payload
        state.fetchStatus = "complete"
      })
      .addCase(getMoviesByQuery.rejected, (state) => {
        state.movies = []
        state.fetchStatus = "error"
      })
      .addCase(getMoviesByQuery.pending, (state) => {
        state.fetchStatus = "loading"
      })
  },
})

export default moviesSlice.reducer

export const { refreshMoviesState } = moviesSlice.actions
