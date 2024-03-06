import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { SerializedError } from "@reduxjs/toolkit"

import { UserFormInputs } from "../../types/User"

import s from "./UserForm.module.css"

interface Props {
  title: string
  submitText?: string
  onSubmitHandler: (data: UserFormInputs) => void
  requestStatus?: null | "complete" | "processing" | SerializedError | string
  error?: string | null
}

export const UserForm = ({
  title,
  submitText,
  onSubmitHandler,
  requestStatus,
  error,
}: Props) => {
  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<UserFormInputs>()

  const validateField = async (fieldName: keyof UserFormInputs) => {
    await trigger(fieldName)
  }

  const onSubmit: SubmitHandler<UserFormInputs> = (data) => {
    onSubmitHandler(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={s.userForm}>
      <h1>{title}</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          key={1}
          control={control}
          rules={{
            required: "Обязательное поле",
            pattern: { value: /^\S+@\S+$/i, message: "Неверный формат email" },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="Введите ваш email"
              defaultValue={field.value || ""}
              onBlur={() => validateField("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
          )}
        />
        {errors.email && <span role="alert">{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Пароль:</label>
        <Controller
          name="password"
          control={control}
          key={2}
          rules={{
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "Пароль должен содержать не менее 3 символов",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              placeholder="Введите ваш пароль"
              defaultValue={field.value || ""}
              onBlur={() => validateField("email")}
              aria-invalid={errors.password ? "true" : "false"}
            />
          )}
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}
      </div>

      <button type="submit" disabled={requestStatus === "processing"}>
        {submitText ? submitText : "Отправить"}
      </button>

      {requestStatus === "complete" && (
        <p className={s.userFormSuccess}>Успешно!</p>
      )}
      {error && <p className={s.userFormError}>Ошибка: {error}</p>}
    </form>
  )
}
