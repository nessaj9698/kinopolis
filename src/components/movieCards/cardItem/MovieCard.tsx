import s from "./MovieCard.module.css"

interface Props {
  title: string
  thumbnailUrl: string
}

export const MovieCard = ({ title, thumbnailUrl }: Props) => {
  return (
    <article className={s.movieCard}>
      <img src={thumbnailUrl} />
      <h2>{title}</h2>
    </article>
  )
}
