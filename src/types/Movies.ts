export type Movie = {
  id: number
  name: string
  poster: MoviePoster
}

type MoviePoster = {
  previewUrl: string
  url: string
}
