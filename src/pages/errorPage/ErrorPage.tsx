import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"

import s from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className={s.notFoundWrapper}>
        <h1 className={s.notFoundTitle}>Упс. Такой страницы не существует</h1>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
