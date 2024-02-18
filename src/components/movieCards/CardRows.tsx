import s from "./CardRows.module.css"
import { MovieCard } from "./cardItem/MovieCard"

interface Props {
  data: Array<object>
}

export const CardRows = ({ data }: Props) => {
  return (
    <div className={s.cardRows}>
      {data.map(() => (
        <MovieCard
          title="Test"
          thumbnailUrl="https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/db987680-608a-4bce-a284-f6950386999a/576x"
          key="1"
        />
      ))}
    </div>
  )
}
