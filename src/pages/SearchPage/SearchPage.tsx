import { useMemo } from "react"

import { useLoaderData } from "react-router-dom"

import { CardRows } from "../../components/movieCards/CardRows"
import { Container } from "../../components/layout/container/Container"

import { Movie } from "../../types/Movies"

import s from "./SearchPage.module.css"

export const SearchPage = () => {
  const data = useLoaderData() as Movie[]

  const memoizedData: Movie[] = useMemo(() => data, [data])

  return (
    <Container>
      <h2 className={s.searchPageTitle}>Результаты поиска:</h2>
      <CardRows data={memoizedData} />
    </Container>
  )
}

export default SearchPage
