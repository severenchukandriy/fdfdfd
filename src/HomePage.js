import React, { useEffect, useState } from 'react'
import Bucket from './Bucket'
// import moviesData from './movies'
import FilmsList from "./FilmsList.js"

export default function HomePage({ data }) {
  const getInitialState = () => localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : []
  const [wishList, setToWithList] = useState(getInitialState())

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }, [wishList])

  const getUniqList = (filmList, newFilm) => {
    let uniqList = []
    filmList.map(elem => elem.id !== newFilm.id ? uniqList.push(elem) : true)
    return [...uniqList, newFilm]
  }

  const addToWithList = (wishFilm) => setToWithList(getUniqList(wishList, wishFilm))

  const removeFromWishList = (wishFilm) => setToWithList(wishList.filter((film) => film.id !== wishFilm.id))

  return (
    <>
      <FilmsList films={data} onAddToWithList={addToWithList} onRemoveFromWithList={removeFromWishList} />
      <Bucket wishList={wishList} />
    </>
  )
}