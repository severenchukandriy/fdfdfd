import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=de85f77f783771ffb98c2924e950206c&query='

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  // async function fetchSearchResult() {
  //   const response = await axios(SEARCH_URL + searchTerm)
  //   setSearchResult(response.data.results)
  // }

  useEffect(() => {
    async function fetchData() {
      const response =  await axios(SEARCH_URL + searchTerm)
      setSearchResult(response.data.results)
    }
    if (searchTerm.length > 2) fetchData()
  }, [searchTerm])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='search'>
      <input type='text' value={searchTerm} onChange={handleInputChange} />
      <button>search</button>
      <div className='search-result'>
        <ul>
          {
            searchResult.map(elem => {
              return <li key={elem.id}>
                <NavLink  to={'/film/' + elem.id}>
                  {elem.title}
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
      <NavLink exact to='/'>Go back</NavLink>
    </div>
  )
}