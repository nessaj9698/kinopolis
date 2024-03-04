import { RouterProvider } from "react-router-dom"

import { router } from "./routes/routes"
import { getUserFromLS } from "./utils/localStorage"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { setUser } from "./store/authSlice"

function App() {
  const dispatch = useAppDispatch()
  const user = getUserFromLS()
  if (user) {
    dispatch(setUser(user))
  }

  return <RouterProvider router={router} />
}

export default App
