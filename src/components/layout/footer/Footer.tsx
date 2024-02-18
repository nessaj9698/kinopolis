import { Logo } from "../../logo/Logo"

import s from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={s.siteFooter}>
      <Logo />
    </footer>
  )
}
