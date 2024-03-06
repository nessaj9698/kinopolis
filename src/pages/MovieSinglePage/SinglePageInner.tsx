import { useNavigate } from "react-router-dom"

import { Movie } from "../../types/Movies"

import defaultPosterUrl from "../../assets/img/moviePoster.svg"
import { HeartIcon } from "../../components/heartIcon/HeartIcon"
import { useAppSelector, userSelector } from "../../hooks/useAppSelector"

import {
  deleteUserDataFromDB,
  setUserDataToDB,
} from "../../firebase/database/database"

import s from "./MovieSinglePage.module.css"

interface Props {
  data: Movie
  movieId: string
}

export const SinglePageInner = ({ data, movieId }: Props) => {
  const user = useAppSelector(userSelector)
  const navigate = useNavigate()
  const addToFavourite = () => {
    if (user?.uid) {
      setUserDataToDB(user.uid, "likedMovies", movieId)
    } else {
      navigate("/signin")
    }
  }

  const removeFromFavourite = () => {
    if (user?.uid) {
      deleteUserDataFromDB(user.uid, "likedMovies", movieId)
    }
  }
  return (
    <div className={s.singlePageInner}>
      <div className={s.singlePageLeftSide}>
        <img src={data?.poster?.previewUrl || defaultPosterUrl} />
        <HeartIcon
          addToFavourite={addToFavourite}
          removeFromFavourite={removeFromFavourite}
          movieId={movieId}
        />
      </div>
      <div className={s.singlePageContent}>
        <h1>{data?.name}</h1>
        <p className={s.singlePageYear}>{data?.year}</p>
        <p className={s.singlePageDescription}>
          {data?.description || "Описание отсутсвует"}
        </p>
      </div>
    </div>
  )
}
