import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'react-bootstrap'

import DokuinLandingPng from '../../assets/dokuin landing.png'

const Banner = () => {
  return (
    <div
      className="section d-flex align-items-center justify-content-center text-center banner"
      style={{ borderRadius: 0, height: '90vh' }}
    >
      <div className="animated fadeInUp">
        <Image src={DokuinLandingPng} width={100} height={100} />
        <h1 className="font-weight-bold" style={{ fontSize: '5vw' }}>
          Dokuin.js
        </h1>
        <h3 className="font-weight-bold" style={{ fontSize: '2.5vw' }}>
          Simple and easy open source API documentation maker
        </h3>
        <Link to="/docs/dependency" className="router-link mr-1">
          <Button variant="outline-dark" className="shadow-lg" size="lg">
            Get Started
          </Button>
        </Link>

        <a
          className="btn btn-outline-dark ml-1 shadow-lg btn-lg"
          href="https://github.com/dokuin/dokuinjs"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Banner
