import React from 'react'

import { Container, Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'

import OverviewPng from '../../assets/overview_coding.svg'

const Overview = () => {
  return (
    <div className="py-5" style={{ backgroundColor: '#59ADB5CC' }}>
      <Fade bottom>
        <Container className="d-flex flex-column align-items-center">
          <Image
            src={OverviewPng}
            fluid
            style={{ width: '50vw', height: '50vh' }}
            className="my-3"
          />
          <h1 className="text-center my-3 font-weight-bolder">Overview</h1>
          <h2 className="text-center" style={{ lineHeight: '10vh' }}>
            Dokuin.js is an NPM package designed for programmers who lack or
            even don't have time to create documentation. Dokuin.js is very easy
            to install and with just a few simple steps your documentation will
            be ready.
          </h2>
        </Container>
      </Fade>
    </div>
  )
}

export default Overview
