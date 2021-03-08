import './FilmsList.css';
import moviesData from './movies'
import Film from './Film.js'
import Bucket from './Bucket'
import { useState } from "react";

const FilmsList = () => {
  const [wishId, setWishId] = useState([])


  return (
    <section >
      <div className='main-section'>
        {moviesData.map(item => {
          return (
            <Film key={item.id} wishId={wishId} setWishId={setWishId} filmId={item.id} title={item.title} rate={item.rate} imgUrl={item.poster_path} />
          )
        })}
      </div>
      <div className='bucket'>
        <Bucket moviesData={moviesData} wishId={wishId}/>
      </div>
    </section>
  )
}

export default FilmsList;
