import { Link } from "react-router-dom"

import { Movie } from "../../../types/Movies"
import { Loader } from "../../loader/Loader"
import { fetchStatus } from "../../../store/moviesSlice"

import moviePosterDefault from "../../../assets/img/moviePoster.svg"

import s from "./SearchResults.module.css"

interface Props {
  data: Movie[]
  fetchStatus: fetchStatus
}

export const SearchResults = ({ data, fetchStatus }: Props) => {
  return (
    <ul className={s.resultsWrapper}>
      {fetchStatus === "complete" && (
        <>
          {data.map((movie) => (
            <li key={movie.id}>
              <Link to={`./movie/${movie.id}`} key={movie.id}>
                <img
                  src={
                    movie.poster.previewUrl !== null
                      ? movie.poster.previewUrl
                      : moviePosterDefault
                  }
                />
                {movie.name}
              </Link>
            </li>
          ))}
        </>
      )}
      {fetchStatus === "loading" && <Loader />}
      {fetchStatus === "error" && <p>Error loading data</p>}
    </ul>
  )
}
