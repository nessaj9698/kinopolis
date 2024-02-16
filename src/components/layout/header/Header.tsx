import { NavLink } from "react-router-dom"

import { Logo } from "../../logo/Logo"
import { Container } from "../container/Container"

import s from "./Header.module.css"

export function Header() {
  return (
    <header className={s.header}>
      <Container>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <div className={s.userLinks}>
          <NavLink to="/login">Вход</NavLink>
          <NavLink to="/registration">Регистрация</NavLink>
        </div>
      </Container>
    </header>
  )
}
