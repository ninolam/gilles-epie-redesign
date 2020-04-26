import React from 'react'
import Heading from './../organisms/Heading/Heading'
import Restaurants from './../organisms/Restaurants/Restaurants'
import Press from './../organisms/Press/Press'
import Biography from './../organisms/Biography/Biography'

const Home = () => {
  return (
    <div className="Home">
      <Heading />
      <Restaurants />
      <Press />
      <Biography />
    </div>
  )
}

export default Home;
