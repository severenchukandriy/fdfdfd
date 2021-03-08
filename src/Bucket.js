

function Bucket({ wishList }) {
  return (
    <>
      <h3>Bucket list</h3>
        {wishList.map((film) => (
        <div key={film.id}>
          <h4>{film.title}</h4>
          <img className='film-poster' alt="film" src={'https://image.tmdb.org/t/p/w500' + film.poster_path}></img>
        </div>
        ))}
    </>
  );
}

export default Bucket;
