import { NavLink } from "react-router-dom"

export const GuestNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login">Вход</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Регистрация</NavLink>
        </li>
      </ul>
    </nav>
  )
}
