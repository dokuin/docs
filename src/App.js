import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Header from './partials/Header'
import Footer from './partials/Footer'
import Homepage from './pages/Homepage'
import Docs from './pages/Docs'
import ScrollTop from './components/ScrollTop'


function App() {
  return (
    <Router>
      <Header />
      <ScrollTop>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/:docs/:list" children={<Docs/>} />

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      </ScrollTop>
      <Footer />
    </Router>
  )
}

export default App
