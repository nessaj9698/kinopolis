import { useState } from "react"

import { createContext } from "react"

import { useMemo } from "react"

import { Loader } from "../../components/loader/Loader"

import { getFavouriteMoviesFormattedIds } from "../../utils/getFavouriteMovies"

import { CardRows } from "../../components/movieCards/CardRows"
import { Container } from "../../components/layout/container/Container"
import { useGetMoviesByIdQuery } from "../../store/moviesQuery"

import s from "./FavouritesPage.module.css"

export type FavouritesContextType = {
  removeFromFavorites?: () => void
}

export const FavouritesContext = createContext<null | FavouritesContextType>(
  null,
)

const FavouritesPage = () => {
  const [idsWithFormatting, setIdsWithFormatting] = useState(() =>
    getFavouriteMoviesFormattedIds(),
  )

  const handleRemoveFromFavorites = () => {
    setIdsWithFormatting(getFavouriteMoviesFormattedIds())
  }

  const contextValue = useMemo(() => {
    return {
      removeFromFavorites: handleRemoveFromFavorites,
    }
  }, [handleRemoveFromFavorites])

  const { data, error, isLoading } = useGetMoviesByIdQuery(idsWithFormatting, {
    skip: idsWithFormatting.length === 0,
  })

  return (
    <FavouritesContext.Provider value={contextValue}>
      <Container className="maximum-height">
        {data && idsWithFormatting && <CardRows data={data} />}
        {isLoading && <Loader />}
        {error && <h1>Ошибка</h1>}
        {idsWithFormatting.length === 0 && (
          <h1 className={s.Heading}>Нет избранных фильмов</h1>
        )}
      </Container>
    </FavouritesContext.Provider>
  )
}

export default FavouritesPage
