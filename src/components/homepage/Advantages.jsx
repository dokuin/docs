import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'

// Images
import SetupPng from '../../assets/setup.svg'
import EasyUsagePng from '../../assets/code_thinking.svg'
import OpenSourcePng from '../../assets/open_source.svg'

const Advantages = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          backgroundColor: '#D9D9D9'
        }}
      >
        <h2
          className="text-center font-weight-bold my-auto"
          style={{
            fontSize: '3em',
            paddingBottom:'20px',
            // borderBottom:'10px solid #3FC1C9'
          }}
        >
          Why Dokuin.js?
        </h2>
      </div>

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Fade bottom>
            <Row className="d-flex flex-row-reverse">
              <Col sm={12} md={6} lg={6} className="my-auto">
                <div style={{
                  borderRight:'10px solid #3FC1C9'
                }}>
                <h1 className="text-center">Open Source</h1>
                <p className="my-3 text-center">
                  Dokuin.js is open source, feel free to use it.
                </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={OpenSourcePng} fluid />
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
                <div style={{
                  borderLeft:'10px solid #ff0da2',
                  paddingLeft:'30px'
                }}>
                <h1 className="text-center">Easy Usage</h1>
                <p className="my-3 text-justify">
                  Don’t have time to make Documentation? Dokuin.js makes it
                  easier for you. With easy to use commands for a quick usage.
                </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={EasyUsagePng} fluid />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      <div className="section d-flex align-items-center bg-light py-5">
        <Container>
          <Fade right>
            <Row className="d-flex flex-row-reverse">
              <Col
                sm={12}
                md={6}
                lg={6}
                className="my-auto d-flex flex-column align-items-center"
              >
                <h1 className="text-center">Simple Setup</h1>
                <p className="my-3 text-center">
                  Simple setup with just few steps of installation, then you're
                  good to go.
                </p>
                <Link to="/docs/getting-started" className="banner-btn btn-1">
                  Get Started
                </Link>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <Image src={SetupPng} fluid />
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </>
  )
}

export default Advantages
