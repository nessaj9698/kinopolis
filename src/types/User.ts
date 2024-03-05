export type User = {
  uid: number | string | null
  email: string
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
