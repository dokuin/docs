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

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />

<<<<<<< HEAD
        <Route path="/docs/:list" component={Docs} />

=======
        <Route exact path="/docs/:list" component={Docs} />
>>>>>>> pull dev
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
