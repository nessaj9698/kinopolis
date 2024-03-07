import { NavLink } from "react-router-dom"

import { Button } from "../../../button/Button"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { removeUser } from "../../../../store/authSlice"

export const UserNavigation = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(removeUser())
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/favourites">Избранное</NavLink>
        </li>
        <li>
          <NavLink to="/history">История</NavLink>
        </li>
      </ul>
      <Button btnText="Выход" handleClick={handleClick} />
    </nav>
  )
}
