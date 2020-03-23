import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import Installation from '../components/docs/getStarted/Installation'
import Usage from '../components/docs/getStarted/Usage'

import Example from '../components/docs/example/Example'
import Sidebar from '../components/docs/Sidebar'

const Docs = () => {
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
      <Container
        style={{
          minHeight: '86vh'
        }}
        fluid
      >
        <Row className="mx-3">
          <Col sm={2} md={2}></Col>
          <Col
            sm={8}
            md={8}
            style={{
              marginLeft: '20px',
              paddingRight: '10vw'
            }}
          >
            <Switch>
              <Route
                exact
                path="/:docs/getting-started"
                component={Installation}
              />
              <Route exact path="/:docs/usage" component={Usage} />
              <Route exact path="/:docs/example" component={Example} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Docs
