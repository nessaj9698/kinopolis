import { useNavigate } from "react-router-dom"

import { Container } from "../../components/layout/container/Container"
import { UserForm } from "../../components/userForm/UserForm"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { Login, removeUser } from "../../store/authSlice"
import { UserFormInputs } from "../../types/User"
import {
  useAppSelector,
  loginizationErrorSelector,
  loginizationStatusSelector,
  userSelector,
} from "../../hooks/useAppSelector"

import { Button } from "../../components/button/Button"

import s from "./LoginPage.module.css"

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const loginizationStatus = useAppSelector(loginizationStatusSelector)
  const loginizationErrorText = useAppSelector(loginizationErrorSelector)
  const user = useAppSelector(userSelector)

  const handleLogin = (data: UserFormInputs) => {
    dispatch(Login({ data, navigate }))
  }

  const handleLogOut = () => {
    dispatch(removeUser())
  }
  return (
    <Container className={s.userFormWrapper}>
      {!user ? (
        <UserForm
          title="Вход"
          submitText="Войти"
          onSubmitHandler={handleLogin}
          requestStatus={loginizationStatus}
          error={loginizationErrorText}
        />
      ) : (
        <div>
          <p>Вы уже авторизованны</p>
          <Button btnText="Выйти" handleClick={() => handleLogOut()} />
        </div>
      )}
    </Container>
  )
}

export default LoginPage
