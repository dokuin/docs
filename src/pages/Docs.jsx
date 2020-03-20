import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import GetStarted from '../components/Docs/GetStarted'
import Usage from '../components/Docs/Usage'
import Sidebar from '../components/Docs/Sidebar'

const Documentation = () => {
  return (
    <Container className="my-5" fluid>
      <Row className="m-3">
        <Col
          sm={2}
          md={2}
          className="d-flex align-items-center overflow-auto shadow"
          style={{ backgroundColor: '#5194ff' }}
        >
          <Sidebar />
        </Col>
        <Col>
          <Switch>
            <Route exact path="/docs/get-started" component={GetStarted} />

            <Route exact path="/docs/usage" component={Usage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default Documentation
