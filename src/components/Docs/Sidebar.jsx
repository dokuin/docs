import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <NavLink to="/docs/get-started" className="nav-link text-white">
        Get Started
      </NavLink>
      <NavLink to="/docs/usage" className="nav-link text-white">
        Usage
      </NavLink>
      <NavLink to="/" className="nav-link text-white">
        Commands
      </NavLink>
    </Nav>
  )
}

export default Sidebar
