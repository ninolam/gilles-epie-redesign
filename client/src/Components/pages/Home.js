import React from 'react'
import Heading from './../organisms/Heading/Heading'
import Restaurants from './../organisms/Restaurants/Restaurants'
import Press from './../organisms/Press/Press'

const Home = () => {
  return (
    <div className="Home">
      <Heading />
      <Restaurants />
      <Press />
    </div>
  )
}

export default Home;
