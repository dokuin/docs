import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

import Banner from '../components/homepage/Banner'

const Homepage = () => {
  return (
    <div>
      <Banner />

      <div
        className="section d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#5191fd' }}
      >
        <div>
          <h1>Let you make API documentation easier</h1>
        </div>
      </div>

      <div
        className="section d-flex align-items-center"
        style={{ backgroundColor: '#bbdefb' }}
      >
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <h1>Tutorial</h1>
              <p>Tutorial section</p>
              <Button>Tutorial</Button>
            </Col>
            <Col sm={12} md={6} lg={8}>
              <div className="image-placeholder">Image</div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section d-flex align-items-center bg-light">
        <Container className="d-flex justify-content-end">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className="image-placeholder">Image</div>
            </Col>
            <Col sm={12} md={6} lg={6} className="flex-first">
              <h1>Guide</h1>
              <p>Guide Section</p>
              <Button>Guide</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Homepage
