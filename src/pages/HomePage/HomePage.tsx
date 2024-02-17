import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"

import { Container } from "../../components/layout/container/Container"
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/Button"

import s from "./Homepage.module.css"

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className={s.heroSection}>
          <Container>
            <h1>Найди свой фильм</h1>
            <Input
              value=""
              handleChange={() => false}
              placeholder="Введи название фильма"
            />
            <Button btnText="Искать" handleClick={() => false} />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
