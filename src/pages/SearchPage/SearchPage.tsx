import { useEffect, useState } from "react"

import { useLoaderData } from "react-router-dom"

import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"
import { CardRows } from "../../components/movieCards/CardRows"
import { Container } from "../../components/layout/container/Container"

import { Movie } from "../../types/Movies"

import s from "./SearchPage.module.css"

export const SearchPage = () => {
  const [searchPageData, setSearchPageData] = useState<Movie[]>([])
  const data = useLoaderData() as Movie[]

  useEffect(() => {
    setSearchPageData(data)
  }, [])
  return (
    <>
      <Header />
      <Container>
        <h2 className={s.searchPageTitle}>Результаты поиска:</h2>
        <CardRows data={searchPageData} />
      </Container>
      <Footer />
    </>
  )
}

export default SearchPage
