import { Header } from "../../components/layout/header/Header"
import { Footer } from "../../components/layout/footer/Footer"
import { Container } from "../../components/layout/container/Container"
import { UserForm } from "../../components/userForm/UserForm"
import { UserFormInputs } from "../../types/User"
import { Registration } from "../../store/authSlice"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"

import s from "./RegistrationPage.module.css"

const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const handleRegistration = (data: UserFormInputs) => {
    dispatch(Registration(data))
  }

  const registrationStatus = useAppSelector(
    (state) => state.auth.registrationStatus,
  )
  const registrationErrorStatus = useAppSelector(
    (state) => state.auth.registrationError,
  )
  return (
    <>
      <Header />
      <Container className={s.userFormWrapper}>
        <UserForm
          title="Регистрация"
          submitText="Зарегистрироваться"
          onSubmitHandler={handleRegistration}
          requestStatus={registrationStatus}
          error={registrationErrorStatus}
        />
      </Container>
      <Footer />
    </>
  )
}

export default RegistrationPage
