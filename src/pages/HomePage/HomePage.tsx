import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"

import { Container } from "../../components/layout/container/Container"
import { Input } from "../../components/input/Input"

import s from "./Homepage.module.css"

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className={s.heroSection}>
          <Container>
            <h1>Найди свой фильм</h1>
            <Input
              value="test"
              handleChange={() => false}
              placeholder="Введи название фильма"
            />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
