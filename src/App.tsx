import { RouterProvider } from "react-router-dom"

import { router } from "./routes/routes"
import { getUserFromLS } from "./utils/localStorage"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { setUser } from "./store/authSlice"
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary"

function App() {
  const dispatch = useAppDispatch()
  const user = getUserFromLS()
  if (user) {
    dispatch(setUser(user))
  }

  return (
    <ErrorBoundary fallback={<h1>Произошла ошибка!</h1>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
