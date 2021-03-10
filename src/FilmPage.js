
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function FilmPage() {
  let filmId = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
  const [film, setFilm] = useState([])

  useEffect(() => {
    async function fetchingData() {
      const response = await axios(`https://api.themoviedb.org/3/movie/${filmId}?api_key=de85f77f783771ffb98c2924e950206c`)
      setFilm(response.data)
    }
    fetchingData()
  }, [filmId])


  return (
    <div className="film-page">
      {film ? (
        <>
          <h2 className='film-title'>{film.title}</h2>
          <p>{film.overview}</p>
          <img className='film-poster' alt={film.title + 'poster'} src={'https://image.tmdb.org/t/p/w500' + film.poster_path}></img>
          <span>{film.rate}</span>
        </>
      ) : 'loading'}
    </div>
  );
}

