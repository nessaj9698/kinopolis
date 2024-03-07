import { useParams } from "react-router-dom"

import { Container } from "../../components/layout/container/Container"
import { useGetSingleMovieByIdQuery } from "../../store/moviesQueryApi"

import { Loader } from "../../components/loader/Loader"

import { SinglePageInner } from "./SinglePageInner"

const MovieSinglePage = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetSingleMovieByIdQuery(id)

  return (
    <Container className="maximum-height">
      {isLoading && <Loader />}
      {data && id && <SinglePageInner data={data} movieId={id} />}
    </Container>
  )
}

export default MovieSinglePage
