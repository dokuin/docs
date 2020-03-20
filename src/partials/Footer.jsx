import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div
      className="footer py-3 m-0"
      style={{
        backgroundColor: '#0085d7'
      }}
    >
      <Container className="d-flex justify-content-center">
        <small className="text-center">Copyright © 2020 Dokuin.Js Team</small>
      </Container>
    </div>
  )
}

export default Footer
