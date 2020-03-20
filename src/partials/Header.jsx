import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-success" fixed='top'
    >
      <Container>
        <Navbar.Brand as={Link} to='/' >Dokuin.Js</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/docs' >Docs</Nav.Link>
            <Nav.Link href="#pricing">Template</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Template</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Template
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
