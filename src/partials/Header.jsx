// eslint-disable-next-line
import React, { useState, useCallback } from 'react'

import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import DokuinLogo from '../assets/dokuin-logo.png'

import { useEffect } from 'react'
import styled from 'styled-components'

const HoverText = styled.p`
  color: white;
  :hover {
    border-bottom: 2px solid #59adb5cc;

    cursor: pointer;
  }
`

const Header = () => {
  const param = useLocation().pathname
  const [position, setPost] = useState(0)
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    setPost(scrolled)
  })

  // eslint-disable-next-line
  const setBg = () => {
    if (position > 250 || param !== '/') {
      return { backgroundColor: '#1a2840' }
    } else {
      return { backgroundColor: 'transparent' }
    }
  }
  useEffect(() => {}, [setBg])

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="m-0 d-flex justify-content-center"
      style={setBg()}
      sticky="top"
    >
      <Container className="m-0 d-flex justify-content-between">
        <div>
          <Link to="/" className="router-link">
            <Navbar.Brand as="div" href="#">
              <Image src={DokuinLogo} height={50} />
            </Navbar.Brand>
          </Link>
        </div>

        <Nav className="">
          <Link to="/docs/getting-started" className="router-link my-auto">
            <Nav.Link as="div" className="text-white font-weight-bold">
              <HoverText className="my-auto">Docs</HoverText>
            </Nav.Link>
          </Link>

          <Link to="/docs/example" className="router-link my-auto">
            <Nav.Link as="div" className="text-white font-weight-bold">
              <HoverText className="my-auto">Example</HoverText>
            </Nav.Link>
          </Link>

          <Link to="/" className="router-link my-auto">
            <Nav.Link as="div" className="text-white font-weight-bold">
              <HoverText className="my-auto">Online Editor</HoverText>
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
