import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import '../../styles/banner.css'

const Banner = () => {
  return (
    <div
      className="section d-flex align-items-center justify-content-center text-center banner"
      style={{ borderRadius: 0 }}
    >
      <div className="animated fadeInUp">
        <h1 className="font-weight-bold text-white">Dokuin.Js</h1>
        <Link to="/docs/get-started" className="router-link mr-1">
          <Button variant="outline-light" className="shadow-lg">
            Get Started
          </Button>
        </Link>

        <a
          className="btn btn-outline-light ml-1"
          href="https://github.com/dokuin/dokuinjs"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Banner
