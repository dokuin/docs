import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'
import OnlinePng from '../assets/online.svg'

import Banner from '../components/homepage/Banner'
import Advantages from '../components/homepage/Advantages'
import Overview from '../components/homepage/Overview'

const Homepage = () => {
  return (
    <div
      style={{
        marginTop: '-10vh'
      }}
      className="mb-5"
    >
      <Banner />
     
      <Overview />

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Zoom>
            <Row className="d-flex flex-row-reverse">
              <Col
                sm={12}
                md={6}
                lg={6}
                className="my-auto d-flex flex-column align-items-center"
              >
                <h1 className="text-center font-weight-bold">Web Version</h1>
                <p className="my-3 text-center">
                  Dokuin.js online documentation maker. For GUI oriented user.
                </p>
                <Link to="/" className="banner-btn btn-1">
                  Try Now
                </Link>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={OnlinePng} fluid />
              </Col>
            </Row>
          </Zoom>
        </Container>
      </div>

      <Advantages />
    </div>
  )
}

export default Homepage
