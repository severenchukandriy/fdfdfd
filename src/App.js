import React, { useEffect, useState } from 'react'
import './App.css'
import FilmsList  from "./FilmsList.js"
import Bucket from './Bucket'
import moviesData from './movies'


const getInitialState = () => localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : []

function App() {
  const [wishList, setToWithList] = useState(getInitialState())

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }, [wishList])

  const addToWithList = (wishFilm) => setToWithList([...wishList, wishFilm])

  const removeFromWishList = (wishFilm) => setToWithList(wishList.filter((film) => film.id !== wishFilm.id))

  return (
    <div className="App">
      <FilmsList films={moviesData} onAddToWithList={addToWithList} onRemoveFromWithList={removeFromWishList} />
      <Bucket wishList={wishList} />
    </div>
  );
}

export default App;

