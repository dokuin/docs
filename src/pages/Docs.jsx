import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import Installation from '../components/docs/getStarted/Installation'
import NextStep from '../components/docs/getStarted/NextStep'
import Usage from '../components/docs/Usage'
import Sidebar from '../components/docs/Sidebar'

<<<<<<< HEAD
const Docs = () => {
=======
import Dependency from '../components/Docs/Dependency'
import Installation from '../components/Docs/Installation'
import Usage from '../components/Docs/Usage'

const Documentation = () => {
>>>>>>> pull dev
  return (
    <>
      <Col
        sm={2}
        md={2}
        className="overflow-auto position-fixed"
        id="sticky-sidebar"
        style={{
          height: '100%',
          zIndex: '1',
          width: '100%',
          backgroundColor: '#e6e6e6'
        }}
      >
        <Sidebar />
      </Col>
      <Container fluid>
        <Row className="m-3">
<<<<<<< HEAD
          <Col sm={2} md={2}></Col>

          <Col
            style={{
              marginLeft: '20px'
            }}
          >
            <Switch>
              <Route
                exact
                path="/docs/getting-started"
                component={Installation}
              />
              <Route exact path="/docs/next-step" component={NextStep} />

              <Route exact path="/docs/usage" component={Usage} />
=======
          <Col sm={2} md={3}>
            <Sidebar />
          </Col>
          <Col>
            <Switch>
              <Route path="/docs/dependency" component={Dependency} />
              <Route path="/docs/installation" component={Installation} />
              <Route path="/docs/usage" component={Usage} />
>>>>>>> pull dev
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Docs
