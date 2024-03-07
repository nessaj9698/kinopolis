import { useState } from "react"

import { useContext } from "react"

import { toggleFavouriteMovieLS } from "../../utils/localStorage"
import { FavouritesContext } from "../../pages/FavouritesPage/FavouritesPage"
import { useAuth } from "../../hooks/useAuth"

type Props = {
  addToFavourite: () => void
  removeFromFavourite: () => void
  movieId: string
}

export const HeartIcon = ({
  addToFavourite,
  removeFromFavourite,
  movieId,
}: Props) => {
  const [isLike, setLike] = useState<boolean>(() => {
    const likedMovies = localStorage.getItem("likedMovies")
    if (likedMovies) {
      const likedMoviesArr = JSON.parse(likedMovies)
      return likedMoviesArr.includes(movieId)
    }
    return false
  })
  const context = useContext(FavouritesContext)
  const isAuth = useAuth()

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()

    if (isLike) {
      removeFromFavourite()
    } else {
      addToFavourite()
    }

    if (isAuth) {
      toggleFavouriteMovieLS(movieId)
      setLike(!isLike)
    }

    if (context && context?.removeFromFavorites) {
      context.removeFromFavorites()
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={isLike ? "#f50" : "none"}
      stroke="#f50"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={handleClick}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3 9 3 10.54 3.89 12 5.35 13.46 3.89 15 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
    </svg>
  )
}
