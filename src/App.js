import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import HomePage from './HomePage'
import FilmPage from './FilmPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/film/'>
            <FilmPage />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;

