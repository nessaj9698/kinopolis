import { NavLink } from "react-router-dom"

import { Logo } from "../../logo/Logo"
import { Container } from "../container/Container"
import { NavigationLinks } from "../navigation/Navigation"

import s from "./Header.module.css"

export function Header() {
  return (
    <header className={s.header}>
      <Container>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <div className={s.userLinks}>
          <NavigationLinks />
        </div>
      </Container>
    </header>
  )
}
