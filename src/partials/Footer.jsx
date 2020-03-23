import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/dokuin-logo.png'
import styled from 'styled-components';

const HoverText = styled.p`
	color: white;
	:hover {
		color: grey;
		cursor: pointer;
	}
`

const Footer = () => {


  return (
    <div
      className="footer py-3 m-0"
      style={{
        position: "relative",
        backgroundColor: "#2C4054",
        zIndex: "2",
        bottom: "0",
        width: "100%"
      }}
    >
      <Container className="d-flex justify-content-between">
        <div style={{ color: "white"}}>
          <h5 style={{ color: "gray" }} className="mb-4">
            Docs
          </h5>
          <Link style={{textDecoration:'none'}}
          to='/docs/getting-started'>
          <HoverText>Instalation</HoverText>
          </Link>
          <Link style={{textDecoration:'none'}}
          to='/docs/usage'>
          <HoverText>Usage</HoverText>
          </Link>
          <Link style={{textDecoration:'none'}}
           to='/docs/example'>
          <HoverText>Example</HoverText>
          </Link>
        </div>
        <div className="d-flex flex-column">
        <h5 style={{ color: "gray" }} className="mb-4">
            Channel
          </h5>
          <a style={{textDecoration:'none'}}
          target="_blank"
          href='https://github.com/orgs/dokuin'>
          <HoverText>Github</HoverText>
          </a>

        </div>
        <div className="d-flex flex-column">
          <img src={logo} height={60}/>
        <small className="text-center text-white">
          Copyright © 2020 Dokuin.js Team
        </small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
