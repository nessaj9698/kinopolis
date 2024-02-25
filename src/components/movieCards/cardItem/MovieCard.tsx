import { Link } from "react-router-dom"

import { Movie } from "../../../types/Movies"
import moviePosterDefault from "../../../assets/img/moviePoster.svg"

import s from "./MovieCard.module.css"

export const MovieCard = ({ id, name, poster }: Movie) => {
  return (
    <Link to={`/movie/${id}`}>
      <article className={s.movieCard}>
        <img
          src={
            poster.previewUrl !== null ? poster.previewUrl : moviePosterDefault
          }
        />
        <h2>{name}</h2>
      </article>
    </Link>
  )
}
