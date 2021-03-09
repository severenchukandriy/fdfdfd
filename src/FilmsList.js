import Film from './Film.js'

const FilmsList = ({ films, onAddToWithList, onRemoveFromWithList }) => {
  return (
    <section >
      <div className='main-section'>
        {films.map(item => {
          return (
            <Film
              film={item}
              key={item.id}
              onAddToWithList={onAddToWithList}
              onRemoveFromWithList={onRemoveFromWithList}
            />
          )
        })}
      </div>
    </section>
  )
}

export default FilmsList;
