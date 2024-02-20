import { Movie } from "../../types/Movies"

import s from "./CardRows.module.css"
import { MovieCard } from "./cardItem/MovieCard"

export const CardRows = ({ data }: { data: Movie[] }) => {
  return (
    <div className={s.cardRows}>
      {data.map((movie) => (
        <MovieCard
          id={movie.id}
          name={movie.name}
          poster={movie.poster}
          key={movie.id}
        />
      ))}
    </div>
  )
}
