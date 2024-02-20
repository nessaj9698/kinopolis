import { Link } from "react-router-dom"

import { Movie } from "../../../types/Movies"

import s from "./MovieCard.module.css"

export const MovieCard = ({ kinopoiskId, nameRu, posterUrlPreview }: Movie) => {
  return (
    <Link to={`/movie/${kinopoiskId}`}>
      <article className={s.movieCard}>
        <img src={posterUrlPreview} />
        <h2>{nameRu}</h2>
      </article>
    </Link>
  )
}
