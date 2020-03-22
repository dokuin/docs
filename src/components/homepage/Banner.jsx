import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Row, Col } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { SvgIcon } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'

import DokuinLandingPng from '../../assets/dokuin landing.png'

const Banner = () => {
  return (
    <div
      className="section d-flex align-items-center justify-content-center text-center banner"
      style={{ borderRadius: 0, height: '100vh' }}
    >
      <Fade top>
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={4}>
            <Image
              src={DokuinLandingPng}
              fluid
              style={{
                width: '30vh',
                height: '30vh'
              }}
            />
          </Col>
          <Col sm={12} md={6}>
            <h1 className="font-weight-bold" style={{ fontSize: '5vw' }}>
              Dokuin.js
            </h1>
            <h3 className="font-weight-bold my-3" style={{ fontSize: '2.5vw' }}>
              Simple and easy open source API documentation maker
            </h3>
            <Link to="/docs/dependency" className="banner-btn btn-1 mr-2">
              Get Started
            </Link>

            <a
              className="banner-btn btn-2"
              href="https://github.com/dokuin/dokuinjs"
            >
              <SvgIcon component={GitHubIcon} className="mr-2"></SvgIcon>
              GitHub
            </a>
          </Col>
        </Row>
      </Fade>
    </div>
  )
}

export default Banner
