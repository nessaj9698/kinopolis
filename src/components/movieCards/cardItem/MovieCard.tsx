import { Link } from "react-router-dom"

import { useCallback } from "react"

import { Movie } from "../../../types/Movies"
import moviePosterDefault from "../../../assets/img/moviePoster.svg"
import { HeartIcon } from "../../heartIcon/HeartIcon"
import {
  deleteUserDataFromDB,
  setUserDataToDB,
} from "../../../firebase/database/database"
import { useAppSelector } from "../../../hooks/useAppSelector"

import s from "./MovieCard.module.css"

export const MovieCard = ({ id, name, poster }: Movie) => {
  const userId = useAppSelector((state) => state.auth.user?.uid)
  const addToFavourite = useCallback(() => {
    if (userId) {
      setUserDataToDB(userId, "likedMovies", id)
    }
  }, [userId])

  const removeFromFavourite = useCallback(() => {
    if (userId) {
      deleteUserDataFromDB(userId, "likedMovies", id)
    }
  }, [])
  return (
    <Link to={`/movie/${id}`}>
      <article className={s.movieCard}>
        <img
          src={
            poster.previewUrl !== null ? poster.previewUrl : moviePosterDefault
          }
        />
        <h2>{name}</h2>
        {userId && (
          <HeartIcon
            addToFavourite={addToFavourite}
            removeFromFavourite={removeFromFavourite}
            movieId={String(id)}
          />
        )}
      </article>
    </Link>
  )
}
