import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Jumbotron, Container,Image } from 'react-bootstrap'
import  DokuinLanding  from '../../assets/dokuin-landing.png'

const Banner = () => {
  return (
    <div  style={{ 
          borderRadius: 0,
          backgroundImage: `url(${DokuinLanding})`,
          backgroundSize:"cover",
          backgroundColor:'white',
          marginTop:'-20vh',
          minHeight:'70vh'
        }}
    className="d-flex align-items-center justify-content-center"
    >
      <h1>SDDDS</h1>
    </div>
    //   <div
    //   className="section d-flex align-items-center justify-content-center text-center "
    //   style={{ 
    //     borderRadius: 0,
    //     backgroundImage: 'url(https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png)',
    //     // backgroundSize:"cover",
    //     minHeight:'30vh'
    //   }}
    //     >
    //   <div className="animated fadeInUp">
    //     <h1 className="font-weight-bold text-white">Dokuin.Js</h1>
    //     <Link to="/docs/get-started" className="router-link mr-1">
    //       <Button variant="outline-light" className="shadow-lg">
    //         Get Started
    //       </Button>
    //     </Link>

    //     <a
    //       className="btn btn-outline-light ml-1"
    //       href="https://github.com/dokuin/dokuinjs"
    //     >
    //       GitHub
    //     </a>
    //   </div>
    // </div>
  )
}

export default Banner
