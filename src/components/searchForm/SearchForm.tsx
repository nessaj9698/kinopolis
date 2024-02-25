import { useState, useEffect } from "react"

import { useCallback } from "react"

import { useNavigate } from "react-router-dom"

import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"

import { Input } from "../input/Input"
import { Button } from "../button/Button"

import { useDebounce } from "../../hooks/useDebounce"
import { getMoviesByQuery } from "../../store/moviesSlice"
import { refreshMoviesState } from "../../store/moviesSlice"

import { useNavigateToSearch } from "../../hooks/useNavigateToSearch"

import { SearchResults } from "./searchResults/SearchResults"

import s from "./SearchForm.module.css"

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const fetchedMovies = useAppSelector((state) => state.movies.movies)
  const fetchStatus = useAppSelector((state) => state.movies.fetchStatus)
  const dispatch = useAppDispatch()
  const [debouncedQuery, setDebouncedQuery] = useDebounce<string>(
    searchQuery,
    1000,
  )
  const navigate = useNavigateToSearch(searchQuery)

  const handleChange = useCallback(
    (query: string) => {
      setSearchQuery(query)
    },
    [setSearchQuery],
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate()
  }

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(getMoviesByQuery(debouncedQuery))
    } else {
      dispatch(refreshMoviesState())
    }
  }, [debouncedQuery])

  return (
    <form className={s.searchFormWrapper}>
      <Input
        handleChange={(query) => handleChange(query)}
        placeholder="Введи название фильма"
      />
      <Button
        btnText="Искать"
        handleClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
        type="submit"
      />
      {fetchStatus !== null && (
        <SearchResults data={fetchedMovies} fetchStatus={fetchStatus} />
      )}
    </form>
  )
}
