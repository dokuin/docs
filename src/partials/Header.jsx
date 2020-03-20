import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DokuinImage from '../assets/dokuin-logo.png'

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-lg"
      style={{ backgroundColor: '#216BBD' }}
      sticky="top"
    >
      <Container>
        <Link to="/" className="router-link">
          <Navbar.Brand as="div" href="#">
            <Image src={DokuinImage} fluid={true} width={50} height={50} />
          </Navbar.Brand>
        </Link>

        <Link to="/" className="router-link">
          <Navbar.Brand as="div" className="text-white">
            Dokuin.Js
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/docs/get-started" className="router-link">
              <Nav.Link as="div" className="text-white">
                Docs
              </Nav.Link>
            </Link>
            <Nav.Link href="#pricing" className="text-white">
              Template
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="text-white">
              Template
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-white">
              Template
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
