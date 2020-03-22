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
      style={{ backgroundColor: 'transparant' }}
      sticky="top"
    >
      <Container>
        <Link to="/" className="router-link">
          <Navbar.Brand as="div" href="#">
            <Image src={DokuinImage}  height={50} />
          </Navbar.Brand>
        </Link>

        {/* <Link to="/" className="router-link">
          <Navbar.Brand as="div" className="text-white">
            Dokuin.Js
          </Navbar.Brand>
        </Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="mx-3 text-white">
                Docs
              </Nav.Link>
            </Link>
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="mx-3 text-white">
                Template
              </Nav.Link>
            </Link>
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="mx-3 text-white">
                Template
              </Nav.Link>
            </Link>
            
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets" className="text-white">
              Template
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="text-white">
              Template
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
