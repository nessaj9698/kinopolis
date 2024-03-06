import { Container } from "../../components/layout/container/Container"
import { UserForm } from "../../components/userForm/UserForm"
import { UserFormInputs } from "../../types/User"
import { Registration } from "../../store/authSlice"
import {
  useAppSelector,
  registrationErrorSelector,
  registrationStatusSelector,
} from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"

import s from "./RegistrationPage.module.css"

const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const handleRegistration = (data: UserFormInputs) => {
    dispatch(Registration(data))
  }

  const registrationStatus = useAppSelector(registrationStatusSelector)
  const registrationErrorStatus = useAppSelector(registrationErrorSelector)
  return (
    <Container className={s.userFormWrapper}>
      <UserForm
        title="Регистрация"
        submitText="Зарегистрироваться"
        onSubmitHandler={handleRegistration}
        requestStatus={registrationStatus}
        error={registrationErrorStatus}
      />
    </Container>
  )
}

export default RegistrationPage
