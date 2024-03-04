import { useEffect, useState } from "react"

import { Loader } from "../../components/loader/Loader"

import { getFavouriteMovies } from "../../utils/getFavouriteMovies"

import { CardRows } from "../../components/movieCards/CardRows"
import { Container } from "../../components/layout/container/Container"
import { Movie } from "../../types/Movies"

const FavouritesPage = () => {
  const [data, setData] = useState<Movie[]>([])
  useEffect(() => {
    getFavouriteMovies().then((resolve) => {
      setData(resolve)
    })
  }, [])
  return (
    <Container className="maximum-height">
      {data ? <CardRows data={data} /> : <Loader />}
    </Container>
  )
}

export default FavouritesPage
