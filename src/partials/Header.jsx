// import React, { useState } from 'react'
import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DokuinLogo from '../assets/logo dokuin.png'
// import { useEffect } from 'react'

const Header = () => {
  // const[position,setPost]=useState(0)
  // const[color,setColor]=useState('transparant')
  // window.addEventListener('scroll',()=>{
  //   const scrolled = window.scrollY
  //   setPost(scrolled)
  // })

  // useEffect(()=>{
  //   console.log(position)
  // },[position])

  // const setBg = ()=>{
  //   if(position>250){
  //     return { backgroundColor:'red'}
  //   } else {
  //     return { backgroundColor:'transparant'}
  //   }
  // }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="m-0 d-flex justify-content-center"
      style={{ backgroundColor: '#232d3d' }}
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
            <Link to="/docs/getting-started" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                Docs
              </Nav.Link>
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
