import { useState, useEffect } from "react"

import { useCallback } from "react"

import { toast } from "sonner"

import { useAppDispatch } from "../../hooks/useAppDispatch"
import {
  useAppSelector,
  fetchedSuggestSelector,
  fetchedMoviesStatusSelector,
  userSelector,
} from "../../hooks/useAppSelector"

import { Input } from "../input/Input"
import { Button } from "../button/Button"

import { useDebounce } from "../../hooks/useDebounce"
import { getMoviesByQuery } from "../../store/moviesSlice"
import { refreshMoviesState } from "../../store/moviesSlice"

import { useNavigateToSearch } from "../../hooks/useNavigateToSearch"

import { updateSearchHistoryLS } from "../../utils/localStorage"

import { setUserDataToDB } from "../../firebase/database/database"

import { SearchResults } from "./searchResults/SearchResults"

import s from "./SearchForm.module.css"

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const fetchedMovies = useAppSelector(fetchedSuggestSelector)
  const fetchStatus = useAppSelector(fetchedMoviesStatusSelector)
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()
  const [debouncedQuery] = useDebounce<string>(searchQuery, 1000)
  const navigate = useNavigateToSearch(searchQuery)
  const [isInputFocused, setIsInputFocused] = useState(false)

  const handleFocus = () => {
    setIsInputFocused(true)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false)
    }, 150)
  }

  const handleChange = useCallback(
    (query: string) => {
      setSearchQuery(query)
    },
    [setSearchQuery],
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (searchQuery.length > 0) {
      navigate()
      updateSearchHistoryLS(searchQuery)
      if (user?.uid) {
        setUserDataToDB(user.uid, "history", searchQuery)
      }
    } else {
      toast.error("Поле поиска не может быть пустым")
    }
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
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={true}
      />
      <Button
        btnText="Искать"
        handleClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
        type="submit"
      />
      {fetchStatus !== null && isInputFocused && (
        <SearchResults data={fetchedMovies} fetchStatus={fetchStatus} />
      )}
    </form>
  )
}
