import { Movie } from "../../types/Movies"

import s from "./CardRows.module.css"
import { MovieCard } from "./cardItem/MovieCard"

export const CardRows = ({ data }: { data: Movie[] }) => {
  return (
    <div className={s.cardRows}>
      {data.map((movie) => (
        <MovieCard
          kinopoiskId={movie.kinopoiskId}
          nameRu={movie.nameRu}
          posterUrlPreview={movie.posterUrlPreview}
          key={movie.kinopoiskId}
        />
      ))}
    </div>
  )
}
