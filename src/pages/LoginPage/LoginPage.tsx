import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"
import { Container } from "../../components/layout/container/Container"
import { UserForm } from "../../components/userForm/UserForm"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { Login, removeUser } from "../../store/authSlice"
import { UserFormInputs } from "../../types/User"
import { useAppSelector } from "../../hooks/useAppSelector"

import { Button } from "../../components/button/Button"

import s from "./LoginPage.module.css"

const LoginPage = () => {
  const dispatch = useAppDispatch()
  const loginizationStatus = useAppSelector(
    (state) => state.auth.loginizationStatus,
  )
  const loginizationErrorText = useAppSelector(
    (state) => state.auth.loginizationError,
  )
  const user = useAppSelector((state) => state.auth.user)

  const handleLogin = (data: UserFormInputs) => {
    dispatch(Login(data))
  }

  const handleLogOut = () => {
    dispatch(removeUser())
  }
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default LoginPage
