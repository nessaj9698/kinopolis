import { useEffect, useState } from "react"

import { Container } from "../../components/layout/container/Container"
import { SearchForm } from "../../components/searchForm/SearchForm"
import { CardRows } from "../../components/movieCards/CardRows"
import { Loader } from "../../components/loader/Loader"

import { fetchAllMovies } from "../../api/moviesApi"
import { Movie } from "../../types/Movies"

import s from "./Homepage.module.css"

export function HomePage() {
  const [data, setData] = useState<Movie[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchAllMovies().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  return (
    <main>
      <section className={s.heroSection}>
        <Container>
          <h1>Найди свой фильм</h1>
          <SearchForm />
        </Container>
      </section>
      <section>
        <Container>
          {isLoading ? <Loader /> : <CardRows data={data} />}
        </Container>
      </section>
    </main>
  )
}

export default HomePage
