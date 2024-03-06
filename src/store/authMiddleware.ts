/* eslint-disable no-console */
import { createListenerMiddleware } from "@reduxjs/toolkit"

import { toast } from "sonner"

import { removeDataFromLS } from "../utils/localStorage"

import { setUser, removeUser } from "./authSlice"

export const authMiddleware = createListenerMiddleware()

authMiddleware.startListening({
  predicate: (action) =>
    action.type === setUser.type || action.type === removeUser.type,
  effect: (action) => {
    switch (action.type) {
      case setUser.type:
        console.log("User login detected")
        toast.success("Вход выполнен. Редирект на главную")
        break
      case removeUser.type:
        console.log("User logout, remove LS data")
        removeDataFromLS()
        break
      default:
        break
    }
  },
})
