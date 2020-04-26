import React from 'react'
import Heading from './../organisms/Heading/Heading'
import Restaurants from './../organisms/Restaurants/Restaurants'
import Press from './../organisms/Press/Press'
import Biography from './../organisms/Biography/Biography'
import Recipes from './../organisms/Recipes/Recipes'

const Home = () => {
  return (
    <div className="Home">
      <Heading />
      <Restaurants />
      <Press />
      <Biography />
      <Recipes />
    </div>
  )
}

export default Home;
