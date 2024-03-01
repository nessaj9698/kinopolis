import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth"

import { UserFormInputs } from "../types/User"
import { app } from "../firebase"

const auth = getAuth(app)
const authAPI = {
  async login(data: UserFormInputs) {
    try {
      const resolve = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      const { user } = resolve
      return user
    } catch (error) {
      throw error
    }
  },
  async register(data: UserFormInputs) {
    try {
      const resolve = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      return resolve.user
    } catch (error) {
      throw error
    }
  },
}

export const { login, register } = authAPI
