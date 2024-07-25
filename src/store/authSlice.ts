import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { User } from "../types/User"
import { login } from "../api/authApi"
import { register } from "../api/authApi"
import { UserFormInputs } from "../types/User"
import { RegistrationErrorData } from "../types/User"
import { saveUserToLS, saveDataToLS } from "../utils/localStorage"
import { getUserDataFromDB } from "../firebase/database/database"

export type requestStatus = null | "complete" | "processing" | string

type loginThunkProps = {
  data: UserFormInputs
  navigate: (to: string) => void
}

type authState = {
  isAuth: boolean
  registrationStatus: requestStatus
  registrationError: string | null
  loginizationStatus: requestStatus
  loginizationError: string | null
  user: User | null
}

const initialState: authState = {
  isAuth: false,
  registrationStatus: null,
  registrationError: null,
  loginizationStatus: null,
  loginizationError: null,
  user: null,
}

const isRegistrationErrorData = (
  data: RegistrationErrorData | null | unknown,
): data is RegistrationErrorData => {
  return typeof data === "object" && data !== null && "code" in data
}

export const Login = createAsyncThunk(
  "auth/login",
  async (
    { data, navigate }: loginThunkProps,
    { rejectWithValue, dispatch },
  ) => {
    try {
      const user = await login(data)
      dispatch(setUser(user))
      if (user.uid !== null) {
        const dbData = await getUserDataFromDB(user.uid)
        saveDataToLS(dbData)
      }
      navigate("/")
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const Registration = createAsyncThunk(
  "auth/registration",
  async (data: UserFormInputs, { rejectWithValue }) => {
    try {
      const response = await register(data)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true
      state.user = {
        uid: action.payload.uid,
        email: action.payload.email,
      }
    },
    removeUser: (state) => {
      state.user = null
      state.isAuth = false
      state.loginizationStatus = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Registration.fulfilled, (state) => {
        state.registrationStatus = "complete"
        state.registrationError = null
      })
      .addCase(Registration.rejected, (state, action) => {
        state.registrationStatus = "Error"
        if (isRegistrationErrorData(action.payload)) {
          state.registrationError = action.payload.code
        }
      })
      .addCase(Registration.pending, (state) => {
        state.registrationStatus = "processing"
      })
      .addCase(Login.fulfilled, (state) => {
        state.loginizationStatus = "complete"
        state.loginizationError = null
        if (state.user) {
          saveUserToLS(state.user)
        }
      })
      .addCase(Login.rejected, (state, action) => {
        state.loginizationStatus = "Error"
        if (isRegistrationErrorData(action.payload)) {
          state.registrationError = action.payload.code
        }
      })
      .addCase(Login.pending, (state) => {
        state.loginizationStatus = "processing"
      })
  },
})

export default authSlice.reducer

export const { setUser, removeUser } = authSlice.actions
