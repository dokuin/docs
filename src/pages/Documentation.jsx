import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GetStarted from '../components/Documentation/GetStarted'

const Documentation = () => {
  return (
    <div>
      <h2>Documentation Page</h2>

      <Switch>
        <Route name="get-started" component={GetStarted} />
      </Switch>
    </div>
  )
}

export default Documentation
