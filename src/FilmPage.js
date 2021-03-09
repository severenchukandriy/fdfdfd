// import React, { useState } from 'react'
// import moviesData from './movies'
import { NavLink } from 'react-router-dom'

export default function FilmPage({ data }) {
  let filmId = window.location.href.slice(-6)
  let film = data.filter(elem => +elem.id === +filmId ? elem : false)[0]

  return (
    <div className="film-page">
      <NavLink exact to='/'>Go back</NavLink>
      <h2 className='film-title'>{film.original_title}</h2>
      <p>{film.overview}</p>
      <img className='film-poster' alt={film.title + 'poster'} src={'https://image.tmdb.org/t/p/w500' + film.poster_path}></img>
      <span>{film.rate}</span>
    </div>
  );
}

