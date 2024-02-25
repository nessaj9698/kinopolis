import { useNavigate } from "react-router-dom"

export const useNavigateToSearch = (query: string) => {
  const navigate = useNavigate()

  const navigateToSearch = () => {
    navigate(`/search/${query}`)
  }
  return navigateToSearch
}
