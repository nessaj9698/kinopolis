import { NavLink } from "react-router-dom"

export const GuestNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/signin">Вход</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Регистрация</NavLink>
        </li>
      </ul>
    </nav>
  )
}
