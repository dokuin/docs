import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DokuinLogo from '../assets/logo dokuin.png'

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="m-0"
      style={{ backgroundColor: 'transparant' }}
      sticky="top"
    >
      <Container className="m-0 d-flex justify-content-between">
        <div>
          <Link to="/" className="router-link">
            <Navbar.Brand as="div" href="#">
              <Image src={DokuinLogo} fluid={true} width={100} height={50} />
            </Navbar.Brand>
          </Link>
        </div>

        <div>
          <Nav className="mr-auto">
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                Docs
              </Nav.Link>
            </Link>
            <Nav.Link href="#pricing" className="text-white font-weight-bold">
              Template
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
