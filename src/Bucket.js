// import './Film.css';


function Bucket(props) {

  return (
    <>
      <h3>Bucket list {props.wishId.length}</h3>
      <ol>

        {props.wishId.map(i => {
          for (let j = 0; j < props.moviesData.length; j++) {
            if (i === props.moviesData[j].id) {
              return (
                <div>
                  <h4>{props.moviesData[j].title}</h4>
                  <img className='film-poster' alt={props.moviesData[j] + 'poster'} src={'https://image.tmdb.org/t/p/w500' + props.moviesData[j].poster_path}></img>

                </div>
              )
            }
          }



        })}
      </ol>
    </>
  );
}

export default Bucket;
