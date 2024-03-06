import { useParams } from "react-router-dom"

import { CardRows } from "../../components/movieCards/CardRows"
import { Container } from "../../components/layout/container/Container"

import { useGetMoviesByTitleQuery } from "../../store/moviesQuery"
import { ErrorBoundary } from "../../components/errorBoundary/ErrorBoundary"

import { Loader } from "../../components/loader/Loader"

import s from "./SearchPage.module.css"

export const SearchPage = () => {
  const { query } = useParams()

  const { data, isLoading, error } = useGetMoviesByTitleQuery({
    query: query,
    limit: 20,
  })

  return (
    <ErrorBoundary fallback={<h1>Произошла ошибка!</h1>}>
      <Container className="maximum-height m-30">
        <h2 className={s.searchPageTitle}>Результаты поиска:</h2>
        {data && <CardRows data={data} />}
        {data && data.length === 0 && <p>Ничего не найдено</p>}
        {isLoading && <Loader />}
        {error && <p>Ошибка</p>}
      </Container>
    </ErrorBoundary>
  )
}

export default SearchPage
