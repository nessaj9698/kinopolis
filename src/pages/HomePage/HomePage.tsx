import { Container } from "../../components/layout/container/Container"
import { SearchForm } from "../../components/searchForm/SearchForm"
import { CardRows } from "../../components/movieCards/CardRows"
import { Loader } from "../../components/loader/Loader"
import { useGetAllMoviesQuery } from "../../store/moviesQuery"

import s from "./Homepage.module.css"

export function HomePage() {
  const { data, isLoading, error } = useGetAllMoviesQuery(undefined)

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
          {isLoading && <Loader />}
          {data && <CardRows data={data} />}
          {error && <p>error</p>}
          <p></p>
        </Container>
      </section>
    </main>
  )
}

export default HomePage
