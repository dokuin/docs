import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'

import SetupPng from '../assets/setup.svg'
import EasyUsage from '../assets/code_thinking.svg'
import OpenSource from '../assets/open_source.svg'

import Banner from '../components/homepage/Banner'

const Homepage = () => {
  return (
    <div
      style={{
        marginTop: '-10vh'
      }}
    >
      <Banner />

      <div className="bg-light py-5">
        <Fade bottom>
          <Container>
            <Row noGutters={false} className="d-flex justify-content-around">
              <Col
                sm={6}
                md={3}
                className="d-flex flex-column justify-content-between"
              >
                <Image src={OpenSource} fluid />
                <h2>Open Source</h2>
                <p className="text-justify">
                  Dokuin.js is open source, feel free to use it.
                </p>
              </Col>
              <Col
                sm={6}
                md={3}
                className="d-flex flex-column justify-content-between"
              >
                <Image src={EasyUsage} fluid />
                <h2>Easy Usage</h2>
                <p className="text-justify">
                  Don’t have time to make Documentation? Dokuin.js makes it
                  easier for you. With easy to use commands for a quick usage.
                </p>
              </Col>
              <Col
                sm={6}
                md={3}
                className="d-flex flex-column justify-content-between"
              >
                <Image src={SetupPng} fluid />
                <h2>Simple Setup</h2>
                <p className="text-justify">
                  Simple setup with just few steps of installation, then you're
                  good to go.
                </p>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Fade bottom>
            <Row className="d-flex flex-row-reverse">
              <Col sm={12} md={6} lg={6} className="my-auto">
                <h1 className="text-center">Open Source</h1>
                <p className="my-3 text-center">
                  Dokuin.js is open source, feel free to use it.
                </p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={OpenSource} fluid />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Fade left>
            <Row>
              <Col sm={12} md={6} lg={6} className="my-auto">
                <h1>Easy Usage</h1>
                <p className="my-3 text-justify">
                  Don’t have time to make Documentation? Dokuin.js makes it
                  easier for you. With easy to use commands for a quick usage.
                </p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={EasyUsage} fluid />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Fade right>
            <Row className="d-flex flex-row-reverse">
              <Col sm={12} md={6} lg={6} className="my-auto">
                <h1 className="text-center">Open Source</h1>
                <p className="my-3 text-center">
                  Simple setup with just few steps of installation, then you're
                  good to go.
                </p>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={SetupPng} fluid />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  )
}

export default Homepage
