import React from 'react'

import Banner from '../components/homepage/Banner'
import Advantages from '../components/homepage/Advantages'
import Overview from '../components/homepage/Overview'

const Homepage = () => {
  return (
    <div
      style={{
        marginTop: '-10vh'
      }}
      className="mb-5"
    >
      <Banner />

      <Overview />

      <Advantages />
    </div>
  )
}

export default Homepage
