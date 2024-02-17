import React from "react"

import s from "./MovieCard.module.css"

interface Props {
  title: string
  thumbnailUrl: string
}

export const MovieCard: React.FC<Props> = ({ title, thumbnailUrl }) => {
  return (
    <article className={s.movieCard}>
      <img src={thumbnailUrl} />
      <h2>{title}</h2>
    </article>
  )
}
