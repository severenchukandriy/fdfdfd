import './Film.css';
import React, { useState } from 'react'
import  {NavLink} from "react-router-dom"


function Film({ film, onAddToWithList, onRemoveFromWithList }) {
  const [status, setStatus] = useState(false)

  const handleClick = (film) => {
    setStatus(!status)
    status ? onRemoveFromWithList(film) : onAddToWithList(film)
  }

  return (
    <div key={film.filmId} className="film-item">
      <h2 className='film-title'>{film.title}</h2>
      <img className='film-poster' alt={film.title + 'poster'} src={'https://image.tmdb.org/t/p/w500' + film.poster_path}></img>
      <span>{film.rate}</span>
      <button onClick={() => handleClick(film)} className="add-button">{status ? 'Remove' : 'Add'}</button>
      <NavLink to={'/film/' + film.id}>Read more</NavLink>
    </div>
  );
}

export default Film;
