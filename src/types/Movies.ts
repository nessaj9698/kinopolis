export type Movie = {
  id: number
  name: string
  poster: MoviePoster
  year?: number
  description?: string
}

type MoviePoster = {
  previewUrl: string
  url: string
}

export type MovieApiData = {
  docs: Movie[]
}
