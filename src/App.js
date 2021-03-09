import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import axios from 'axios'
import './App.css'
import HomePage from './HomePage'
import FilmPage from './FilmPage'

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=de85f77f783771ffb98c2924e950206c'

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API_URL)
      setData(response.data.results)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      {data.length ? (
        <Router>
          <Switch>
            <Route exact path='/'>
              <HomePage data={data} />
            </Route>
            <Route path='/film/'>
              <FilmPage data={data} />
            </Route>
          </Switch>
        </Router>
      ) : 'LOADING'}
    </div>
  )
}

export default App;

