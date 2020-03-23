import React, { useState , useCallback} from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link, useParams, useLocation} from 'react-router-dom'
import DokuinLogo from '../assets/logo dokuin.png'
import { useEffect } from 'react'
import styled from 'styled-components'

const HoverText = styled.p`
	color: white;
	:hover {
    border-bottom: 2px solid #59ADB5CC;
	
		cursor: pointer;
	}
`


const Header = () => {
  const param = useLocation().pathname
  const[position,setPost]=useState(0)
  window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY
    setPost(scrolled)
  })
  
  const setBg =()=>{
    if(position>250 || param !== '/'){
      return { backgroundColor:'#1a2840'}
    } else {
      return { backgroundColor:'transparent'}
    }
  }
  useEffect(()=>{
         
  },[setBg])

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

        <div>
          <Nav className="">
            <Link to="/docs/getting-started" className="router-link" >
              <Nav.Link as="div" className="text-white font-weight-bold">
                <HoverText>
                Docs
                </HoverText>
              </Nav.Link>
            </Link>
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
              <HoverText>
                Template
                </HoverText>
              </Nav.Link>
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
