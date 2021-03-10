import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import useSWR from 'swr'
import './App.css'
import HomePage from './HomePage'
import FilmPage from './FilmPage'
import Search from './Search'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=de85f77f783771ffb98c2924e950206c'

function App() {
  // let [films, setFilms] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios(API_URL)
  //     setData(response.data.results)
  //   }
  //   fetchData()
  // }, [])

  const { data, error } = useSWR(API_URL, fetcher)

  // useEffect(() => {
  //   if (data && data.results && data.results.length) {
  //     setFilms(data.results)
  //   }
  // }, [data])

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="App">
        <>
          <Router>
            <Switch>
              <Route exact path='/'>
              <Search />
                <HomePage data={data.results} />
              </Route>
              <Route path='/film/'>
                <FilmPage data={data.results} />
              </Route>
            </Switch>
          </Router>
        </>
    </div>
  )
}

export default App;

