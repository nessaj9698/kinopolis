export type User = {
  uid: number | string | null
  email: string | null
}

export type UserFormInputs = {
  email: string
  password: string
}

export type RegistrationErrorData = {
  code: string
  customData: object
  name: string
}
