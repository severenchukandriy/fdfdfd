

function Bucket({ wishList }) {
  return (
    <div className='bucket'>
      <h3>Bucket list {wishList.length}</h3>
        {wishList.map((film) => (
        <div key={film.title}>
          <h4>{film.title}</h4>
          <img className='film-poster' alt="film" src={'https://image.tmdb.org/t/p/w500' + film.poster_path}></img>
        </div>
        ))}
    </div>
  );
}

export default Bucket;
