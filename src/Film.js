import './Film.css';


function Film(props) {
  return (
    <div id={props.filmId} className="film-item">
      <h2 className='film-title'>{props.title}</h2>
      <img className='film-poster' alt={props.title + 'poster'} src={'https://image.tmdb.org/t/p/w500' + props.imgUrl}></img>
      <span>{props.rate}</span>
      <button onClick={() => {

        if (props.wishId.indexOf(props.filmId) === -1) {
          let wisheMoviesList = [...props.wishId, props.filmId]
          props.setWishId(wisheMoviesList)
          console.log(props.wishId)
        } else {
          let wisheMoviesList = props.wishId.filter(elem => {
            return elem !== props.filmId
          })
          props.setWishId(wisheMoviesList)

        }

      }} className="add-button">Add to bucket</button>
    </div>
  );
}

export default Film;
